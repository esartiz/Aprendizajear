@extends('layouts.app')

@section('template_title')
    Create Apr Estudiante
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">

                @includeif('partials.errors')

                <div class="card card-default">
                    <div class="card-header">
                        <span class="card-title">Create Apr Estudiante</span>
                    </div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('apr-estudiantes.store') }}"  role="form" enctype="multipart/form-data">
                            @csrf

                            @include('apr-estudiante.form')

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
