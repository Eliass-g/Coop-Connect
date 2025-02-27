<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Jobs;
use App\Models\UserJobs;
use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

class UserJobsFactory extends Factory
{
    protected $model = UserJobs::class;

    public function definition()
    {
        $status = $this->faker->randomElement(['Pending', 'Interview', 'Rejected', 'Scheduled', 'Declined']);
        $timeSlots = $this->generateTimeSlots($status);

        return [
            'user_id' => User::factory(),
            'jobs_id' => Jobs::factory(),
            'resume' => $this->faker->url,
            'status' => $status,
            'time_slots' => $timeSlots ?: null,
        ];
    }

    private function generateTimeSlots($status)
    {
        if ($status === 'Pending' || $status === 'Rejected' || $status === 'Declined') {
            return []; // No time slots
        }

        $timeSlots = [];
        $faker = $this->faker;
        $daysInFebruary = Carbon::now()->daysInMonth; // Number of days in February

        if ($status === 'Interview') {
            // Generate multiple time slots
            $count = rand(2, 5);
            for ($i = 0; $i < $count; $i++) {
                $day = rand(1, $daysInFebruary);
                $timeSlots[] = Carbon::create(2025, 2, $day, rand(9, 17), [0, 30][rand(0, 1)])->toDateTimeString();
            }
        } elseif ($status === 'Scheduled') {
            // Generate one time slot
            $day = rand(1, $daysInFebruary);
            $timeSlots[] = Carbon::create(2025, 2, $day, rand(9, 17), [0, 30][rand(0, 1)])->toDateTimeString();
        }

        return $timeSlots;
    }
}
