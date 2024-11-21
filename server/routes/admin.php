<?php


use Illuminate\Support\Facades\Route;

Route::group(['prefix'=>'admin','middleware'=>'admin'],function(){
    // Route::get('/dashboard',AdminController::class,'adminDashboard')->name('admin#dashboard');
});