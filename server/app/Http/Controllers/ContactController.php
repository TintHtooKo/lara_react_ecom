<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;

class ContactController extends Controller
{
    public function contact(){
        $contact = Contact::orderBy('created_at', 'desc')->paginate(5);
        return view('admin.contact.contact',compact('contact'));
    }

    public function contactDelete($id){
        Contact::find($id)->delete();
        Alert::success('Success', 'Contact Deleted Successfully');
        return back();
    }

    public function contactDetail($id){
        $contact = Contact::find($id);
        return view('admin.contact.contactDetail',compact('contact'));
    }

    public function contactRead(Request $request,$id){
        $contact = Contact::find($id);
        $contact->is_read = $request->check;
        $contact->save();
        Alert::success('Success', 'Contact status changed Successfully');
        return to_route('admin#contact');
    }
}
