<?php

namespace App\Http\Requests\Shop;

use Illuminate\Foundation\Http\FormRequest;

class NewLicenseRequest extends FormRequest
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
            "os" => "bail|required|in:" . implode(",",array_keys($config["os"])),
            "payment_method" => "bail|required|in:" . implode(",",array_keys($config["paymentMethods"])),
            "period" => "bail|required|in:" . implode(",",["annual", "lifetime"]),
            "users" => "bail|required|integer|min:1",
            "basket" => "bail|required|array",
            "lang" => "required",
            "server_id" => "required",
        ];

        return $rules;
    }
}
