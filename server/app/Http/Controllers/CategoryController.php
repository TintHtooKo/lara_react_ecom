<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;

class CategoryController extends Controller
{
    public function category(){
        $category = Category::orderBy('created_at','desc')
                                ->paginate(5);
        return view('admin.category.category',compact('category'));
    }

    public function categoryAdd(Request $request){
        $this->validateCategory($request);
        $data = $this->categoryData($request);
        Category::create($data);
        Alert::success('Success', 'Category Added Successfully');
        return back();
    }

    public function categoryDelete($id){
        Category::find($id)->delete();
        Alert::success('Success', 'Category Deleted Successfully');
        return back();
    }

    private function validateCategory($request){
        $request->validate([
            'name' => 'required',
        ],[
            'name.required' => 'Category name is required'
        ]);
    }

    private function categoryData($request){
        return [
            'name' => $request->name,
        ];
    }
}
