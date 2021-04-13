<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class APIController extends Controller
{
    public function products()
    {
        $products = Product::latest()->paginate(12);

        return response()->json($products, 200);
    }
}
