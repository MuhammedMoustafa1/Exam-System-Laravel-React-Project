<?php

namespace App\Policies;

use App\Models\Question;
use App\Models\User;

class QuestionPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->user_type === 'Admin';
    }

    public function view(User $user, Question $question): bool
    {
        return $user->user_type === 'Admin';
    }

    public function create(User $user): bool
    {
        return $user->user_type === 'Admin';
    }

    public function update(User $user, Question $question): bool
    {
        return $user->user_type === 'Admin';
    }

    public function delete(User $user, Question $question): bool
    {
        return $user->user_type === 'Admin';
    }

    public function restore(User $user, Question $question): bool
    {
        return $user->user_type === 'Admin';
    }

    public function forceDelete(User $user, Question $question): bool
    {
        return $user->user_type === 'Admin';
    }
}

