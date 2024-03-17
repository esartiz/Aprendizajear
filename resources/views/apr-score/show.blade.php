@extends('layouts.app')

@section('template_title')
    {{ $aprScore->name ?? 'Show Apr Score' }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">Show Apr Score</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('apr-scores.index') }}"> Back</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>Estudiante:</strong>
                            {{ $aprScore->estudiante }}
                        </div>
                        <div class="form-group">
                            <strong>Id Juego:</strong>
                            {{ $aprScore->id_juego }}
                        </div>
                        <div class="form-group">
                            <strong>Pts:</strong>
                            {{ $aprScore->pts }}
                        </div>
                        <div class="form-group">
                            <strong>Tiempo:</strong>
                            {{ $aprScore->tiempo }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
