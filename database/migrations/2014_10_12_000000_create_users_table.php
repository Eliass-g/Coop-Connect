<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('class')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
<<<<<<< HEAD
            $table->enum('role', ['student', 'teacher', 'employee'])->default('student');
<<<<<<< HEAD
=======
=======
            $table->enum('role', ['student', 'teacher', 'employee', 'admin'])->default('student');
>>>>>>> 9793cbe (add role access restriction)
            $table->enum('status', ['searching', 'interviewing', 'working'])->default('searching');
            $table->string('description')->nullable();
>>>>>>> 40b014e (add backend/functionality to teacher home page, employer jobs page, edit jobs)
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
