<?php

namespace App\Listeners;

use App\Events\ForgetRequestUploaded;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Mail;
use App\Mail\ForgetRequestUploaded as MailForgetRequestUploaded;

class ForgetRequestUploadedListener
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
     * @param  ForgetRequestUploaded  $event
     * @return void
     */
    public function handle(ForgetRequestUploaded $event)
    {
        Mail::later(time() + $this->delay, new MailForgetRequestUploaded($event->getEmail(), $event->getCode()));
    }
}
