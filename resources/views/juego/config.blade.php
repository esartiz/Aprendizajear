&{{Session::get('player')->nombre}}
&

@for ($i = 1; $i <= 10; $i++)
    &{{Session::get('games')[$i]}}
@endfor