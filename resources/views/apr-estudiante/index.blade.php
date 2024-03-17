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
    Apr Estudiante
@endsection

@section('content')
    <div class="container-fluid">

        @if ($message = Session::get('success'))
            <div class="alert alert-success">
                <p>{{ $message }}</p>
            </div>
        @endif
        
        <div class="row">
            <div class="col-sm-8">
                <div class="card">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">

                            <span id="card_title">
                                Estudiantes
                            </span>

                             <div class="float-right">
                                
                              </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead class="thead">
                                    <tr>
                                        <th>No</th>
                                        
										<th>Codigo</th>
										<th>Nombre</th>
										<th>Edad</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($aprEstudiantes as $aprEstudiante)
                                        <tr>
                                            <td>{{ $loop->iteration }}</td>
                                            
											<td>{{ $aprEstudiante->codigo }}</td>
											<td>{{ $aprEstudiante->nombre }}</td>
											<td>{{ $aprEstudiante->edad }}</td>
                                            <td>
                                                <form action="{{ route('apr-estudiantes.destroy',$aprEstudiante->id) }}" method="POST">
                                                    <a class="btn btn-sm btn-primary " href="{{ route('apr-estudiantes.show',$aprEstudiante->id) }}"><i class="fa fa-fw fa-eye"></i> Ver avance</a>
                                                    <a class="btn btn-sm btn-success" href="{{ route('apr-estudiantes.edit',$aprEstudiante->id) }}"><i class="fa fa-fw fa-edit"></i> Editar información</a>
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i> Eliminar</button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="col-md-12">

                    @includeif('partials.errors')
    
                    <div class="card card-default">
                        <div class="card-header">
                            <span class="card-title">Vincular Estudiante</span>
                        </div>
                        <div class="card-body">
                            <form method="POST" action="{{ route('apr-estudiantes.store') }}"  role="form" enctype="multipart/form-data">
                                @csrf
    
                                <div class="box box-info padding-1">
                                    <div class="box-body">
                                        
                                        <div class="form-group">
                                            {{ Form::label('nombre') }}
                                            {{ Form::text('nombre', '', ['class' => 'form-control' . ($errors->has('nombre') ? ' is-invalid' : ''), 'placeholder' => 'Nombre']) }}
                                            {!! $errors->first('nombre', '<div class="invalid-feedback">:message</div>') !!}
                                        </div>
                                        <div class="form-group">
                                            {{ Form::label('edad') }}
                                            {{ Form::text('edad', '', ['class' => 'form-control' . ($errors->has('edad') ? ' is-invalid' : ''), 'placeholder' => 'Edad']) }}
                                            {!! $errors->first('edad', '<div class="invalid-feedback">:message</div>') !!}
                                        </div>
                                
                                    </div>
                                    <div class="box-footer mt20">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
    
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            @if ($aprEstudiantes->count() > 0)
            <div class="row">
                @for ($i = 1; $i <= 10; $i++)
                <div class="col-md-6" id="curve_chart{{ $i }}" style="height: 500px"></div>
                @endfor
            </div>
            @endif
           

        </div>
    </div>


    
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        @for ($i = 1; $i <= 10; $i++)
        let data{{$i}} = google.visualization.arrayToDataTable([
          ['Estudiante', 'Puntaje', 'Tiempo'],
          @foreach ($aprEstudiantes as $ff)
          @if ($ff->gameScore($i) == NULL)
          ['{{$ff->nombre}}', 0,0],
          @else
          ['{{$ff->nombre}}', {{ $ff->gameScore($i)->pts }}, {{$ff->gameScore($i)->tiempo}}],
          @endif
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
        @endfor

      }
    </script>

@endsection