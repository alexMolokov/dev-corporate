<?php

namespace App\Http\Requests\Registration;

use Illuminate\Foundation\Http\FormRequest;

class TryLoginRequest extends FormRequest
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
            'login' =>  'required:min:6',
        ];
    }

    public function messages()
    {
        return [
            "login.required" => __("Is required"),
            "login.min" => __("Min 6 symbols")
        ];
    }
}
