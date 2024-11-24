<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function () {
    Route::get('',[AdminController::class,'adminDashboard'])->name('admin#dashboard');
    Route::get('list',[AdminController::class,'adminList'])->name('admin#list');
    Route::get('add',[AdminController::class,'adminAddPage'])->name('admin#addpage');
    Route::post('add',[AdminController::class,'adminAdd'])->name('admin#add');
    Route::get('delete/{id}',[AdminController::class,'adminDelete'])->name('admin#delete');
});