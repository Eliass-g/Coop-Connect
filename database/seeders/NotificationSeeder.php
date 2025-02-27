<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class NotificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('notifications')->insert([
            [
                'recipient_id' => 51,
                'data' => json_encode(['message' => 'Your application has been received.']),
                'unread' => false,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'recipient_id' => 51,
                'data' => json_encode(['message' => 'You have a new message from an employer.']),
                'unread' => false,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'recipient_id' => 51,
                'data' => json_encode(['message' => 'Your interview is scheduled for tomorrow.']),
                'unread' => false,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
