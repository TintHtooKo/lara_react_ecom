<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function contact(Request $request){
        $data = $this->contactData($request);
        $contact = Contact::create($data);
        return response()->json($contact);
    }

    private function contactData($request){
        return [
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
        ];
    }
}
