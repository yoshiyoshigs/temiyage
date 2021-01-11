<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'PostsController@index');

// Route::apiResource('/items', 'ItemController');

Route::get('items', 'ItemController@index');

Route::post('items/store', 'PostsController@store');

Route::get('items/show', 'ItemController@show');

Route::get('items/update', 'ItemController@update');

Route::get('items/destroy', 'ItemController@destroy');




// Route::get('/items', function () {
//     return view('test');
// });

// Route::get('test', 'API\VerController@index');

// Route::get('/ver','API\VerController@index');
