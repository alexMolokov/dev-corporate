<?php

namespace App\Http\Controllers\Client;

use App\Http\Requests\ChangeCompanyNameRequest;
use App\Http\Requests\ChangeContactRequest;
use App\Http\Requests\ChangePasswordRequest;
use App\Http\Requests\ChangeCompanyDetailsRequest;
use App\Http\Controllers\Controller;
use App\Contracts\CorporateClientInterface;
use Illuminate\Support\Facades\Auth;
use App\Events\UserDataChanged;

class UserController extends Controller
{
    private $service;

    public function __construct(CorporateClientInterface $service)
    {
        $this->service = $service;
    }

    public function changePassword(ChangePasswordRequest $request)
    {
        $result = $this->service->changePassword(Auth::user()->getCustomerId(), $request->input("new_password"));
        if($result) {
            $this->__generateEvent();
            return response()->success([]);
        }

        return response()->error(__("Error"), []);

    }

    public function changeCompanyName(ChangeCompanyNameRequest $request)
    {
        $result = $this->service->changeCompanyName(Auth::user()->getCustomerId(), $request->input("name"));
        if($result) {
            $this->__generateEvent();
            return response()->success([]);
        }

        return response()->error(__("Error"), []);
     }

    public function changeCompanyDetails(ChangeCompanyDetailsRequest $request)
    {

        $data = $request->all();
        foreach ($data as $key => $value) {
            if(is_null($value)) $data[$key] = "";
        }

        $result = $this->service->changeCompanyDetails(Auth::user()->getCustomerId(), $data);
        if($result) {
            $this->__generateEvent();
            return response()->success([]);
        }

        return response()->error(__("Error"), []);
    }

    public function changeContact(ChangeContactRequest $request)
    {
        $result = $this->service->saveContact(Auth::user()->getCustomerId(), $request->all());
        if($result)
        {
            $this->__generateEvent();
            return response()->success([]);
        }

        return response()->error(__("Error"), []);
    }

    private function __generateEvent() {
        $client = Auth::user();
        event(new UserDataChanged($client->getLogin()));
    }


}
