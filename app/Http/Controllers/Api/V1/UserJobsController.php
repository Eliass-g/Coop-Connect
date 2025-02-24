<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\UserJobs;
use App\Models\Jobs;
use App\Http\Requests\V1\StoreUserJobsRequest;
use App\Http\Requests\V1\UpdateUserJobsRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\UserJobsResource;
use App\Http\Resources\V1\UserJobsCollection;
use Illuminate\Http\Request;
use App\Filters\V1\UserJobsFilter;
use Illuminate\Support\Facades\Log;

class UserJobsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new UserJobsFilter();
        $filterItems = $filter->transform($request);  //[['column,', 'operator', 'value']]
        return new UserJobsCollection(UserJobs::where($filterItems)->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserJobsRequest $request)
    {
        return new UserJobsResource(UserJobs::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(UserJobs $userjob)
    {
        return new UserJobsResource($userjob);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserJobsRequest $request, UserJobs $userjob)
    {
        $userjob->update($request->all());

        return new UserJobsResource($userjob);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserJobs $userjob)
    {
        $userjob->delete();
    }

    public function getUserDetails($jobsId)
    {

        $userJobs = UserJobs::where('jobs_id', $jobsId)->get();

        $users = $userJobs->map(function ($userJob) {
            return [
                'id' => $userJob->id,
                'user_id' => $userJob->user->id,
                'jobs_id' => $userJob->jobs_id,
                'name' => $userJob->user->name,
                'email' => $userJob->user->email,
                'resume' => $userJob->resume,
                'status' => $userJob->status,
                'timeSlots' => $userJob->time_slots,
            ];
        });

        return response()->json($users);
    }

    public function getSingleUserDetails($userJobsId)
    {
        // Retrieve the UserJobs record based on the provided userJobs ID
        $userJob = UserJobs::find($userJobsId);

        if (!$userJob) {
            return response()->json(['error' => 'User job not found'], 404);
        }

        // Prepare the user details
        $userDetails = [
            'id' => $userJob->user->id,
            'name' => $userJob->user->name,
            'email' => $userJob->user->email,
            'resume' => $userJob->resume,
            'status' => $userJob->status,
        ];

        // Return the user details as JSON
        return response()->json($userDetails);
    }

    public function getJobsDetails()
    {
        $userId = auth()->user()->id;

        $userJobs = UserJobs::where('user_id', $userId)->get();

        $jobs = $userJobs->map(function ($userJob) {
            return [
                'id' => $userJob->id,
                'jobs_id' => $userJob->jobs_id,
                'title' => $userJob->job->title,
                'description' => $userJob->job->description,
                'location' => $userJob->job->location,
                'company' => $userJob->job->company,
                'status' => $userJob->status,
                'timeSlots' => $userJob->time_slots,
                'user_id' => $userJob->job->user_id,
            ];
        });

        return response()->json($jobs);
    }

    public function getSingleJobDetails($userJobsId)
    {
        // Retrieve the UserJobs record based on the provided userJobs ID
        $userJob = UserJobs::find($userJobsId);

        if (!$userJob) {
            return response()->json(['error' => 'User job not found'], 404);
        }

        // Prepare the user details
        $jobDetails = [
            'id' => $userJob->job->id,
            'user_id' => $userJob->job->user_id,
            'title' => $userJob->job->title,
            'description' => $userJob->job->description,
            'location' => $userJob->job->location,
            'company' => $userJob->job->company,
            'timeSlots' => $userJob->time_slots,
            'message' => $userJob->message,
        ];

        // Return the user details as JSON
        return response()->json($jobDetails);
    }

    public function getInterviews()
    {
        $userId = auth()->user()->id;

        $userJobs = UserJobs::where('user_id', $userId)->where('status', 'Scheduled')->get();

        $jobs = $userJobs->map(function ($userJob) {
            return [
                'id' => $userJob->id,
                'title' => $userJob->job->title,
                'description' => $userJob->job->description,
                'location' => $userJob->job->location,
                'company' => $userJob->job->company,
                'status' => $userJob->status,
                'timeSlots' => $userJob->time_slots,
            ];
        });

        return response()->json($jobs);
    }

    public function getScheduledUserJobsForOwner()
    {

        $ownerId = auth()->user()->id;
        // Fetch jobs created by the given owner
        $jobsCreatedByUser = Jobs::where('user_id', $ownerId)->pluck('id');

        // Retrieve UserJobs where the job is in the above list and status is "Scheduled"
        $scheduledUserJobs = UserJobs::whereIn('jobs_id', $jobsCreatedByUser)
            ->where('status', 'Scheduled')
            ->with('user', 'job') // Eager load related user and job
            ->get();

        $jobs = $scheduledUserJobs->map(function ($userJob) {
            return [
                'id' => $userJob->id,
                'name' => $userJob->user->name,
                'email' => $userJob->user->email,
                'title' => $userJob->job->title,
                'description' => $userJob->job->description,
                'location' => $userJob->job->location,
                'company' => $userJob->job->company,
                'status' => $userJob->status,
                'timeSlots' => $userJob->time_slots,
            ];
        });

        return response()->json($jobs);
    }
}
