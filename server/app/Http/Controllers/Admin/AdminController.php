<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use RealRashid\SweetAlert\Facades\Alert;

class AdminController extends Controller
{
    public function adminDashboard(){
        return view('admin.dashboard.dashboard');
    }

    public function adminList(){
        $admin = User::select('id','name','email','role','address','phone','provider')
                    ->where('role','admin')
                    ->when(request('search'),function($query){
                        $query->whereAny(['name','email','address','phone','provider'],
                    'like','%'.request('search').'%');
                    })
                    ->orderBy('id','desc')
                    ->paginate(4);
        return view('admin.adminList.adminList',compact('admin'));
    }

    public function adminAddPage(){
        return view('admin.adminList.adminAdd');
    }

    public function adminAdd(Request $request){
        $this->validateAdmin($request);
        $data = $this->adminData($request);
        User::create($data);
        Alert::success('Success', 'Admin Added Successfully');
        return to_route('admin#list');
    }

    public function adminDelete($id){
        User::find($id)->delete();
        Alert::success('Success', 'Admin Deleted Successfully');
        return back();
    }

    public function userList(){
        $user = User::select('id','name','email','role','address','phone','provider')
                    ->where('role','user')
                    ->when(request('search'),function($query){
                        $query->whereAny(['name','email','address','phone','provider'],
                    'like','%'.request('search').'%');
                    })
                    ->orderBy('id','desc')
                    ->paginate(4);
        return view('admin.userList.userList',compact('user'));
    }

    private function validateAdmin($request){
        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required',
        ]);
    }

    private function adminData($request){
        return [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'admin'
        ];
    }
}
