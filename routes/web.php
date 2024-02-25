<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MessagingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\ContactusController;
use App\Http\Controllers\ContactController;




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






Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
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

require __DIR__.'/auth.php';


Route::get('/profile/edit', [ProfileController::class, 'edit'])
    ->name('profile.edit')
    ->middleware('auth');




Route::get('/messaging', [MessagingController::class, 'index'])
    ->name('messaging')
    ->middleware('auth');



use App\Http\Controllers\DocumentsController;
use App\Http\Controllers\ReflectionsController;

Route::get('/contactus', [ContactController::class, 'show'])->name('contact.show');
Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');



// Existing route for documents
Route::get('/documents', [DocumentsController::class, 'index'])->name('documents');

// Add a route for reflections
Route::get('/reflections', [ReflectionsController::class, 'index'])->name('reflections');


