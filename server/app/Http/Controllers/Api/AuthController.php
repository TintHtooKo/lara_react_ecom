<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request) {
        $user = User::where('email', $request->email)->first();
        if(!$user){
            return response()->json([
                'error' => 'Your Email is not registered'
            ]);
        }else if($user){
            if(Hash::check($request->password, $user->password)){
                $token = $user->createToken(time())->plainTextToken;
                $cookie = cookie('auth_token', $token, 60 * 24);
                return response()->json([
                    'user' => $user,
                    'token' => $token
                ])->withCookie($cookie);
            }else{
                return response()->json([
                    'error' => 'Your Password is incorrect'
                ]);
            }
        }else{
            return response()->json([
                'user' => null,
                'token' => null
            ]);
        }
    }

    public function logout(Request $request) {
        return response()->json([
            'message' => 'Successfully logged out'
        ])->withCookie(cookie('auth_token', '', -1));
    }
}
