<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreJobsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required'],
            'description' => ['required'],
            'skills' => ['required'],
            'location' => ['required'],
<<<<<<< HEAD
            'postingStatus' => ['required', Rule::in(['open', 'closed'])],
            'jobType' => ['required', Rule::in(['full-time', 'part-time', 'contract', 'remote'])],
            'company' => ['required']
=======
            'postingStatus' => ['required', Rule::in(['Open', 'Closed'])],
            'jobType' => ['required'],
            'company' => ['required'],
            'userId' => ['required']
>>>>>>> 0541389 (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge(array_filter([
            'posting_status' => $this->postingStatus,
            'job_type' => $this->jobType
        ]));
    }
}
