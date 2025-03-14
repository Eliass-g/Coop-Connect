<?php

use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EmployerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginProviderController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\AdminController;

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
Route::get('/guide', [HomeController::class, 'showGuide'])->name('guide');

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/student/home', [StudentController::class, 'home'])->name('student.home');
});

Route::middleware(['auth', 'student'])->group(function () {
    Route::get('/student/home', [StudentController::class, 'home'])->name('student.home');
    Route::get('/student/jobs', [StudentController::class, 'jobs'])->name('student.jobs');
    Route::get('/student/interviews', [StudentController::class, 'interviews'])->name('student.interviews');
    Route::get('/student/profile', [StudentController::class, 'profile'])->name('student.profile');
    Route::get('/student/settings', [StudentController::class, 'settings'])->name('student.settings');
    Route::get('/student/messages', [StudentController::class, 'messages'])->name('student.messages');
    Route::get('/student/viewapplications', [StudentController::class, 'viewapplications'])->name('student.viewapplications');
    Route::get('/student/accept-interview/{id}', [StudentController::class, 'acceptinterview'])->name('student.acceptinterview');
    Route::get('/student/viewpost/{jobId}', [StudentController::class, 'ViewPost'])->name('student.viewpost');
});

Route::middleware(['auth', 'employee'])->group(function () {
    Route::get('/employer/home', [EmployerController::class, 'home'])->name('employer.home');
    Route::get('/employer/post1', [EmployerController::class, 'post1'])->name('employer.post1');
    Route::get('/employer/post2', [EmployerController::class, 'post2'])->name('employer.post2');
    Route::get('/employer/viewpost/{jobId}', [EmployerController::class, 'ViewPost'])->name('employer.viewpost');
    Route::get('/employer/editpost1/{jobId}', [EmployerController::class, 'editPost1'])->name('employer.editpost1');
    Route::get('/employer/editpost2/{jobId}', [EmployerController::class, 'editPost2'])->name('employer.editpost2');
    Route::get('/employer/messages', [EmployerController::class, 'messages'])->name('employer.messages');
    Route::get('/employer/interviews', [EmployerController::class, 'interviews'])->name('employer.interviews');
    Route::get('/employer/profile', [EmployerController::class, 'profile'])->name('employer.profile');
    Route::get('/employer/settings', [EmployerController::class, 'settings'])->name('employer.settings');
    Route::get('/employer/viewapplicants/{jobId}', [EmployerController::class, 'viewApplicants'])->name('employer.viewapplicants');
    Route::get('/employer/accept-applicant/{id}', [EmployerController::class, 'acceptApplicant'])->name('employer.acceptapplicant');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard', [DashboardController::class, 'show'])
    ->name('dashboard');

require __DIR__ . '/auth.php';

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::get('/test', [TestController::class, 'show'])->name('test.show');

Route::middleware(['auth:sanctum'])->get('/users', [UserController::class, 'index']);

Route::group(['middleware' => ['role:admin']], function () {
    // Place your admin-only routes here
    Route::get('/admin/dashboard', 'AdminController@index')->name('admin.dashboard');
    // You can add more routes that you want to be accessible only by admins
});

Route::group(['middleware' => ['auth', 'role:admin']], function () {
    Route::get('/admin/dashboard', 'AdminController@dashboard')->name('admin.dashboard');
});
