<?php

namespace App\Http\Controllers\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;


use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{


    public function login(Request $request)
    {
        $credentials = $request->only('login', 'password');

       if(Auth::attempt($credentials))
       {
            $client = Auth::user();
            Auth::login($client);
            return response()->success($client->toArray());
       }

        return response()->error('Authentication failed!', []);
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
}
