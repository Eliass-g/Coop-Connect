<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Support\Facades\Log;
use Illuminate\Broadcasting\Channel;

class NewMessageNotification extends Notification
{
    private $notificationData;

    public function __construct($notificationData)
    {
        $this->notificationData = $notificationData;
    }

    public function via($notifiable)
    {
        return ['database', 'broadcast'];
    }

    public function toArray($notifiable)
    {
        return [
            'message' => $this->notificationData['message'],
            'sender_id' => $this->notificationData['sender_id'],
            'sender_name' => $this->notificationData['sender_name'],
            'redirect' => $this->notificationData['redirect']
        ];
    }

    public function broadcastOn()
    {
        return new Channel('notifications.' . $this->notificationData['recipient_id']);
    }

    public function broadcastAs()
    {
        return 'NewMessageNotification';
    }



    public function toBroadcast($notifiable)
    {
        return [
            'message' => $this->notificationData['message'],
            'sender_id' => $this->notificationData['sender_id'],
            'sender_name' => $this->notificationData['sender_name'],
            'redirect' => $this->notificationData['redirect']
        ];
    }
}
