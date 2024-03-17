@php
    $nombresJuego = [
        "",
        "Memorama",
        "Pedir ayuda es de valientes",
        "Depende de mí",
        "Relaciona frases e imágenes",
        "Crucigrama de la autonomía",
        "Priorizando",
        "Yo Puedo",
        "Frases para pensar",
        "Girando el Dado",
        "Autoinstrucciones"
    ]
@endphp

@extends('layouts.app')

@section('template_title')
    {{ $aprEstudiante->name }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <div class="float-left">
                            <span class="card-title">Interacción de {{ $aprEstudiante->nombre }}</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('apr-estudiantes.index') }}"> Regresar</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>Codigo usado:</strong>
                            {{ $aprEstudiante->codigo }}
                        </div>
                        <div class="form-group">
                            <strong>Nombre:</strong>
                            {{ $aprEstudiante->nombre }}
                        </div>
                        <div class="form-group">
                            <strong>Edad:</strong>
                            {{ $aprEstudiante->edad }}
                        </div>

                        <hr>
                        @if ($juegos->count() == 0)
                        <h4>No se ha recopilado ningún dato aún</h4>
                        @else
                            
                        <h4>Datos obtenidos:</h4>
                        <div class="row">
                        @for ($i = 1; $i <= 10; $i++)
                        <div class="col-md-6" id="curve_chart{{ $i }}" style="height: 500px"></div>
                        @endfor
                        </div>

                        @endif

                    </div>
                </div>
            </div>
        </div>
    </section>

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        @for ($i = 1; $i <= 10; $i++)

        //Check empty data
        @if($juegos->where('id_juego', $i)->count() == 0)
        let emptyData{{$i}} = true;
        @else
        let emptyData{{$i}} = false;
        @endif

        let data{{$i}} = google.visualization.arrayToDataTable([
          ['Fecha', 'Puntaje', 'Tiempo'],
          @foreach ($juegos->where('id_juego', $i) as $ff)
          ['{{date('d/m/y', $ff->update_at)}}',  {{$ff->pts}},      {{$ff->tiempo}}],
          @endforeach
          ]);
        @endfor

        @for ($i = 1; $i <= 10; $i++)
        var options{{$i}} = {
          title: '{{$nombresJuego[$i]}}',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart{{$i}} = new google.visualization.LineChart(document.getElementById('curve_chart{{$i}}'));
        chart{{$i}}.draw(data{{$i}}, options{{$i}});

        if(emptyData{{$i}} == true){
            document.getElementById('curve_chart{{$i}}').style.display = "none"
        }
        
        @endfor

      }
    </script>
@endsection
