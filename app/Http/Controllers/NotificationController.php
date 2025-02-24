<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use App\Events\NotificationSent;
use App\Models\Notification;


class NotificationController extends Controller
{
    public function getNotifications()
    {
        $notifications = Notification::where("recipient_id", auth()->id())
            ->orderBy("created_at", "desc")
            ->get();

        return response()->json($notifications);
    }

    public function markAsRead(Request $request)
    {
        Notification::where("recipient_id", auth()->id())
            ->where("unread", false)
            ->update(['unread' => true]);

        return response()->json(['message' => 'All notifications marked as read.']);
    }

    public function sendNotification(Request $request)
    {
        $request->validate([
            'message' => 'required|string|max:255',
            'redirect' => 'nullable|string',
            'recipient_id' => 'required|exists:users,id'
        ]);

        $notification = Notification::create([
            'recipient_id' => $request->recipient_id,
            'data' => [
                'message' => $request->message,
                'sender_id' => auth()->id(),
                'sender_name' => auth()->user()->name,
                'redirect' => $request->redirect,
                'recipient_id' => $request->recipient_id
            ],
        ]);

        $notificationArray = [
            'id' => $notification->id,
            'recipient_id' => $notification->recipient_id,
            'data' => $notification->data, // This is already an array because of model casting
            'created_at' => $notification->created_at->toISOString(),
        ];

        broadcast(new NotificationSent($notificationArray))->toOthers();

        return response()->json(['status' => 'Notification sent', 'notification' => $notificationArray]);
    }
    public function deleteNotification(Request $request)
    {
        $notification = Notification::where('id', $request->id)
            ->where('recipient_id', auth()->id()) // Ensure user can only delete their own notifications
            ->first();

        if (!$notification) {
            return response()->json(['message' => 'Notification not found'], 404);
        }

        $notification->delete();

        return response()->json($request->id);
    }
}
