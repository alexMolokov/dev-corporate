<?php

namespace App\Http\Requests\Shop;

use Illuminate\Foundation\Http\FormRequest;

class RenewLicenseRequest extends FormRequest
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
        $config = config("shop");

        $rules =  [
            "users" => "bail|required|integer|min:1",
            "basket" => "bail|required|array",
            "license_id" => "required",
            "server_id" => "required",
            "payment_method" => "bail|required|in:" . implode(",",array_keys($config["paymentMethods"])),
        ];

        return $rules;
    }
}
