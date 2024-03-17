<?php

namespace App\Http\Controllers;

use App\Models\AprScore;
use Illuminate\Http\Request;

/**
 * Class AprScoreController
 * @package App\Http\Controllers
 */
class AprScoreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $aprScores = AprScore::paginate();

        return view('apr-score.index', compact('aprScores'))
            ->with('i', (request()->input('page', 1) - 1) * $aprScores->perPage());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $aprScore = new AprScore();
        return view('apr-score.create', compact('aprScore'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(AprScore::$rules);

        $aprScore = AprScore::create($request->all());

        return redirect()->route('apr-scores.index')
            ->with('success', 'AprScore created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $aprScore = AprScore::find($id);

        return view('apr-score.show', compact('aprScore'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $aprScore = AprScore::find($id);

        return view('apr-score.edit', compact('aprScore'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  AprScore $aprScore
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AprScore $aprScore)
    {
        request()->validate(AprScore::$rules);

        $aprScore->update($request->all());

        return redirect()->route('apr-scores.index')
            ->with('success', 'AprScore updated successfully');
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($id)
    {
        $aprScore = AprScore::find($id)->delete();

        return redirect()->route('apr-scores.index')
            ->with('success', 'AprScore deleted successfully');
    }
}
