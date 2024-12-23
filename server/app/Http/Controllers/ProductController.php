<?php

namespace App\Http\Controllers;

use App\Mail\SendMail;
use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use RealRashid\SweetAlert\Facades\Alert;

class ProductController extends Controller
{
    public function productList($amt = 'default'){
        $product = Product::select('categories.name as category','products.*')
                            ->leftJoin('categories','categories.id','products.category_id')
                            ->when(request('search'),function($query){
                                $query->whereAny(['products.name','categories.name'],
                                'like','%'.request('search').'%');
                            });
        if($amt != 'default'){
            $product = $product->where('stock','<', 5);
        }
        $product = $product->orderBy('created_at','desc')
                            ->paginate(5);
        $totalProduct = Product::count();
        return view('admin.product.product',compact('product','totalProduct'));
    }

    public function productAddPage(){
        $category = Category::all();
        return view('admin.product.productAdd',compact('category'));
    }


    public function productAdd(Request $request){
        $this->validateProduct($request,'create');
        $data = $this->productData($request);
        if($request->hasFile('image')){
            $images = [];
            foreach ($request->file('image') as $image) {
                $filename = uniqid().$image->getClientOriginalName();
                $image->move(public_path().'/product/',$filename);
                $images[] = $filename;
            }
            // If you want to save multiple images as a single string (e.g., JSON)
            $data['image'] = json_encode($images);
            
        }
        $product = Product::create($data);
        $user = User::where('role','user')->get();
        foreach($user as $user){
            Mail::to($user->email)->send(new SendMail($product));
        }
        Alert::success('Success', 'Product Added Successfully');
        return to_route('admin#product');
    }

    public function productDelete($id){
        $product = Product::find($id);
        $images = json_decode($product->image);
        foreach ($images as $image) {
            $imagePath = public_path().'/product/'.$image;
            if(file_exists($imagePath)){
                unlink($imagePath);
            }
        }
        $product->delete();
        Alert::success('Success', 'Product Deleted Successfully');
        return to_route('admin#product');
    }

    public function productDetail($id){
        $product = Product::select('categories.name as category','products.*')
                            ->leftJoin('categories','categories.id','products.category_id')
                            ->find($id);
        // dd($product->toArray());
        return view('admin.product.productDetail',compact('product'));
    }

    private function validateProduct($request,$action){
        $rule = [
            'name' => 'required',
            'newPrice' => 'required',
            'shortDesc' => 'required',
            'longDesc' => 'required',
            'stock' => 'required',
            'category' => 'required',
            'image' => $action == 'create' ? 'required|array' : 'nullable|array',
            'image.*' => 'required|mimes:jpeg,jpg,png,svg,webp|image',
        ];

        $request->validate($rule);
    }

    private function productData($request){
        return [
            'name' => $request->name,
            'new_price' => $request->newPrice,
            'old_price' => $request->oldPrice,
            'short_desc' => $request->shortDesc,
            'long_desc' => $request->longDesc,
            'stock' => $request->stock,
            'category_id' => $request->category,
        ];
    }
}
