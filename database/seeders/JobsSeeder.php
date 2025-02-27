<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Jobs;

class JobsSeeder extends Seeder
{
    public function run()
    {
        Jobs::factory()->count(100)->create(); // Creates 20 jobs

        $customJob = Jobs::create([
            'title' => 'Senior Laravel Developer',
            'description' => 'We are looking for a Laravel expert with 5+ years of experience.',
            'skills' => ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
            'location' => 'Remote',
            'posting_status' => 'Open',
            'job_type' => 'Full-time',
            'company' => 'Tech Solutions Inc.',
            'user_id' => 51
        ]);

        $customJobs = [
            [
                'title' => 'Junior Laravel Developer',
                'description' => 'Looking for an entry-level Laravel developer to join our team.',
                'skills' => ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
                'location' => 'Remote',
                'posting_status' => 'Open',
                'job_type' => 'Full-time',
                'company' => 'Tech Solutions Inc.',
                'user_id' => 51
            ],
            [
                'title' => 'Frontend Developer',
                'description' => 'Seeking a skilled frontend developer proficient in React and Vue.js.',
                'skills' => ['JavaScript', 'React', 'Vue.js', 'CSS'],
                'location' => 'Remote',
                'posting_status' => 'Open',
                'job_type' => 'Contract',
                'company' => 'Tech Solutions Inc.',
                'user_id' => 51
            ],
            [
                'title' => 'Backend Developer',
                'description' => 'Experienced backend developer needed to work on APIs and databases.',
                'skills' => ['PHP', 'Laravel', 'Node.js', 'PostgreSQL'],
                'location' => 'Remote',
                'posting_status' => 'Open',
                'job_type' => 'Full-time',
                'company' => 'Tech Solutions Inc.',
                'user_id' => 51
            ],
            [
                'title' => 'Full Stack Developer',
                'description' => 'Full stack developer with experience in both frontend and backend technologies.',
                'skills' => ['PHP', 'Laravel', 'React', 'MySQL'],
                'location' => 'Remote',
                'posting_status' => 'Open',
                'job_type' => 'Full-time',
                'company' => 'Tech Solutions Inc.',
                'user_id' => 51
            ],
            [
                'title' => 'DevOps Engineer',
                'description' => 'Looking for a DevOps engineer to manage our CI/CD pipelines and cloud infrastructure.',
                'skills' => ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
                'location' => 'Remote',
                'posting_status' => 'Open',
                'job_type' => 'Full-time',
                'company' => 'Tech Solutions Inc.',
                'user_id' => 51
            ],
            [
                'title' => 'QA Engineer',
                'description' => 'QA engineer needed for automated and manual testing of our applications.',
                'skills' => ['Selenium', 'PHPUnit', 'Cypress', 'Manual Testing'],
                'location' => 'Remote',
                'posting_status' => 'Open',
                'job_type' => 'Contract',
                'company' => 'Tech Solutions Inc.',
                'user_id' => 51
            ],
            [
                'title' => 'Mobile App Developer',
                'description' => 'Hiring a mobile app developer proficient in Flutter and React Native.',
                'skills' => ['Flutter', 'React Native', 'Firebase', 'REST APIs'],
                'location' => 'Remote',
                'posting_status' => 'Open',
                'job_type' => 'Full-time',
                'company' => 'Tech Solutions Inc.',
                'user_id' => 51
            ],
            [
                'title' => 'UI/UX Designer',
                'description' => 'Creative UI/UX designer needed to work on web and mobile applications.',
                'skills' => ['Figma', 'Adobe XD', 'Sketch', 'User Research'],
                'location' => 'Remote',
                'posting_status' => 'Open',
                'job_type' => 'Contract',
                'company' => 'Tech Solutions Inc.',
                'user_id' => 51
            ],
            [
                'title' => 'Project Manager',
                'description' => 'Looking for a project manager with Agile/Scrum experience.',
                'skills' => ['Agile', 'Scrum', 'JIRA', 'Team Leadership'],
                'location' => 'Remote',
                'posting_status' => 'Open',
                'job_type' => 'Full-time',
                'company' => 'Tech Solutions Inc.',
                'user_id' => 51
            ],
            [
                'title' => 'Technical Support Engineer',
                'description' => 'Hiring a technical support engineer to assist customers with technical issues.',
                'skills' => ['Customer Support', 'Troubleshooting', 'Networking', 'SQL'],
                'location' => 'Remote',
                'posting_status' => 'Open',
                'job_type' => 'Full-time',
                'company' => 'Tech Solutions Inc.',
                'user_id' => 51
            ],
        ];

        foreach ($customJobs as $job) {
            Jobs::create($job);
        }

    }
}
