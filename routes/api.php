<?php

use App\Http\Controllers\Api\V1\CoursesController;
use App\Http\Controllers\Api\V1\InterviewsController;
use App\Http\Controllers\Api\V1\JobsController;
use App\Http\Controllers\Api\V1\ReflectionsController;
use App\Http\Controllers\Api\V1\TokenController;
use App\Http\Controllers\Api\V1\UserCoursesController;
use App\Http\Controllers\Api\V1\UserJobsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentsController;
<<<<<<< HEAD
use App\Http\Controllers\JobController;
<<<<<<< HEAD
=======
use App\Http\Controllers\ReflectionController;
=======
use App\Http\Controllers\UserController;
use App\Http\Controllers\ApplicationController;
>>>>>>> 07e0324 (fix bugs, add roles when user signs up, redirect user to role's homepage upon sign up or login)
>>>>>>> 1bd0d88 (fix bugs, add roles when user signs up, redirect user to role's homepage upon sign up or login)

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/jobs/match', [JobsController::class, 'matchSkills'])->name('jobs.match');

Route::get('/filterjobs', [JobController::class, 'filterJobs']);



Route::post('jobs/{job}/shortlist', [ShortlistController::class, 'addToShortlist']);
    Route::delete('/shortlists/{shortlist}/applicants/{applicant}', [ShortlistController::class, 'removeFromShortlist']);
    Route::get('/jobs/{job}/shortlist', [ShortlistController::class, 'getShortlist']);
    Route::get('/users/{userId}/shortlists', [ShortlistController::class, 'getShortlistsForUser']);
    Route::get('/shortlists/{id}', [ShortlistController::class, 'show']);
    Route::post('/jobs/{job}/shortlist/{applicant}', [ShortlistController::class, 'removeFromShortlist']);
    Route::delete('/jobs/{job}/shortlist', [ShortlistController::class, 'deleteShortlist']);

    Route::get('/applications/create', [ApplicationController::class, 'create'])->name('applications.create');
    Route::post('/applications', [ApplicationController::class, 'store'])->name('applications.store');
    Route::get('/applications/{application}', [ApplicationController::class, 'show'])->name('applications.show');
    Route::middleware('auth:sanctum')->post('/apply/{jobId}', [ApplicationController::class, 'apply']);
    Route::middleware('auth:sanctum')->get('/check-application/{jobId}', [ApplicationController::class, 'checkApplication']);
    Route::get('/jobs/user/{userId}', [JobController::class, 'getJobsByUserId']);












Route::post('/uploaddocs', [DocumentsController::class, 'upload']);
Route::get('/fetchdocs', [DocumentsController::class, 'fetchDoc']);
<<<<<<< HEAD
=======
Route::delete("/deletedoc/{id}", [DocumentsController::class, "deleteDoc"]);

Route::get('/user-id', function () {
    return response()->json(['user' => Auth::user()]);
})->middleware('auth:sanctum');

Route::get('/download/{id}', [DocumentsController::class, 'download'])->name('file.download');

<<<<<<< HEAD
=======
Route::post('/update-profile/{user}', [UserController::class, 'updateProfile'])->name('profile.update')->middleware('auth');
Route::get('/usersindex', [UserController::class, 'index'])->name('users.index');
Route::get('/studentStatusPercents', [UserController::class, 'getStudentStatusPercentages'])->name('users.getStudentStatusPercentages');

Route::middleware('auth:sanctum')->post('/apply/{jobId}', [ApplicationController::class, 'apply']);
Route::middleware('auth:sanctum')->get('/check-application/{jobId}', [ApplicationController::class, 'checkApplication']);
<<<<<<< HEAD
Route::get('/jobs/user/{userId}', [JobController::class, 'getJobsByUserId']);
>>>>>>> 40b014e (add backend/functionality to teacher home page, employer jobs page, edit jobs)




Route::middleware('auth:sanctum')->group(function () {
    Route::get('/reflections', [ReflectionController::class, 'index']);
    Route::post('/reflections', [ReflectionController::class, 'store']);
    Route::put('/reflections/{id}', [ReflectionController::class, 'update']);
    Route::delete('/reflections/{id}', [ReflectionController::class, 'destroy']);
});


=======
>>>>>>> 07e0324 (fix bugs, add roles when user signs up, redirect user to role's homepage upon sign up or login)
Route::get('/applications/create', [ApplicationController::class, 'create'])->name('applications.create');
Route::post('/applications', [ApplicationController::class, 'store'])->name('applications.store');
Route::get('/applications/{application}', [ApplicationController::class, 'show'])->name('applications.show');


<<<<<<< HEAD
Route::get('/jobs', [JobController::class, 'index'])->name('jobs.index');
Route::get('/jobs/create', [JobController::class, 'create'])->name('jobs.create');
Route::get('/jobs/match/{user_id}', [JobController::class, 'matchSkills'])->name('jobs.match')->middleware('auth');
Route::get('/jobs/search/{user_id}', [JobController::class, 'searchJobs'])
    ->name('jobs.search')
    ->middleware('auth');

Route::post('/jobs', [JobController::class, 'store'])->name('jobs.store');
Route::get('/jobs/{job}', [JobController::class, 'show'])->name('jobs.show');
Route::get('/jobs/{job}/edit', [JobController::class, 'edit'])->name('jobs.edit');
Route::put('/jobs/{job}', [JobController::class, 'update'])->name('jobs.update');
Route::delete('/jobs/{job}', [JobController::class, 'destroy'])->name('jobs.destroy');

>>>>>>> 42ed0af (add backend/functionality to teacher home page, employer jobs page, edit jobs)
=======
>>>>>>> 1bd0d88 (fix bugs, add roles when user signs up, redirect user to role's homepage upon sign up or login)
Route::delete("/deletedoc/{doc_id}", [DocumentsController::class, "deleteDoc"]);

Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers\Api\V1'], function () {
    Route::get('/jobs/user/{userId}', [JobsController::class, 'getJobsforUser']);
    Route::get('/jobs/search', [JobsController::class, 'searchJobs'])->name('jobs.search');
    Route::get('/jobs/match', [JobsController::class, 'matchSkills'])->name('jobs.match');
    Route::apiResource('jobs', JobsController::class);

    Route::get('/courses/user/{userId}', [CoursesController::class, 'getCourseforUser']);
    Route::get('/courses/teacher/{userId}', [CoursesController::class, 'getCoursesForTeacher']);
    Route::get('/courses/documents/teacher/{userId}', [CoursesController::class, 'getCourseDocumentsForTeacher']);


    Route::post('jobs/{job}/shortlist', [ShortlistController::class, 'addToShortlist']);
    Route::delete('/shortlists/{shortlist}/applicants/{applicant}', [ShortlistController::class, 'removeFromShortlist']);
    Route::get('/jobs/{job}/shortlist', [ShortlistController::class, 'getShortlist']);
    Route::get('/users/{userId}/shortlists', [ShortlistController::class, 'getShortlistsForUser']);
    Route::get('/shortlists/{id}', [ShortlistController::class, 'show']);
    Route::post('/jobs/{job}/shortlist/{applicant}', [ShortlistController::class, 'removeFromShortlist']);
    Route::delete('/jobs/{job}/shortlist', [ShortlistController::class, 'deleteShortlist']);

    Route::get('/applications/create', [ApplicationController::class, 'create'])->name('applications.create');
    Route::post('/applications', [ApplicationController::class, 'store'])->name('applications.store');
    Route::get('/applications/{application}', [ApplicationController::class, 'show'])->name('applications.show');
    Route::middleware('auth:sanctum')->post('/apply/{jobId}', [ApplicationController::class, 'apply']);
    Route::middleware('auth:sanctum')->get('/check-application/{jobId}', [ApplicationController::class, 'checkApplication']);

    Route::post('/sendmessages', [MessagesController::class, 'store']);
    Route::post('/sendnewmessages', [MessagesController::class, 'createConversation']);
    Route::get('/conversation/{user_id}', [ConversationController::class, 'show']);
    Route::get('/conversation/{conversation_id}/messages', [ConversationController::class, 'getMessages']);
    Route::get('/conversations/{conversation_id}/current', [ConversationController::class, 'getCurrentConversation']);











    Route::apiResource('token', TokenController::class);
    Route::get('/userjobs/list/{jobsId}', [UserJobsController::class, 'getUserDetails'])->name('jobs.getUserDetails');
    Route::get('/userjobs/user/{userJobsId}', [UserJobsController::class, 'getSingleUserDetails'])->name('jobs.getSingleUserDetails');
    Route::apiResource('userjobs', UserJobsController::class);
    Route::apiResource('courses', CoursesController::class);
    Route::apiResource('usercourses', UserCoursesController::class);
    Route::apiResource('reflections', ReflectionsController::class);
    Route::apiResource('interviews', InterviewsController::class);
});
