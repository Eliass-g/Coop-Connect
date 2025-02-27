<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Message;
use Faker\Factory as Faker;
use Carbon\Carbon;

class MessagesSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();
        $receiverId = 51; // The user who will receive messages
        $users = User::where('id', '!=', $receiverId)->get(); // Get all users except user 51

        foreach ($users as $user) {
            $messageCount = rand(1, 5); // Each user sends 1 to 5 messages
            for ($i = 0; $i < $messageCount; $i++) {
                // Generate a random timestamp within the past 7 days, ensuring it's not in the future
                $randomTimestamp = Carbon::now()->subDays(rand(0, 7))
                    ->subHours(rand(0, Carbon::now()->hour))
                    ->subMinutes(rand(0, Carbon::now()->minute))
                    ->subSeconds(rand(0, Carbon::now()->second));

                Message::create([
                    'sender_id' => $user->id,
                    'receiver_id' => $receiverId,
                    'message' => $this->generateGreeting($faker),
                    'is_read' => false,
                    'created_at' => $randomTimestamp,
                    'updated_at' => $randomTimestamp, // Keep updated_at consistent
                ]);
            }
        }
    }

    private function generateGreeting($faker)
    {
        $greetings = [
            'Hello!',
            'Hi there!',
            'Good morning!',
            'Hey!',
            'Hope you’re doing well!',
            'Greetings!',
            'How’s your day going?',
            'Nice to meet you!',
            'Yo!',
            'Good evening!'
        ];
        return $faker->randomElement($greetings);
    }
}
