<?php

namespace App\Listeners;

use App\Events\ForgetRequestUploaded;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Mail;
use App\Mail\ForgetRequestUploaded as MailForgetRequestUploaded;

class ForgetRequestUploadedListener
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
     * @param  ForgetRequestUploaded  $event
     * @return void
     */
    public function handle(ForgetRequestUploaded $event)
    {
        Mail::send(new MailForgetRequestUploaded($event->getEmail(), $event->getCode(), $event->getLang()));
    }
}
