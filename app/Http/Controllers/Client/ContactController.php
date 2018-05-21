<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    public function update(Request $request) {
        var_dump(Auth::check());
        var_dump($request->user());
        var_dump(session()->all());

    }
}
