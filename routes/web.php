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

Route::group(['prefix' => 'servers', 'middleware' => ['web', 'auth']], function ()
{
    Route::match(["get", "post"],'/get-trial', 'Client\ServersController@getTrial')->name('get_trial');
    Route::match(["get", "post"],'/get-servers', 'Client\ServersController@getServers')->name('get_servers');
    Route::match(["get", "post"],'/license/request', 'Client\ServersController@licenseRequest')->name('licence_request');
    Route::match(["get", "post"],'/license/download/:license', 'Client\ServersController@licenseDownload')->name('licence_download');
    Route::match(["get", "post"],'/certificate/download', 'Client\ServersController@certificateDownload')->name('certificate_download');
    Route::match(["get", "post"],'/certificate/request', 'Client\ServersController@certificateRequest')->name('certificate_request');
});

Route::group(['prefix' => 'shop', 'middleware' => ['web', 'auth']], function ()
{
    Route::post('/get-product-list', 'Client\ShopController@getProductList')->name('shop_product_list');
});


Route::group(['prefix' => 'download','middleware' => ['web', 'auth']],function ()
{
    Route::get('/{os}/{edition}', 'Client\DownloadServerController@download')->
    name('download_server')->
    where('os', 'windows|linux')->
    where('edition', 'standalone|cluster');
});

Route::group(['prefix' => 'support','middleware' => ['web', 'auth']],function ()
{
    Route::post('/config', 'Client\SupportController@getConfig')->
    name('support_config');

    Route::post('/{lang}/{edition}/{os}/file', 'Client\SupportController@getFile')->
    where('os', 'windows|linux')->
    where('lang', 'ru|en')->
    where('edition', 'standalone|cluster')->
    name('get_support_catalog');

    Route::post('/{lang}/{edition}/{os}/catalog', 'Client\SupportController@getCatalog')->
    where('os', 'windows|linux')->
    where('lang', 'ru|en')->
    where('edition', 'standalone|cluster')->
    name('get_support_catalog');

    Route::post('/{lang}/{edition}/{os}/body/{id}', 'Client\SupportController@getDocument')->
    where('id', '[0-9]+')->
    where('lang', 'ru|en')->
    where('os', 'windows|linux')->
    where('edition', 'standalone|cluster')->
    name('get_support_document');
});

Route::group(['prefix' => 'ticket', 'middleware' => ['web', 'auth']], function ()
{
    Route::post('/queues-priorities', 'Client\TicketController@getQueuesPriorities')->name("queues_priorities");
    Route::post('/add', 'Client\TicketController@add')->name("ticket_add");
    Route::post('/list', 'Client\TicketController@getList')->name("ticket_list");
    Route::post('/get/{ticketNumber}', 'Client\TicketController@get')->name("ticket_get");
    Route::get('/attachment/{ticketNumber}/{articleId}/{filename}', 'Client\TicketController@getAttachment')->name("ticket_attachment");
    Route::post('/article/add', 'Client\TicketController@addArticle')->name("ticket_add_article");
});

