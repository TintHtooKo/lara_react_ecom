<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'short_desc',
        'long_desc',
        'old_price',
        'new_price',
        'category_id',
        'image',
        'stock',
    ];
}
