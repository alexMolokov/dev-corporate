<?php

namespace App\Http\Requests\Registration;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' =>  'bail|required|email',
            'login' =>  'bail|required|min:6|regex:/^[a-zA-Z_0-9]+$/',
            'name' =>  'bail|required|min:3',
            'password' =>  'bail|required|min:6',
        ];
    }
    public function messages()
    {
        return [
            'login.regex' =>  __('Only letters and numbers'),
        ];
    }


}
