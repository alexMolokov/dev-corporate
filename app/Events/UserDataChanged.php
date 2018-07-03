<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class UserDataChanged
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    private $login;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($login)
    {
        $this->login = $login;
    }

    public function getLogin()
    {
        return $this->login;
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
