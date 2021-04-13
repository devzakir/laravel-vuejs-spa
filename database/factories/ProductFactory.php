<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(Product::class, function (Faker $faker) {
    $title = $this->faker->sentence(8);
    $slug = Str::slug($title);
    $number = 32;

    return [
        'title' => $title,
        'slug' => $slug,
        'price' => rand(100, 300),
        'image' => 'https://placeimg.com/640/480/' . $number,
        'description' => $this->faker->text(300),
    ];
});
