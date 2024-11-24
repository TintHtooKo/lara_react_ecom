<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use RealRashid\SweetAlert\Facades\Alert;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(!Auth::check()){
            return back();
        }
        if(Auth::user()){
            if(Auth::user()->role == 'admin' || Auth::user()->role == 'superadmin'){
                if($request->route()->getName() === 'login' || $request->route()->getName() === 'register'){
                    return back();
                }
                return $next($request);
            }
            Alert::warning('Error', 'You do not have permission to access this page');
            return back();
        }
    }
}
