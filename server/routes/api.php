<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return response()->json([
        'user' => $request->user()
    ]);
})->middleware('auth:sanctum');


Route::get('/category',[CategoryController::class,'category']);
Route::post('/category/search',[CategoryController::class,'categorySearch']);

Route::post('/contact/create',[ContactController::class,'contact']);

Route::post('/user/register',[AuthController::class,'register']);
Route::post('/user/login',[AuthController::class,'login']);
Route::post('/user/logout',[AuthController::class,'logout']);


Route::get('/product',[ProductController::class,'productList']);
Route::get('/product/detail/{id}',[ProductController::class,'productDetail']);
Route::post('/product/search',[ProductController::class,'productSearch']);

Route::post('/cart',[CartController::class,'addCart']);
Route::middleware('auth:sanctum')->get('/cart/count', [CartController::class, 'getCartCount']);

