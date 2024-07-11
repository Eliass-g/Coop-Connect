<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function home()
    {
        return Inertia::render('Student/Home');
    }

    public function jobs()
    {
        return Inertia::render('Student/Jobs');
    }

    public function interviews()
    {
        return Inertia::render('Student/Interviews');
    }

    public function profile()
    {
        return Inertia::render('Student/Profile');
    }

    public function reflections()
    {
        return Inertia::render('Student/Reflections');
    }

    public function documents()
    {
        return Inertia::render('Student/Document');
    }

    public function settings()
    {
        return Inertia::render('Student/Settings');
    }

    public function messages()
    {
        return Inertia::render('Messages/Messages');
    }

    public function viewPost($id)
    {
        $userId = auth()->user()->id;
        return Inertia::render('Student/ViewPost', ['jobId' => $id, 'userId' => $userId]);
    }
}
