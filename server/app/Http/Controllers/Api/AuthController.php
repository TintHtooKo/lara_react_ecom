<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request) {
        $user = User::where('email', $request->email)->first();
        if(!$user){
            return response()->json([
                'error' => 'Your Email is not registered'
            ],400);
        }else if($user){
            if(Hash::check($request->password, $user->password)){
                $token = $user->createToken(time())->plainTextToken;
                $cookie = cookie('auth_token', $token, 60 * 24);
                return response()->json([
                    'user' => $user,
                    'token' => $token
                ],200)->withCookie($cookie);
            }else{
                return response()->json([
                    'error' => 'Your Password is incorrect'
                ],400);
            }
        }else{
            return response()->json([
                'user' => null,
                'token' => null
            ]);
        }
    }

    public function register(Request $request) {
        $user = User::where('email', $request->email)->first();
        if($user){
            return response()->json([
                'error'=>'Your Email is already registered'
            ],400);
        }else{
            $data = $this->userData($request);
            $user = User::create($data);
            $token = $user->createToken(time())->plainTextToken;
            $cookie = cookie('auth_token', $token, 60 * 24);
            return response()->json([
                'user' => $user,
                'token' => $token
            ],200)->withCookie($cookie);
        }
    }

    public function logout(Request $request) {
        return response()->json([
            'message' => 'Successfully logged out'
        ],200)->withCookie(cookie('auth_token', '', -1));
    }


    private function userData($request){
        return [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'user'
        ];
    }
}
