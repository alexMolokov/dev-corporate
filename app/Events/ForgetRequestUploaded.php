<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class ForgetRequestUploaded
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


    private $email;
    private $code;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(array $data)
    {
        $this->email = $data["email"];
        $this->code = $data["code"];
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function getCode()
    {
        return $this->code;
    }


    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
