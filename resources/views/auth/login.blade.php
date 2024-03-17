@extends('layouts.app')

@section('content')
<div class="container">

    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif

    <div class="row d-flex justify-content-center align-items-center g-2">
        <form method="POST" action="{{ route('checkcode')}}" class="col-12 col-md-6 text-center">
            @csrf
            <div class="inicio">¿Tienes un código?</div>
            <input type="number" name="idLogin" id="idLogin"><br>
            <br>
            @for ($i = 0; $i <= 9; $i++)
                <img src="/images/tp_{{$i}}.jpg" width="100" onclick="addData({{$i}})">
            @endfor
            <br>
            <button type="submit" class="btn btn-primary inicio">Entrar</button>
        </form>
    </div>

    <div class="row row d-flex justify-content-center align-items-center g-2" style="min-height: 600px">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">¿Estás registrado como Docente?</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">Correo Electrónico</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">Contraseña</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        Recordarme
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    INGRESAR
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        ¿Olvidó su contraseña?
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-6">
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
</div>
@endsection
