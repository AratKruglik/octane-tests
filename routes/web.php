<?php

use App\Http\Controllers\LoadTestController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::get('/load', [LoadTestController::class, 'load']);

require __DIR__.'/auth.php';
