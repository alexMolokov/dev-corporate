<?php

namespace App\Http\Controllers\Auth;

use App\Contracts\RegistrationInterface;
use App\Events\RegisterRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\ChangeForgetPasswordRequest;
use App\Http\Requests\Registration\TryEmailRequest;
use App\Http\Requests\Registration\TryLoginRequest;
use Illuminate\Http\Request;
use Validator;
use App\Events\ForgetRequestUploaded;


class RegisterController extends Controller
{
    private $service;

    public function __construct(RegistrationInterface $service)
    {
        $this->service = $service;
    }

    public function register(Request $request)
    {
        if(!config("app.registration_allowed"))  return response()->error(__("Registration forbidden"));
        if(!$this->service->tryEmail($request->get('email')))  return response()->error(__("Email exists"));
        if(!$this->service->tryLogin($request->get('login')))  return response()->error(__("Login exists"));

        $data = [
            "login" => $request->get('login'),
            "email" => $request->get('email'),
            "password" => $request->get('password')
        ];
        if($code = $this->service->saveTempRegister($data))
        {
            $data["code"] = $code;
            event(new RegisterRequest($data));
            return response()->success();

        }
        return response()->error(__("Error"));
    }

    public function isAllowed()
    {
        return response()->success(config("app.registration_allowed"));
    }

    public function tryEmail(TryEmailRequest $request)
    {
        $email = $request->get("email");
        if($this->service->tryEmail($email))
        {
            return response()->success([]);
        }
        return response()->error(__("Email exists"));
    }

    public function tryLogin(TryLoginRequest $request)
    {
        $login = $request->get("login");
        if($this->service->tryLogin($login))
        {
            return response()->success([]);
        }
        return response()->error(__("Login exists"));
    }

    public function activate($code)
    {
        $client = $this->service->getRegisteredClientByCode($code);
        if(is_null($client))
        {
            return response()->error(__("Code not valid"));
        }

        return response()->success(["login" => $client->getLogin()]);
    }


    public function checkCode($code)
    {
        $email = $this->service->getEmailByCode($code);
        if(is_null($email))
        {
            return response()->error(__("Code not valid"));
        }

        return response()->success([]);
    }

    public function changePassword(ChangeForgetPasswordRequest $request, $code)
    {
        $client = $this->service->getClientByCode($code);
        if(is_null($client))
        {
            return response()->error(__("Code not valid"));
        }

        $result = $this->service->changePassword($client->getCustomerId(), $request->input("new_password"));
        if($result)
        {
            $this->service->removeTempClient($client);
            return response()->success([]);
        }

        return response()->error(__("Error"));
    }



    public function forget(Request $request)
    {
            $search = $request->get("search");

            $validator = Validator::make($request->all(), [
                'search' => 'required|email'
            ]);

            if ($validator->fails())
            {
                if($client = $this->service->getClientByLogin($search))
                {
                    $code = $this->service->saveCode($client);
                    event(new ForgetRequestUploaded(["code" => $code, "email" => $client->getEmail()]));
                    return response()->success(["email" => $this->maskMail($client->getEmail())]);
                }
                return response()->error(__("User not found"));
            }

            if($client = $this->service->getClientByEmail($search))
            {
                $code = $this->service->saveCode($client);
                event(new ForgetRequestUploaded(["code" => $code, "email" => $client->getEmail()]));
                return response()->success(["email" => $this->maskMail($client->getEmail())]);
            }
            else
            {
                return response()->error(__("User not found"));
            }

    }

    private function maskMail($mail)
    {
        list($name, $host) = explode('@', $mail);
        $t = strrpos($host, '.');
        $last = substr($host, $t);
        $host = substr($host, 0, $t);
        $out = $this->strMask($name) . '@' . $this->strMask($host) . $last;
        return $out;
    }

    private function strMask($str, $fromStart = 0.75, $min = 0.5)
    {
        $len = strlen($str);
        $min = floor($len * $min);
        $fromStart = floor(($len - $min) * $fromStart);

        if ($len > 3)
            $out = substr_replace($str, str_pad('', $min, '*'), $fromStart, $min);
        elseif ($len > 1)
            $out = substr_replace($str, str_pad('', max($len - 1, 2), '*'), $len - 2, $len);
        else
            $out = '*';

        return $out;
    }

}
