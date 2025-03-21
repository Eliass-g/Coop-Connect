<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jobs extends Model
{
    use HasFactory;

    protected $casts = [
        'skills' => 'array',
    ];

    protected $fillable = [
        'title',
        'description',
        'skills',
        'location',
        'posting_status',
        'job_type',
        'company',
        'user_id',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_jobs', 'jobs_id', 'user_id');
    }
}
