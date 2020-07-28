<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function () {
    return view('app');
})->where('any', '[\/\w\.-]*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
