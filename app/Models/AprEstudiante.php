<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class AprEstudiante
 *
 * @property $id
 * @property $codigo
 * @property $nombre
 * @property $docente
 * @property $created_at
 * @property $updated_at
 * @property $edad
 *
 * @property AprScore[] $aprScores
 * @property AprUser $aprUser
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class AprEstudiante extends Model
{
    
    static $rules = [
		'codigo' => 'required',
		'nombre' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['codigo','nombre','docente','edad'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function aprScores()
    {
        return $this->hasMany('App\Models\AprScore', 'estudiante', 'id')->orderBy('pts','DESC')->first();
    }

    public function gameScore($idGame)
    {
        return $this->hasOne('App\Models\AprScore', 'estudiante', 'id')->where('id_juego',$idGame)->orderBy('pts','DESC')->first();
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function aprUser()
    {
        return $this->hasOne('App\Models\AprUser', 'id', 'docente');
    }
    

}
