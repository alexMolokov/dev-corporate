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

Route::group(['prefix' => 'registration', 'middleware' => ['web']], function ()
{
    Route::post('/allowed', 'Auth\RegisterController@isAllowed')->name("registration_allowed");
    Route::post('/try-email', 'Auth\RegisterController@tryEmail')->name("registration_try_email");
    Route::post('/try-login', 'Auth\RegisterController@tryLogin')->name("registration_try_login");
    Route::post('/register', 'Auth\RegisterController@register')->name("registration_register");
    Route::post('/activate/{code}', 'Auth\RegisterController@activate')->name("registration_activate");
    Route::post('/forget', 'Auth\RegisterController@forget')->name("registration_forget");
    Route::post('/change/password/{code}', 'Auth\RegisterController@changePassword')->name("registration_change_password");
    Route::post('/check/{code}', 'Auth\RegisterController@checkCode')->name("check_code");
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
    Route::match(["get", "post"],'/license/request', 'Client\ServersController@licenseRequest')->name('license_request');
    Route::match(["get", "post"],'/license/download/{licenseId}', 'Client\ServersController@licenseDownload')->name('license_download');
    Route::match(["get", "post"],'/certificate/download/{serverId}', 'Client\ServersController@certificateDownload')->name('certificate_download');
    Route::match(["get", "post"],'/certificate/request', 'Client\ServersController@certificateRequest')->name('certificate_request');
});

Route::group(['prefix' => 'shop', 'middleware' => ['web', 'auth']], function ()
{
    Route::post('/get-product-list', 'Client\ShopController@getProductList')->name('shop_product_list');
    Route::match(["get", "post"],'/buy-server', 'Client\ShopController@buyServer')->name('buy_server');
    Route::match(["get", "post"],'/renew-license', 'Client\ShopController@renewLicense')->name('renew_license');
    Route::match(["get", "post"],'/upgrade-license', 'Client\ShopController@upgradeLicense')->name('upgrade_license');
    Route::match(["get", "post"],'/new-license', 'Client\ShopController@newLicense')->name('new_license');
    Route::match(["get", "post"],'/get-invoice', 'Client\ShopController@getInvoice')->name('get_invoice');
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

    Route::post('/search/{lang}/{edition}/{os}', 'Client\SupportController@search')->
    where('os', 'windows|linux')->
    where('lang', 'ru|en')->
    where('edition', 'standalone|cluster')->
    name('support_search');

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

