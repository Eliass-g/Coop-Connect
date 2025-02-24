<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    protected $fillable = [
        'data',
        'recipient_id',
        'unread',
    ];

    protected $casts = [
        'data' => 'array',
    ];

    public $timestamps = true;
}
