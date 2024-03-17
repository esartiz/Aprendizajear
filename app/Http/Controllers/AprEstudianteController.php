<?php

namespace App\Http\Controllers;

use App\Models\AprEstudiante;
use App\Models\AprScore;
use Illuminate\Http\Request;
use Auth, Session;

class AprEstudianteController extends Controller
{
    public function makeRandNum(){
        $amountOfDigits = 4;
        $numbers = range(0,9);
        shuffle($numbers);
        $digits = "";
        for($i = 0;$i < $amountOfDigits;$i++)
        $digits .= $numbers[$i];
        return $digits;
    }
    public function index()
    {
        $aprEstudiantes = AprEstudiante::where('docente', Auth::user()->id)->get();
        return view('apr-estudiante.index', compact('aprEstudiantes'));
    }
    
    public function create()
    {
        $aprEstudiante = new AprEstudiante();
        return view('apr-estudiante.create', compact('aprEstudiante'));
    }
    
    public function store(Request $request){
        $nNumber = $this->makeRandNum();
        $revision = AprEstudiante::where('codigo',$nNumber);
        if($revision->count() > 0){
            header("Refresh:0");
        }
        $aprEstudiante = AprEstudiante::create(array_merge($request->all(), ['docente' => Auth::user()->id, 'codigo' => $nNumber]));
        return redirect()->route('apr-estudiantes.index')->with('success', 'Estudiante creado con éxito.');
    }
    
    public function show($id)
    {
        $aprEstudiante = AprEstudiante::find($id);
        $juegos = AprScore::where('estudiante', $id)->orderBy('id_juego')->get();
        return view('apr-estudiante.show', compact('aprEstudiante','juegos'));
    }
    
    public function edit($id)
    {
        $aprEstudiante = AprEstudiante::find($id);
        return view('apr-estudiante.edit', compact('aprEstudiante'));
    }
    
    public function update(Request $request, AprEstudiante $aprEstudiante)
    {
        $aprEstudiante->update($request->all());
        return redirect()->back()->with('success', 'Se modificó la información del estudiante');
    }
    
    public function destroy($id)
    {
        $aprEstudiante = AprEstudiante::find($id)->delete();

        return redirect()->route('apr-estudiantes.index')
            ->with('success', 'Se eliminó la información del estudiante');
    }

    public function checkcode(Request $request){
        $buscaEst = AprEstudiante::where('codigo',$request->idLogin);
        if($buscaEst->count() > 0){
            $request->session()->put('player', $buscaEst->first());
            //Busca los puntajes anteriores si existen
            $datosPrevios = AprScore::where('estudiante',$buscaEst->first()->id)->get();
            $datGames = [];
            for ($i=1; $i <=10; $i++) { 
                $dd = $datosPrevios->where('id_juego',$i)->first();
                $datGames[$i] = ($dd ? $dd->pts : '');
            }
            Session::put('games', $datGames);
            return redirect('/jugar/0');
        } else {
            return redirect()->back()->with('success', 'No existe el código, inténtalo de nuevo');
        }
    }

    public function elJuego($id){
        if(Session::get('player')){
            return view('juego.juego'.$id);
        } else {
            return redirect('/')->with('success', 'Para jugar, debes ingresar el código que te da tu docente');
        }
    }

    public function savePoints(Request $request){
        $dataCamb = AprScore::create(
            [
                'estudiante' => Session::get('player')->id, 
                'pts' => $request->pts, 
                'tiempo' => $request->time,
                'id_juego' => $request->gameID
            ]
        );
        $pp =  Session::get('games');
        $pp[$request->gameID] = $request->pts;
        Session::put('games', $pp);
    }
}
