<!DOCTYPE html>
<html lang="en" class="h-100">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>THK | EShopper Admin </title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('/images/favicon.png')}}">
    <link href="{{asset('/css/style.css')}}" rel="stylesheet">

</head>

<body class="h-100">

    @yield('admin-content')
    @include('sweetalert::alert')



<script src="{{asset('/vendor/global/global.min.js')}}"></script>
<script src="{{asset('/js/quixnav-init.js')}}"></script>

</body>

</html>