<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('user', 'AuthController@update_user');
    Route::resource('category', 'CategoryController');
    Route::resource('product', 'ProductController');
});


Route::get('products', 'PublicAPIController@products');
Route::get('products/{slug}', 'PublicAPIController@product_details');
