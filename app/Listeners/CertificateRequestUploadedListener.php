<?php

namespace App\Listeners;

use App\Events\CertificateRequestUploaded;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Mail;
use App\Mail\CertificateRequestUploaded as MailCertificateRequestUploaded;

class CertificateRequestUploadedListener
{
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
     * @param  CertificateRequestUploaded  $event
     * @return void
     */
    public function handle(CertificateRequestUploaded $event)
    {
        Mail::send(new MailCertificateRequestUploaded($event->getServerId()));
    }
}
