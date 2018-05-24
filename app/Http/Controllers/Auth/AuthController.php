<?php

namespace App\Http\Controllers\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

use App\Http\Requests\AuthRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{

    public function login(AuthRequest $request)
    {
        $credentials = $request->only('login', 'password');

       if(Auth::attempt($credentials))
       {
            $client = Auth::user();
            Auth::login($client);
            return response()->success($client->toArray());
       }

        return response()->error(__("Authentication failed!"), []);
    }

    public function logout(Request $request)
    {
        if(Auth::check())
        {
            Auth::logout();
            $request->session()->invalidate();
        }

        return response()->success();
    }

    public function auto()
    {
        if(Auth::check())
        {
            $client = Auth::user();
            Auth::login($client);
            return response()->success($client->toArray());
        }

        return response()->error('Not auth');
    }
}
