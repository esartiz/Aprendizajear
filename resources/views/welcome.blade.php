@extends('layouts.app')

@section('content')
<div class="container">
    @if (Route::has('login'))
        @include('home')
    @else
        
    <div class="row d-flex justify-content-center align-items-center g-2" style="height: 600px">
        <form method="POST" class="col-12 col-md-6 text-center">
            <div class="inicio">¿Tienes un código?</div>
            <input type="number" name="idLogin" id="idLogin"><br>
            <button type="submit" class="btn btn-primary inicio">Entrar</button>
        </form>
        <div class="col-12 col-md-6">
            <b>Aprendizajear</b> es una herramienta pedagógica que consta de <b>10 estrategias didácticas </b>
            basadas en las premisas de la UNESCO desde <b>aprendizaje autorregulado</b> y lo manifestado por las 
            niñas y niños en la investigación realizada en el marco de la Maestría en Educación. <br><br>
            Cada una de las estrategias planteadas permite <b>analizar las habilidades </b>de los niños y niñas 
            desde lo<b> metacognitivo, motivacional y lo comportamental </b>a partir de sus capacidades, 
            conocimientos, autocontrol, supervisión, planificación, experiencias y autoevaluación, 
            cuando el juego es acompañado por un adulto. <br><br>
            Cuando los niños y niñas juegan solos, los resultados de sus respuestas se alojan en una base 
            de datos a la que solo tiene acceso y puede otorgar permisos el administrador, lo que permite 
            ver las respuestas y tiempos de los niños en resolver cada juego.
        </div>
    </div>
    @endif

</div>
@endsection