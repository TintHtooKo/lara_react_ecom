<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function category(){
        $category = Category::get();
        return response()->json($category);
    }

    public function categorySearch(Request $request){
        $category = Category::select('products.*')
                            ->join('products','products.category_id','categories.id')
                            ->where('categories.id',$request->id)	
                            ->get();
        return response()->json($category);

    }
}
