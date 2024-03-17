@extends('layouts.app')

@section('template_title')
    Apr Score
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">

                            <span id="card_title">
                                {{ __('Apr Score') }}
                            </span>

                             <div class="float-right">
                                <a href="{{ route('apr-scores.create') }}" class="btn btn-primary btn-sm float-right"  data-placement="left">
                                  {{ __('Create New') }}
                                </a>
                              </div>
                        </div>
                    </div>
                    @if ($message = Session::get('success'))
                        <div class="alert alert-success">
                            <p>{{ $message }}</p>
                        </div>
                    @endif

                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead class="thead">
                                    <tr>
                                        <th>No</th>
                                        
										<th>Estudiante</th>
										<th>Id Juego</th>
										<th>Pts</th>
										<th>Tiempo</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($aprScores as $aprScore)
                                        <tr>
                                            <td>{{ ++$i }}</td>
                                            
											<td>{{ $aprScore->estudiante }}</td>
											<td>{{ $aprScore->id_juego }}</td>
											<td>{{ $aprScore->pts }}</td>
											<td>{{ $aprScore->tiempo }}</td>

                                            <td>
                                                <form action="{{ route('apr-scores.destroy',$aprScore->id) }}" method="POST">
                                                    <a class="btn btn-sm btn-primary " href="{{ route('apr-scores.show',$aprScore->id) }}"><i class="fa fa-fw fa-eye"></i> Show</a>
                                                    <a class="btn btn-sm btn-success" href="{{ route('apr-scores.edit',$aprScore->id) }}"><i class="fa fa-fw fa-edit"></i> Edit</a>
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i> Delete</button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {!! $aprScores->links() !!}
            </div>
        </div>
    </div>
@endsection
