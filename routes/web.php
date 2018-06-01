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
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'auth', 'middleware' => ['web']], function ()
{
    Route::post('/login', 'Auth\AuthController@login')->name("login");
    Route::post('/logout', 'Auth\AuthController@logout')->name("logout");
    Route::post('/auto', 'Auth\AuthController@auto')->name("auto");
});



Route::group(['prefix' => 'user', 'middleware' => ['web', 'auth','valid.password']], function ()
{
    Route::post('/password/change', 'Client\UserController@changePassword')->name("password_change");
    Route::post('/company/change', 'Client\UserController@changeCompanyName')->name("company_change");
    Route::post('/contact/change', 'Client\UserController@changeContact')->name("contact_update");
    Route::post('/company-details/change', 'Client\UserController@changeCompanyDetails')->name('detail_company_change');


});

Route::group(['prefix' => 'ticket', 'middleware' => ['web', 'auth']], function ()
{
    Route::post('/queues-priorities', 'Client\TicketController@getQueuesPriorities')->name("queues_priorities");
    Route::post('/add', 'Client\TicketController@add')->name("ticket_add");
    Route::post('/list', 'Client\TicketController@getList')->name("ticket_list");
    Route::post('/get/{ticketNumber}', 'Client\TicketController@get')->name("ticket_get");
    Route::get('/attachment/{ticketNumber}/{articleId}/{filename}', 'Client\TicketController@getAttachment')->name("ticket_attachment");

});

