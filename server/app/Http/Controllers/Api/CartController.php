<?php

namespace App\Http\Controllers\Api;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

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

    public function seeCart(){
        $user = Auth::user();
        if(!$user){
            return response()->json(['message' => 'User not authenticated'], 401);
        }
        $cart = Cart::select('carts.*','products.name as product_name','products.new_price as product_price','products.image as product_image',
                        'users.name as user_name','users.email as user_email')
                        ->leftJoin('products','products.id','carts.product_id')
                        ->leftJoin('users','users.id','carts.user_id')
                        ->where('carts.user_id',$user->id)
                        ->get();
        return response()->json($cart);
    }

    public function deleteCart($id){
        $user = Auth::user();
        if(!$user){
            return response()->json(['message' => 'User not authenticated'], 401);
        }
        $cart = Cart::where('user_id', $user->id)->where('id', $id)->delete();
        return response()->json(['message' => 'Product removed from cart successfully'], 200);
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
