<?php

namespace App\Listeners;

use App\Events\RegisterRequest;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Mail;
use App\Mail\RegisterRequest as MailRegisterRequest;

class RegisterRequestListener
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
     * @param  RegisterRequest  $event
     * @return void
     */
    public function handle(RegisterRequest $event)
    {

        Mail::later(time() + $this->delay, new MailRegisterRequest($event->getEmail(), $event->getCode(), $event->getLogin()));
    }
}
