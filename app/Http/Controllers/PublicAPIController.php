<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class PublicAPIController extends Controller
{
    public function products()
    {
        $products = Product::latest()->paginate(16);

        return response()->json($products, 200);
    }
}
