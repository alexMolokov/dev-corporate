<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class ConfirmInvoice
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    private $file;
    private $invoiceId;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($invoiceId, $file)
    {
        $this->file = $file;
        $this->invoiceId = $invoiceId;
    }

    public function getInvoice(){
        return $this->invoiceId;
    }

    public function getFile(){
        return $this->file;
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
