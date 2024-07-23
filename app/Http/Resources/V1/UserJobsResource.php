<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserJobsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'userId' => $this->user_id,
            'jobsId' => $this->jobs_id,
            'resume' => $this->resume,
            'status' => $this->status,
            'message' => $this->message,
            'timeSlots' => $this->timeSlots,
        ];
    }
}
