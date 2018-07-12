<?php

namespace App\Listeners;

use App\Events\ServerRequestUploaded;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Mail;
use App\Mail\LicenceRequestUploaded;

class ServerRequestUploadedListener
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
     * @param  ServerRequestUploaded  $event
     * @return void
     */
    public function handle(ServerRequestUploaded $event)
    {
        Mail::later(time() + $this->delay, new LicenceRequestUploaded($event->getServerId()));
    }
}
