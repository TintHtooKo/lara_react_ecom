<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function () {
    Route::get('',[AdminController::class,'adminDashboard'])->name('admin#dashboard');
    Route::get('list',[AdminController::class,'adminList'])->name('admin#list');
    Route::get('add',[AdminController::class,'adminAddPage'])->name('admin#addpage');
    Route::post('add',[AdminController::class,'adminAdd'])->name('admin#add');
    Route::get('delete/{id}',[AdminController::class,'adminDelete'])->name('admin#delete');

    Route::group(['prefix' => 'category'], function () {
        Route::get('',[CategoryController::class,'category'])->name('admin#category');
        Route::post('',[CategoryController::class,'categoryAdd'])->name('admin#categoryAdd');
        Route::get('delete/{id}',[CategoryController::class,'categoryDelete'])->name('admin#categoryDelete');
    });

    Route::group(['prefix'=>'contact'],function(){
        Route::get('',[ContactController::class,'contact'])->name('admin#contact');
        Route::get('delete/{id}',[ContactController::class,'contactDelete'])->name('admin#contactDelete');
        Route::get('detail/{id}',[ContactController::class,'contactDetail'])->name('admin#contactDetail');
        Route::post('read/{id}',[ContactController::class,'contactRead'])->name('admin#contactRead');
    });
});