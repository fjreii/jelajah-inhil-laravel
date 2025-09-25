<?php

use Illuminate\Support\Facades\Route;

// Rute ini akan menangkap semua request dan menyajikannya dengan view 'app',
// di mana Vue Router akan mengambil alih.
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
