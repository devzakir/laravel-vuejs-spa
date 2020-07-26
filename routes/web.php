<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function () {
    return view('app');
})->where('any', '[\/\w\.-]*');

// Route::get('/{vue_capture?}', function () {
//     return view('app');
// })->where('vue_capture', '[\/\w\.-]*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
