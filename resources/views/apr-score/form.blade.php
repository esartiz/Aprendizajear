<div class="box box-info padding-1">
    <div class="box-body">
        
        <div class="form-group">
            {{ Form::label('estudiante') }}
            {{ Form::text('estudiante', $aprScore->estudiante, ['class' => 'form-control' . ($errors->has('estudiante') ? ' is-invalid' : ''), 'placeholder' => 'Estudiante']) }}
            {!! $errors->first('estudiante', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('id_juego') }}
            {{ Form::text('id_juego', $aprScore->id_juego, ['class' => 'form-control' . ($errors->has('id_juego') ? ' is-invalid' : ''), 'placeholder' => 'Id Juego']) }}
            {!! $errors->first('id_juego', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('pts') }}
            {{ Form::text('pts', $aprScore->pts, ['class' => 'form-control' . ($errors->has('pts') ? ' is-invalid' : ''), 'placeholder' => 'Pts']) }}
            {!! $errors->first('pts', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('tiempo') }}
            {{ Form::text('tiempo', $aprScore->tiempo, ['class' => 'form-control' . ($errors->has('tiempo') ? ' is-invalid' : ''), 'placeholder' => 'Tiempo']) }}
            {!! $errors->first('tiempo', '<div class="invalid-feedback">:message</div>') !!}
        </div>

    </div>
    <div class="box-footer mt20">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>