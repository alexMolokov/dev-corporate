<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ForgetRequestUploaded extends Mailable
{
    use Queueable, SerializesModels;

    private $email;
    private $code;
    private $lang = "en";
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email, $code, $lang)
    {
        $this->email = $email;
        $this->code = $code;
        $this->lang = $lang;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->to(config($this->email))->view("email.ForgetRequest")->with([
            "code" => $this->code,
            "lang" => $this->lang
        ]);
    }
}
