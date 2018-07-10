<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App;

class RegisterRequest extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    private $email;
    private $code;
    private $login;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email, $code, $login)
    {
        $this->email = $email;
        $this->code = $code;
        $this->login = $login;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->to($this->email)->subject(__("Activate your VIPole account"))->view("email.RegisterRequest")->with([
            "code" => $this->code,
            "login" => $this->login,
            "lang" => App::getLocale()
        ]);

    }
}
