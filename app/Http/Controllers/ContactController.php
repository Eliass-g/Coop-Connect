<?php

namespace App\Http\Controllers;

use App\Mail\ContactUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // Validate the request data
        $data = $request->validate([
            'name' => 'required|min:1',
            'email' => 'required|email',
            'message' => 'required|min:1',
        ]);

        $recipient = \config('mail.recipient');


        // Send the email
        Mail::to($recipient)->send(new ContactUs($data));

        return redirect()->back()->with('success', 'Thank you for contacting us!');
    }
}
