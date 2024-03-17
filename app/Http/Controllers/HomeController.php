<?php

use App\Models\AprEstudiante;
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Route, Auth;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('home');
    }
}
