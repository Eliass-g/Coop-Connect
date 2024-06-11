<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\CompanyJobPostingsController;
use App\Http\Controllers\CreateJobPostingController;
use App\Http\Controllers\EmployerSignUpController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchJobPostingsController;
use App\Http\Controllers\TestController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MessagingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\ContactusController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\DocumentsController;
use App\Http\Controllers\EmployerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginProviderController;
use App\Http\Controllers\MessagesController;
use App\Http\Controllers\ReflectionsController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherAuthController;
use App\Http\Controllers\TeacherController;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/





// Landing and About pages
Route::get('/', [HomeController::class, 'showLanding'])->name('landing');
Route::get('/about', [HomeController::class, 'showAbout'])->name('about');

Route::middleware(['auth'])->group(function () {
    Route::get('/student/home', [StudentController::class, 'home'])->name('student.home');
    Route::get('/student/jobs', [StudentController::class, 'jobs'])->name('student.jobs');
    Route::get('/student/interviews', [StudentController::class, 'interviews'])->name('student.interviews');
    Route::get('/student/profile', [StudentController::class, 'profile'])->name('student.profile');
    Route::get('/student/reflections', [StudentController::class, 'reflections'])->name('student.reflections');
    Route::get('/student/documents', [StudentController::class, 'documents'])->name('student.documents');
    Route::get('/student/settings', [StudentController::class, 'settings'])->name('student.settings');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/teacher/home', [TeacherController::class, 'home'])->name('teacher.home');
    Route::get('/teacher/documents', [TeacherController::class, 'documents'])->name('teacher.documents');
    Route::get('/teacher/messages', [TeacherController::class, 'messages'])->name('teacher.messages');
    Route::get('/teacher/scheduling', [TeacherController::class, 'scheduling'])->name('teacher.scheduling');
    Route::get('/teacher/profile', [TeacherController::class, 'profile'])->name('teacher.profile');
    Route::get('/teacher/settings', [TeacherController::class, 'settings'])->name('teacher.settings');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/employer/home', [EmployerController::class, 'home'])->name('employer.home');
    Route::get('/employer/post1', [EmployerController::class, 'post1'])->name('employer.post1');
    Route::get('/employer/post2', [EmployerController::class, 'post2'])->name('employer.post2');
    Route::get('/employer/viewpost', [EmployerController::class, 'viewPost'])->name('employer.viewpost');
    Route::get('/employer/editpost1', [EmployerController::class, 'editPost1'])->name('employer.editpost1');
    Route::get('/employer/editpost2', [EmployerController::class, 'editPost2'])->name('employer.editpost2');
    Route::get('/employer/documents', [EmployerController::class, 'documents'])->name('employer.documents');
    Route::get('/employer/messages', [EmployerController::class, 'messages'])->name('employer.messages');
    Route::get('/employer/interviews', [EmployerController::class, 'interviews'])->name('employer.interviews');
    Route::get('/employer/profile', [EmployerController::class, 'profile'])->name('employer.profile');
    Route::get('/employer/settings', [EmployerController::class, 'settings'])->name('employer.settings');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/messages', [MessagesController::class, 'index'])->name('messages.index');
});


Route::get('/profile', [ProfileController::class, 'show'])->name('profile');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/dashboard', [DashboardController::class, 'show'])
    ->name('dashboard');

require __DIR__ . '/auth.php';


Route::get('/profile/edit', [ProfileController::class, 'edit'])
    ->name('profile.edit')
    ->middleware('auth');




Route::get('/messaging', [MessagingController::class, 'index'])
    ->name('messaging')
    ->middleware('auth');




Route::get('/contactus', [ContactController::class, 'show'])->name('contact.show');
Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');

Route::get('/test', [TestController::class, 'show'])->name('test.show');



// Existing route for documents
Route::get('/documents', [DocumentsController::class, 'index'])->name('documents');

// Add a route for reflections
Route::get('/reflections', [ReflectionsController::class, 'index'])->name('reflections');



Route::get('/teacher/login', [TeacherAuthController::class, 'showLoginForm'])->name('teacher.login');
Route::post('/teacher/login', [TeacherAuthController::class, 'login']);


Route::post('/jobs', [JobController::class, 'store'])->name('jobs.store');


Route::middleware(['auth:sanctum'])->get('/users', [UserController::class, 'index']);

Route::group(['middleware' => ['role:admin']], function () {
    // Place your admin-only routes here
    Route::get('/admin/dashboard', 'AdminController@index')->name('admin.dashboard');
    // You can add more routes that you want to be accessible only by admins
});

Route::group(['middleware' => ['auth', 'role:admin']], function () {
    Route::get('/admin/dashboard', 'AdminController@dashboard')->name('admin.dashboard');
});

Route::get('/auth/google/redirect', [LoginProviderController::class, 'redirectToGoogle'])->name('login.google');
Route::get('/auth/google/callback', [LoginProviderController::class, 'handleGoogleCallback']);
Route::get('/auth/linkedin/redirect', [LoginProviderController::class, 'redirectToLinkedIn'])->name('login.linkedin');
Route::get('/auth/linkedin/callback', [LoginProviderController::class, 'handleLinkedInCallback']);
