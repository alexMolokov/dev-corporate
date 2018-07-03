<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;


class RegisterController extends Controller
{

    public function isAllowed()
    {
        return response()->success(config("app.registration_allowed"));
    }



}
