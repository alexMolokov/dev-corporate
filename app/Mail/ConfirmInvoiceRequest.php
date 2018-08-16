<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ConfirmInvoiceRequest extends Mailable
{
    use Queueable, SerializesModels;

    private $invoiceId;
    private $file;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($invoiceId, $file)
    {
        $this->invoiceId = $invoiceId;
        $this->file = $file;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->to(config("bsystem.mail_admin"))->view("email.ConfirmInvoiceRequest")->with([
            "id" => $this->invoiceId
        ]);
    }
}
