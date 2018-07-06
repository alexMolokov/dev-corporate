<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class CertificateRequestUploaded extends Mailable
{
    use Queueable, SerializesModels;

    private $serverId;
    private $lang;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($serverId, $lang = "en")
    {
        $this->serverId = $serverId;
        $this->lang = $lang;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->to(config("bsystem.mail_admin"))->view("email.CertificateRequest")->with([
            "id" => $this->serverId,
            "lang" => $this->lang
        ]);
    }
}
