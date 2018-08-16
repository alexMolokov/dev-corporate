<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ChangeCompanyDetailsRequest extends FormRequest
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
            'address' => 'required|min:5',
            'phone' => 'required|min:10',
            'email' => 'required|email',
            'password' => 'required',
            'zip' => 'nullable|min:3',
            'state' => 'nullable|min:3',
            'country' => 'nullable|min:3',
            'city' => 'nullable|min:3',
        ];
    }
}
