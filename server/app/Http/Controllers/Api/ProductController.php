<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function productList(){
        $product = Product::select('categories.name as category','products.*')
                            ->leftJoin('categories','categories.id','products.category_id')
                            ->orderBy('created_at','desc')
                            ->get();
        return response()->json($product);
    }

    public function productDetail($id){
        $product = Product::select('categories.name as category','products.*')
                            ->leftJoin('categories','categories.id','products.category_id')
                            ->find($id);
        return response()->json($product);
    }

    public function productSearch(Request $request){
        $product = Product::where('products.name','like','%'.$request->name.'%')->get();
        return response()->json($product);
    }


}
