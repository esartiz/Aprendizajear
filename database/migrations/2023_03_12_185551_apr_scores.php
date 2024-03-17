<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AprScores extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apr_scores', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('estudiante')->nullable();
            $table->smallInteger('id_juego')->nullable()->default(5);
            $table->integer('pts')->unsigned()->nullable()->default(12);
            $table->integer('tiempo')->unsigned()->nullable()->default(12);
            $table->timestamps();

            $table->foreign('estudiante')->references('id')->on('apr_estudiantes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
