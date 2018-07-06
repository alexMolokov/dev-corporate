<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GetTrialRequest extends FormRequest
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
        $listOs = array_keys(config("shop.os"));
        $trialServers = array_keys(config("shop.trialServers"));
        return [
            'os' => 'required:in:' . implode(",", $listOs),
            'server' => 'required:in'. implode(",", $trialServers),
            'basket' => 'required'
        ];
    }

    public function messages()
    {
        return [
            "os" => __("Must be Linux or Windows"),
            "server" => __("Not allowed Server for trial")
        ];
    }
}
