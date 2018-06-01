<?php

namespace App\Http\Requests\Tickets;

use Illuminate\Foundation\Http\FormRequest;

class GetAttachmentRequest extends FormRequest
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
            'name' => 'required',
            'ticketId' => 'required'
        ];
    }

    public function messages()
    {
        return [
            "name" => __("File name is required")
        ];
    }
}
