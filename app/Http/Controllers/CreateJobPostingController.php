<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CreateJobPostingController extends Controller
{
    public function show()
    {
        return Inertia::render('JobPostings/CreateJobPosting');
    }
}
