<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class ServerRequestUploaded
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    private $serverId;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($serverId)
    {
        $this->serverId =  $serverId;
    }

    public function getServerId()
    {
        return  $this->serverId;
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
