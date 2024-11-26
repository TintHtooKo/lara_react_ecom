<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::get('/category',[CategoryController::class,'category']);

Route::post('/contact/create',[ContactController::class,'contact']);

Route::post('/user/login',[AuthController::class,'login']);
Route::post('/user/logout',[AuthController::class,'logout']);
