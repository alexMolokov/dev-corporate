<?php

namespace App\Listeners;

use App\Events\ServerRequestUploaded;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Mail;
use App\Mail\LicenceRequestUploaded;

class ServerRequestUploadedListener
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
     * @param  ServerRequestUploaded  $event
     * @return void
     */
    public function handle(ServerRequestUploaded $event)
    {
        Mail::send(new LicenceRequestUploaded($event->getServerId()));
    }
}
