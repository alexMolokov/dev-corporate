<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ChangeForgetPasswordRequest extends FormRequest
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
            'new_password' =>  'bail|required|min:6|alpha_dash',
            'check_password' =>  'bail|required|same:new_password'
        ];
    }

    public function messages()
    {
        return [
            "check_password.same" => __("Must be equal New Password")
        ];
    }
}
