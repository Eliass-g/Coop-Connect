<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Events\TestEvent;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class MessageController extends Controller
{
    public function sendMessage(Request $request)
    {
        $request->validate([
            'receiver_email' => 'required|email|exists:users,email',
            'message' => 'required|string',
        ]);

        $receiver = User::where('email', $request->receiver_email)->firstOrFail();
        $sender = Auth::user(); // Get the authenticated user

        $message = Message::create([
            'sender_id' => $sender->id,
            'receiver_id' => $receiver->id,
            'message' => $request->message,
        ]);

        $messageData = [
            'id' => $message->id,
            'message' => $message->message,
            'created_at' => $message->created_at,
            'sender_id' => $sender->id,
            'receiver_id' => $receiver->id,
            'sender' => [
                'id' => $sender->id,
                'name' => $sender->name,
                'email' => $sender->email,
            ],
            'receiver' => [
                'id' => $receiver->id,
                'name' => $receiver->name,
                'email' => $receiver->email,
            ],
        ];

        broadcast(new MessageSent($messageData))->toOthers();

        return response()->json($messageData);
    }

    public function getMessages(User $user)
    {
        $messages = Message::where(function ($query) use ($user) {
            $query->where('sender_id', Auth::id())
                ->where('receiver_id', $user->id);
        })->orWhere(function ($query) use ($user) {
            $query->where('sender_id', $user->id)
                ->where('receiver_id', Auth::id());
        })->orderBy('created_at')->get();

        return response()->json($messages);
    }

    public function getUnreadMessagesCount()
    {
        $count = Message::where('receiver_id', Auth::id())->where('is_read', false)->count();
        return response()->json(['unread_messages' => $count]);
    }

    public function markMessagesAsRead(User $user)
    {
        Message::where('receiver_id', Auth::id())
            ->where('sender_id', $user->id)
            ->update(['is_read' => true]);

        return response()->json(['sender_id' => $user->id]);
    }

    public function getRecentMessagesBatch()
    {
        $messages = Message::where('receiver_id', Auth::id())
            ->orWhere('sender_id', Auth::id())
            ->latest()
            ->with(['sender:id,name,email', 'receiver:id,name,email']) // Load sender & receiver details
            ->get();

        $conversations = [];
        $uniqueMessages = [];

        foreach ($messages as $message) {
            $otherUser = $message->sender_id == Auth::id() ? $message->receiver : $message->sender;

            if (!isset($conversations[$otherUser->id])) {
                $conversations[$otherUser->id] = true;

                // Add user details directly
                $message->other_user = [
                    'id' => $otherUser->id,
                    'name' => $otherUser->name,
                    'email' => $otherUser->email,
                ];

                // Count unread messages for this user in the conversation
                $unreadCount = Message::where('receiver_id', Auth::id())
                    ->where('sender_id', $otherUser->id)
                    ->where('is_read', false)  // Assuming 'is_read' tracks unread status
                    ->count();

                // Add unread count to message
                $message->unread_count = $unreadCount;


                $uniqueMessages[] = $message;
            }
        }

        return response()->json($uniqueMessages);

    }
}
