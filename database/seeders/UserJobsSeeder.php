<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UserJobs;
use App\Models\User;
use App\Models\Jobs;

class UserJobsSeeder extends Seeder
{
    public function run()
    {
        $users = User::inRandomOrder()->limit(50)->get(); // Select 10 random users
        $customJob = Jobs::where('title', 'Senior Laravel Developer')->first(); // Get the custom job

        if ($customJob) {
            foreach ($users as $user) {
                // Check if the entry already exists
                $exists = UserJobs::where('user_id', $user->id)
                    ->where('jobs_id', $customJob->id)
                    ->exists();

                if (!$exists and $user->id !== 51) {
                    UserJobs::factory()->create([
                        'user_id' => $user->id,
                        'jobs_id' => $customJob->id,
                    ]);
                }
            }
        }

        $admin = User::find(51);

        if ($admin) {
            // Get all available jobs
            $jobs = Jobs::all();

            // Assign multiple jobs to this user (e.g., 3-5 jobs)
            $userJobs = $jobs->random(rand(49, 50)); // Randomly assign 3 to 5 jobs

            foreach ($userJobs as $job) {
                UserJobs::factory()->create([
                    'user_id' => $admin->id,
                    'jobs_id' => $job->id,
                ]);
            }
        }

        // Assign random jobs to other users
        $allUsers = User::all();
        $jobs = Jobs::all();

        foreach ($allUsers as $admin) {
            $userJobs = $jobs->random(rand(1, 5)); // Each user applies to 1 to 5 jobs
            foreach ($userJobs as $job) {
                // Check if the entry already exists before inserting
                $exists = UserJobs::where('user_id', $user->id)
                    ->where('jobs_id', $job->id)
                    ->exists();

                if (!$exists and $user->id !== 51) {
                    UserJobs::factory()->create([
                        'user_id' => $user->id,
                        'jobs_id' => $job->id,
                    ]);
                }
            }
        }
    }
}
