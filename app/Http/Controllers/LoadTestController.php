<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;

class LoadTestController extends Controller
{
    public function load()
    {
        $users = User::limit(500)->get();

        return UserResource::collection($users);
    }
}
