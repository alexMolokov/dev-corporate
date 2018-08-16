<?php

namespace App\Listeners;

use App\Events\ConfirmInvoice;
use App\Events\ServerRequestUploaded;
use App\Mail\ConfirmInvoiceRequest;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Mail;
use App\Mail\LicenceRequestUploaded;

class ConfirmInvoiceListener
{
    private $delay = 20;
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ConfirmInvoice  $event
     * @return void
     */
    public function handle(ConfirmInvoice $event)
    {
         Mail::send("email.ConfirmInvoiceRequest",["id" => $event->getInvoice(), "lang" => "en"], function ($message) use ($event)
         {
             $file = $event->getFile();
             $message->to(config("bsystem.mail_admin"));
             $message->subject("Confirming invoice");
             $message->attach($file["Filename"], [
                 'as' => $file["OriginalName"],
                 'mime' => $file["ContentType"]
             ]);
         });
    }
}
