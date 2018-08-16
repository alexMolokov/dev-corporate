<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="">
        <link rel="stylesheet" href="css/app.css" type="text/css">
        <link rel="stylesheet" href="css/page-registration.css" type="text/css">
        <link rel="stylesheet" href="css/page-user.css" type="text/css">
        <title>{{ config('app.name') }}</title>
    </head>
    <body>
        <div id="app"><app logo="{{ env('APP_LOGO_PATH') }}" root-site="{{ env('APP_ROOT_SITE_URI') }}"/></div>
        <script src="/js/app.js"></script>
    </body>
</html>
