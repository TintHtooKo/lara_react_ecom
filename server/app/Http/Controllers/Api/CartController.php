<?php

namespace App\Http\Controllers\Api;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class CartController extends Controller
{
    public function addCart(Request $request){
        $this->validateCart($request);
        $cart = Cart::updateOrCreate(
            ['user_id' => $request->user_id, 'product_id' => $request->product_id],
            ['quantity' => DB::raw('quantity + ' . $request->quantity)]
        );
    
        return response()->json(['message' => 'Product added to cart successfully'], 200);
    }

    public function getCartCount(Request $request){
        if (!$request->user()) {
            return response()->json(['message' => 'User not authenticated'], 401); 
        }
        $user = $request->user(); 
        $cartCount = Cart::where('user_id', $user->id)->sum('quantity');    
        return response()->json(['count' => $cartCount]);
}


    private function validateCart($request){
        $rule = [
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ];
        $request->validate($rule);
    }


}
