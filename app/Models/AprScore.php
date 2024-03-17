<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class AprScore
 *
 * @property $id
 * @property $estudiante
 * @property $id_juego
 * @property $pts
 * @property $tiempo
 * @property $created_at
 * @property $updated_at
 *
 * @property AprEstudiante $aprEstudiante
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class AprScore extends Model
{
    
    static $rules = [
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['estudiante','id_juego','pts','tiempo'];

    public function aprEstudiante()
    {
        return $this->hasOne('App\Models\AprEstudiante', 'id', 'estudiante');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\AprEstudiante', 'id', 'estudiante');
    }
    

}
