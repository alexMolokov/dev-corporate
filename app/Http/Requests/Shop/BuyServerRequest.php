<?php

namespace App\Http\Requests\Shop;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Request;

class BuyServerRequest extends FormRequest
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

    private function _getServerProduct(){
        $config = config("shop");

        $servers = [];
        foreach($config["products"] as $key => $value)
        {
            if($value["section"] == "servers") $servers[$key] = $value;
        }

        $basket = Request::input('basket');
        foreach($basket as $key)
        {
            if(isset($servers[$key])) return $servers[$key];
        }

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
            "users" => "bail|required|integer|min:10",
            "basket" => "bail|required|array",
            "lang" => "required|in:" . implode(",",["en", "ru"])
        ];

        if($server = $this->_getServerProduct())
        {
            $rules["users"] = "bail|required|integer|min:" . $server["startUsers"];
        }
        else
        {
            $rules["server"] = "required";
        }

        return $rules;
    }
}
