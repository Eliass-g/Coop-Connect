<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('profile_image')->nullable();
            $table->string('school')->nullable();
            $table->string('pronouns')->nullable();
            $table->string('company_name')->nullable();
            $table->string('company')->nullable();
            $table->boolean('working')->default(false);
            $table->boolean('interviewing')->default(false);
            $table->boolean('searching')->default(false);
            $table->json('skills')->nullable();
            $table->json('courses')->nullable();
            $table->string('positiontitle')->nullable();

            // Add more columns as needed
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('profile_image');
            $table->dropColumn('company_name');
            $table->dropColumn('school');
            $table->dropColumn('pronouns');
            $table->dropColumn('company');
            $table->dropColumn('working');
            $table->dropColumn('interviewing');
            $table->dropColumn('searching');
            $table->dropColumn('skills');
            $table->dropColumn('courses');
            $table->dropColumn('positiontitle');

            // Drop other columns added in 'up' method
        });
    }
};
