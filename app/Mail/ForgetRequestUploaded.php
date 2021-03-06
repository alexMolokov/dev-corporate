<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App;

class ForgetRequestUploaded extends Mailable
{
    use Queueable, SerializesModels;

    private $email;
    private $code;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email, $code)
    {
        $this->email = $email;
        $this->code = $code;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->to($this->email)->subject(__("VIPole Corporate account password reset"))->view("email.ForgetRequest")->with([
            "code" => $this->code,
            "lang" => App::getLocale()
        ]);
    }
}
