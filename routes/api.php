<?php

use App\Http\Controllers\Api\V1\JobsController;
use App\Http\Controllers\Api\V1\UserJobsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\NotificationController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['web', 'auth'])->group(function () {


    Route::post('/messages/send', [MessageController::class, 'sendMessage']);
    Route::get('/messages/{user}', [MessageController::class, 'getMessages']);
    Route::get('/messages/unread/count', [MessageController::class, 'getUnreadMessagesCount']);
    Route::post('/messages/{user}/read', [MessageController::class, 'markMessagesAsRead']);
    Route::get('/messages/recent/batch', [MessageController::class, 'getRecentMessagesBatch']);



    Route::get('/notifications', [NotificationController::class, 'getNotifications']);
    Route::post('/notifications/mark-as-read', [NotificationController::class, 'markAsRead']);
    Route::post('/notifications/send', [NotificationController::class, 'sendNotification']);
    Route::post('/notifications/delete', [NotificationController::class, 'deleteNotification']);


    Route::get('/users/email', [UserController::class, 'getUserByEmail']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/jobs/match', [JobsController::class, 'matchSkills'])->name('jobs.match');

    Route::get('/user-id', function () {
        return response()->json(['user' => Auth::user()]);
    });

    Route::post('/update-profile', [UserController::class, 'updateProfile'])->name('profile.update');
    Route::get('/usersindex', [UserController::class, 'index'])->name('users.index');
    Route::get('/users', [UserController::class, 'getAllUsers']);

    Route::delete('/users/{id}', [UserController::class, 'deleteUser']);

    Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers\Api\V1'], function () {
        Route::get('/jobs/user/{userId}', [JobsController::class, 'getJobsforUser']);
        Route::get('/jobs/search', [JobsController::class, 'searchJobs'])->name('jobs.search');
        Route::get('/jobs/match', [JobsController::class, 'matchSkills'])->name('jobs.match');
        Route::apiResource('jobs', JobsController::class);
        Route::get('/userjobs/list/{jobsId}', [UserJobsController::class, 'getUserDetails'])->name('jobs.getUserDetails');
        Route::get('/userjobs/user/{userJobsId}', [UserJobsController::class, 'getSingleUserDetails'])->name('jobs.getSingleUserDetails');
        Route::get('/userjobs/jobs', [UserJobsController::class, 'getJobsDetails'])->name('jobs.getJobsDetails');
        Route::get('/userjobs/job/{userJobsId}', [UserJobsController::class, 'getSingleJobDetails'])->name('jobs.getSingleJobDetails');
        Route::get('/userjobs/interviews', [UserJobsController::class, 'getInterviews'])->name('jobs.getInterviews');
        Route::get('/userjobs/ownerjobs', [UserJobsController::class, 'getScheduledUserJobsForOwner'])->name('jobs.getScheduledUserJobsForOwner');
        Route::apiResource('userjobs', UserJobsController::class);
    });

});
