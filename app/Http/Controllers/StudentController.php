<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function home()
    {
        $skills = auth()->user()->skills;
        return Inertia::render('Student/Home', ['skills' => $skills]);
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
        $user = auth()->user();
        return Inertia::render('Student/Profile', ['user' => $user]);
    }

    public function settings()
    {
        return Inertia::render('Student/Settings');
    }

    public function messages()
    {
        return Inertia::render('Student/Messages/Messages');
    }

    public function viewapplications()
    {
        return Inertia::render('Student/ViewApplications');
    }

    public function viewPost($id)
    {
        $userId = auth()->user()->id;
        return Inertia::render('Student/ViewPost', ['jobId' => $id, 'userId' => $userId]);
    }

    public function acceptinterview($id)
    {
        return Inertia::render('Student/AcceptInterview', ['userJobsId' => $id]);
    }
}
