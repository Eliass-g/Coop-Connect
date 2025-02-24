<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Courses;
use App\Imports\UsersImport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\JsonResponse;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Requests\ChangePasswordRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;


class UserController extends Controller
{
    /**
     * Display a listing of the users.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Fetch all users except the authenticated one and with the role of 'student'
        $students = User::where('id', '!=', $request->user()->id)
            ->where('role', 'student')
            ->get(['id', 'name', 'email', 'class']); // Add the required fields

        return response()->json($students);
    }

    public function updateProfile(Request $request)
    {

        $user = auth()->user();

        // Handle profile image upload
        if ($request->has('profile_image')) {
            if ($request->profile_image === "null") {
                // Remove profile image from user
                $user->profile_image = null;
            } elseif ($request->hasFile('profile_image')) {
                $file = $request->file('profile_image');
                $path = $file->store('profile_images', 'public'); // Saves to storage/app/public/profile_images

                // Save file path in the database
                $user->profile_image = "/storage/" . $path; // Store accessible URL
            }
        }

        // Update other fields only if they exist in the request

        $user->description = $request->description === "null" ? null : $request->description;


        if ($request->filled('name')) {
            $user->name = $request->name;
        }

        if ($request->filled('email')) {
            $user->email = $request->email;
        }

        if ($request->has('positiontitle')) {
            $user->positiontitle = $request->positiontitle === "null" ? null : $request->positiontitle;
        }

        if ($request->has('company')) {
            $user->company = $request->company === "null" ? null : $request->company;
        }


        if ($request->has('school')) {
            $user->school = $request->school === "null" ? null : $request->school;
        }

        if ($request->has('pronouns')) {
            $user->pronouns = $request->pronouns === "null" ? null : $request->pronouns;
        }


        if ($request->has('status')) {
            $user->status = $request->status === "null" ? null : $request->status;
        }

        // Handle skills field safely
        if ($request->has('skills')) {
            $skills = $request->input('skills');

            if (is_string($skills)) {
                $skills = json_decode($skills, true) ?? [];
            } elseif (!is_array($skills)) {
                $skills = [];
            }

            $user->skills = $skills;
        }

        if ($request->has('courses')) {
            $courses = $request->input('courses');

            if (is_string($courses)) {
                $courses = json_decode($courses, true) ?? [];
            } elseif (!is_array($courses)) {
                $courses = [];
            }

            $user->courses = $courses;
        }

        $user->save();

        info('Updated user data: ' . json_encode($user));

        return response()->json(['message' => 'Profile updated successfully', 'user' => $user]);
    }

    public function getAllUsers(Request $request)
    {

        $users = User::all();

        return response()->json($users);
    }

    public function changePassword(ChangePasswordRequest $request)
    {
        $user = Auth::user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(['message' => 'Current password is incorrect'], 400);
        }

        $user->password = Hash::make($request->new_password);
        $user->save();

        return response()->json(['message' => 'Password updated successfully']);
    }

    public function getUserByEmail(Request $request)
    {
        $email = $request->query('email'); // Get email from query params
        $user = User::where('email', $email)->first();

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        return response()->json($user->only(['id', 'name', 'email']));
    }
}








