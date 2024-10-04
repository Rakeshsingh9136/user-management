<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/create', function () {
    return inertia('Create');
});

Route::get('/index', function () {
    return inertia('Index');
});

Route::get('/Edit', function () {
    return inertia('Edit');
});

Route::get('/delete', function () {
    return inertia('DeleteUser');
});





Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);
