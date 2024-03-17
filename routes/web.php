<?php

use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::middleware(['guest'])->group(function () {
    Route::get('/', [App\Http\Controllers\HomeController::class, 'index']);
});
Route::middleware(['auth'])->group(function () {
    Route::get('/', [App\Http\Controllers\AprEstudianteController::class, 'index']);
    Route::resource('/apr-estudiantes', App\Http\Controllers\AprEstudianteController::class);
});

Route::post('/checkcode', [App\Http\Controllers\AprEstudianteController::class, 'checkcode'])->name('checkcode');
Route::get('/jugar/{id}', [App\Http\Controllers\AprEstudianteController::class, 'elJuego'])->name('elJuego');
Route::post('/data-save', [App\Http\Controllers\AprEstudianteController::class, 'savePoints'])->name('savePoints');

Route::get('/data-game', function () {
    return view('juego.config');
});


Route::get('/aprendizaje-autorregulado', function () {
    return view('aprendizaje');
});