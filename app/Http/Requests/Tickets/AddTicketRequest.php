<?php

namespace App\Http\Requests\Tickets;

use Illuminate\Foundation\Http\FormRequest;

class AddTicketRequest extends FormRequest
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
            'theme' => 'required|min:5',
            'message' => 'required|min:10',
            'department' => 'required|in:' . implode(array_keys(config("otrs.queues"))),
            'priority' => 'required'
            //'priority' => 'required|in:' . implode(array_keys(config("otrs.priorities")))
        ];
    }

    public function messages()
    {
        return [
            "department.in" => __("Not valid department"),
            "priority.in" => __("Not valid priority")
        ];
    }
}
