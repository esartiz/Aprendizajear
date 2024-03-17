(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.temporizadorGiro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AhIgZIAWgWIAyAzIAzgyIAWAWIhJBIg");
	this.shape.setTransform(37.575,0.1875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B2E8E8").ss(3,1,1).p("AGGAAQAACihyByQhyByiiAAQihAAhyhyQhyhyAAiiQAAihByhyQByhyChAAQCiAAByByQByByAAChg");
	this.shape_1.setTransform(39,39);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.temporizadorGiro, new cjs.Rectangle(-1.5,-4.5,81,84), null);


(lib.Resultado = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {gana:9,vacio:43,gameOver:49};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(43).call(this.frame_43).wait(22));

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3333").s().p("AhFDiQgTgTAAgbQAAgbATgUQATgTAbAAQAZAAATATQAUAUAAAbQAAAbgUATQgTATgZAAQgbAAgTgTgAhCBQQAJiMAyi4QA0AFAsAQQg1CmgICSQgzgIgrgBg");
	this.shape.setTransform(756.825,325.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3333").s().p("AgrDDQhOgRgrhGQgegxAAg3QAAgVAGgYQARhRBFgtQAwggA2AAQAVAAAXAFQBOASArBGQAeAwAAA2QAAAXgFAXQgSBRhEAtQgyAgg2AAQgVAAgWgFgAg7hdQgmAZgLAuIgCAaQAAAfAQAbQAYAmArALIAZACQAdAAAbgSQAmgaAKgtIAEgaQAAgegRgcQgYgmgsgKIgWgDQgfAAgbASg");
	this.shape_1.setTransform(725.9,327.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC3333").s().p("AjEALQAAh3ANhfIBkAFQgMBYAAA7IAAAJIAVAAQBGAABHgLQgBhGAEhjQAggDAiAAIAcAAIgFCdIAhgDIAFBcIgnAIIAAAIQAAAuAIBYIheAOQgGglAAhCIABgoQhPAOhVAAIgBAZQABA0AIBQQg4ALgrADQgIh1AAhjg");
	this.shape_2.setTransform(684.25,327.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3333").s().p("AgTDfQgYgDgYgKQhVgggkhUQgTgtAAgsIACgfQAEgaAKgZQAghXBUgnQAtgVAtAAIAeACQAYADAYAJQBOAfAlBKIhXA0QgUgvgvgSIgagHIgQgBQgZAAgaANQguAWgTAxQgGAOgCAPIgBARQAAAZAKAYQAVAvAvASQAMAFAOACIAPABQAaAAAZgMQAggPATgcIBWA2QgiAzg7AcQguAVguAAg");
	this.shape_3.setTransform(641.275,326.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC3333").s().p("AhyC9QgPgZAAgiIAAhSIgeAFIAAhaIAigFIAAgvQAAiJCZAAIADAAQBFAAA8AJQAAAigPA7QgvgIg3gBIgRAAQg6AAAAAkIAAAyIAogBQAkAAAiADIABAaQgBAlgDAhQgmgGhIAAIAABVIA2ADQAnAABRgLIAJBgQhPAJhLAAQhWAAgWgmg");
	this.shape_4.setTransform(601.95,326.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC3333").s().p("AjEALQAAh3AMhfIBlAFQgMBYAAA7IAAAJIAVAAQBFAABHgLQAAhGAEhjQAggDAiAAIAcAAIgFCdIAggDIAGBcIgnAIIAAAIQAAAuAIBYIheAOQgGglAAhCIAAgoQhOAOhVAAIAAAZQgBA0AJBQQg4ALgqADQgJh1AAhjg");
	this.shape_5.setTransform(563.8,327.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC3333").s().p("Ag9B0IhgiGIgGAQIgFE1IgLAAIiqgGQARh+AGl2QAchxBVAAIARAAQBNAACeEVQBbCHAAAKIAGAAQAijmAAjnQADgoANAAIBPAAIBVAGIAAAGQgtKHgRAAQAABmh2AWQheAAiJkUg");
	this.shape_6.setTransform(734.825,251.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC3333").s().p("AjdFsQgcgwAAhBIAAieIg7AIIAAiuIBBgIIAAhaQAAkJEqAAIAFAAQCDAAB2ARQAABCgcBzQhdgRhpAAIgiAAQhwAAAABDIAABgIBNgCQBGAABCAGIABAzQABBHgHBBQhKgMiLAAIAACkIBqAFQBKAACdgWIAQC6QiYARiRAAQimAAgrhJg");
	this.shape_7.setTransform(664.3,248.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC3333").s().p("AiGBjIAAhDQAGjCAXgrQAoAACGAcQgaB7AADHQAACTAOC+IioAGQgXjZAAisgAhNkOQglglAAg0QAAg1AlglQAkgmAzAAQA0AAAkAmQAlAlAAA1QAAA0glAlQgkAlg0AAQgzAAgkglg");
	this.shape_8.setTransform(615.225,233.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC3333").s().p("AmBHEQgGg5AAiHIApAEIACj2IgDk2QAAijDQAAIAoAAQEpAABgCYQAYA4gBAoIAAALQAABThPBLQCeBGAACKQAADElCBFQiQAViiAAgAirEPQE5AAAlhWIAFgVQAAg+jBAAIgPAAIiTAAgAilkNIAAC1IAFAAQCBAABTgkQA+gbAAgnQAAgNgQgkQgSgji9AAIgcAAg");
	this.shape_9.setTransform(557.7,249.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOBeIgZgbIAAA+IgJAAQgiAAgPgGQACgRAAhhQAAhhAOgXQAbgcAnAAIAQAAQA/AAAdA9QAFASAAANIAAAHQAAA/hCAfQASASAuAXQgWAigNAKQgkgOgngfgAgjg/QgDASgBAeIAAAHQAKAMAWAAIAFAAQAcgBAMgZQADgMAAgJIAAgEQABgdgngGIgMAAQgaAAAAATg");
	this.shape_10.setTransform(768.6,379.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhwB3IAlhrQAlhuAXgbQAKgJALAAIAIAAQAkAAAhCHIARAAIANA6IgRACIAKA1IAAAFIg4AJIgLhBIhLADQgJAggOAlQgwgLgFgFgAgPAIIACAAIAogCIAAgCQgFgVgNgiIgBAAg");
	this.shape_11.setTransform(746.075,378.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDCEQhOAAgShVQAcgCAggFQAEAhAkABIAAAAQAkAAAFgeIAAgEQAAgXgwgLQg0gLgMgRQgNgRAAgVIABgLQAHguAvgLQAPgDAQAAQAlAAAvAPIgWA2QgRgKgigCIgLgBQgWAAgFAJIAAACQAAAKBAAUQA8ARAAAyQAAAJgCAKQgQBOhSACg");
	this.shape_12.setTransform(723.325,379.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhFByQgIgPAAgVIAAgxIgTACIAAg1IAUgDIAAgcQAAhTBdAAIACAAQApAAAkAFQABAVgJAkQgdgGghABIgLAAQgiAAAAAVIAAAdIAXAAQAXAAAUACIABAQQgBAVgBAVQgYgEgrAAIAAAzIAhACQAXAAAxgHIAGA6QgwAGgtAAQg0AAgOgXg");
	this.shape_13.setTransform(702.2,379.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOBeIgYgbIAAA+IgJAAQgjAAgPgGQACgRAAhhQAAhhAOgXQAagcAnAAIARAAQA/AAAdA9QAFASAAANIAAAHQAAA/hCAfQASASAvAXQgYAigMAKQgjgOgogfgAgjg/QgDASAAAeIAAAHQAJAMAWAAIAGAAQAbgBAMgZQAEgMAAgJIAAgEQAAgdgogGIgKAAQgbAAAAATg");
	this.shape_14.setTransform(681.25,379.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhCBsQgjgbgJgnQgDgHgBgaIAAgHQAAgyApgrQAtgsA4AAQASAAATAFQAAAJgTAyQgFgEgKAAQgNAAgTAFQgmAJgNAvQgEAOAAAMQAAAcAVARQAaAVAgAAIALgBQASAAAEg4IgwAAIAAgPQAAgUACgWIA3AAQAlAAAIAVQAFAMAAAVQAAANgCARQgGAsgRAWQgSAWgsAAQg7AAgjgcg");
	this.shape_15.setTransform(658.5,379.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhEByQgJgPAAgVIAAgxIgSACIAAg1IAUgDIAAgcQAAhTBcAAIACAAQApAAAkAFQAAAVgIAkQgdgGghABIgLAAQgiAAAAAVIAAAdIAXAAQAXAAAUACIABAQQAAAVgCAVQgYgEgrAAIAAAzIAhACQAXAAAygHIAEA6QgvAGgtAAQg0AAgNgXg");
	this.shape_16.setTransform(635.85,379.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOBeIgZgbIAAA+IgJAAQgiAAgPgGQACgRAAhhQAAhhAOgXQAagcAoAAIAQAAQA/AAAdA9QAFASAAANIAAAHQAAA/hCAfQASASAuAXQgWAigNAKQgkgOgngfgAgjg/QgEASAAAeIAAAHQALAMAVAAIAFAAQAcgBAMgZQAEgMgBgJIAAgEQAAgdgngGIgKAAQgbAAAAATg");
	this.shape_17.setTransform(614.9,379.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC3333").s().p("AwIDeQg+ABgsgtQgsgsAAg9IAAiRQAAg9AsgsQAsgtA+ABMAgRAAAQA+gBAsAtQAsAsAAA9IAACRQAAA9gsAsQgsAtg+gBg");
	this.shape_18.setTransform(690.85,378.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC3333").s().p("AgiCcQg/gOgig3QgYgoAAgrQAAgSAEgTQAOhBA3gjQAngaArAAQARAAASAEQA/AOAiA4QAYAnAAAsQAAARgEATQgOBBg3AjQgnAagsAAQgQAAgSgEgAgvhKQgfAUgIAlIgCAUQAAAZANAVQATAgAjAHIATADQAXAAAWgPQAfgUAIglIACgUQAAgYgNgXQgTgfgjgIIgSgCQgYAAgWAPg");
	this.shape_19.setTransform(795.325,295.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC3333").s().p("AiSCJIgChkQgChXgKhLQAAg2BxAAIAHAAQCFAAA4B0QAMAaAAAjIAAACQAABjhNAoQhNAoh4AAQgcAAgFgqgAhNhlQAIB5ABBXQCagRAAhfQAAhBhWgdQgTgEgVgBIgOAAg");
	this.shape_20.setTransform(761.675,295.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC3333").s().p("AiVCfIAyiPQAxiSAeglQANgMAPAAIALAAQAvABAtCzIAVAAQAJAfAJAvIgXACIAOBHIAAAHIhLAMIgOhYIhkAFQgMAqgSAyQhAgPgHgGgAgUALIADAAIA1gCIAAgDQgHgdgRgtIgCAAg");
	this.shape_21.setTransform(728.675,293.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC3333").s().p("AgMClIgjgCQAQh6AAhmIAAgYQgwAFgtAHIgFAAIgDgMIAAgsIgCgQQAJgOD7gFIAJACIAABHQAAAEgFAAIhWAAIAAAOQAABHgNCng");
	this.shape_22.setTransform(698.25,292.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC3333").s().p("AhbCXQgMgTAAgcIAAhBIgYADIAAhIIAbgDIAAgmQAAhuB7AAIACAAQA3AAAwAHQAAAcgLAvQgngHgsAAIgOAAQgtAAAAAcIAAAoIAfgBQAdAAAcADIAAAVQAAAdgDAbQgfgFg5AAIAABEIAsADQAfAABBgKIAHBOQg/AHg8AAQhFAAgSgfg");
	this.shape_23.setTransform(669.925,294.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC3333").s().p("AgqCsQg5gIAAg8IAAgqQAAhxAFhvQApgHAigCQgHBJAAByIAABMQBSgUAeAAIAOAAIAABKIgKAAQgcAAhmAag");
	this.shape_24.setTransform(645.175,295.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC3333").s().p("AiBCrIACiWQAAiBATgeQAjgmA0AAIAWAAQBUAAAmBQQAHAZAAASIAAAJQAABQhPArQgYAKgiACQgXgCgWgFIAABbIgdACQgaAAgWgGgAgvhLQgFAXAAApIAAAJQAOAQAcAAIAHAAQAlAAARgjQAEgQAAgMIAAgEQAAgogzgIIgQAAQgjAAAAAag");
	this.shape_25.setTransform(620.175,293.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC3333").s().p("ABdCiIgDgJIgCiqIgxBRQgVAQgRAAQgnAAgehRQgMgRAAgFQgEABAAAFIgHCxIgDAAIhJgFQAKiwAJhWQAKg2AqAAQAkAAAzB2QAEABAGAWQArhHAggvQAWgUAVgBQAqAJAAAyIAABoQAABaAHA7Qg0AJgVAAg");
	this.shape_26.setTransform(588.375,293.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC3333").s().p("AgiCcQg/gOgig3QgYgoAAgrQAAgSAEgTQAOhBA3gjQAngaArAAQARAAASAEQA/AOAiA4QAYAnAAAsQAAARgEATQgOBBg3AjQgnAagsAAQgQAAgSgEgAgvhKQgfAUgIAlIgCAUQAAAZANAVQATAgAjAHIATADQAXAAAWgPQAfgUAIglIACgUQAAgYgNgXQgTgfgjgIIgSgCQgYAAgWAPg");
	this.shape_27.setTransform(553.975,295.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC3333").s().p("AgPCzQgUgDgSgHQhFgagdhEQgPgjAAgkIACgZQADgUAIgUQAahHBDgfQAkgRAkAAIAYADQATACATAIQA/AYAeA7IhGAqQgQglgmgPIgVgGIgNgBQgTABgVAJQglASgPAoQgEALgCAMIgBANQAAAUAIATQAQAmAmAPQAKAEAKACIANABQAUAAAVgKQAZgNAQgWIBEArQgbApgvAXQglARglAAg");
	this.shape_28.setTransform(519.7,294.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC3333").s().p("AhDEvQh5gchDhrQgvhMAAhVQAAgjAIglQAch9BqhFQBMgyBUAAQAhAAAjAHQB5AcBDBsQAvBMAABUQAAAjgIAlQgcB9hqBFQhMAyhVAAQggAAgjgHgAhdiRQg7AogPBGIgFApQAAAvAaAqQAkA9BEAPIAlAEQAuAAArgcQA7gnAQhHIAEgoQAAgvgZgrQglg9hEgPIgkgEQgvAAgrAcg");
	this.shape_29.setTransform(771.275,238.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC3333").s().p("AglDxIhAhEIAACfIgXAAQhaAAglgOQAEgtAAj6QAAj7Alg6QBDhIBlAAIAsAAQCjAABJCbQAOAwAAAhIAAASQAACiiqBRQAuAwB4A6Qg7BYggAaQhbgkhnhSgAhciiQgJArAABPIAAASQAaAfA3AAIAOAAQBJAAAfhDQAJggAAgXIAAgJQAAhLhkgQIgfAAQhEAAAAAzg");
	this.shape_30.setTransform(711.925,236.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC3333").s().p("AiqEXQhchHgWhkQgJgRgChEIAAgTQAAiBBphvQB1hxCRAAQAvAAAxAOQAAAXgyB/QgMgJgaAAQggAAg1ANQhgAXghB6QgLAkAAAgQAABIA2ArQBBA3BUAAIAcgCQAxAAAKiSIh7AAIAAglQABg2AEg6ICNAAQBgAAATA3QAMAhABA0QgBAkgFAsQgNBwgtA4QguA5hyAAQiYAAhahHg");
	this.shape_31.setTransform(653.35,236.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC3333").s().p("AhDEvQh5gchDhrQgvhMAAhVQAAgjAIglQAch9BqhFQBMgyBUAAQAhAAAjAHQB5AcBDBsQAvBMAABUQAAAjgIAlQgcB9hqBFQhMAyhVAAQggAAgjgHgAhdiRQg7AogPBGIgFApQAAAvAaAqQAkA9BEAPIAlAEQAuAAArgcQA7gnAQhHIAEgoQAAgvgZgrQglg9hEgPIgkgEQgvAAgrAcg");
	this.shape_32.setTransform(589.625,238.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC3333").s().p("AhTFOQhtgRAAhzIAAhSQAAjcAJjXQBPgOBCgEQgNCPAADbIAACWQCggoA5AAIAbAAIAACRIgSAAQg3AAjHAyg");
	this.shape_33.setTransform(536.225,239.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[]},34).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},6).wait(16));

	// Capa_1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C3E8D9").s().p("AnMWJQgdgtAHhNQAHhMAlg0QApg7A7AHQA2AHAXAwQAWArgJA/QgIA8geAxQgiA0gsANQgRAFgPAAQgpAAgXgmgAs5RTQgbgXAFgrQAFglAagjQAbgjAdgGQAhgHATAkQAOAZgHAkQgFAigUAcQgVAegZAIQgJAEgJAAQgSAAgRgPgABVQhQgagpAGhGQAHhFAhgwQAmg1A1AHQAxAGAVAsQATAngHA4QgHA3gcAsQgeAwgpAMQgPAEgOAAQglAAgVgigAoDKTQgkg4AJhgQAJhfAuhBQAzhIBJAIQBDAIAeA8QAaA2gKBOQgKBLgnA9QgpBBg4AQQgVAGgTAAQgyAAgdgvgAv5KfQgagXAFgrQAFglAagjQAbgjAdgGQAhgIATAkQANAagGAkQgGAigTAcQgVAegZAIQgJADgJAAQgTAAgRgOgAJzHYQgbgXAGgrQAEgmAagiQAbgjAdgGQAhgIATAkQANAZgGAlQgFAigUAcQgVAegZAIQgJADgIAAQgTAAgRgOgABAEtQgkg4AJhgQAJhfAuhAQAzhJBJAJQBDAIAeA8QAaA1gKBNQgKBMgnA8QgpBBg4ARQgVAGgTAAQgyAAgdgvgAqBAWQgbgWAFgqQAFgmAagjQAbgjAdgGQAhgHATAkQAOAZgHAkQgFAigUAdQgVAcgZAJQgJADgIAAQgTAAgRgPgAkBhVQgZgpAGhGQAGhFAigwQAlg1A1AHQAxAFAWAsQATAngHA5QgIA3gcAsQgeAwgpAMQgPAEgOAAQglAAgVgigANOhnQgagpAGhGQAGhFAhgwQAmg1A1AGQAxAGAWAsQATAngIA5QgHA3gcAsQgeAvgoAMQgQAFgNAAQglAAgVgigAFRnTQgng9AKhoQAJhnAyhHQA4hPBPAKQBJAIAgBCQAcA6gLBVQgKBSgqBBQgtBHg8ARQgXAHgVAAQg2AAgggzgAlApoQgbgXAFgqQAFgmAagjQAbgjAdgGQAhgHATAjQAOAagHAkQgFAigUAcQgVAegZAIQgJAEgJAAQgSAAgRgPgAApsSQgbgXAFgrQAFgmAagiQAbgjAdgGQAhgIATAkQAOAagHAkQgFAhgUAdQgVAdgZAJQgJADgJAAQgSAAgRgOgAH/z6QgbgXAFgqQAFgmAagjQAagiAegHQAggHAUAkQANAZgGAkQgGAigTAdQgVAdgZAJQgJADgJAAQgSAAgRgPg");
	this.shape_34.setTransform(343.7702,316.0947,0.4664,0.4664);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFD3C6").s().p("AmMULQjcg7jdlwQjElHiKnPQiGm+gOlYQgOlwCGg9QECkBH3CcQG1CHHkGFQHJFwDsFzQB1C5AXCKQAYCUhWBMQggAbhzgZQhIgQjEg/QjahGh3gfQjLg0iagMQAkAcBbB0QBnCFBLB/QDVFoi2AWIhOARQg0ALg1gIQiagXkhjCQhIgwACA+QABAmAcB/QASB5ggAyQgdAthIAAQgoAAg3gPg");
	this.shape_35.setTransform(253.5694,302.0051,0.4664,0.4664);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFE6A3").s().p("AmSE8QigleAFjnQABhfAfg+QAcg3AugRQAsgQAvAXQAwAYAkA6QBVCNgmDpQAJgfA0hbQA7hmA/hTQCxjsA/ByQAJAQAXAeQAVAfAJAkQAaBrgxDxQgJAtATgOQALgIAtg0QBviAA3ADQA5ACAXAuQAVArgMBHQgcCdiHCSQiZCni9AUQgZADgYAAQjNAAjFi6g");
	this.shape_36.setTransform(297.9376,90.6372,0.4664,0.4664);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFD3C6").s().p("AjAD9Qi0hDgphgQgjhSBGhZQA/hPB3g7QB0g5BkgFQEMgOBeBsQBTBdhJCIQhHCGifBDQhfAphdAAQhTAAhTgfg");
	this.shape_37.setTransform(384.4643,195.3687,0.4664,0.4664);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFD3C6").s().p("AjAD9Qi0hDgphgQgjhSBGhYQA/hQB3g7QB0g5BkgFQEMgOBfBsQBSBdhJCIQhHCGifBDQhfAphdAAQhTAAhTgfg");
	this.shape_38.setTransform(252.5879,220.6717,0.4664,0.4664);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFE6A3").s().p("AiyFeQhUgsgljbQgijIAfhpQB2BdClgsQCZgpCgiVQAxDWgyCjQgpCJhoBbQhVBJhpAcQgxANgjAAQggAAgUgKg");
	this.shape_39.setTransform(323.1288,181.5134,0.4664,0.4664);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#78402A").s().p("Ai/EJQgQgsALguQAJgoAXgRIgPgNQgeALg5A2QgwAtgDgIQgPgoARg2QAOgvAagZQgjAAguAVIhTAuQADhGAygtQAvgqAfAQIgBgCIAGAFIAkAbQCBBaCKAOQB9AMBtg0QBngwA2hYQA4hbgRhjQAdCWg0B5QgtBrhhBAQhaA7hhAAQhjAAg6g9QgeAHgsAyQgeAigGAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_40.setTransform(243.7673,188.6005,0.4664,0.4664);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#78402A").s().p("AiFDhQhzgQhXhNQhjhYgmiTQAaBhBbA5QBWA4BzAAQB4AABrhBQB4hGBMiJIAWgoIADgIIAAACQAWgcA7ASQBCAUAgA+IhegFQgzAAggAPQAjAMAhAkQAlApAEAqQABAJg+gUQhLgYggADIgIASQAdAHAZAeQAdAkAFAvQAAAIgxgVQg9gbgeAHQgaBRhaAqQhAAfhLAAQgbAAgcgEg");
	this.shape_41.setTransform(379.525,166.699,0.4664,0.4664);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9DDAC3").s().p("AuFZUQkDiUidj7QiUjrgukxQgtkjA0lDQAzk8CJkxQCMk1DRj9QDbkJENisQEgi4E/g9QECgxEfCFQESB/DaD+QDgEFBbE5QBjFThWFAQhSEsi7E3QixElj5EKQjxEDkPDBQkRDDj/BfQl8ggkXigg");
	this.shape_42.setTransform(316.966,301.3743,0.4664,0.4664);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#78402A").s().p("APXInQhbglg8gEQhzAAhNgDQiTgFgjgWQgEgDgehNQgnhjgshQQiYkZj7idQiAhQkCgqQg5gJmbgvQiXgRgGgCQgMgEgEgLIgJgiQglh5EvAFQCaADDnAkQFXA2DkCjQEODAB4FZQAHAVAIAmQBUhiBRg4QBWg8BVgJQAlgEAQAKQARALgMAYQgFAKhFAhQhOAlgmAlQgkAjhABIQBfgmBLgNQBngRBRAcQAjAMALAQQALARgVARQgJAHhNAAQhWABgzARQgiAMgnAQQBUAEBCAPQB0AaBJBAQAgAcAEAWQAEAXgdAIIgDAAQgSAAhJgdg");
	this.shape_43.setTransform(277.4372,399.2182,0.4664,0.4664);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#86C2AB").s().p("EgDNAzeQzii7rwlgQk1iQjHihQiuiOhFiJQg9h8AkhaQAjhWBtgXQBygYCYA5QCpBACrCXQCgCNCZBDQClBJgBhcQAAgXi4i6QkHkJhqh3QnnoeEbgzQEWgzETFAQBbBpBZCQQAuBMAzBcQgcj3gOmJQgcsZBcq5QCDvXFmqYQHBs+MMkYQaapeLVRfQIVM2gIa9QgEMVkuKuQkWJ3nrHPQnTG3o2DMQmWCSmEAAQiXAAiVgWg");
	this.shape_44.setTransform(256.6088,241.0355,0.4664,0.4664);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#78402A").s().p("AMPOcQgNgCg+g8QhHhFg2gZQhrgshHggQiFg7gYghQgEgFABhTQABhrgKhaQgkk9ivjxQhXh5jfiIQgygelrjFQiGhJgEgDQgKgJAAgMIAFgjQALh+EWB3QCLA7DLB5QEpCzCYDtQCyEWgSFtQgBASgHAqQBxg6BhgWQBmgXBSAXQAkAKALAPQAMARgUARQgJAIhMAFQhXAFgwAUQgbALgpAUIhBAfQBkABBMAQQBnAWBAA4QAcAZAEATQAEAUgaAHQgLADhHgcQhRggg0gDIhPgBQBMAjA4AnQBiBDArBXQATAlgEAWQgEAUgXAAIgIAAg");
	this.shape_45.setTransform(377.8463,348.5977,0.4664,0.4664);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FCB9A7").s().p("AHrQhQl9gGnRh/QnCh7kriqQlAi2ASiTQCFjpG1k1QGdkmHqjkQIBjvFWguQGBgzAkDdQAHAqhUBUQgzA0idCGQivCUhZBVQiYCQhbB9QAqgQCTgPQCogSCTAEQGiAJhOClQgLAYgPA0QgTAxgiApQhlB2k/CRQhOAjA1AfQAhAUB7AsQBwAvAaA3QAjBLhxBqQifCVmRAAIgkAAg");
	this.shape_46.setTransform(412.203,229.1654,0.4664,0.4664);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C3E8D9").s().p("ACDR9QghgTgWglQgWgmAFgdQAGghAogFQAdgDAfAUQAdASATAdQATAegBAbQgCAegdAPQgOAHgPAAQgTAAgVgMgAJgRwQghgTgXglQgWgmAFgdQAGghApgFQAcgDAfAUQAeASASAdQAUAegCAbQgBAegdAPQgOAHgPAAQgTAAgVgMgAPUN9QhEgjgig1Qgng8Adg0QAagwA2gEQAwgDA2AfQA1AeAiAvQAjAygEAvQgHBCg8AKQgLACgMAAQgsAAg2gcgADkKMQhVgsgrhCQgwhLAkhAQAgg8BDgEQA8gEBEAmQBCAmAqA6QAsA/gGA6QgIBShKANQgOACgOAAQg4AAhDgjgAlHItQghgSgWgmQgXglAGgeQAFghApgEQAcgDAgATQAdASATAdQATAegBAbQgCAegdAPQgOAHgPAAQgTAAgVgMgANgD/Qg+gggggxQgjg3AagvQAYgrAxgDQAsgDAxAcQAwAbAfArQAgAugEAqQgGA8g2AJQgLACgKAAQgoAAgxgZgAlDCNQg+gggfgxQgjg2AZguQAYgrAxgEQAsgDAxAcQAwAcAfApQAgAugEAqQgGA8g2AKQgKABgKAAQgpAAgxgZgAseATQghgTgWgkQgXgmAFgdQAGghApgFQAcgDAfAUQAeASATAdQATAegBAbQgCAcgdAPQgOAHgPAAQgTAAgVgLgABygTQhUgsgqhDQgwhLAjhAQAgg7BDgFQA8gEBEAnQBCAlApA7QAtA+gGA6QgIBShLAMQgOADgOAAQg3AAhEgigAszl8QgigTgWglQgWgmAFgdQAGghAogEQAdgDAfATQAdASATAdQAUAegCAbQgCAegdAPQgOAHgPAAQgTAAgUgMgAI3nBQghgSgXgmQgWglAFgeQAGghApgEQAcgDAfATQAeASASAeQAUAegCAaQgBAegdAPQgOAHgPAAQgTAAgVgMgAn7o0QhcgwgvhIQg0hSAnhGQAjhABJgFQBBgFBKArQBIAoAtBAQAwBEgGA/QgJBZhRAOQgOADgQAAQg8AAhKgmgABKt3Qg9gggfgxQgjg2AagvQAYgrAwgEQArgDAyAdQAwAbAfArQAgAtgEAqQgGA8g3AKQgKABgLAAQgoAAgxgZgAxFvnQghgSgXgmQgWglAFgeQAGghAogEQAdgDAfATQAdASATAeQAUAegCAaQgBAegdAPQgOAHgPAAQgTAAgVgMg");
	this.shape_47.setTransform(359.3354,326.0815,0.4664,0.4664,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#78402A").s().p("AozQgQgJgUALgpQAYheBRhXQAugxBCgzIhMASQgzAOhHAwQhAArgMAAQgagCgBgVQAAgTAWgeQAzhEBfgsQBIghBggWIhGgQQgsgKgcgFQg0gJhVANQhMAMgLgGQgXgMAIgTQAIgSAhgRQBLgoBpAAQBkABB7AhQgRgpgEgQQhhlhBzk2QBhkID8juQClidCChdQD3ivAmB5IAMAhQADALgIAKQgDAFhzBjQk6EPgpAoQi9C0g7CKQh4EQAhE+QAKBaAYBpQASBRgCAFQgRAlh1BXQiABagdAVQgwAlg2BSQgxBIgMAFQgJADgHAAQgQAAgGgPg");
	this.shape_48.setTransform(280.6963,385.9771,0.4664,0.4664,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FCB9A7").s().p("ADlWoQl6ghnJihQm3iakfi/QkyjNAdiRQBimvGcm5QFzmOIOk0QH7kpHChjQHZhoDaCiQB0BWh3C3QhZCKjqDMIleEkQiQB5A8gHQGbgwD6AzQEWA5gOCnQgIBghwAzQhRAmjMAlQk0A3hVAUQj6A7jCBbQArgNCUgEQCogFCTANQGhAohaCgIggBJQgWAwglAmQhuBwlIB4QhQAeAzAjQAfAWB4A0QBsA4AWA4QAeBOh5BiQiMBxkoAAQhPAAhagIg");
	this.shape_49.setTransform(160.9485,220.4534,0.4664,0.4664,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFE6A3").s().p("AkfGwQikhyg+iSQgchDALgvQANgyA3gOQA1gOCIBjQA4AqAMAFQAWAJgTgqQhljgADhuQAAgmAOgiQAQgjAFgSQAkh8DiC/QBOBDBRBXQBGBNAPAcQhXjbA0icQAVhAAqgiQApgiAuAHQAxAGAnAwQAsA1AXBcQA3DhhPF5QiqD7jmAbQgbADgbAAQihAAifhug");
	this.shape_50.setTransform(332.2755,83.1199,0.4664,0.4664,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFD3C6").s().p("AhjEPQiqgfhihzQhlh2A7hsQBFh9EIguQBjgRB+AeQCBAfBOBAQBZBIgQBYQgTBlihBpQh3BNiHAAQguAAgwgIg");
	this.shape_51.setTransform(405.7813,230.5935,0.4664,0.4664,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFD3C6").s().p("AhjEPQipgghjhzQhlh1A7hsQBFh+EIguQBjgRB+AfQCBAfBOBAQBZBIgQBYQgTBlihBpQh3BOiHAAQguAAgwgJg");
	this.shape_52.setTransform(263.5992,238.7157,0.4664,0.4664,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFE6A3").s().p("ACQE0QhtgEhig1Qh6hBhGh9QhUiUAAjcQC+BuCeAGQCqAHBfh0QA1BfALDMQALDdhIA8QghAchRAAIgTAAg");
	this.shape_53.setTransform(349.9804,204.4965,0.4664,0.4664,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#78402A").s().p("Al/guQBEhfBtgoQBlgmBfAVQBgAWArBJQAfgBA1gnQAsggABAIQAGAvgVAqQgSAkgaANIAMAPQAggDBDgpQA4ghACAIQAGArgcAvQgYArgfATQAiAIAxgLQASgEBKgWQgTBDg7AiQg2AfgcgXIABADIgFgGIgdgjQhph0iFgsQh2gnh2AaQhvAZhJBKQhJBKgHBgQAHiVBLhog");
	this.shape_54.setTransform(260.6026,202.3541,0.4664,0.4664,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#78402A").s().p("AGCAhQhIhJhwgZQh1gah2AnQiFAshqB0IgcAiIgGAHIABgDQgcAXg2gfQg7gigShEQBIAXASAEQAxALAjgIQgfgTgYgrQgbgvAFgrQABgJA4AiQBEAoAgAEIAMgPQgagNgTgkQgUgqAGgvQAAgIAtAgQA1AnAeAAQAshJBggVQBfgVBlAlQBsApBEBfQBOBqAECZQgFhkhKhNg");
	this.shape_55.setTransform(398.5346,195.9173,0.4664,0.4664,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9DDAC3").s().p("ABJYIQlTh1k5i+QlAjCj2jyQkDj/iSkVQibkkAWliQAUlEChkwQCdkoDvi4QD7jBEHgIQFGgLFHBxQE0BqEdDNQERDFDbEJQDZEFCJEkQCLEoAkEgQAlEuhPEBQhWETjVDHQjkDWlsBzQlDgalah2g");
	this.shape_56.setTransform(312.997,317.2294,0.4664,0.4664,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#86C2AB").s().p("EgHiAy2QuTiHrfqPQlck1j3nHQjznAiAotQirrlgSqaQgVsWDIo0QDpqOIHkzQJOlcOsB0QEAAfE3C6QEXCoEaELQEJD7DJETQDJETBLDXQDwKwE9VVQCYKOAaBoQBJEcASg3QAdhlAdhUQA3ihBBh6QDHl0EagMQEfgNlkJ8QhNCLjGE9QiLDeAFAWQATBbCShsQCGhjB9itQCyj1C6h5QCjhrB/AOQB4ANAgBvQAhB2hVCoQhhC/jCDUQjGDZkNDMQpeHLrSDqQpNC+owAAQjxAAjrgjg");
	this.shape_57.setTransform(263.0818,243.2964,0.4664,0.4664,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#78402A").s().p("AmnRbQgLgTAGgqQAOhgBHhfQAog2A9g5QgrANgfANQgxAThCA4Qg7AxgMABQgaABgDgUQgCgUATggQArhJBag2QBIgqBageQhggOgygCQg0gEhUAXQhKATgLgEQgYgKAGgUQAGgSAegVQBHgwBogLQBkgKB9AUQgTgkgIgTQiFlUBQlAQBFkRDhkJQCSitB4hqQDjjJAyB0IAPAgQAFALgHALQgDAGhnBuQkZEsgnAuQioDIgsCQQhaEbBDE5QATBYAjBmQAaBOgBAFQgNAnhqBjQh2BngaAZQgsAqgtBXQgoBNgMAGQgLAEgIAAQgNAAgHgMg");
	this.shape_58.setTransform(376.5168,382.1703,0.4664,0.4664,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FCB9A7").s().p("AlDTpQiRg3AEhUQADg8BWhWIBFhBQAmgjAOgRQAlgxhVgDQlegNiLhJQgvgYgkgnQghgqgUgSQhIhDBUhTQBFhECohJQCHg7ChgvQCPgpAtgBQjVgbkAAWQhYAIk1AqQjNAdhZgLQh6gPgmhYQhBiaD3iNQDdh+GWhSQA6gMiuhGQkKhlidhDQkeh6iAhoQiqiJBTh1QCWjTIbA7QG/AxKeDkQIeC3IjD5QHjDbB6BgQBJCBjjEgQjVEPlyEcQmAEmleCWQkKByi3AAQhYAAhGgbg");
	this.shape_59.setTransform(427.1611,255.161,0.4664,0.4664,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#86C2AB").s().p("AvqMWQgpgLgLgiQgJgfAUgXQASgTAjgHQAigHAhAIQAkAIASAXQAZAggUAbQgRAYgqALQgVAFgTAAQgVAAgSgGgAkCK/QgpgMgLgiQgJgfAUgXQASgTAjgHQAigHAhAIQAkAIASAXQAZAggUAbQgRAYgqALQgVAFgUAAQgUAAgSgFgAHHKVQgpgMgKgiQgKgfAUgXQASgTAjgHQAigHAhAIQAkAJASAWQAZAggTAbQgSAZgqAKQgVAFgTAAQgUAAgTgFgA0vG6QgpgMgKgiQgKgfAUgWQASgUAjgHQAigHAhAIQAkAJASAWQAZAggTAbQgSAZgqAKQgVAFgTAAQgUAAgTgFgAAjGYQhBgWgcgoQgfgtAmguQAbghA3gJQAzgIA1APQA3AQAdAhQAgAlgOAvQgQA0g/ANQgUAEgWAAQgmAAgrgOgALyGMQgpgMgKgiQgKgfAVgXQARgTAkgHQAigHAhAIQAkAIARAXQAaAggUAbQgRAYgrALQgVAFgTAAQgUAAgTgFgArMF1Qhbgdgmg3Qgrg+A1hAQAlgsBMgNQBHgLBJAVQBLAVAnAuQAsAygTBBQgVBHhYASQgbAFgdAAQg1AAg7gTgAVsCdQgpgMgLgiQgJgfAUgXQASgTAjgHQAigHAhAIQAkAIASAXQAZAggTAbQgSAYgqALQgVAFgUAAQgUAAgSgFgAKbAsQhjghgpg6QgvhEA5hFQApgwBSgOQBNgMBQAWQBRAXArAyQAvA3gVBGQgWBMhfAUQgeAGghAAQg5AAg/gUgA2HAGQhJgXgfgsQgigyAqgzQAegjA8gKQA5gJA7AQQA8ASAgAkQAjApgPA0QgRA3hGAPQgXAEgXAAQgqAAgvgPgAidgQQhbgegmg3Qgrg+A1hAQAlgsBMgMQBHgMBJAVQBKAVAnAuQAsAzgUBBQgVBGhXASQgaAFgdAAQg2AAg6gSgAtulmQhDgWgbgoQgggtAnguQAbghA3gJQA0gIA1APQA3AQAcAhQAgAlgOAwQgPAzg/ANQgUAEgWAAQgmAAgrgOgAHopUQhCgWgcgoQgfguAmguQAbghA4gJQAzgIA2APQA3AQAcAhQAgAlgOAwQgPAzhAANQgUAEgVAAQgnAAgrgNgAipqAQgpgMgKgiQgKgfAUgWQASgUAjgHQAigHAiAIQAjAJASAXQAaAggUAbQgRAYgrALQgUAFgUAAQgUAAgTgGg");
	this.shape_60.setTransform(327.9241,338.6984,0.4664,0.4664,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FDBD6E").s().p("AyRPsQgajXBLktQBFkTCRk6QCJkoCzkXQCwkSCxjEQC4jLCQhLQCchPBVBVQAdAdgSB2QgLBIgxDIQg3DegXB5QgnDOgBCbQAZgmBuhjQB+hwB5hTQFZjtAiC1QAFAaASAyQAOAzgEA1QgMCcivEvQgqBJA9gGQAmgDB9gjQB3gbA0AdQBJAogeCYQgiCxixDbQipDRj+DDQkBDFkQB+QkhCHjvAVQg2AFgxAAQnoAAg3nLg");
	this.shape_61.setTransform(261.2369,225.9661,0.4664,0.4664,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#86C2AB").s().p("Ah5HvQi6gpiGi3Qh1ihgKidQgEhJAagpQAcgrA6AEQA2AEBfCLQAoA5AJAJQASAPgEgsQgVj2AmhnQANgjAYgcIAlgrQBLhpCWD+QA1BZAvBtQApBgAFAfQgKjrBkiCQAqg2AygTQAxgRAqAVQAsAWAVA6QAYBAgJBfQgVDmjHFLQi+COiyAAQgzAAgxgMg");
	this.shape_62.setTransform(444.3134,190.0277,0.4664,0.4664,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#78402A").s().p("AjoSVQgNgRAAgrQAAhhA5hoQAgg7A1hCQgpAUgdAQQguAbg5BAQgzA6gMACQgaAFgFgUQgGgTAOgiQAhhPBRhCQA7gwBbguQhhAAgxAEQg1AEhPAiQhGAegMgDQgagGAEgVQADgTAbgZQA/g6BmgZQBfgXCBABQgVgbgNgXQi1k+AilIQAdkYC6kmQB8jFBkh2QDEjmBCBrQAJAOALAPQAFALgEALQgDAGhWB9QjsFRggAzQiJDegZCVQgwEkBuEsQAfBUAyBgQAlBKgBAFQgGAphdBxQhlB3gWAcQglAwghBcQgdBSgLAIQgMAIgJAAQgLAAgIgKg");
	this.shape_63.setTransform(258.0454,379.1216,0.4664,0.4664,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FCB9A7").s().p("AhtE2QjAgOhChQQg4hFAqhqQAmhdBihaQBfhXBggiQD8hYB5BMQBpBDgfCXQgfCUiFBuQiGBuinAAIglgBg");
	this.shape_64.setTransform(378.9259,272.5278,0.4664,0.4664,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#78402A").s().p("AmIBNQANhyBLhYQBGhSBegcQBfgcBIArQAbgPAcg9QAXgxAEAHQAcAmACAvQACApgRAXIASAIQAagTAohEQAhg4AFAGQAZAjAAA3QAAAxgSAgQAigKAlghQAPgMA0g3QARBDgjA7QggA2gkgHIACACIgygUQiUgziJAaQh7AYhaBQQhVBLgcBkQgcBkApBYQhDiGAQiBg");
	this.shape_65.setTransform(395.9649,256.2866,0.4664,0.4664,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D67F3E").s().p("AjeFWQjIh7iRkFQErAGDChiQDPhpAkjJQA3AiBMBYQBOBYBBBoQChEBguB3QgYA/h1A7QiFBDiZACIgJAAQi2AAiihjg");
	this.shape_66.setTransform(453.5607,319.1943,0.4664,0.4664,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9DDAC3").s().p("EgoBAg3Qkyh/j/jrQj1jiiwkyQitkshZlaQhalcAHliQAGlwBtlTQByllDakpQHmqVONkLQD4hJFmAvQFFArFtCFQFXB9ElCtQElCtCaCnQHEHrIzKFQC0DJBGA8QBSBHgGg+QgCgihTi3QhojmgwiIQi1oGDUiuQDei1CBE2QBWDPA8H1IAmFVQAVCiATAwQAYA6AhhJQAkhQA4j7QBQlmC+itQBRhKBSgRQBRgQA8AqQA/AsAZBjQAcBqgYCZQg2Fpk5H6QAgBKCgjJQBhh5D/loQD0lOCciMQDXjBB3BdQCUB0ghEGQgfEAjDFRQjIFZlHFiQleF8mzFDQndFioPD0QpDEOpZB2QnKBbnGAAQuVAAt+lzg");
	this.shape_67.setTransform(296.4965,256.0932,0.4664,0.4664,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#78402A").s().p("AjoSVQgNgRAAgrQAAhhA5hoQAgg7A1hCQglASghATQguAag5BAQgzA6gMACQgaAFgFgUQgFgTAOgiQAhhPBRhCQA5gwBcguQhhAAgxAEQg1AEhPAiQhGAfgMgDQgagHAEgUQADgUAbgZQBAg6BlgZQBhgXB/ACQgYghgKgSQi1k+AilIQAekYC6kmQB2i/Bph7QDEjnBCBsIAUAcQAGALgFAMQgCAFhXB9QjpFOgjA2QiJDegZCVQgwEkBuEsQAgBVAxBgQAmBKgBAFQgHAohdBxQhlB3gWAdQglAvghBdQgdBSgLAHQgMAHgKAAQgKAAgIgJg");
	this.shape_68.setTransform(294.9355,374.0723,0.4664,0.4664,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFE6A3").s().p("AutTPQhZjGgQk1QgQkcAulXQArlCBYlAQBXk6BwjwQB0j4B0hyQB+h6BqA4QAlAUASB1QAKBJAMDNQANDlAOB6QAYDQAsCUQANgrBLh/QBXiQBbhzQByiQBUgyQBmg8AuBYQAMAXAgAsQAcAsAMA0QAiCYhNFVQgTBTA5gXQAjgPBuhHQBpg9A7AMQBSASAQCaQATCzhoEFQhkD5i5EFQi8EJjeDIQjuDXjdBbQiwBHiMAAQknAAiLk6g");
	this.shape_69.setTransform(304.0632,202.1839,0.4664,0.4664,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_46,p:{x:412.203,y:229.1654}},{t:this.shape_45,p:{x:377.8463,y:348.5977}},{t:this.shape_44,p:{x:256.6088,y:241.0355}},{t:this.shape_43,p:{x:277.4372,y:399.2182}},{t:this.shape_42,p:{x:316.966,y:301.3743}},{t:this.shape_41,p:{x:379.525,y:166.699}},{t:this.shape_40,p:{x:243.7673,y:188.6005}},{t:this.shape_39,p:{x:323.1288,y:181.5134}},{t:this.shape_38,p:{x:252.5879,y:220.6717}},{t:this.shape_37,p:{x:384.4643,y:195.3687}},{t:this.shape_36,p:{x:297.9376,y:90.6372}},{t:this.shape_35,p:{x:253.5694,y:302.0051}},{t:this.shape_34,p:{x:343.7702,y:316.0947}}]},9).to({state:[{t:this.shape_59,p:{x:427.1611,y:255.161}},{t:this.shape_58,p:{x:376.5168,y:382.1703}},{t:this.shape_57,p:{x:263.0818,y:243.2964}},{t:this.shape_56,p:{x:312.997,y:317.2294}},{t:this.shape_55,p:{x:398.5346,y:195.9173}},{t:this.shape_54,p:{x:260.6026,y:202.3541}},{t:this.shape_53,p:{x:349.9804,y:204.4965}},{t:this.shape_52,p:{x:263.5992,y:238.7157}},{t:this.shape_51,p:{x:405.7813,y:230.5935}},{t:this.shape_50,p:{x:332.2755,y:83.1199}},{t:this.shape_49,p:{x:160.9485,y:220.4534}},{t:this.shape_48,p:{x:280.6963,y:385.9771}},{t:this.shape_47,p:{x:359.3354,y:326.0815}}]},9).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},5).to({state:[{t:this.shape_46,p:{x:412.1871,y:229.1179}},{t:this.shape_45,p:{x:377.8315,y:348.5463}},{t:this.shape_44,p:{x:256.598,y:240.9877}},{t:this.shape_43,p:{x:277.4257,y:399.1652}},{t:this.shape_42,p:{x:316.9532,y:301.3245}},{t:this.shape_41,p:{x:379.5101,y:166.6536}},{t:this.shape_40,p:{x:243.7568,y:188.5543}},{t:this.shape_39,p:{x:323.1158,y:181.4675}},{t:this.shape_38,p:{x:252.5772,y:220.6245}},{t:this.shape_37,p:{x:384.4493,y:195.3223}},{t:this.shape_36,p:{x:297.9254,y:90.5943}},{t:this.shape_35,p:{x:253.5587,y:301.9552}},{t:this.shape_34,p:{x:343.7565,y:316.0443}}]},7).to({state:[{t:this.shape_59,p:{x:427.2034,y:255.1311}},{t:this.shape_58,p:{x:376.5607,y:382.1362}},{t:this.shape_57,p:{x:263.1294,y:243.2669}},{t:this.shape_56,p:{x:313.043,y:317.1975}},{t:this.shape_55,p:{x:398.5778,y:195.8893}},{t:this.shape_54,p:{x:260.6503,y:202.3259}},{t:this.shape_53,p:{x:350.0252,y:204.4682}},{t:this.shape_52,p:{x:263.6468,y:238.6864}},{t:this.shape_51,p:{x:405.8242,y:230.5644}},{t:this.shape_50,p:{x:332.3209,y:83.0956}},{t:this.shape_49,p:{x:160.9995,y:220.4246}},{t:this.shape_48,p:{x:280.7434,y:385.9429}},{t:this.shape_47,p:{x:359.3799,y:326.0492}}]},5).to({state:[]},8).to({state:[{t:this.shape_59,p:{x:427.2034,y:255.1311}},{t:this.shape_58,p:{x:376.5607,y:382.1362}},{t:this.shape_57,p:{x:263.1294,y:243.2669}},{t:this.shape_56,p:{x:313.043,y:317.1975}},{t:this.shape_55,p:{x:398.5778,y:195.8893}},{t:this.shape_54,p:{x:260.6503,y:202.3259}},{t:this.shape_53,p:{x:350.0252,y:204.4682}},{t:this.shape_52,p:{x:263.6468,y:238.6864}},{t:this.shape_51,p:{x:405.8242,y:230.5644}},{t:this.shape_50,p:{x:332.3209,y:83.0956}},{t:this.shape_49,p:{x:160.9995,y:220.4246}},{t:this.shape_48,p:{x:280.7434,y:385.9429}},{t:this.shape_47,p:{x:359.3799,y:326.0492}}]},6).wait(16));

	// Capa_2
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.918)").s().p("EgxtASfQiWAAAAiWMAAAggRQAAiWCWAAMBjbAAAQCWAAAACWMAAAAgRQAACWiWAAg");
	this.shape_70.setTransform(494.8,260.025);
	this.shape_70._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(9).to({_off:false},0).to({_off:true},34).wait(6).to({_off:false},0).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,828,436);


(lib.Interpolación1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("Ao3H+QRBgsAuvPIAAP7g");
	this.shape.setTransform(3.2,9.0125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF80").s().p("ApXJYIAAyvISvAAIAASvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,120,120);


(lib.ContenedorFichas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.cardBase = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEiErQhtgLiUgCIkBgBQgGAAgFgEQgGgEAAgFIAChqIgtABQgQAAAAgOQAAgNAQAAIAtgBQABhTgBhGIgChCQgCglgEgdIgCgQQgYABgUADQgQABAAgNQAAgOAQgCQAWgCAVgBIgCgwIgCgwQAAgFAEgEQAGgEAHAAIEFADQCVAEBxAIIAFACQAGABADAEQADAEABAIIAAALIABFyIAFBWQACA0gFAiQgBAEgFADQgGADgEAAIgBAAgAhogBQgBBSAFA+IAFA5QACAigCAYQB0AABFACQBnADBTAHQADgegDgwQgFg/AAgQIgBlxQiQgKjggDIgGEMgAiiCVQAAANgQACIgcABIgBBdIBOAAQACgagCgiIgFg8QgEg2AAhVIAGkNIhXgBIACBSQARAAARABQAQABAAAOQAAANgQAAIgggCIACAQQAFAuACBWQACA6gCBeQAOAAAOgCIACAAQAOAAAAANgAAMDXIgCAAIgCgBIgBAAIgCgBIgBgBIgCgBIgBgBIgBgBIAAgCIgBgBIAAgBIgBgEIAAgBIAAgCIAAgEIABgDIABgDIAAgBIABgCIABgBIABgCIAAAAIABgDIACgDIAEgEIADgDIADgCQAIgIAJgFQAIgGAIgEIAQgJIAOgJIAHgFIADgDIADgDIAFgEIADgDIADgCIAAgCIgBgCIAAgCIgBgCIAAgBIgBgCIgBAAIgBAAIgCAAIgCAAIgDABIgEAAIgEABIgGACIgFABIgCABIgCABIgBABIgCABIgCABIgEAEIgFAEIgEADIgEACIgBABIgCABIgBACIgCABIgBABIgEADIgCABIgCABIgCAAIgCAAIgCAAIgBAAIgCgBIgCgBIgBgCIgBgBIAAgCIAAgBIAAgCIAAgCIAAgBIABgCIABgCIAFgDIAEgFIAFgEIAGgDQAHgHAIgGQAIgGAKgCIAOgEIANgBIAEAAIACAAIACABIACAAIACABIACABIABABIACABIABABIADADIABACIABADIACAEIABADIABAEIACADIAAAHIAAAEIgBAEIAAACQgHAMgKAIIgJAIIgRAMIgRALQgJAEgIAHIgIAFIgBABIgCABIAYgBIAXgCIASgCIATgBIACAAIAEgBIAEgBIAGgBIAEgBIAEAAIABAAIACABIACABIACABIABABIABACIABABIABACIABACIAAACIAAACIAAABIAAACIAAACIgBABIgBACIgBABIgBABIgBABIgBABIgCABIgBABIgCAAIgCAAIgBAAIgCAAIgDABQgQACgRABIggACIgdACIgSABIgLABIgCAAIgCABIgCAAgABAAyIgCAAIgBAAIgCgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgCIAAgBIAAgBIAAgCIAAgVIAAgRIgCAAIgOgBIgNAAIgFAAIgBgBIgCAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAgBIgBgCIAAgBIAAgCIABgBIAAgBIABgCIABgBIABgBIABgBIACAAIABgBIACAAIAVgBIANAAIAAgBIABgUIABgVIAAgFIABgBIABgCIABgBIABgBIABgBIACAAIABgBIACAAIABAAIACABIABAAIACABIABABIABABIABACIAAABIACAVIAAAWIAAADIAOAAQARAAARgFQAIgCAIAAIACAAIABAAIACABIABABIABABIACABIABABIABACIABABIAAACIABACIAAACIAAABIgBACIAAABIgBACIgBABIgBABIgBACIgBABIgBABIgBAAIgCABIgBAAIgCABIgBAAIgDAAIgCAAIgHABIgIABIgIABIgJAAIgIAAIgGAAIgLgBIAAAMIABAUIAAAIIgBABIAAABIgBACIAAABIgBABIgBABIgBABIgBABIgCABIgBAAIgBABIgCAAIgBAAgAAmhiIgCAAIgCAAIgBAAIgCgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAgCIgBgBIAAgBIAAgCIABgBIAAgBIAAgBIABgCIABgBIABgBIABAAIABgBIABgBIABgCIABgBIACgBIABgBIABgBIACgBIABgBIAPgOIARgQIAOgMIALgLIAFgGIAAgBIAAgCIAAgBIABgCIAAgCIAAgCIgBgBIAAgCIgBgBIAAgBIgBgBIgBgBIgCgBIgBgBIgCgBIgBgBIgCgBIgBAAIgCgBIgBAAIgCAAIgCAAIgDAAIgEAAIgDAAIgEABIgGABIgDABIgEABIgCAAIgHAFIgGAEIgIAGIgHAEIgBABIgBAAIgCAAIgBAAIgBAAIgBgBIgBAAIgBgBIgBgBIAAgBIgBgCIAAgBIAAgCIABgBIABgBIABgBIAEgDIAFgFIAFgDIAEgDIADgCIgCACQAUgPAZgBQAUgBAOAPQAKANgDAQQgEAQgMAKIgeAbIgHAGIASgBIAVAAIARgBIAPgBIACAAIABABIACAAIABABIABAAIACABIABABIABABIABABIABADIABABIAAABIAAACIAAABIAAACIAAABIAAACIgBABIgBACIgBABIgBABIgBABIgBABIgBABIgCAAIgBABIgCAAIgBAAIgCAAQgMgBgMAAIgagBQgKAAgKABIgRACIgEAAIgFABIgDAAIgCABIgBgBg");
	this.shape.setTransform(59.0391,70.5536);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoiaYgCAEgDAFgDAEIgHANIgHAMYgBACgCADAAACYAAACABACgBACIAAAzIAABkIAIgRIg0A1IgOANYgCACgCADgDACYgDABAAAEgBADIgGAVYgBAEgBADgBAEIgCALIAAAAIALgCYAEgBADgBAEgBIAUgGYAEgBAEAAABgEYACgCACgCADgDIAMgNIA1g1YAFgFACgGAAgHIAAhkIAAgzYAAgCABgCAAgCYAAgCgCgDgBgCIgHgMIgHgNYgDgEgDgFgDgEIAAAA");
	this.shape_1.setTransform(55.1056,69.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEPgCYAAAAgBAHAAANYAAAEAAAEgBAEYAAADgBAEAAAFYgBAEAAAFgBAFYgBAFgCAFgBAGYgGAXgKAbgSAcYgFAGgFAHgFAHYgFAHgHAHgGAHIgCACIgBABYAAAAACgBgBAAIgBABIgBABIgGAGYgEADgEAEgDADYgIAHgIAFgHAGYgiAYgqAQgvAGYgFABgGAAgGAAIgJAAIgEABYgBAAACAAgBAAIAAAAIgBAAIgDAAYgNgBgOAAgLgCYgGgBgGAAgGgCYgGgBgGgCgGgBYgGgBgGgDgGgCYgGgCgGgCgGgDYgGgCgGgDgFgDYgGgDgFgEgGgDYgGgDgFgEgFgEYgFgEgGgEgFgEIgPgOIgCgBIgBgBIAAgBYAAAAABABgBAAIgEgEIgHgIYgLgLgGgKgIgLYgPgWgMgZgJgaYgDgNgEgNgBgOYgBgHgBgHAAgHIgBgTYAAgeADgaAIgbYAIgaAMgZAOgWYAJgLAHgMAKgJIAHgIIADgEIADgDIAQgOYAFgFAGgDAFgEYAFgEAFgEAGgDYAFgEAGgDAGgEYAFgCAGgDAGgDYAYgKAYgIAZgCYANgDAMAAAMAAIAEgBIAEABIAKAAYAGABAHgBAFABYAMACALABALADYAGABAGACAFABYAFACAGACAFACYALADAJAGAKAEYAKAFAJAGAIAFYAIAHAJAFAHAHYAEADAEAEADADIAGAFIABABIABABYAAABgBgCAAABIABAAIACADYAHAHAHAIAFAHYAFAHAFAHAFAGYASAdAJAcAGAXYABAGABAFABAFYABAGAAAFABAEYABAJAAAIAAAHYAAAMAAAHAAAAIAAgBAFBgBYAAAAgBgIgCgOYAAgIgCgJgCgKYgBgFgBgGgBgGYgCgGgCgGgCgHYgIgagNgggWgfYgFgIgHgIgGgIYgGgIgHgGgHgIIgDgCIAAgBYAAAAgBgBAAAAIgBAAIgBgCIgGgFYgEgEgEgDgEgEYgJgHgJgHgJgHYgKgGgKgHgLgFYgLgFgLgGgMgEYgGgCgGgCgGgDYgGgBgHgCgGgBYgMgEgOgBgNgCYgHgBgGAAgHAAIgJgBIgEAAIgCAAIAAAAIgCAAIgCAAYgOABgNAAgOACYgcAEgcAIgbAMYgHADgGADgHADYgGAEgGAEgHADYgGAEgGAFgGAEYgGAFgHAEgFAFIgQAPIgFAEIgDAEIgIAIYgLALgIANgKAMYgRAZgNAdgKAdYgIAegEAhgBAcIABAYYAAAHACAIABAIYABAPAEAPAEAPYAJAeANAdARAaYAKAMAJAOAKAJIAHAIIAEAEIABACIAAAAIABABIACACIARAPYAFAFAHAFAGAEYAGAFAFAEAHAEYAGAEAHAEAGAEYAHADAGADAHADYAbAMAcAJAdADYAPADAMAAANABIADAAIABAAIAAAAIACAAIAEAAIAKgBYAHAAAHAAAHgBYA1gFAygTAngbYAKgHAKgHAJgHYADgEAEgDAEgDIAGgGIABgBIABAAIABgCIAAAAIADgDYAHgIAIgHAGgIYAGgIAHgIAFgIYAWggANggAHgbYACgGACgHABgGYACgGAAgGABgFYABgGABgFAAgFYABgEAAgEAAgDYABgOABgHAAAAIAAgB");
	this.shape_2.setTransform(60.2445,71.9199);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAFEGIgEAAIgEgBIgEgBIgEgDIgDgDIgCgCIAAABIAAAAIgBABIAAAAIAAABIgBAAIgBAAIgDAAIAAAAIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIAAAAIAAgDIAAgBIAAAAIAAgBIABgBIAAgBIABgBIAAgCIABgBIABgBIAAgBQAAgIABgHQADgIAEgHQAFgIAIgEQAFgEAHABIALACIAAABIABAAIAAABIAAAAIAAAAIAAABIAAABIAAAAIgBABIAAAAIgBAAIAAABIAAAAIgBAAIgCgBIgCAAIgCgBIgCAAIgCAAIgCAAIgBAAIAAAAIgBABIgBAAIgGADQgCACgCAEIgEAGIgDAIQgCAEAAAEQAIgHAJgCIAHgBQALAAAIAGIACAEQAEAJgGAIQgEAFgFAEQgHAFgHAAIgCgBgAADDpIgDACIgDADIgEACIgDADIgBABIAAAAIABABIAAABIAAAAIABABIABABIABABIABABIABABIABAAIACABIAAAAIABAAIAAABIABAAIAAAAIAAAAIABAAIABAAIABAAIABAAIABAAIACAAIABAAIACAAIABAAIABgBIABgBIACgBIACgBIACgCIACgCIABgBIABgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIgBAAIAAgBIgBAAIgCgBIgDAAIgDgBIgDAAIgDAAIgCAAIgDABgAjyA5IgBAAIgBAAIAAgBIAAAAIgBgBIAAgDIABAAIAAAAIAAgBIABAAIAAAAIAAgBQALgDAGgJQAGgIAFgKQAEgJADgKQACgIAAgKIgFAIQgEAEgFACQgFACgGgBQgDAAgDgBIgGgEQgCgCgBgDIgCgGIABgHIAAgCIAAAAIAAgCQACgKAJgGQAFgDAFAAQAMAAAHAIIABAAIAAAAIAAABIABAAIAAAAIAAABQACADABAEQACAIAAAHQgBAMgCAKQgDAKgFAKQgFAKgHAIQgEAGgGADIgHAEgAjqgmIAAABIgBABIgBABIAAABIgBABIgBABIAAAAIAAABIAAABIgBAAIAAABIAAABIAAAAIAAABIgBAAIAAABIgBABIgBACIAAACIAAACIAAABIABACIAAACIABAAIAAABIAAAAIABABIAAAAIAAABIABAAIACABIACABIACABIACAAIADAAIAFgCIAEgDIADgDIADgFIACgFIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIgBAAIAAgBIgBAAIgBgBIAAgBIgBgBIgCAAIgBgBIgBgBIgCAAIgCAAIgCAAIgCAAIgCAAIgBAAIgBAAIgBAAIAAABIgBAAIAAAAIgBAAIgBABgADIASIgBAAIgBgBIAAAAIgBAAIAAgBIAAAAIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABgBIAAAAIAAgBIABgBIABAAIABAAIAAAAIABgBIABAAIABAAIABAAIABAAIACAAIAAABIABAAIAAAAIABABIAFgBIAFgBIAFgBIAFgCIADgBIAAgBIABAAIAAAAIABgBIAAAAIABAAIABgBIABAAIABgBIABgBIAAgCIABAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIgBgCIAAgBIgBgBIAAAAIAAgBIAAAAIgBgBIAAAAIgBgBIgBAAIAAgBIgBAAIgBAAIAAABIgBAAIgBAAIgBAAIAAAAIgBACIgBACIgCABIgBACIgBACIgCABIAAABIgBAAIAAAAIgBAAIgBAAIgBAAIgBAAIAAAAIAAgBIgBAAIAAgBIAAAAIgBgBIAAgBIABgCIAAgCIABgCIABgBIABgCIACgBIABgCIABAAIABgBIABAAIABgBIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIAAgDIAAgDIAAgDIgBgDIgBgDIgBAAIgDAAIAAABIgBAAIgBAAIAAABIgBABIgBABIgBABIgBABIgBABIgBABIAAAAIgBAAIgBAAIAAAAIgBAAIAAgBIgBAAIAAgBIAAgCIAAAAIADgEIADgDIADgCIAEgBIADgBIABAAIABABIAAAAIABAAIABAAIAAABIABAAIACAEIABAFIABAFIAAAFIAAAEQAKABADAKQADAGgCAHQgBAHgHAFIgLAGQgJADgKABIgFAAIgFAAgAgFi+IAAgBIgBAAIgBAAIAAAAIgBgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAAAQAAgEADgDIAFgGIAEgFIAEgGIAEgGIABgCIAAAAIAAgBIAAgBIABgBIAAgFIAAgEIAAgDIAAgEIAAgBIAAgBIgBgBIAAAAIAAgBIAAgBIgBAAIAAgBIAAgBIgBAAIAAAAIgBgBIAAAAIgBAAIgBAAIgBAAIgBAAIAAABIgBAAIgBAAIgBABIgCABIAAABIgBAAIgBABIgBABIgBABIAAAAIgBABIAAAAIAAACIAAABIgBAAIAAABIAAABIgBAAIAAAAIgCAAIgBAAIAAAAIAAgBIgBAAIAAgBQgBgDACgEQABgDADgBIAFgEIAEgDIAGgBIACABIABAAIABAAIABAAQAFAEABAHQACAFAAAFIgBALQAAAGgDAFIgGAJIgCADIAHgBIAGAAIAHAAIAGABIAEACIAAABIAAAAIABABIAAABIAAAAIAAABIAAABIAAABIAAABIAAAAIgBABIAAAAIAAABIgBAAIAAAAIgBABIAAAAIgBAAIgCAAIgBAAIgBgBIgBgBIAAgBIgIAAIgIAAIgHABIgFABIgEACIAAABIgBAAIAAAAIAAABIgBAAIgBAAIgBABgAgQjBIgBAAIAAgBIgBAAIAAAAIgBAAIgBgCIAAAAIgBgBIAAgBIAAAAIAAgBIAAgBIgBAAIAAgBIAAgBIAAgBIAAgJIgBgIIAAgIIgBgJIgBgHIgBgBIAAABIgBABIgBABIgBABIgBABIgBABIgBABIAAAAIAAABIgBABIAAAAIAAABIAAABIgCABIgBAAIAAABIgBAAIAAgBIgBAAIgBgBIAAgBIgBAAIAAgBIACgEIABgDIADgDIACgCIACgDIABgCIAAgBIABAAIAAgBIAAAAIABgBIAAAAIAAgBIAAAAIABgBIAAAAIABAAIAAgBIABAAIABAAIABAAIABABIAAAAIABAAIAAABIAAAAIABABIACAIIABAJIABAJIABAIIAAAJIABABIAAABIABABIABAAIAAABIAAABIAAAAIAAACIAAADIAAACIAAACIAAADIgBAAIAAABIAAAAIgBAAIAAABIgBAAIgBAAIAAABg");
	this.shape_3.setTransform(59.3781,70.9523);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjpGEIgfgOQgSgJgLgJQgEgEAAgGQgBgGADgFQARgjAfg3IAxhaQASgdAGgPQADgKgBgCIgLgJQgcgVgWgfQgug8gBhJQgChDAjhAQAig+A7gqQA9gsBGgLQBGgMBEAXQBGAYAtA2QA0A+AMBEQANBHgeBIQgaA2gsAqQgsApg4AYQgwAVgzAGQg8AHgogUQgeAwggBBQgOAdgqBYQgCAGgIACIgFAAQgEAAgEgCgAgllRQhSAag5BKQgXAfgMAZQgRAhgCAfQgEA9AnA3QAmA0BAAcQBAAcBAgHQBDgHA2grQA3gsASg9QAUhIgfhKQgehEg/guQgvggg1AAQgeAAggAKgAhXAqQgSgFgQgOQgFgEAAgIQAAgHAFgEQAEgFAIAAQAGAAAGAFIABAAIAAAAIADACIAJAEIAGACQAHADADAGQADAGgBAHQgCAGgGAEQgEACgFAAIgEAAgAilgXQhChMBMhlQAegpAtghQArggAmgOQAQgFAEAQQAFARgQAFQhHAagwA5QgfAngMAlQgQAxAbAfQAKANgMAMQgGAGgFAAQgGAAgFgGg");
	this.shape_4.setTransform(65.7651,70.7447);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlJHIQgMgIgEgVIgEgjIgDgbQgDgUgEgGQgEgGgNABQgOABgGAAQgWgCgRgIQgTgKgIgRQgSgnAZgkQAXghApgIQgNgngCgRQgCghAUgKQAIgEAPgCIAZgEIAXgDQAPgCAGgEQAHAHgDgMIAAgYQADgjAVgXQAYgaAjADQAhADASAXQAMAQAKAjQAlgKAzgSQAHgCAHAEQAHAFACAHIAPAqIAOArIAIAWQADAOgCAJQgEANgMAEQgGACgUADQghAEAAAaQAAAfAegGIAagHQAPgEAHAAQAPABALAQQAFAJAFAQIAHAbIAaBRQACAHgEAIQgEAHgHABQg9AKhYASIiVAgQghAJgTAEQgPADgLAAQgQAAgJgGgAlSEsQAIAGAEAMIAFAXIAHAhQAEAUACANQACAOACABQACABARgEICLgcQB+gbA+gKIgXhJIgFgQQgEgNACAAQgEgBgOAHIgSAHQgdAFgVgPQgUgOgFgeQgKg3A2gUQATgHAKAAIgdhTQgtAOgeAIIgVAEQgFAAgGgEQgGgEgBgGQgDgVgEgMQgFgVgLgGQgLgIgLACQgIACgLAHQgNAJgFALQgDAJgBARIAAAcQgCAOgOAHQgPAHgbAEQghAEgKADQgKADAAACQgBACAEANIAPA9QACALgHAHQgIAHgKgCQgXgEgUASQgUARADAXQADARARAFQAKADAVgBIAVgCIACAAQALAAAIAGgAD3AVIglgMQgWgJgCgQQgCgHAEgNQADgOAAgGQABgWgOgNQgPgNgVAHQgIAFgSAfQgOAWgYgBQgLAAgQgGIgagLIhMgbQgHgDgEgGQgFgHADgHQANglAWg0IAlhXIArhpIAVg2QAAgHAGgGQAJgJAKAEQCmA+CLA5QAQAHgDAQQgHAtgNAvQAoAOAVAgQAXAigMApQgNAogmALQgfAIgtgKQgQAygMAPQgPARgYAAQgMAAgOgFgACtiGQAXAFAOANQANANAFAXQADATgDAWIgDANIACABIAXAKQAQAHAIgBQANgCAKgdIANgsQACgHAHgEQAGgEAIACQAkALASgBQAfAAALgaQANgegXgZQgUgUgggHQgHgCgEgHQgEgIACgHQAMgqAKgyQiEg1iMg1IgJAWIgtBrIglBXQgVA0gOAkIAqARQAZAKASADQASAEAPgUQAXgcAEgDQAEgDAEgBQAKgDALAAQAKAAALADg");
	this.shape_5.setTransform(56.682,72.0424);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiYEmIh9gDQgaACgOgBQgbgCgIgMQgFgIAAgRIABgZIACjHIABiHQAAgdABgHQAEgTAQgHQAKgEASAAIAcAAIA9gCIAFgBIgChWQAAgGAFgFQAEgEAHAAQA7gHBWgDICRgEIBNgDIATAAQALABAGAGQAHAGACALIADAUIAGA6IAbgBIAegCQASgCALACQASADAIAMQAHAKACATQAQCWgFCTQgBAkgDAjIAAATQgBALgFAGQgHAGgSADIgcACQjqAdi8AAIgYAAgAi6EGQBGACBGgCQCKgECbgTIAigEIAhgEIAIgBQgEgBAEgLQgBgNACgWIADgkQADhagFhZQgcAqgGAGQgWAWgiAFQgsAHhLACIADATQACAOgPAEQgPAFgCgPIgDgaIi0AIIABARQABAPgPAAQgQAAgBgPIAAgQIhGACQgdABgLgBQgVgCgPgLQgSgMgigiIgBC/IgCAfQgBAUACALQANADAXAAIAjAAgAktiNQgSACgDAOQgEAMACAWIACAiIgBAVIAEADQALAKAWAXQAVAVAQAIQAQAIAfgBIAxgEIAbgBIgBgcQAAgNAQAAQAQAAgBANIABAaICxgHIgCgWQgBgPAQAAQAPAAABAPIABAUIBigFQAcgDARgIQASgJAOgWIAQgbQAJgOAKgKIgHhIQgCgPg8ACIhLAFInAAQIgNAAIgSABgACikHIgPACIhxAEIhrAEQg/ACgsAEIABBHIF1gOQgDgkgCgMIgDgPQgCgHgHgCIgIgBIgHAAgAgghAQgPgBAAgPQAAgQAPABQAVABAUgCQAGgBAFAFQAEAFAAAGQAAAHgFAEQgEAEgGABQgPACgPAAIgLgBg");
	this.shape_6.setTransform(59.4839,68.5686);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyGFQgXgRgDguIACguQABgegGgQIgCgFQgCgFgEgGQgLgNgdgPQgjgUgJgGQgwgogfguQgig0gJg2QgShnA5hgQA1hZBhgzQBDghBCgCQBKgDA6AlQA0AgAiA3QAiA0ALA+QAKA0gGA2QgFA1gUAvQgWA1gjAqQgMAQgeAXQgeAYgNAOQgPATgCAgIABA5QABAigIARQgMAXghAFQgdAGgXAAQgmAAgVgPgAgXFtQAJAEAOABIAXAAQAXgBAKgDQATgFAFgOQgnARhAABgAgrFNQAogBAXgEQAlgEAXgOIAAgKQg9AWg/gDIABAOgAgrEeQA9ADA8gYIAAgIQg8ATg9gEgAguDvQA6AEA4gQIgCgGQg5AOg4gCgABbDCIACAGIABAFQAMgTAXgSQBOg/AkhWQAlhbgVhgQgMg1gcgsQgfgwgrgaQg0gghBACQg5ABg7AdQhkA2gwBfQg0BoApBkQAlBeBqA7QAUAMAMAMIAQhFQAJgcADgQQgOACgNgEQgdgFgLgcQgMgeAZgTQAZgSAcAOQAaANAHAdIACgBIANgIQgKgQgCgTQgDgdAVgWQAWgXAdAIQAjALgJAkQgIAbgYAaIgCACIAMAFQAMgYATgKQAPgIAQAAQATABAKAMQATAXgaAWQgWASgbACIgNAAQgQA+AVBDgAgKBEIgFAdIgIAcIgSBLQAxACAwgLQgShEAQg/QgPgFgMgIQgTAOgSAHgAhNAmQARALASgFQgCgIgEgHQgNgNgHAAQgKAAABAWgAAbgiQgKAUAMAQIAAABQAQgPADgMQAIgLgSAAIgLABgAirBDQgHAAgFgEQgJgJgIgNQgEgEACgIQACgGAGgEQAFgEAHADQAHACADAFIACADIALALQAFAEAAAIQAAAGgFAGQgEAEgGAAIgCAAgAjpgQQgbhFAkhMQAXgzA/hHQALgMAMALQALAMgLANQg5BAgUArQghBCAYA9QAFAOgPAFIgHABQgLAAgEgLg");
	this.shape_7.setTransform(58.9229,71.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABYE9QgLgHgMgQIgUgcIg4hCIhuiDQisjQhqicQgFgIAFgKQAFgJAKAAQCQALCcAPQCKANBoAPIB4APQBHAMAsAVQAFACADAGQACAGgBAGQgKAogTAsQgOAigYAuIgCADIAjDoQACAOgKAGQgLAGgKgJQg0grgxgjQgnBDgoA9QgaApgCACQgMAOgOAAQgIAAgJgGgAjHhSQBLBeBVBkIBTBjIAlAsIALAQQAHAKAGAEQAOgOAQgcIAagtQASgcAfg1QhAgsjEh9QilhohdhGQA4BPA1BBgAFHCiIgdjAQhKgRhYgeQg7gVhjgnIjhhZQA1AlB9BQQDJCBBpBJQAoAeAyAngAgNirQBkAnA7AVQBZAfBLARQAmhLAQg4QgYgKgkgHIg9gJQg4gKg3gHQhggMiJgOQhagJhfgHg");
	this.shape_8.setTransform(58.8042,79.3672);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ACgFPQgQgGgBgWIADgkIAEkjQACimgCh+QAAgHAFgFQAFgEAHgBQBTgHBXAAQAHAAAFAFQAFAFAAAHQAGBvgKDOQgKDYADBkQAAAMgLADQgDACgDAAQhQAEgoAAIgXACIgHAAQgKAAgGgCgADTEtQgPgNgQgSIAAAVQACAGAAAEIAdAAIAAAAgAC1DcIACACQAfAmAmAfQAEAEABAEIAmgBQg1hBg8hBgAC3B3QA6A9BDBPIAAg3QgEgBgCgFQgUghgkgoIg+hEgAC5AFIADADQASAYArAuQAqAtATAZIAChEIgEgEQgUgjgmgpIhBhFgAC5h6IACABQASAYAuAxQArAuAUAaIAEhMQgFgCgDgGQgQgigagmQgPgWgjgtQgVgYgMgQIAAB1gADBkpIgBAFIBKBkQAkAvATAfIABg/IgFgFIhXh1gAFDjoIgChFIgxAAIAzBFIAAAAgAkKFQQgwAAgYgBQgHgBgGgEQgFgFAAgHQADgtABhFIADhyQgBgWABgMQABgXAKgHQAHgFAQAAIAaAAIBCgFQASgBAIADQALAFADAOIABAEQAAAdACA+IADBbIABAuQABAcgEARQgCAIgDADQgDAEgHACQgMAGgYAAIgkgBgAlAEtIAqAAQgcgfgNgQgAjUEsIABAAQADAAABAAQACAAAAAAQABAAgBAAQAAgBgBAAIgDgBIgDACgAk+DHIACACQAPAXAXAaIAqAtIADAEIAUABIABg1QgKACgFgKQgOgXgdgeIgugygAjUDJIgChEQgHAAgEgGIg5hHIgfABIgBACIgBAWIAFAFQAPAZAgAiQAnApAMAPgAjYBUIgBgqQgBAGgYAEIAaAggAhRFQQgWgCgGgVQgDgKgBgdQgBgiACg8IACheIgCjDQAAgFACgDQAEgKALABQBQAHBPgDQAOAAACANQADAMgKAHQAFgDACgDIAAADIAAAIIgBAHIAAAwIABCAIACBqIABBpQAAAFgDAFQgEAGgFAAQgXADhEAEQgfAEgTAAIgLAAgAhPD+IgBAbQABARAIADQAKADAagEIgsgzgAhOC0IAAASQAoAwAqAwIACACIArgCIAAgoQhDhJg6hQIgCBPgAAwDKIgChUQhChGg5hRIABBLQA5BTBDBNgAAuBDIgBhMIgFgEQgKgNgWgYQgWgYgKgOQgeAAgYgDIAAADQAGACAFAGQAzBPA+BEgAAtg7IgBgcIgYAAIAZAcIAAAAg");
	this.shape_9.setTransform(58.9008,68.5358);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AlsE5QgWgFgKgRQgKgTAFgZQAFgZASgKQAIgEALAAQALgBAKADQASAFAMAPIADAFIACAFQAIATgGATQgGAUgSAKQgMAHgNAAQgHAAgHgCgAgEEoQgSgBgNgMQgOgNgDgUQgDgTAIgRQAOgdAtAIIAEABQASABAMARIADAIQAFAQgGAUQgGATgOALQgMAKgQAAIgEAAgAFHEJQgSgJgJgRQgKgSAFgUQAFgTAPgNQARgOATACQAJABAFAHQAXADAMAXQADAEAAAEQACAEgBAEQABAVgKASQgMATgTAFIgMABQgNAAgMgGgAl1CYQgKhGAQhDQACgKAIgCQAFgEAGgBQCkgUCagHIAAhYIgHgCQgmgOgQgnQgPglALgpQALgpAdgPQAbgNAmAJQAFgCAGABQAhAFAPAdQAOAbgFAkQgEAjgUAbQgUAdgeAHIAABVQCpgHCbAGQAQABACARIAQB3QACAQgRAAQgSAAgCgQIgOhnQiQgEiUAFQgEAFgFABQgCAKADAdIABA0QABASgRAAQgSgBAAgRIgCgrQgCgbACgRQgFgDgCgFQibAIiZATQgMA4AIA3QADAQgRAFIgHABQgLAAgCgNgAggkVQgTAIgIAdQgHAZAHAXQAHAaAWALQAYAMATgNQASgLAJgaQAJgYgEgXQgEgZgRgJQgFACgFgCQgSgFgNAAQgIAAgHACg");
	this.shape_10.setTransform(59.4394,68.5256);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AFzETQghgLgQgdQgQgdAIgiQAIgcAXgSQhEh6hTh1QgWAGgZgFQhzCAhjCEIgCACQAPAegKAeQgIAbgaARQgaARgcgDQgggDgWgbIgBgCIgCgCQgRgXAAgdQAAgdAPgXIiWjOQgUAHgUgDQgVgDgSgPQgdgXgEgnQgEgmAZgcQATgWAcgGQAcgGAaALQAbANALAbQALAZgEAfIgBAFIgBAFQgGAUgOAPICVDLQAVgKAXAFQAVAEATAPQBfh9Bsh6QgUgRgFgbQgFgbAMgYQAMgXAXgPQAZgPAZAAQAfgBAWAXQAUAUAFAgIAAADIABADQAEAogbAZQBTB4BGB7QARgCAPAFQAeAKAQAeQAQAcgEAgIgBAFIgCAFQgLAggcAPQgRAJgSAAQgMAAgOgEgAF1CcQgOAKgFARQgEASAJAPQAIAOAQAFQAQAFANgHQAQgHAFgTQADgQgIgPQgIgRgPgGQgHgDgHAAQgJAAgJAGgAihCMQgVAJgDAXQgCAVAMASQALANANADQAPADAOgIQAOgIAFgOQAFgPgHgPQgHgQgQgKQgKgHgKABQgHAAgGACgAmcjHQgPAJgEATQgEASAIAQQAQAeAdgGQAcgGAHggQAFgegVgSQgLgJgMAAQgNAAgNAJgACbjoQgMAFgIAJQgKALgCAMQgCAOAHALQAHANASAEQAQAFAPgDQAPgDAIgOQAHgMgCgRQgGgmgbgCIgDAAQgKAAgLAFg");
	this.shape_11.setTransform(58.4384,70.4278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	// Capa_3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(45,106,67,0.949)").s().p("AlvFwQiXiZAAjXQAAjWCXiYQCYiYDXAAQDXAACYCYQCZCYgBDWQABDXiZCZQiYCXjXAAQjXAAiYiXg");
	this.shape_12.setTransform(59.65,71.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(235,106,67,0.949)").s().p("AlvFwQiXiZAAjXQAAjWCXiYQCYiYDXAAQDXAACYCYQCZCYgBDWQABDXiZCZQiYCXjXAAQjXAAiYiXg");
	this.shape_13.setTransform(59.65,71.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(235,70,156,0.949)").s().p("AlvFwQiXiZAAjXQAAjWCXiYQCYiYDXAAQDXAACYCYQCZCYgBDWQABDXiZCZQiYCXjXAAQjXAAiYiXg");
	this.shape_14.setTransform(59.65,71.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(132,70,156,0.949)").s().p("AlvFwQiXiZAAjXQAAjWCXiYQCYiYDXAAQDXAACYCYQCZCYgBDWQABDXiZCZQiYCXjXAAQjXAAiYiXg");
	this.shape_15.setTransform(59.65,71.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(132,102,50,0.949)").s().p("AlvFwQiXiZAAjXQAAjWCXiYQCYiYDXAAQDXAACYCYQCZCYgBDWQABDXiZCZQiYCXjXAAQjXAAiYiXg");
	this.shape_16.setTransform(59.65,71.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(34,102,50,0.949)").s().p("AlvFwQiXiZAAjXQAAjWCXiYQCYiYDXAAQDXAACYCYQCZCYgBDWQABDXiZCZQiYCXjXAAQjXAAiYiXg");
	this.shape_17.setTransform(59.65,71.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(225,102,50,0.949)").s().p("AlvFwQiXiZAAjXQAAjWCXiYQCYiYDXAAQDXAACYCYQCZCYgBDWQABDXiZCZQiYCXjXAAQjXAAiYiXg");
	this.shape_18.setTransform(59.65,71.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(102,51,204,0.949)").s().p("AlvFwQiXiZAAjXQAAjWCXiYQCYiYDXAAQDXAACYCYQCZCYgBDWQABDXiZCZQiYCXjXAAQjXAAiYiXg");
	this.shape_19.setTransform(59.65,71.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,250,188,0.949)").s().p("AlvFwQiXiZAAjXQAAjWCXiYQCYiYDXAAQDXAACYCYQCZCYgBDWQABDXiZCZQiYCXjXAAQjXAAiYiXg");
	this.shape_20.setTransform(59.65,71.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,72,79,0.949)").s().p("AtIFwQiXiZAAjXQAAjWCXiYQCYiYDYAAQDXAACYCYQCYCYgBDWQABDXiYCZQiYCXjXAAQjYAAiYiXgAPUF1IgCAAIgCAAIgBAAIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgBgBIgBgCIgBgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIABgBIABgBIABgCIABgBIACgBIABgBIABgBIACAAIABAAIABAAIACAAIACAAIABAAIABAAIACAAIABABIABABIACABIABABIABACIABABIAAABIABABIAAACIAAABIAAACIAAACIAAABIAAABIgBACIAAABIgBACIgBABIgBABIgCABIgBAAIgBABIgCABIgBAAIgBAAg");
	this.shape_21.setTransform(106.95,71.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

	// Capa_1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(45,106,67,0)").s().p("ApOKDIAA0FISdAAIAAUFg");
	this.shape_22.setTransform(59.125,64.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.2,128.5);


(lib.btTransp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("A4rFAIAAp/MAxXAAAIAAJ/g");
	this.shape.setTransform(157.975,32);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,316,64);


(lib.temporizador = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.tempo.text = segs
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_1
	this.tempo = new cjs.Text("999", "33px 'Christmas Carols'", "#FFFFFF");
	this.tempo.name = "tempo";
	this.tempo.textAlign = "center";
	this.tempo.lineHeight = 45;
	this.tempo.lineWidth = 98;
	this.tempo.parent = this;
	this.tempo.setTransform(49.5,7.45);
	this.tempo.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,0);

	this.timeline.addTween(cjs.Tween.get(this.tempo).wait(30));

	// Layer_4
	this.instance = new lib.temporizadorGiro();
	this.instance.setTransform(49.95,24.25,1,1,0,0,0,39,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},6).to({rotation:180},8).to({rotation:270},8).to({regX:39.1,rotation:350.9999,y:24.3},7).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6699FF").s().p("AkTEUQhyhzAAihQAAihByhyQBzhyCgAAQCiAABxByQBzByAAChQAAChhzBzQhxByiiAAQigAAhzhyg");
	this.shape.setTransform(49.95,24.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-22,109,92.7);


(lib.indicacionesJuego = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_2
	this.bt1 = new lib.btTransp();
	this.bt1.name = "bt1";
	this.bt1.setTransform(628.15,303.05,1.563,2.1563,0,0,0,158,32);
	new cjs.ButtonHelper(this.bt1, 0, 1, 2, false, new lib.btTransp(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BfQgKAAAAgKIAAgeQAAgKAKAAIBGAAQAGAAABgIQgBgIgGgBIgngFQgUgDgKgJQgLgLAAgUIAAgbQAAgXAPgMQAOgMAaAAIBIAAQAKAAAAAKIAAAfQAAAKgKAAIg8AAQgHAAAAAHQAAAIAHABIAnAFQATADAKAJQALAKAAAVIAAAbQAAAXgOAMQgOAMgaAAg");
	this.shape.setTransform(765.15,308.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8BfQgJAAAAgKIAAipQAAgKAJAAIB5AAQAKAAAAAKIAAAfQAAAJgKAAIhIAAIAAAUIAzAAQAJAAAAAKIAAAbQAAAJgJAAIgzAAIAAAXIBIAAQAKAAAAAKIAAAeQAAAKgKAAg");
	this.shape_1.setTransform(748.1,308.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBfQgJAAAAgKIAAggIgsg2IAABWQAAAKgKAAIgoAAQgJAAAAgKIAAipQAAgKAJAAIAcAAQAKAAAFAHIAzA7IAAg4QAAgKAJAAIAnAAQAKAAAAAKIAACpQAAAKgKAAg");
	this.shape_2.setTransform(729.35,308.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBBUQgPgNAAgaIAAhZQAAgaAPgNQAUgPAtAAQAuAAAUAPQAQANAAAaIAABZQAAAagQANQgUAPguAAQgtAAgUgPgAgVgiIAABGQAAAMAVAAQANAAAGgEQADgCAAgGIAAhGQAAgMgWAAQgVAAAAAMg");
	this.shape_3.setTransform(709.75,308.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BfQgKAAAAgKIAAgfQAAgJAKAAIAaAAIAAhYIgaAAQgKAAAAgJIAAggQAAgKAKAAIBvAAQAKAAAAAKIAAAgQAAAJgKAAIgZAAIAABYIAZAAQAKAAAAAJIAAAfQAAAKgKAAg");
	this.shape_4.setTransform(692.1,308.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEBfQhAAAAAg2IAAhRQAAg2BAAAIA/AAQAKAAAAAKIAAAgQAAAJgKAAIg0AAQgPAAAAANIAAA+QAAANAPAAIA0AAQAKAAAAAJIAAAfQAAAKgKAAg");
	this.shape_5.setTransform(676.1,308.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDBfQhBAAAAg2IAAhRQAAg2BBAAIA+AAQAKAAAAAKIAAAgQAAAJgKAAIg0AAQgPAAAAANIAAA+QAAANAPAAIA0AAQAKAAAAAJIAAAfQAAAKgKAAg");
	this.shape_6.setTransform(659.6,308.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhABSQgQgNAAgaIAAiBQAAgKAJAAIApAAQAKAAAAAKIAAB3QAAAMAUAAQAWAAAAgMIAAh3QAAgKAKAAIAoAAQAJAAAAAKIAACBQAAAagQANQgTAPguAAQgtAAgTgPg");
	this.shape_7.setTransform(641.375,308.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhBfQgKAAAAgKIAAgoQAAgLgKAAIgkAAIAAAzQAAAKgJAAIgoAAQgKAAAAgKIAAipQAAgKAKAAIBWAAQA0AAAAAsIAAAMQAAAYgPAGQAPACAIAJQAJAKAAAQIAAA4QAAAKgJAAgAgXgNIAUAAQALAAAAgMIAAgJQAAgMgLAAIgUAAg");
	this.shape_8.setTransform(622.1,308.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUBfQgKAAAAgKIAAiAIgmAAQgKAAAAgJIAAggQAAgKAKAAICJAAQAKAAAAAKIAAAgQAAAJgKAAIgmAAIAACAQAAAKgKAAg");
	this.shape_9.setTransform(603.375,308.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag/BfQgJAAAAgKIAAgeQAAgKAJAAIBGAAQAGAAABgIQgBgIgGgBIgngFQgUgDgKgJQgLgLABgUIAAgbQAAgXAOgMQAOgMAaAAIBIAAQAKAAAAAKIAAAfQAAAKgKAAIg8AAQgHAAAAAHQAAAIAHABIAnAFQATADAKAJQAMAKgBAVIAAAbQAAAXgOAMQgOAMgaAAg");
	this.shape_10.setTransform(586.4,308.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgBfQgJAAAAgKIAAggIgsg2IAABWQAAAKgKAAIgoAAQgJAAAAgKIAAipQAAgKAJAAIAcAAQAKAAAFAHIAzA7IAAg4QAAgKAJAAIAnAAQAKAAAAAKIAACpQAAAKgKAAg");
	this.shape_11.setTransform(567.8,308.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag3BfQgJAAAAgKIAAgfQAAgJAJAAIAaAAIAAhYIgaAAQgJAAAAgJIAAggQAAgKAJAAIBvAAQAJAAAAAKIAAAgQAAAJgJAAIgaAAIAABYIAaAAQAJAAAAAJIAAAfQAAAKgJAAg");
	this.shape_12.setTransform(549.95,308.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAhBfQgJAAAAgKIAAgoQgBgLgJAAIgkAAIAAAzQAAAKgKAAIgpAAQgJAAAAgKIAAipQAAgKAJAAIBYAAQAzAAAAAsIAAAMQAAAYgOAGQAOACAIAJQAJAKAAAQIAAA4QAAAKgKAAgAgWgNIAUAAQAKAAAAgMIAAgJQAAgMgKAAIgUAAg");
	this.shape_13.setTransform(526.65,308.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag8BfQgKAAAAgKIAAipQAAgKAKAAIB5AAQAJAAABAKIAAAfQgBAJgJAAIhHAAIAAAUIAyAAQAKAAAAAKIAAAbQAAAJgKAAIgyAAIAAAXIBHAAQAJAAABAKIAAAeQgBAKgJAAg");
	this.shape_14.setTransform(508.2,308.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghBfQgKAAgEgJIgahAIgGgTQgCgGAAgMIAAhFQAAgKAJAAIAqAAQALAAAAAKIAABIQAAAFACAGIAMAkQABAFAEAAIACAAQAEAAABgFIAMgkQACgGAAgFIAAhIQAAgKAKAAIApAAQAKAAAAAKIAABFQAAAMgCAGIgHATIgaBAQgDAJgKAAg");
	this.shape_15.setTransform(489.775,308.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6600").s().p("A2pDIQhTAAg7g6Qg6g7AAhTQAAhSA6g7QA7g6BTAAMAtTAAAQBTAAA7A6QA6A7AABSQAABTg6A7Qg7A6hTAAg");
	this.shape_16.setTransform(625,307.05);

	this.bt2 = new lib.btTransp();
	this.bt2.name = "bt2";
	this.bt2.setTransform(700.05,416.5,1.563,2.1563,0,0,0,158,32);
	new cjs.ButtonHelper(this.bt2, 0, 1, 2, false, new lib.btTransp(), 3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA9CxQgSAAAAgSIAAhLQAAgVgSAAIhEAAIAABgQAAASgSAAIhMAAQgRAAAAgSIAAk9QAAgSARAAICjAAQBhAAAABSIAAAXQAAAsgcALQAcAEAQASQAQASAAAfIAABoQAAASgSAAgAgrgZIAlAAQAUABAAgXIAAgSQAAgXgUAAIglAAg");
	this.shape_17.setTransform(874.425,415.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA9CxQgTAAAAgSIAAhFIhWAAIAABFQgBASgRAAIhIAAQgSAAAAgSIAAiBQAAgeATgwIArhwQAFgQAUAAICEAAQASAAAGAQIArBwQATAwAAAeIAACBQAAASgSAAgAAlABIgXhKQgEgIgGAAIgLAAQgGAAgDAIIgYBKIBNAAg");
	this.shape_18.setTransform(837.55,415.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah5CxQgSAAAAgSIAAhBQAAgSANgNIB3iQIhpAAQgSAAAAgSIAAg7QAAgSASAAIDhAAQASAAAAASIAABJQAAASgNANIhyCJIB2AAQASAAAAASIAAA6QAAASgSAAg");
	this.shape_19.setTransform(803.375,415.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhxCxQgSAAAAgSIAAk9QAAgSASAAIDjAAQASAAAAASIAAA5QAAASgSAAIiHAAIAAAlIBfAAQASABAAARIAAA0QAAASgSAAIhfAAIAAAqICHAAQASAAAAASIAAA5QAAASgSAAg");
	this.shape_20.setTransform(771.625,415.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah7CxQgSAAAAgSIAAk9QAAgSASAAICVAAQBAAAAcAbQAYAWAAAvIAAA/QAAAtgYAXQgcAahAABIg4AAIAABRQABASgTAAgAgfgKIArAAQAYABAAgZIAAgaQAAgYgYAAIgrAAg");
	this.shape_21.setTransform(739.1,415.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABRCxQgRAAAAgSIAAisIgdA1QgIAPgSAAIgTAAQgSAAgIgPIgdg1IAACsQAAASgSAAIhJAAQgSAAAAgSIAAk9QAAgSASAAIBPAAQAOAAAJAPIAsBQQAFAIAEAAIADAAQAEAAAFgIIAshQQAIgPAOAAIBQAAQASAAAAASIAAE9QAAASgSAAg");
	this.shape_22.setTransform(700.675,415.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhxCxQgSAAAAgSIAAk9QAAgSASAAIDjAAQASAAAAASIAAA5QAAASgSAAIiHAAIAAAlIBfAAQASABAAARIAAA0QAAASgSAAIhfAAIAAAqICHAAQASAAAAASIAAA5QAAASgSAAg");
	this.shape_23.setTransform(664.225,415.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgOBgIAAggIAdAAIAAAggAgNAoIgDiHIAhAAIgDCHg");
	this.shape_24.setTransform(663.8,348.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgqA5IANgYQAOALANAAQAOAAAAgNQAAgHgIgHIgQgKQgZgOAAgXQAAgTAMgLQAMgLATAAQAUAAAOAKIgJAaQgMgJgMAAQgOAAAAANQAAAIAHAFIASAKQAZAOAAAYQAAASgLAMQgMAMgVAAQgXAAgSgPg");
	this.shape_25.setTransform(655.525,350.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgqA0QgRgUAAggQAAgfARgUQAQgUAaAAQAbAAAQAUQARAUAAAfQAAAggRAUQgQAUgbAAQgaAAgQgUgAgTgfQgHAMAAATQAAAUAHAMQAHAMAMAAQANAAAHgMQAHgMAAgUQAAgTgHgMQgHgMgNAAQgMAAgHAMg");
	this.shape_26.setTransform(643.975,350.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAyBHIAAhZQAAgVgNAAQgJAAgGALQgGAJAAANIAABNIgfAAIAAhZQAAgVgNAAQgKAAgGALQgFAKAAAPIAABKIggAAIAAiJIAfAAIAAAJIgBAJIABAAQALgWAXAAQAUAAAIAWIABAAQAOgWAWAAQAPAAAJAMQAJALAAAXIAABfg");
	this.shape_27.setTransform(627.625,350.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AglA9QgKgLAAgUQgBgtA8gBIAEAAIAAgDQABgYgTAAQgOAAgPAJIgJgYQAQgNAZAAQAXAAAMAPQANAOAAAaIAABWIgdAAIAAgJIABgKIgBAAQgMAUgUAAQgPAAgKgKgAgSAbQAAATAPAAQAIAAAGgLQAFgIAAgMIAAgKIgEAAQgeAAAAAWg");
	this.shape_28.setTransform(611.8,350.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgQBgIg1i/IAkAAIAdB8IAEAcIABAAQACgRADgLIAdh8IAjAAIg1C/g");
	this.shape_29.setTransform(599.325,348.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQBgIADiHIAbAAIADCHgAgNg/IAAggIAcAAIAAAgg");
	this.shape_30.setTransform(589.2,353.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgPARIAAghIAfAAIAAAhg");
	this.shape_31.setTransform(805.2,325.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_32.setTransform(796.225,320.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLBZQgMgLABgaIAAiUIAeAAIAACPQAAAMADADQACAEAGABIAFgBIAAAeIgKABQgQgBgJgHg");
	this.shape_33.setTransform(787.4,317.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYBPIgBAAIABAJIAAAGIgeAAIAAi/IAgAAIAAA6IgBALIABAAQAJgSAWAAQAVAAANAUQAMATAAAgQAAAggNAVQgNATgXAAQgWAAgIgSgAgXAZQAAAsAXAAQAXAAgBgsQAAgqgWgBQgXABAAAqg");
	this.shape_34.setTransform(777.25,317.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgPBgIAAiJIAfAAIAACJgAgPhAIAAgfIAfAAIAAAfg");
	this.shape_35.setTransform(767.25,317.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgqA5IANgYQAOALANAAQAOAAAAgNQAAgHgIgHIgQgKQgZgOAAgXQAAgTAMgLQAMgLATAAQAUAAAOAKIgJAaQgMgJgMAAQgOAAAAANQAAAIAHAFIASAKQAZAOAAAYQAAASgLAMQgMAMgVAAQgXAAgSgPg");
	this.shape_36.setTransform(759.225,320.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgqA0QgRgUAAggQAAgfARgUQAQgUAaAAQAbAAAQAUQARAUAAAfQAAAggRAUQgQAUgbAAQgaAAgQgUgAgTgfQgHAMAAATQAAAUAHAMQAHAMAMAAQANAAAHgMQAHgMAAgUQAAgTgHgMQgHgMgNAAQgMAAgHAMg");
	this.shape_37.setTransform(747.675,320.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag2BhIAAi+IAeAAIAAAIIgBAJIABAAQAJgUAXAAQAWgBAMAVQANATAAAgQAAAggNAUQgNAUgXAAQgUAAgIgQIgBAAIABALIAAA3gAgXgYQAAAqAXAAQAXAAgBgqQAAgsgWAAQgXAAAAAsg");
	this.shape_38.setTransform(734.6,323);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgqA0QgRgUAAggQAAgfARgUQAQgUAaAAQAbAAAQAUQARAUAAAfQAAAggRAUQgQAUgbAAQgaAAgQgUgAgTgfQgHAMAAATQAAAUAHAMQAHAMAMAAQANAAAHgMQAHgMAAgUQAAgTgHgMQgHgMgNAAQgMAAgHAMg");
	this.shape_39.setTransform(715.625,320.475);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag2BhIAAi+IAeAAIAAAIIgBAJIABAAQAIgUAXAAQAXgBAMAVQANATAAAgQAAAggNAUQgNAUgXAAQgUAAgIgQIAAAAIAAALIAAA3gAgWgYQgBAqAXAAQAXAAgBgqQAAgsgWAAQgWAAAAAsg");
	this.shape_40.setTransform(702.55,323);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAyBGIAAhZQAAgUgNAAQgJAAgGAKQgGAKAAANIAABMIgfAAIAAhZQAAgUgNAAQgKAAgGALQgFAKAAAPIAABJIggAAIAAiIIAfAAIAAAJIgBAJIABAAQALgWAXABQAUgBAIAWIABAAQAOgWAWABQAPAAAJALQAJALAAAXIAABeg");
	this.shape_41.setTransform(686.025,320.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_42.setTransform(670.325,320.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgPBgIAAiJIAfAAIAACJgAgPhAIAAgfIAfAAIAAAfg");
	this.shape_43.setTransform(661.3,317.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgCBPQgSgMAAgfIAAg6IgPAAIAAgaIAPAAIAAgnIAfAAIAAAnIAXAAIAAAaIgXAAIAAA2QAAAaAUAAIAEAAIAAAdIgJABQgSAAgKgJg");
	this.shape_44.setTransform(654.1,318.675);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgiBGIAAiJIAfAAIAAAVIAAAJIAAAAQADgNAJgJQAKgKALAAIAFABIAAAhIgHgBQgPAAgJAQQgGAOAAATIAAA5g");
	this.shape_45.setTransform(640.875,320.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgqA0QgRgUAAggQAAgfARgUQAQgUAaAAQAbAAAQAUQARAUAAAfQAAAggRAUQgQAUgbAAQgaAAgQgUgAgTgfQgHAMAAATQAAAUAHAMQAHAMAMAAQANAAAHgMQAHgMAAgUQAAgTgHgMQgHgMgNAAQgMAAgHAMg");
	this.shape_46.setTransform(629.225,320.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAUBGIAAhZQAAgUgPAAQgLAAgHAMQgGALAAANIAABJIggAAIAAiIIAfAAIAAAJIgBAJIABAAQALgWAYABQAlAAAAAtIAABeg");
	this.shape_47.setTransform(615.925,320.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_48.setTransform(603.225,320.475);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAyBGIAAhZQAAgUgNAAQgJAAgGAKQgGAKAAANIAABMIgfAAIAAhZQAAgUgNAAQgKAAgGALQgFAKAAAPIAABJIggAAIAAiIIAfAAIAAAJIgBAJIABAAQALgWAXABQAUgBAIAWIABAAQAOgWAWABQAPAAAJALQAJALAAAXIAABeg");
	this.shape_49.setTransform(587.675,320.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgKBZQgMgLAAgaIAAiUIAeAAIAACPQABAMACADQACAEAGABIAFgBIAAAeIgKABQgQgBgIgHg");
	this.shape_50.setTransform(569.85,317.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_51.setTransform(560.025,320.475);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAUBGIAAhZQAAgUgPAAQgLAAgHAMQgGALAAANIAABJIggAAIAAiIIAfAAIAAAJIgBAJIABAAQALgWAYABQAlAAAAAtIAABeg");
	this.shape_52.setTransform(542.225,320.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_53.setTransform(529.525,320.475);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgqA5IANgYQAOALANAAQAOAAAAgNQAAgHgIgHIgQgKQgZgOAAgXQAAgTAMgLQAMgLATAAQAUAAAOAKIgJAaQgMgJgMAAQgOAAAAANQAAAIAHAFIASAKQAZAOAAAYQAAASgLAMQgMAMgVAAQgXAAgSgPg");
	this.shape_54.setTransform(513.275,320.475);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AglA9QgLgLAAgUQAAgtA8AAIAEAAIAAgEQAAgYgSAAQgOAAgPAJIgJgYQAQgMAZAAQAXAAANANQAMAPgBAbIAABUIgcAAIAAgJIABgKIgBAAQgMAWgUgBQgPABgKgLgAgRAcQAAASANAAQAKAAAFgLQAGgIgBgMIAAgKIgEAAQgdAAAAAXg");
	this.shape_55.setTransform(502.3,320.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgcB7IAAgcIAGAAQATAAABgZIAAiLIAeAAIAACNQABAegTANQgKAJgTAAgAgChcIAAgfIAeAAIAAAfg");
	this.shape_56.setTransform(492.55,320.575);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_57.setTransform(484.725,320.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgiBGIAAiJIAfAAIAAAVIAAAJIAAAAQADgNAJgJQAKgKALAAIAFABIAAAhIgHgBQgPAAgJAQQgGAOAAATIAAA5g");
	this.shape_58.setTransform(474.875,320.375);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AglA9QgLgLAAgUQABgtA6AAIAGAAIAAgEQgBgYgSAAQgOAAgPAJIgJgYQARgMAYAAQAXAAANANQAMAPgBAbIAABUIgcAAIAAgJIAAgKIAAAAQgMAWgUgBQgPABgKgLgAgRAcQgBASAOAAQAJAAAGgLQAGgIAAgMIAAgKIgGAAQgcAAAAAXg");
	this.shape_59.setTransform(463.8,320.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("Ag2BhIAAi+IAdAAIAAAIIgBAJIABAAQAJgUAXAAQAXgBAMAVQANATAAAgQAAAggNAUQgNAUgXAAQgVAAgHgQIAAAAIAAALIAAA3gAgWgYQAAAqAWAAQAWAAABgqQAAgsgXAAQgWAAAAAsg");
	this.shape_60.setTransform(452.05,323);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_61.setTransform(851.225,290.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgqBNQgMgUAAggQAAggANgUQANgTAXAAQAUAAAHAPIABAAIgBgKIAAg3IAhAAIAAC+IgfAAIAAgJIABgJIAAAAQgKAVgWAAQgXAAgMgUgAgWAZQAAAsAXAAQAWAAAAgrQAAgTgEgLQgHgOgLAAQgXABAAAqg");
	this.shape_62.setTransform(838.35,287.55);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgqBNQgMgUAAggQAAggANgUQANgTAXAAQAUAAAIAPIAAAAIAAgKIAAg3IAgAAIAAC+IgfAAIAAgJIABgJIAAAAQgKAVgXAAQgVAAgNgUgAgVAZQAAAsAVAAQAXAAAAgrQABgTgGgLQgFgOgMAAQgXABABAqg");
	this.shape_63.setTransform(819.8,287.55);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AglA9QgLgMAAgTQAAguA8ABIAEAAIAAgDQAAgZgSAAQgOAAgPAJIgJgZQARgMAYABQAXgBANAOQALAPABAbIAABUIgdAAIAAgJIABgKIgBAAQgMAWgUAAQgPAAgKgLgAgSAcQAAASAOAAQAKAAAFgKQAGgJgBgMIAAgKIgEAAQgdAAgBAXg");
	this.shape_64.setTransform(807.3,290);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgqBNQgMgUAAggQAAggANgUQAMgTAYAAQAUAAAIAPIAAAAIAAgKIAAg3IAgAAIAAC+IgfAAIAAgJIABgJIAAAAQgKAVgXAAQgVAAgNgUgAgVAZQAAAsAVAAQAYAAAAgrQAAgTgGgLQgFgOgMAAQgXABABAqg");
	this.shape_65.setTransform(794.95,287.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgPBgIAAiJIAfAAIAACJgAgPhAIAAgfIAfAAIAAAfg");
	this.shape_66.setTransform(785.55,287.375);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgDBPQgSgMAAgfIAAg6IgNAAIAAgaIAPAAIAAgnIAeAAIAAAnIAXAAIAAAaIgXAAIAAA2QAAAaATAAIAGAAIAAAdIgKABQgSAAgLgJg");
	this.shape_67.setTransform(778.35,288.275);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAUBGIAAhZQAAgUgPAAQgLAAgHANQgGAJAAANIAABKIggAAIAAiIIAfAAIAAAJIgBAIIABAAQALgUAYAAQAlAAAAAtIAABeg");
	this.shape_68.setTransform(767.775,289.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AglA9QgLgMAAgTQABguA6ABIAGAAIAAgDQgBgZgSAAQgOAAgPAJIgJgZQARgMAYABQAXgBANAOQAMAPgBAbIAABUIgcAAIAAgJIAAgKIAAAAQgMAWgUAAQgPAAgKgLgAgRAcQgBASAOAAQAJAAAGgKQAGgJAAgMIAAgKIgGAAQgcAAAAAXg");
	this.shape_69.setTransform(754.95,290);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgjAzQgQgUAAgfQAAgeAQgUQASgVAdAAQAXAAAOANIgMAZQgJgKgPAAQgOAAgJANQgIALAAATQAAATAIAMQAJANAPAAQAQAAANgNIAJAaQgQAPgaAAQgcAAgRgVg");
	this.shape_70.setTransform(743.875,290.075);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgiBGIAAiJIAfAAIAAAVIAAAJIAAAAQADgNAJgJQAKgKALAAIAFABIAAAhIgHgBQgPAAgJAQQgGAOAAATIAAA5g");
	this.shape_71.setTransform(728.725,289.975);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgqA0QgRgUAAggQAAgfARgUQAQgUAaAAQAbAAAQAUQARAUAAAfQAAAggRAUQgQAUgbAAQgaAAgQgUgAgTgfQgHAMAAATQAAAUAHAMQAHAMAMAAQANAAAHgMQAHgMAAgUQAAgTgHgMQgHgMgNAAQgMAAgHAMg");
	this.shape_72.setTransform(717.075,290.075);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Ag0BaIAIgZQAHAFAGAAQAMAAAGgTIADgMIguiHIAjAAIAVBPIABARIABAAIADgRIAShPIAiAAIgsCcQgGASgLALQgLAIgOAAQgOAAgJgHg");
	this.shape_73.setTransform(704.275,292.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AglA9QgKgMAAgTQgBguA8ABIAEAAIAAgDQABgZgTAAQgOAAgPAJIgJgZQAQgMAZABQAXgBAMAOQANAPAAAbIAABUIgdAAIAAgJIABgKIgBAAQgMAWgUAAQgPAAgKgLgAgSAcQAAASAPAAQAIAAAGgKQAFgJAAgMIAAgKIgEAAQgeAAAAAXg");
	this.shape_74.setTransform(692.35,290);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAyBGIAAhZQAAgUgNAAQgJAAgGAKQgGAKAAANIAABMIgfAAIAAhZQAAgUgNAAQgKAAgGALQgFAKAAAOIAABKIggAAIAAiIIAfAAIAAAJIgBAIIABAAQALgUAXAAQAUAAAIAUIABAAQAOgUAWAAQAPgBAJALQAJAMAAAXIAABeg");
	this.shape_75.setTransform(677.325,289.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AglA9QgLgMAAgTQAAguA8ABIAEAAIAAgDQAAgZgSAAQgOAAgPAJIgJgZQAQgMAZABQAXgBANAOQAMAPgBAbIAABUIgcAAIAAgJIABgKIgBAAQgMAWgUAAQgPAAgKgLgAgRAcQAAASANAAQAKAAAFgKQAGgJgBgMIAAgKIgEAAQgdAAAAAXg");
	this.shape_76.setTransform(656.2,290);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgLBZQgMgKABgbIAAiTIAeAAIAACPQAAAKADAEQACAFAGAAIAFgBIAAAdIgKABQgQAAgJgHg");
	this.shape_77.setTransform(647.9,287.45);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_78.setTransform(632.775,290.075);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgiBGIAAiJIAfAAIAAAVIAAAJIAAAAQADgNAJgJQAKgKALAAIAFABIAAAhIgHgBQgPAAgJAQQgGAOAAATIAAA5g");
	this.shape_79.setTransform(622.925,289.975);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgYBPIgBAAIABAJIAAAGIgeAAIAAi+IAgAAIAAA4IgBAMIABAAQAJgSAWAAQAVAAANAUQAMATAAAgQAAAhgNATQgNAVgXgBQgWAAgIgSgAgXAZQAAAsAXAAQAXAAgBgsQAAgrgWAAQgXAAAAArg");
	this.shape_80.setTransform(611.65,287.55);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgzAZIAAheIAhAAIAABZQAAATAOABQAKgBAHgLQAHgLAAgNIAAhJIAgAAIAACIIgfAAIAAgJIAAgJIAAAAQgMAVgXAAQglAAAAgtg");
	this.shape_81.setTransform(598.125,290.25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgjAzQgQgUAAgfQAAgeAQgUQASgVAdAAQAXAAAOANIgMAZQgJgKgPAAQgOAAgJANQgIALAAATQAAATAIAMQAJANAPAAQAQAAANgNIAJAaQgQAPgaAAQgcAAgRgVg");
	this.shape_82.setTransform(585.975,290.075);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgqA5IANgYQAOALANAAQAOAAAAgNQAAgHgIgHIgQgKQgZgOAAgXQAAgTAMgLQAMgLATAAQAUAAAOAKIgJAaQgMgJgMAAQgOAAAAANQAAAIAHAFIASAKQAZAOAAAYQAAASgLAMQgMAMgVAAQgXAAgSgPg");
	this.shape_83.setTransform(575.025,290.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_84.setTransform(564.175,290.075);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AhABgIAAi/IA1AAQAjAAAVAZQAUAaAAAsQAAAtgUAZQgWAagiAAgAggBCIATAAQAVAAALgRQAMgRAAggQAAgfgMgSQgMgRgUAAIgTAAg");
	this.shape_85.setTransform(550.75,287.375);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgPARIAAghIAfAAIAAAhg");
	this.shape_86.setTransform(534.3,295.225);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AglA9QgKgMAAgTQAAguA6ABIAGAAIAAgDQAAgZgTAAQgOAAgPAJIgJgZQAQgMAZABQAXgBAMAOQAMAPAAAbIAABUIgcAAIAAgJIAAgKIAAAAQgMAWgUAAQgPAAgKgLgAgSAcQAAASAPAAQAIAAAGgKQAFgJABgMIAAgKIgGAAQgdAAAAAXg");
	this.shape_87.setTransform(525.2,290);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgCBPQgSgMAAgfIAAg6IgPAAIAAgaIAPAAIAAgnIAfAAIAAAnIAWAAIAAAaIgWAAIAAA2QAAAaAUAAIAEAAIAAAdIgJABQgSAAgKgJg");
	this.shape_88.setTransform(515.6,288.275);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgLBZQgLgKgBgbIAAiTIAgAAIAACPQAAAKACAEQACAFAGAAIAEgBIAAAdIgKABQgPAAgJgHg");
	this.shape_89.setTransform(508.7,287.45);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgzAZIAAheIAhAAIAABZQAAATAOABQAKgBAHgLQAHgLAAgNIAAhJIAgAAIAACIIgfAAIAAgJIAAgJIAAAAQgMAVgXAAQglAAAAgtg");
	this.shape_90.setTransform(498.325,290.25);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgjAzQgQgUAAgfQAAgeAQgUQASgVAdAAQAXAAAOANIgMAZQgJgKgPAAQgOAAgJANQgIALAAATQAAATAIAMQAJANAPAAQAQAAANgNIAJAaQgQAPgaAAQgcAAgRgVg");
	this.shape_91.setTransform(486.175,290.075);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgqA0QgRgUAAggQAAgfARgUQAQgUAaAAQAbAAAQAUQARAUAAAfQAAAggRAUQgQAUgbAAQgaAAgQgUgAgTgfQgHAMAAATQAAAUAHAMQAHAMAMAAQANAAAHgMQAHgMAAgUQAAgTgHgMQgHgMgNAAQgMAAgHAMg");
	this.shape_92.setTransform(473.475,290.075);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_93.setTransform(455.375,290.075);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgqA5IANgYQAOALANAAQAOAAAAgNQAAgHgIgHIgQgKQgZgOAAgXQAAgTAMgLQAMgLATAAQAUAAAOAKIgJAaQgMgJgMAAQgOAAAAANQAAAIAHAFIASAKQAZAOAAAYQAAASgLAMQgMAMgVAAQgXAAgSgPg");
	this.shape_94.setTransform(444.425,290.075);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_95.setTransform(428.275,290.075);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgzAZIAAheIAhAAIAABZQAAATAOABQAKgBAHgLQAHgLAAgNIAAhJIAgAAIAACIIgfAAIAAgJIAAgJIAAAAQgMAVgXAAQglAAAAgtg");
	this.shape_96.setTransform(415.725,290.25);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAWBhIAAg5IABgLIgBAAQgGASgWAAQgYAAgMgUQgMgTAAggQAAgiANgSQANgUAXAAQAJgBAJAFQAJAFADAJIABAAIgBgKIAAgFIAeAAIAAC+gAgWgYQAAArAXAAQAWAAAAgrQABgsgXAAQgXAAAAAsg");
	this.shape_97.setTransform(402.3,292.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AglA9QgLgMAAgTQAAguA8AAIAEAAIAAgCQAAgZgSAAQgOAAgPAJIgJgZQARgMAYAAQAXABAMAOQAMAOABAaIAABWIgdAAIAAgJIABgKIgBAAQgMAUgUABQgPAAgKgLgAgSAcQAAASAPAAQAJAAAFgKQAGgJgBgMIAAgKIgEAAQgeAAAAAXg");
	this.shape_98.setTransform(845.45,259.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgDBPQgSgMAAgfIAAg6IgNAAIAAgaIAOAAIAAgnIAfAAIAAAnIAWAAIAAAaIgWAAIAAA2QAAAaATAAIAGAAIAAAdIgKABQgSAAgLgJg");
	this.shape_99.setTransform(835.85,257.875);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgiBGIAAiJIAfAAIAAAVIAAAJIAAAAQADgNAJgJQAKgKALAAIAFABIAAAhIgHgBQgPAAgJAQQgGAOAAATIAAA5g");
	this.shape_100.setTransform(827.925,259.575);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AglA9QgLgMAAgTQAAguA8AAIAEAAIAAgCQAAgZgSAAQgOAAgPAJIgJgZQAQgMAZAAQAXABANAOQAMAOAAAaIAABWIgdAAIAAgJIABgKIgBAAQgMAUgUABQgPAAgKgLgAgRAcQAAASANAAQAKAAAFgKQAGgJgBgMIAAgKIgEAAQgdAAAAAXg");
	this.shape_101.setTransform(816.85,259.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgjAzQgQgUAAgfQAAgeAQgUQASgVAdAAQAXAAAOANIgMAZQgJgKgPAAQgOAAgJANQgIALAAATQAAATAIAMQAJANAPAAQAQAAANgNIAJAaQgQAPgaAAQgcAAgRgVg");
	this.shape_102.setTransform(805.775,259.675);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AglA9QgLgMABgTQAAguA6AAIAGAAIAAgCQAAgZgTAAQgOAAgPAJIgJgZQARgMAYAAQAXABAMAOQAMAOAAAaIAABWIgcAAIAAgJIAAgKIAAAAQgMAUgUABQgPAAgKgLgAgRAcQgBASAOAAQAJAAAGgKQAFgJABgMIAAgKIgGAAQgcAAAAAXg");
	this.shape_103.setTransform(788.35,259.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgLBZQgLgLgBgaIAAiTIAgAAIAACPQAAAKACAFQACADAGAAIAEAAIAAAdIgKABQgPABgJgIg");
	this.shape_104.setTransform(780.05,257.05);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_105.setTransform(764.925,259.675);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgiBGIAAiJIAfAAIAAAVIAAAJIAAAAQADgNAJgJQAKgKALAAIAFABIAAAhIgHgBQgPAAgJAQQgGAOAAATIAAA5g");
	this.shape_106.setTransform(755.075,259.575);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgZBPIgBAAIABAJIAAAGIgdAAIAAi+IAgAAIAAA4IgBAMIABAAQAJgSAWAAQAVAAANAUQAMAUAAAfQAAAggNAUQgOAVgVAAQgXgBgJgSgAgXAaQABArAWAAQAWAAAAgrQABgsgXABQgXgBAAAsg");
	this.shape_107.setTransform(743.8,257.15);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgzAZIAAheIAhAAIAABZQAAATAOAAQAKABAHgMQAHgLAAgNIAAhJIAgAAIAACIIgfAAIAAgJIAAgJIAAAAQgMAVgXABQglgBAAgtg");
	this.shape_108.setTransform(730.275,259.85);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgjAzQgQgUAAgfQAAgeAQgUQASgVAdAAQAXAAAOANIgMAZQgJgKgPAAQgOAAgJANQgIALAAATQAAATAIAMQAJANAPAAQAQAAANgNIAJAaQgQAPgaAAQgcAAgRgVg");
	this.shape_109.setTransform(718.125,259.675);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgqA5IANgYQAOALANAAQAOAAAAgNQAAgHgIgHIgQgKQgZgOAAgXQAAgTAMgLQAMgLATAAQAUAAAOAKIgJAaQgMgJgMAAQgOAAAAANQAAAIAHAFIASAKQAZAOAAAYQAAASgLAMQgMAMgVAAQgXAAgSgPg");
	this.shape_110.setTransform(707.175,259.675);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_111.setTransform(696.325,259.675);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgqBNQgMgUAAggQAAggANgTQANgUAXAAQAUAAAIAOIAAAAIAAgJIAAg3IAgAAIAAC+IgfAAIAAgJIABgJIAAAAQgKAVgXABQgVgBgNgUgAgVAZQAAAsAVAAQAYAAgBgrQABgTgGgLQgFgNgMAAQgXAAABAqg");
	this.shape_112.setTransform(683.45,257.15);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("Ag0BaIAIgZQAHAFAGAAQAMAAAGgTIADgLIguiIIAjAAIAVBPIABARIABAAIADgRIAShPIAiAAIgsCcQgGASgLALQgLAIgOAAQgOAAgJgHg");
	this.shape_113.setTransform(665.775,262.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AglA9QgLgMAAgTQAAguA8AAIAEAAIAAgCQAAgZgSAAQgOAAgPAJIgJgZQAQgMAZAAQAXABANAOQAMAOgBAaIAABWIgcAAIAAgJIABgKIgBAAQgMAUgUABQgPAAgKgLgAgRAcQAAASANAAQAKAAAFgKQAGgJgBgMIAAgKIgEAAQgdAAAAAXg");
	this.shape_114.setTransform(648.55,259.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgCBPQgTgMABgfIAAg6IgPAAIAAgaIAQAAIAAgnIAeAAIAAAnIAXAAIAAAaIgXAAIAAA2QAAAaATAAIAGAAIAAAdIgKABQgSAAgKgJg");
	this.shape_115.setTransform(638.95,257.875);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgiBGIAAiJIAfAAIAAAVIAAAJIAAAAQADgNAJgJQAKgKALAAIAFABIAAAhIgHgBQgPAAgJAQQgGAOAAATIAAA5g");
	this.shape_116.setTransform(631.025,259.575);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AglA9QgLgMAAgTQABguA6AAIAGAAIAAgCQgBgZgSAAQgOAAgPAJIgJgZQARgMAYAAQAXABANAOQAMAOgBAaIAABWIgcAAIAAgJIAAgKIAAAAQgMAUgUABQgPAAgKgLgAgRAcQgBASAOAAQAJAAAGgKQAGgJAAgMIAAgKIgGAAQgcAAAAAXg");
	this.shape_117.setTransform(619.95,259.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgjAzQgQgUAAgfQAAgeAQgUQASgVAdAAQAXAAAOANIgMAZQgJgKgPAAQgOAAgJANQgIALAAATQAAATAIAMQAJANAPAAQAQAAANgNIAJAaQgQAPgaAAQgcAAgRgVg");
	this.shape_118.setTransform(608.875,259.675);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AglA9QgKgMAAgTQAAguA6AAIAFAAIAAgCQABgZgTAAQgOAAgPAJIgJgZQAQgMAZAAQAXABAMAOQANAOAAAaIAABWIgdAAIAAgJIAAgKIAAAAQgMAUgUABQgPAAgKgLgAgSAcQABASAOAAQAIAAAGgKQAFgJAAgMIAAgKIgFAAQgdAAAAAXg");
	this.shape_119.setTransform(591.45,259.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgqBNQgMgUAAggQAAggAMgTQAOgUAWAAQAVAAAHAOIABAAIgBgJIAAg3IAhAAIAAC+IgeAAIAAgJIABgJIgBAAQgJAVgYABQgWgBgMgUgAgWAZQAAAsAWAAQAYAAAAgrQgBgTgEgLQgHgNgLAAQgXAAAAAqg");
	this.shape_120.setTransform(579.1,257.15);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AglA9QgKgMAAgTQAAguA6AAIAGAAIAAgCQAAgZgTAAQgOAAgPAJIgJgZQAQgMAZAAQAXABAMAOQAMAOAAAaIAABWIgcAAIAAgJIAAgKIAAAAQgMAUgUABQgPAAgKgLgAgSAcQABASAOAAQAIAAAGgKQAFgJABgMIAAgKIgGAAQgdAAAAAXg");
	this.shape_121.setTransform(566.6,259.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgjAzQgQgUAAgfQAAgeAQgUQASgVAdAAQAXAAAOANIgMAZQgJgKgPAAQgOAAgJANQgIALAAATQAAATAIAMQAJANAPAAQAQAAANgNIAJAaQgQAPgaAAQgcAAgRgVg");
	this.shape_122.setTransform(555.525,259.675);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_123.setTransform(538.225,259.675);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgiBGIAAiJIAfAAIAAAVIAAAJIAAAAQADgNAJgJQAKgKALAAIAFABIAAAhIgHgBQgPAAgJAQQgGAOAAATIAAA5g");
	this.shape_124.setTransform(528.375,259.575);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgZBPIgBAAIABAJIAAAGIgdAAIAAi+IAgAAIAAA4IgBAMIABAAQAJgSAWAAQAWAAAMAUQAMAUAAAfQAAAggNAUQgOAVgVAAQgXgBgJgSgAgXAaQABArAWAAQAXAAAAgrQAAgsgXABQgXgBAAAsg");
	this.shape_125.setTransform(517.1,257.15);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgqA0QgRgUAAggQAAgfARgUQAQgUAaAAQAbAAAQAUQARAUAAAfQAAAggRAUQgQAUgbAAQgaAAgQgUgAgTgfQgHAMAAATQAAAUAHAMQAHAMAMAAQANAAAHgMQAHgMAAgUQAAgTgHgMQgHgMgNAAQgMAAgHAMg");
	this.shape_126.setTransform(503.425,259.675);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgqA5IANgYQAOALANAAQAOAAAAgNQAAgHgIgHIgQgKQgZgOAAgXQAAgTAMgLQAMgLATAAQAUAAAOAKIgJAaQgMgJgMAAQgOAAAAANQAAAIAHAFIASAKQAZAOAAAYQAAASgLAMQgMAMgVAAQgXAAgSgPg");
	this.shape_127.setTransform(491.675,259.675);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgjAzQgQgUAAgfQAAgeAQgUQASgVAdAAQAXAAAOANIgMAZQgJgKgPAAQgOAAgJANQgIALAAATQAAATAIAMQAJANAPAAQAQAAANgNIAJAaQgQAPgaAAQgcAAgRgVg");
	this.shape_128.setTransform(475.925,259.675);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgPBgIAAiJIAfAAIAACJgAgPhAIAAgfIAfAAIAAAfg");
	this.shape_129.setTransform(466.9,256.975);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgLBZQgLgLgBgaIAAiTIAgAAIAACPQAAAKACAFQACADAGAAIAEAAIAAAdIgKABQgPABgJgIg");
	this.shape_130.setTransform(461,257.05);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgjAzQgQgUAAgfQAAgeAQgUQASgVAdAAQAXAAAOANIgMAZQgJgKgPAAQgOAAgJANQgIALAAATQAAATAIAMQAJANAPAAQAQAAANgNIAJAaQgQAPgaAAQgcAAgRgVg");
	this.shape_131.setTransform(451.575,259.675);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgwBFIAAgTIAwhOQAEgIAEgEIAAgBIgIABIguAAIAAgcIBdAAIAAATIgvBOIgJAMIAAABIAJgBIAxAAIAAAcg");
	this.shape_132.setTransform(434.7,259.675);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AglA9QgLgMABgTQAAguA6AAIAGAAIAAgCQAAgZgTAAQgOAAgPAJIgJgZQARgMAYAAQAXABANAOQALAOAAAaIAABWIgcAAIAAgJIAAgKIAAAAQgMAUgUABQgPAAgKgLgAgRAcQgBASAOAAQAJAAAGgKQAFgJABgMIAAgKIgGAAQgcAAAAAXg");
	this.shape_133.setTransform(422.95,259.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAeBgIAAhRIg7AAIAABRIggAAIAAi/IAgAAIAABSIA7AAIAAhSIAgAAIAAC/g");
	this.shape_134.setTransform(409.575,256.975);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgUBiIAAggIAcAAIAAAggAgVAqIAAgKQAAgWAQgSIALgPQAFgIAAgKQAAgLgGgHQgFgHgJAAQgNAAgHAHIgPgYQAQgOAXAAQAWAAANAOQAPAPAAAYQAAAXgSAVQgKAKgCAFQgGAJAAAKIAAAIg");
	this.shape_135.setTransform(747.05,226.375);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AglA9QgLgLAAgUQABgtA6gBIAGAAIAAgCQgBgZgSAAQgOAAgPAJIgJgYQARgMAYgBQAXABANAOQALAOAAAaIAABWIgcAAIAAgJIAAgKIAAAAQgMAUgUAAQgPAAgKgKgAgRAbQgBATAOAAQAJAAAGgLQAGgIAAgMIAAgKIgGAAQgcAAAAAWg");
	this.shape_136.setTransform(735.6,229.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgPBgIAAiJIAfAAIAACJgAgPhAIAAgfIAfAAIAAAfg");
	this.shape_137.setTransform(727.1,226.575);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgiBGIAAiJIAfAAIAAAVIAAAJIAAAAQADgNAJgJQAKgKALAAIAFABIAAAhIgHgBQgPAAgJAQQgGAOAAATIAAA5g");
	this.shape_138.setTransform(720.175,229.175);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgqA0QgRgUAAggQAAgfARgUQAQgUAaAAQAbAAAQAUQARAUAAAfQAAAggRAUQgQAUgbAAQgaAAgQgUgAgTgfQgHAMAAATQAAAUAHAMQAHAMAMAAQANAAAHgMQAHgMAAgUQAAgTgHgMQgHgMgNAAQgMAAgHAMg");
	this.shape_139.setTransform(708.525,229.275);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAyBHIAAhZQAAgVgNAAQgJAAgGALQgGAJAAANIAABNIgfAAIAAhZQAAgVgNAAQgKAAgGALQgFAKAAAPIAABKIggAAIAAiJIAfAAIAAAJIgBAJIABAAQALgWAXAAQAUAAAIAWIABAAQAOgWAWAAQAPABAJAKQAJAMAAAXIAABfg");
	this.shape_140.setTransform(692.175,229.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_141.setTransform(676.475,229.275);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AAyBHIAAhZQAAgVgNAAQgJAAgGALQgGAJAAANIAABNIgfAAIAAhZQAAgVgNAAQgKAAgGALQgFAKAAAPIAABKIggAAIAAiJIAfAAIAAAJIgBAJIABAAQALgWAXAAQAUAAAIAWIABAAQAOgWAWAAQAPABAJAKQAJAMAAAXIAABfg");
	this.shape_142.setTransform(660.925,229.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AglA9QgKgLAAgUQgBgtA8gBIAEAAIAAgCQAAgZgSAAQgOAAgPAJIgJgYQARgMAYgBQAXABAMAOQAMAOABAaIAABWIgdAAIAAgJIABgKIgBAAQgMAUgUAAQgPAAgKgKgAgSAbQAAATAPAAQAJAAAFgLQAFgIAAgMIAAgKIgEAAQgeAAAAAWg");
	this.shape_143.setTransform(639.8,229.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAUBHIAAhZQAAgVgPAAQgLAAgHAMQgGALAAANIAABKIggAAIAAiJIAfAAIAAAJIgBAJIABAAQALgWAYAAQAlAAAAAuIAABfg");
	this.shape_144.setTransform(627.825,229.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_145.setTransform(615.125,229.275);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgzAZIAAhfIAhAAIAABZQAAAVAOgBQAKAAAHgMQAHgKAAgNIAAhKIAgAAIAACJIgfAAIAAgJIAAgJIAAAAQgMAVgXABQglAAAAgug");
	this.shape_146.setTransform(602.575,229.45);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgYBPIgBAAIABAJIAAAGIgeAAIAAi/IAgAAIAAA5IgBAMIABAAQAJgSAWAAQAVAAANAUQAMAUAAAfQAAAhgNAUQgNATgXABQgWAAgIgTgAgXAaQAAArAXAAQAXAAgBgrQAAgrgWAAQgXAAAAArg");
	this.shape_147.setTransform(589.7,226.75);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgqA5IANgYQAOALANAAQAOAAAAgNQAAgHgIgHIgQgKQgZgOAAgXQAAgTAMgLQAMgLATAAQAUAAAOAKIgJAaQgMgJgMAAQgOAAAAANQAAAIAHAFIASAKQAZAOAAAYQAAASgLAMQgMAMgVAAQgXAAgSgPg");
	this.shape_148.setTransform(572.475,229.275);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_149.setTransform(561.625,229.275);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAUBHIAAhZQAAgVgPAAQgLAAgHAMQgGALAAANIAABKIggAAIAAiJIAfAAIAAAJIgBAJIABAAQALgWAYAAQAlAAAAAuIAABfg");
	this.shape_150.setTransform(549.125,229.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgkAyQgPgTAAgfQAAggAOgTQAPgUAZAAQAYAAANATQAMARAAAbIgBAOIhFAAQABATAJAKQAIAJALAAQASAAANgNIAJAZQgRAQgbAAQgcAAgPgWgAAVgPQAAgegTAAQgRAAgEAeIAoAAIAAAAg");
	this.shape_151.setTransform(536.425,229.275);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgPBgIAAiJIAfAAIAACJgAgPhAIAAgfIAfAAIAAAfg");
	this.shape_152.setTransform(527.4,226.575);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgQBgIAAiiIgtAAIAAgdIB8AAIAAAdIgvAAIAACig");
	this.shape_153.setTransform(517.8,226.575);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgeBUQgOgPAAgYQAAgXASgVIANgPQAFgJAAgKIAAgIIAeAAIAAAKQAAAWgQASIgLAPQgFAIAAAKQAAAMAGAGQAFAHAKAAQAMAAAHgHIAPAZQgQANgYAAQgVAAgOgOgAgHhBIAAggIAdAAIAAAgg");
	this.shape_154.setTransform(506.025,232.175);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AwsBxIgPgCIgOgCIgOgDIgOgCIgUgDIgTgFIgFgBIgFgDIgDgDIgDgEIgDgEIgCgEIgBgFIAAgFIAAgFIACgEIABgFIADgEIADgEIADgCIAFgDIAFgCIAFgBIAFgBIAGgBIAGABIAHABIAGABIAIABIAGABIACAAQDCANDBgrQCbghCbgbQCkgbCmgSQChgRCjAAQChAACjAEQCkADCjAVQCRARCCA8QAKAFAGAJIADAEIABAFIACAFIABAFIAAAGIAAAGIgBAGIgCAGIgCAFIgEAGIgEAEIgFAEIgFAEIgGADIgFACIgHABIgGAAIgGAAIgFgBIgGgCIgFgCIgFgDIgEgEIgEgEIgEgEIgFgDIgFgCQi8g6jFgOQiigLiiAAQikgBimADQigAEifAXQigAZifAgQifAhihAQQhEAHhFAAIgZAAg");
	this.shape_155.setTransform(765,452.8841);

	this.bt3 = new lib.btTransp();
	this.bt3.name = "bt3";
	this.bt3.setTransform(675.65,416.5,1.563,2.1563,0,0,0,158,32);
	new cjs.ButtonHelper(this.bt3, 0, 1, 2, false, new lib.btTransp(), 3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AA9CxQgTAAAAgSIAAhFIhWAAIAABFQAAASgSAAIhIAAQgSAAAAgSIAAiBQAAgeATgwIArhwQAGgQATAAICDAAQAUAAAFAQIArBwQATAwAAAeIAACBQAAASgSAAgAAlABIgXhKQgEgIgGAAIgLAAQgGAAgDAIIgYBKIBNAAg");
	this.shape_156.setTransform(827.85,415.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("Ah3CxQgRAAAAgSIAAg5QAAgSARAAICDAAQANAAAAgOQAAgQgNgBIhIgKQgmgGgSgRQgVgTABgnIAAg0QAAgpAbgXQAagWAwAAICJAAQASAAAAASIAAA6QAAASgSAAIhxAAQgOAAAAAPQAAAOAOABIBIALQAlAFATARQAUATAAAnIAAAzQAAAqgbAWQgbAXgvAAg");
	this.shape_157.setTransform(794.2,415.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AA9CxQgSAAAAgSIAAhLQAAgVgSAAIhEAAIAABgQAAASgSAAIhMAAQgRAAAAgSIAAk9QAAgSARAAICjAAQBhAAAABSIAAAXQAAAsgcALQAcAEAQASQAQASAAAfIAABoQAAASgSAAgAgrgZIAlAAQAUABAAgXIAAgSQAAgXgUAAIglAAg");
	this.shape_158.setTransform(728.225,415.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgZCxQh5AAAAhkIAAiZQAAhkB5AAIB6AAQASAAAAASIAAA7QAAASgSAAIhlAAQgeAAAAAZIAAB0QAAAYAXAAIAuAAIAAhNQAAgQASgBIBMAAQASABAAAQIAACYQAAASgSAAg");
	this.shape_159.setTransform(692.025,415.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AA9CxQgSAAAAgSIAAhLQAAgVgSAAIhEAAIAABgQAAASgSAAIhMAAQgRAAAAgSIAAk9QAAgSARAAICjAAQBhAAAABSIAAAXQAAAsgcALQAcAEAQASQAQASAAAfIAABoQAAASgSAAgAgrgZIAlAAQAUABAAgXIAAgSQAAgXgUAAIglAAg");
	this.shape_160.setTransform(624.775,415.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgOARIAAghIAdAAIAAAhg");
	this.shape_161.setTransform(862.45,295.225);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgDBPQgRgMgBgfIAAg6IgOAAIAAgaIAPAAIAAgnIAfAAIAAAnIAWAAIAAAaIgWAAIAAA2QAAAaAUAAIAEAAIAAAdIgJABQgSAAgLgJg");
	this.shape_162.setTransform(830.15,288.275);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("Ag2BhIAAi+IAdAAIAAAHIgBAKIABAAQAKgVAXABQAWAAANAUQAMASAAAhQAAAhgNATQgOAUgVAAQgVAAgIgQIgBAAIABALIAAA3gAgXgYQABArAWAAQAXAAAAgrQAAgsgXAAQgXAAAAAsg");
	this.shape_163.setTransform(807.8,292.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AAUBGIAAhZQAAgUgPAAQgLAAgHANQgGAJAAANIAABKIggAAIAAiIIAfAAIAAAJIgBAIIABAAQALgUAYAAQAlAAAAAtIAABeg");
	this.shape_164.setTransform(735.125,289.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAWBhIAAg5IABgLIgBAAQgGASgXAAQgXAAgMgUQgMgTAAggQAAgiAMgSQANgUAYAAQAKgBAHAFQAJAFAFAJIAAAAIgBgKIAAgFIAeAAIAAC+gAgWgYQAAArAXAAQAXAAAAgrQgBgsgWAAQgXAAAAAsg");
	this.shape_165.setTransform(691.15,292.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AglA9QgLgMAAgTQAAguA8ABIAEAAIAAgDQAAgZgSAAQgOAAgPAJIgJgZQARgMAYABQAXgBAMAOQAMAPABAbIAABUIgdAAIAAgJIABgKIgBAAQgMAWgUAAQgPAAgKgLgAgSAcQAAASAPAAQAJAAAFgKQAGgJgBgMIAAgKIgEAAQgeAAAAAXg");
	this.shape_166.setTransform(647.45,290);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("Ag2BhIAAi+IAeAAIAAAHIgCAKIACAAQAIgVAXABQAXAAAMAUQANASAAAhQAAAhgNATQgNAUgXAAQgVAAgHgQIAAAAIAAALIAAA3gAgWgYQgBArAXAAQAXAAAAgrQAAgsgXAAQgWAAAAAsg");
	this.shape_167.setTransform(615.5,292.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AglA9QgLgMABgTQAAguA6ABIAGAAIAAgDQAAgZgTAAQgOAAgPAJIgJgZQAQgMAZABQAXgBAMAOQAMAPAAAbIAABUIgcAAIAAgJIAAgKIAAAAQgMAWgUAAQgPAAgKgLgAgRAcQgBASAOAAQAJAAAGgKQAFgJABgMIAAgKIgGAAQgcAAAAAXg");
	this.shape_168.setTransform(566.5,290);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgWAgIAPg/IAeAAIgWA/g");
	this.shape_169.setTransform(552.2,296.625);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgqBNQgMgUAAggQAAggANgUQANgTAXAAQAUAAAIAPIAAAAIAAgKIAAg3IAgAAIAAC+IgfAAIAAgJIABgJIAAAAQgKAVgXAAQgVAAgNgUgAgVAZQAAAsAVAAQAYAAgBgrQABgTgGgLQgFgOgMAAQgXABABAqg");
	this.shape_170.setTransform(519.2,287.55);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgwBFIAAgTIAwhOQAEgIAEgEIAAgBIgIABIgtAAIAAgcIBcAAIAAATIgvBOIgIAMIAAABIAIgBIAwAAIAAAcg");
	this.shape_171.setTransform(495.65,290.075);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAUBGIAAhZQAAgUgPAAQgLAAgHANQgGAJAAANIAABKIggAAIAAiIIAfAAIAAAJIgBAIIABAAQALgUAYAAQAlAAAAAtIAABeg");
	this.shape_172.setTransform(477.425,289.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AglA9QgLgMAAgTQABguA6ABIAGAAIAAgDQgBgZgSAAQgOAAgPAJIgJgZQAQgMAZABQAXgBANAOQAMAPgBAbIAABUIgcAAIAAgJIAAgKIAAAAQgMAWgUAAQgPAAgKgLgAgRAcQAAASANAAQAKAAAFgKQAGgJAAgMIAAgKIgGAAQgcAAAAAXg");
	this.shape_173.setTransform(464.6,290);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgqBZIAHgaQAMAIARAAQAcAAAAgjIAAgGIAAgIIAAAAQgJASgSAAQgYAAgMgVQgMgTAAgdQAAgeAMgTQANgUAXAAQAVAAAIASIABAAIAAgEIAAgKIAdAAIAACAQAAAhgSARQgQAPgYAAQgVAAgRgKgAgUgeQAAApAVAAQAWAAAAgoQAAgogXAAQgUAAAAAng");
	this.shape_174.setTransform(452.325,292.725);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AglA9QgLgMAAgTQABguA7AAIAFAAIAAgCQgBgZgSAAQgOAAgPAJIgJgZQAQgMAZAAQAXABANAOQAMAOgBAaIAABWIgcAAIAAgJIAAgKIAAAAQgMAUgUABQgPAAgKgLgAgRAcQAAASANAAQAKAAAFgKQAGgJAAgMIAAgKIgFAAQgdAAAAAXg");
	this.shape_175.setTransform(843.05,259.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgWAgIAPg/IAeAAIgWA/g");
	this.shape_176.setTransform(828.75,266.225);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAUBHIAAhZQAAgVgPAAQgLAAgHANQgGAKAAAMIAABLIggAAIAAiJIAfAAIAAAJIgBAIIABAAQALgUAYgBQAlAAAAAuIAABfg");
	this.shape_177.setTransform(819.425,259.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgqBNQgRgUAAggQAAgeARgVQAQgUAaAAQAbAAAQAVQARAUAAAeQAAAggRAUQgQAVgbAAQgaAAgQgVgAgTgFQgHAKAAAUQAAAUAHAMQAHAMAMAAQANAAAHgMQAHgMAAgUQAAgUgHgKQgHgNgNAAQgMAAgHANgAgOg8IAQglIAgAAIgXAlg");
	this.shape_178.setTransform(806.025,257.125);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgLBZQgMgLABgaIAAiTIAeAAIAACPQAAAKADAFQACADAGAAIAFAAIAAAdIgKABQgQABgJgIg");
	this.shape_179.setTransform(796.4,257.05);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgKBZQgNgLAAgaIAAiTIAgAAIAACPQgBAKADAFQACADAGAAIAEAAIAAAdIgKABQgPABgIgIg");
	this.shape_180.setTransform(763.05,257.05);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AAUBHIAAhZQAAgVgPAAQgLAAgHANQgGAKAAAMIAABLIggAAIAAiJIAfAAIAAAJIgBAIIABAAQALgUAYgBQAlAAAAAuIAABfg");
	this.shape_181.setTransform(735.425,259.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AglA9QgKgMAAgTQAAguA6AAIAGAAIAAgCQAAgZgTAAQgOAAgPAJIgJgZQAQgMAZAAQAXABAMAOQANAOAAAaIAABWIgdAAIAAgJIAAgKIAAAAQgMAUgUABQgPAAgKgLgAgSAcQABASAOAAQAIAAAGgKQAFgJABgMIAAgKIgGAAQgdAAAAAXg");
	this.shape_182.setTransform(705.3,259.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AAUBHIAAhZQAAgVgPAAQgLAAgHANQgGAKAAAMIAABLIggAAIAAiJIAfAAIAAAJIgBAIIABAAQALgUAYgBQAlAAAAAuIAABfg");
	this.shape_183.setTransform(675.625,259.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgTBFIgliJIAiAAIATBUIADAVIAAAAIADgVIAUhUIAiAAIglCJg");
	this.shape_184.setTransform(650.975,259.675);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgTBFIgliJIAiAAIATBUIADAVIAAAAIADgVIAUhUIAiAAIglCJg");
	this.shape_185.setTransform(632.875,259.675);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AAUBHIAAhZQAAgVgPAAQgLAAgHANQgGAKAAAMIAABLIggAAIAAiJIAfAAIAAAJIgBAIIABAAQALgUAYgBQAlAAAAAuIAABfg");
	this.shape_186.setTransform(620.325,259.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgcB7IAAgcIAGAAQATAAAAgZIAAiLIAgAAIAACNQAAAegSANQgLAJgTAAgAgDhcIAAgfIAgAAIAAAfg");
	this.shape_187.setTransform(556.65,259.775);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AAyBHIAAhZQAAgVgNAAQgJAAgGALQgGAJAAANIAABNIgfAAIAAhZQAAgVgNAAQgKAAgGALQgFAKAAAOIAABLIggAAIAAiJIAfAAIAAAJIgBAIIABAAQALgUAXgBQAUABAIAUIABAAQAOgUAWgBQAPAAAJALQAJAMAAAXIAABfg");
	this.shape_188.setTransform(533.275,259.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AAUBHIAAhZQAAgVgPAAQgLAAgHANQgGAKAAAMIAABLIggAAIAAiJIAfAAIAAAJIgBAIIABAAQALgUAYgBQAlAAAAAuIAABfg");
	this.shape_189.setTransform(500.175,259.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAUBHIAAhZQAAgVgPAAQgLAAgHANQgGAKAAAMIAABLIggAAIAAiJIAfAAIAAAJIgBAIIABAAQALgUAYgBQAlAAAAAuIAABfg");
	this.shape_190.setTransform(447.775,259.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgCBPQgTgMABgfIAAg6IgPAAIAAgaIAQAAIAAgnIAeAAIAAAnIAXAAIAAAaIgXAAIAAA2QAAAaAUAAIAEAAIAAAdIgJABQgSAAgKgJg");
	this.shape_191.setTransform(424.95,257.875);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AglA9QgLgLAAgUQABgtA7gBIAFAAIAAgCQgBgZgSAAQgOAAgPAJIgJgYQAQgMAZgBQAXABANAOQAMAOgBAaIAABWIgcAAIAAgJIAAgKIAAAAQgMAUgUAAQgPAAgKgKgAgRAbQAAATANAAQAKAAAFgLQAGgIAAgMIAAgKIgFAAQgdAAAAAWg");
	this.shape_192.setTransform(845.3,229.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgqBNQgMgTAAghQAAggANgTQANgUAXAAQAUAAAIAOIAAAAIAAgJIAAg4IAgAAIAAC/IgfAAIAAgJIABgJIAAAAQgKAVgWABQgXAAgMgVgAgVAZQAAAsAWAAQAWAAAAgrQAAgTgEgLQgHgNgLAAQgXAAABAqg");
	this.shape_193.setTransform(832.95,226.75);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("Ag0BaIAIgYQAHAEAGAAQAMAAAGgTIADgLIguiIIAjAAIAVBPIABARIABAAIADgRIAShPIAiAAIgsCcQgGASgLAKQgLAJgOAAQgOAAgJgHg");
	this.shape_194.setTransform(807.475,232.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AglA9QgLgLABgUQAAgtA6gBIAGAAIAAgCQAAgZgTAAQgOAAgPAJIgJgYQARgMAYgBQAXABANAOQALAOAAAaIAABWIgcAAIAAgJIAAgKIAAAAQgMAUgUAAQgPAAgKgKgAgRAbQgBATAOAAQAJAAAGgLQAFgIABgMIAAgKIgGAAQgcAAAAAWg");
	this.shape_195.setTransform(795.55,229.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AglA9QgLgLAAgUQABgtA6gBIAGAAIAAgCQgBgZgSAAQgOAAgPAJIgJgYQARgMAYgBQAXABANAOQAMAOgBAaIAABWIgcAAIAAgJIAAgKIAAAAQgMAUgUAAQgPAAgKgKgAgRAbQgBATAOAAQAJAAAGgLQAGgIAAgMIAAgKIgGAAQgcAAAAAWg");
	this.shape_196.setTransform(727.05,229.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AAUBHIAAhZQAAgVgPAAQgLAAgHAMQgGALAAANIAABKIggAAIAAiJIAfAAIAAAJIgBAJIABAAQALgWAYAAQAlAAAAAuIAABfg");
	this.shape_197.setTransform(673.525,229.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgqA5IANgYQAOALANAAQAOAAAAgNQAAgHgIgHIgQgKQgZgOAAgXQAAgTAMgLQAMgLATAAQAUAAAOAKIgJAaQgMgJgMAAQgOAAAAANQAAAIAHAFIASAKQAZAOAAAYQAAASgLAMQgMAMgVAAQgXAAgSgPg");
	this.shape_198.setTransform(656.575,229.275);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgLBZQgMgLABgaIAAiUIAfAAIAACPQAAALACAFQACADAGAAIAEAAIAAAdIgKACQgPAAgJgIg");
	this.shape_199.setTransform(637.3,226.65);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgzAZIAAhfIAhAAIAABZQAAAVAOgBQAKAAAHgMQAHgKAAgNIAAhKIAgAAIAACJIgfAAIAAgJIAAgJIAAAAQgMAVgXABQglAAAAgug");
	this.shape_200.setTransform(609.625,229.45);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAWBiIAAg6IABgMIgBAAQgGATgXAAQgXAAgMgUQgMgTAAghQAAggAMgUQANgTAYgBQAKABAHAEQAJAFAFAIIAAAAIgBgKIAAgEIAeAAIAAC/gAgWgZQAAArAWAAQAYAAAAgqQgBgsgWAAQgXAAAAArg");
	this.shape_201.setTransform(596.2,231.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AglA9QgKgLAAgUQAAgtA6gBIAFAAIAAgCQABgZgTAAQgOAAgPAJIgJgYQAQgMAZgBQAXABAMAOQANAOAAAaIAABWIgdAAIAAgJIAAgKIAAAAQgMAUgUAAQgPAAgKgKgAgSAbQABATAOAAQAIAAAGgLQAFgIAAgMIAAgKIgFAAQgdAAAAAWg");
	this.shape_202.setTransform(578.4,229.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgqBNQgMgTAAghQAAggAMgTQAOgUAWAAQAVAAAHAOIABAAIgBgJIAAg4IAhAAIAAC/IgeAAIAAgJIABgJIgBAAQgJAVgXABQgXAAgMgVgAgWAZQAAAsAWAAQAYAAAAgrQgBgTgFgLQgGgNgLAAQgXAAAAAqg");
	this.shape_203.setTransform(566.05,226.75);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgzAZIAAhfIAhAAIAABZQAAAVAOgBQAKAAAHgMQAHgKAAgNIAAhKIAgAAIAACJIgfAAIAAgJIAAgJIAAAAQgMAVgXABQglAAAAgug");
	this.shape_204.setTransform(532.325,229.45);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgiBGIAAiJIAfAAIAAAVIAAAJIAAAAQADgNAJgJQAKgKALAAIAFABIAAAhIgHgBQgPAAgJAQQgGAOAAATIAAA5g");
	this.shape_205.setTransform(498.325,229.175);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgWAgIAPg/IAeAAIgWA/g");
	this.shape_206.setTransform(484.55,235.825);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AAUBHIAAhZQAAgVgPAAQgLAAgHAMQgGALAAANIAABKIggAAIAAiJIAfAAIAAAJIgBAJIABAAQALgWAYAAQAlAAAAAuIAABfg");
	this.shape_207.setTransform(475.225,229.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgZBPIgBAAIABAJIAAAGIgdAAIAAi/IAgAAIAAA5IgBAMIABAAQAJgSAWAAQAVAAANAUQAMAUAAAfQAAAhgNAUQgOATgVABQgXAAgJgTgAgXAaQABArAWAAQAWAAAAgrQABgrgXAAQgXAAAAArg");
	this.shape_208.setTransform(444.1,226.75);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("Ag0BaIAIgYQAHAEAGAAQAMAAAGgTIADgLIguiIIAjAAIAVBPIABARIABAAIADgRIAShPIAiAAIgsCcQgGASgLAKQgLAJgOAAQgOAAgJgHg");
	this.shape_209.setTransform(425.825,232.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgzAZIAAhfIAhAAIAABZQAAAVAOgBQAKAAAHgMQAHgKAAgNIAAhKIAgAAIAACJIgfAAIAAgJIAAgJIAAAAQgMAVgXABQglAAAAgug");
	this.shape_210.setTransform(413.475,229.45);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AAyBgIgGhqIAAgeIgBAAIgGAfIgVBIIgfAAIgUhIIgHgfIgBAAIABAeIgHBqIgfAAIANi/IAkAAIAaBdIAFAcIABAAIAGgcIAZhdIAlAAIAMC/g");
	this.shape_211.setTransform(397.725,226.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.bt1}]}).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150,p:{x:549.125}},{t:this.shape_149,p:{x:561.625}},{t:this.shape_148,p:{x:572.475}},{t:this.shape_147},{t:this.shape_146,p:{x:602.575}},{t:this.shape_145,p:{x:615.125}},{t:this.shape_144,p:{x:627.825}},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141,p:{x:676.475}},{t:this.shape_140,p:{x:692.175}},{t:this.shape_139},{t:this.shape_138,p:{x:720.175}},{t:this.shape_137},{t:this.shape_136,p:{x:735.6}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133,p:{x:422.95}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129,p:{x:466.9,y:256.975}},{t:this.shape_128},{t:this.shape_127,p:{x:491.675,y:259.675}},{t:this.shape_126,p:{x:503.425,y:259.675}},{t:this.shape_125},{t:this.shape_124,p:{x:528.375,y:259.575}},{t:this.shape_123,p:{x:538.225,y:259.675}},{t:this.shape_122},{t:this.shape_121,p:{x:566.6}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117,p:{x:619.95}},{t:this.shape_116,p:{x:631.025}},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111,p:{x:696.325}},{t:this.shape_110,p:{x:707.175}},{t:this.shape_109},{t:this.shape_108,p:{x:730.275}},{t:this.shape_107},{t:this.shape_106,p:{x:755.075}},{t:this.shape_105,p:{x:764.925}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:827.925,y:259.575}},{t:this.shape_99,p:{x:835.85,y:257.875}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95,p:{x:428.275,y:290.075}},{t:this.shape_94,p:{x:444.425}},{t:this.shape_93,p:{x:455.375,y:290.075}},{t:this.shape_92,p:{x:473.475,y:290.075}},{t:this.shape_91,p:{x:486.175,y:290.075}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84,p:{x:564.175,y:290.075}},{t:this.shape_83,p:{x:575.025}},{t:this.shape_82,p:{x:585.975,y:290.075}},{t:this.shape_81,p:{x:598.125}},{t:this.shape_80},{t:this.shape_79,p:{x:622.925}},{t:this.shape_78,p:{x:632.775,y:290.075}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:704.275}},{t:this.shape_72,p:{x:717.075,y:290.075}},{t:this.shape_71,p:{x:728.725}},{t:this.shape_70,p:{x:743.875,y:290.075}},{t:this.shape_69},{t:this.shape_68,p:{x:767.775}},{t:this.shape_67},{t:this.shape_66,p:{x:785.55,y:287.375}},{t:this.shape_65},{t:this.shape_64,p:{x:807.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:851.225}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:474.875,y:320.375}},{t:this.shape_57,p:{x:484.725,y:320.475}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:513.275,y:320.475}},{t:this.shape_53,p:{x:529.525,y:320.475}},{t:this.shape_52},{t:this.shape_51,p:{x:560.025,y:320.475}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:603.225,y:320.475}},{t:this.shape_47},{t:this.shape_46,p:{x:629.225,y:320.475}},{t:this.shape_45,p:{x:640.875,y:320.375}},{t:this.shape_44},{t:this.shape_43,p:{x:661.3,y:317.775}},{t:this.shape_42,p:{x:670.325,y:320.475}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:715.625,y:320.475}},{t:this.shape_38},{t:this.shape_37,p:{x:747.675,y:320.475}},{t:this.shape_36,p:{x:759.225,y:320.475}},{t:this.shape_35,p:{x:767.25,y:317.775}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:796.225,y:320.475}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:643.975,y:350.875}},{t:this.shape_25,p:{x:655.525,y:350.875}},{t:this.shape_24},{t:this.shape_23,p:{x:664.225}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:771.625}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:874.425}},{t:this.bt2}]},1).to({state:[{t:this.shape_155},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_129,p:{x:453.5,y:226.575}},{t:this.shape_149,p:{x:462.525}},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_145,p:{x:508.175}},{t:this.shape_91,p:{x:520.175,y:229.275}},{t:this.shape_204},{t:this.shape_141,p:{x:544.875}},{t:this.shape_138,p:{x:555.825}},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_123,p:{x:622.175,y:229.275}},{t:this.shape_199},{t:this.shape_136,p:{x:645.6}},{t:this.shape_198},{t:this.shape_197},{t:this.shape_126,p:{x:686.825,y:229.275}},{t:this.shape_124,p:{x:698.475,y:229.175}},{t:this.shape_140,p:{x:712.025}},{t:this.shape_196},{t:this.shape_148,p:{x:738.025}},{t:this.shape_150,p:{x:754.975}},{t:this.shape_92,p:{x:768.275,y:229.275}},{t:this.shape_127,p:{x:779.825,y:229.275}},{t:this.shape_195},{t:this.shape_194},{t:this.shape_146,p:{x:820.025}},{t:this.shape_193},{t:this.shape_192},{t:this.shape_144,p:{x:858.125}},{t:this.shape_133,p:{x:409.45}},{t:this.shape_191},{t:this.shape_111,p:{x:435.075}},{t:this.shape_190},{t:this.shape_105,p:{x:460.275}},{t:this.shape_116,p:{x:471.225}},{t:this.shape_108,p:{x:486.925}},{t:this.shape_189},{t:this.shape_121,p:{x:512.15}},{t:this.shape_188},{t:this.shape_95,p:{x:548.825,y:259.675}},{t:this.shape_187},{t:this.shape_72,p:{x:567.725,y:259.675}},{t:this.shape_106,p:{x:579.375}},{t:this.shape_82,p:{x:594.525,y:259.675}},{t:this.shape_46,p:{x:606.925,y:259.675}},{t:this.shape_186},{t:this.shape_185},{t:this.shape_66,p:{x:641.9,y:256.975}},{t:this.shape_184},{t:this.shape_93,p:{x:662.925,y:259.675}},{t:this.shape_183},{t:this.shape_70,p:{x:688.125,y:259.675}},{t:this.shape_43,p:{x:696.8,y:256.975}},{t:this.shape_182},{t:this.shape_84,p:{x:722.725,y:259.675}},{t:this.shape_181},{t:this.shape_78,p:{x:753.225,y:259.675}},{t:this.shape_180},{t:this.shape_110,p:{x:776.025}},{t:this.shape_117,p:{x:786.45}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_94,p:{x:392.675}},{t:this.shape_61,p:{x:403.625}},{t:this.shape_100,p:{x:414.575,y:289.975}},{t:this.shape_39,p:{x:430.525,y:290.075}},{t:this.shape_79,p:{x:442.175}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_35,p:{x:487,y:287.375}},{t:this.shape_171},{t:this.shape_64,p:{x:506.7}},{t:this.shape_170},{t:this.shape_37,p:{x:532.875,y:290.075}},{t:this.shape_83,p:{x:544.425}},{t:this.shape_169},{t:this.shape_168},{t:this.shape_71,p:{x:582.875}},{t:this.shape_57,p:{x:592.725,y:290.075}},{t:this.shape_54,p:{x:603.575,y:290.075}},{t:this.shape_167},{t:this.shape_53,p:{x:627.775,y:290.075}},{t:this.shape_99,p:{x:637.85,y:288.275}},{t:this.shape_166},{t:this.shape_58,p:{x:658.525,y:289.975}},{t:this.shape_73,p:{x:673.475}},{t:this.shape_165},{t:this.shape_81,p:{x:704.575}},{t:this.shape_51,p:{x:717.125,y:290.075}},{t:this.shape_164},{t:this.shape_26,p:{x:748.425,y:290.075}},{t:this.shape_36,p:{x:759.975,y:290.075}},{t:this.shape_45,p:{x:775.175,y:289.975}},{t:this.shape_48,p:{x:785.025,y:290.075}},{t:this.shape_25,p:{x:795.875,y:290.075}},{t:this.shape_163},{t:this.shape_42,p:{x:820.075,y:290.075}},{t:this.shape_162},{t:this.shape_32,p:{x:840.275,y:290.075}},{t:this.shape_68,p:{x:852.975}},{t:this.shape_161},{t:this.shape_160},{t:this.shape_23,p:{x:658.925}},{t:this.shape_159},{t:this.shape_158},{t:this.shape_20,p:{x:762.425}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_17,p:{x:864.675}},{t:this.bt3}]},1).wait(1));

	// Capa_3
	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(204,204,204,0.8)").s().p("Aj/BeIAAi7IH/AAIAAC7g");
	this.shape_212.setTransform(300.9025,235.7734,1,1,15.0015);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("ACCEeIkuhRQgYgHAGgZIAXhTQAGgYAZAGIBNAVIA8jkIg+gRQgZgHAHgYIAWhTQAHgZAZAGIDFA2QAZAGgHAZIhaFQIBCARQAZAHgHAZIgWBTQgFATgRAAIgKgBg");
	this.shape_213.setTransform(300.0584,302.1345);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("ACCEeIkuhRQgYgHAGgZIAXhTQAGgYAZAGIBNAVIA8jkIg+gRQgZgHAHgYIAWhTQAHgZAZAGIDFA2QAZAGgHAZIhaFQIBCARQAZAHgHAZIgWBTQgFATgRAAIgKgBg");
	this.shape_214.setTransform(258.8584,291.1345);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFCC33").s().p("Ao3H+QRBgsAuvPIAAP7g");
	this.shape_215.setTransform(285.181,302.7497,1,1,15.0015);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFDF80").s().p("AreGoIE3yGISGE3Ik3SGg");
	this.shape_216.setTransform(284.475,293.275);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(204,204,204,0.8)").s().p("Aj/BeIAAi7IH/AAIAAC7g");
	this.shape_217.setTransform(143.0736,87.8886,0.9997,0.9997,-14.9979);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("Ah4ENIgWhQQgGgYAYgHICwgvQATgFgFgQIgHgbQgEgQgTAFIipAuQgZAGgGgYIhFkAQgHgZAZgGIEnhQQAYgGAHAZIAWBRQAHAZgZAHIikAsIAMAtIBegaQA4gPAmATQAoATAOA2IAaBeQAOA1gcAoQgcApg9AQIjZA7IgKABQgQAAgFgUg");
	this.shape_218.setTransform(158.2818,149.175);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFCC33").s().p("Ao3H+QRBgsAuvPIAAP7g");
	this.shape_219.setTransform(163.7485,153.712,0.9997,0.9997,-14.9979);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFDF80").s().p("ApXJYIAAyvISvAAIAASvg");
	this.shape_220.setTransform(158.4184,146.3135,1,1,-14.9983);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("Ah5CdQgfgYAAgxIAAimQAAgyAfgYQAkgcBVAAQBXAAAjAcQAfAYAAAyIAACmQAAAxgfAYQgjAbhXAAQhVAAgkgbgAgohBIAACDQAAAYAoAAQAZgBAJgGQAIgFAAgMIAAiDQAAgXgqAAQgoAAAAAXg");
	this.shape_221.setTransform(781.075,160.95);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AhyCZQgdgXAAgyIAAhPQAAgRASAAIBHAAQATAAgBARIAAA8QABALAGAFQAHAHAVAAQATAAAHgHQAFgFABgLIAAjfQgBgSATAAIBMAAQATAAgBASIAADyQAAAygdAXQghAchRAAQhQAAgigcg");
	this.shape_222.setTransform(745.55,161.325);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AhoCxQgRAAAAgSIAAg6QAAgSARAAIAxAAIAAikIgxAAQgRAAAAgSIAAg8QAAgRARAAIDRAAQASAAAAARIAAA8QAAASgSAAIgwAAIAACkIAwAAQASAAAAASIAAA6QAAASgSAAg");
	this.shape_223.setTransform(714.3,160.95);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgnCxQgSAAAAgSIAAjwIhIAAQgSAAAAgSIAAg8QAAgRASAAIEDAAQARAAAAARIAAA8QAAASgRAAIhJAAIAADwQAAASgRAAg");
	this.shape_224.setTransform(683.3,160.95);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AA9CxQgSAAAAgSIAAhLQAAgVgSAAIhEAAIAABgQAAASgSAAIhMAAQgRAAAAgSIAAk+QAAgRARAAICjAAQBhAAAABSIAAAXQAAAsgcAMQAcADAQARQAQAUAAAeIAABoQAAASgSAAgAgrgZIAlAAQAUAAAAgXIAAgQQAAgYgUAAIglAAg");
	this.shape_225.setTransform(649.575,160.95);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AhxCxQgSAAAAgSIAAk+QAAgRASAAIDjAAQASAAAAARIAAA7QAAARgSAAIiHAAIAAAmIBfAAQASgBAAATIAAAzQAAASgSAAIhfAAIAAAqICHAAQASAAAAASIAAA5QAAASgSAAg");
	this.shape_226.setTransform(615.125,160.95);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgHCxQh5AAAAhlIAAiYQAAhkB5AAIB3AAQARAAAAARIAAA8QAAASgRAAIhjAAQgdAAAAAYIAAB0QAAAYAdAAIBjAAQARAAAAASIAAA6QAAASgRAAg");
	this.shape_227.setTransform(583.475,160.95);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AA9CxQgTAAAAgSIAAhEIhWAAIAABEQAAASgSAAIhIAAQgSAAAAgSIAAiCQAAgcATgxIArhwQAGgQATAAICDAAQAUAAAFAQIArBwQATAxAAAcIAACCQAAASgSAAgAAlABIgXhJQgEgJgGAAIgLAAQgGAAgDAJIgYBJIBNAAg");
	this.shape_228.setTransform(549.75,160.95);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("Ah8CxQgSAAAAgSIAAk+QAAgRASAAIBMAAQASAAAAARIAADzIBCAAIAAhQQAAgRASAAIBHAAQASAAAAARIAACbQAAASgSAAg");
	this.shape_229.setTransform(504.325,160.95);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AhxCxQgSAAAAgSIAAk+QAAgRASAAIDjAAQASAAAAARIAAA7QAAARgSAAIiHAAIAAAmIBfAAQASgBAAATIAAAzQAAASgSAAIhfAAIAAAqICHAAQASAAAAASIAAA5QAAASgSAAg");
	this.shape_230.setTransform(471.075,160.95);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AikEAQgZAAAAgaIAAnLQAAgaAZAAIFJAAQAZAAAAAaIAABTQAAAagZAAIjDAAIAAA2ICJAAQAaAAAAAaIAABLQAAAagaAAIiJAAIAAA9IDDAAQAZAAAAAZIAABTQAAAagZAAg");
	this.shape_231.setTransform(800.425,109.875);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AhbEAQgbAAgKgYIhFiuQgOgkgEgNQgFgTAAgfIAAi8QAAgaAaAAIBxAAQAbAAAAAaIAADEQAAAMAGARIAhBjQAEAMAKAAIAHAAQAJAAAEgMIAhhkQAGgRAAgMIAAjDQAAgaAaAAIBvAAQAaAAAAAaIAAC8QAAAfgFATQgEANgOAkIhGCuQgJAYgbAAg");
	this.shape_232.setTransform(750.625,109.875);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("Ai0EAQgZAAAAgaIAAnLQAAgaAZAAIBuAAQAaAAAAAaIAAFfIBgAAIAAh0QAAgYAaAAIBnAAQAZAAAAAYIAADgQAAAagZAAg");
	this.shape_233.setTransform(700.925,109.875);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AikEAQgZAAAAgaIAAnLQAAgaAZAAIFJAAQAZAAAAAaIAABTQAAAagZAAIjDAAIAAA2ICJAAQAaAAAAAaIAABLQAAAagaAAIiJAAIAAA9IDDAAQAZAAAAAZIAABTQAAAagZAAg");
	this.shape_234.setTransform(652.925,109.875);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AivDeQgsgjAAhHIAAleQABgaAZAAIBvAAQAaAAAAAaIAAFCQAAAiA6AAQA6AAAAgiIAAlCQAAgaAaAAIBrAAQAbAAAAAaIAAFeQgBBHgsAjQgzAnh8AAQh7AAg0gng");
	this.shape_235.setTransform(602.55,110.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AisEAQgaAAAAgaIAAhTQAAgZAaAAIC+AAQASAAAAgVQAAgWgSgCIhpgPQg2gIgagZQgfgcAAg4IAAhKQAAg9AoggQAmghBGAAIDGAAQAZAAAAAaIAABVQAAAZgZAAIilAAQgTAAAAAVQAAAVATACIBpAPQA2AIAaAYQAeAcAAA4IAABLQAAA8gnAhQgmAghGAAg");
	this.shape_236.setTransform(553.4,109.875);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AikEAQgZAAAAgaIAAnLQAAgaAZAAIFJAAQAZAAAAAaIAABTQAAAagZAAIjDAAIAAA2ICJAAQAaAAAAAaIAABLQAAAagaAAIiJAAIAAA9IDDAAQAZAAAAAZIAABTQAAAagZAAg");
	this.shape_237.setTransform(507.475,109.875);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("ABYEAQgZAAAAgaIAAhsQAAgfgbAAIhjAAIAACLQAAAagZAAIhuAAQgZAAAAgaIAAnLQAAgaAZAAIDsAAQCMAAgBB3IAAAhQAABAgnARQAnAEAYAaQAXAcAAAsIAACWQAAAagZAAgAg/gkIA2AAQAeAAAAghIAAgYQAAgigeAAIg2AAg");
	this.shape_238.setTransform(458.1,109.875);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AnCTDIgGgBIgFgCIgGgDIgFgDIgEgEIgEgEIgEgFIgDgGIgBgFIgCgPIgBgOIAAgPIABgIIAAgHIAAgGQh3gEhugtQiVg8hZiEQhYiDgyiWQgxiSgZiYQgbieBSiLIANgUIADgDIADgDIAEgCIAEgCIAEAAIAFgBIAEAAIAFABIAEABIAEACIAEADIAEAEIADAEIACAEIABAEIABAEIAAAFIAAAFIgCAEQhNB7AVCOQAWCUAvCNQAuCLBRB7QBLByB+A3QB+A2CLgPIAVgCIAGgIIAIgLIAIgMIADgFIgBAAIgGgCIgGgDIgGgDIgGgDQgPgFgNgHQgMgGgJgJQgIgHgGgJIgMgSIgTgaIgCgFIgCgEIAAgFIAAgGIAAgFIACgFIACgEIACgFIAEgDIAEgEIAEgDIAGgCIAFgBIAFAAIAFAAIAGABIAFACIAFADIAIAJIAJALIAIALIAFAGIAEAGIAEAFIADAEIAEADIADACIAEACIAIADIAHACIAHADIAHADIAHACIAHAAIAIABIAHABIAHACIAGABIAGACIAGACIAFADIAGACIAFACIAEADIAFAEIADAEIADAFIADAFIACAGIABAGIAAAHIgBAGIgCAGIgDAFIgDAEIgDAEQgGAPgJANIgOAXIgOAYIgSAfIgUAkIgDAGIgCAGIgDAGIgCAHIgCADIgBADIAAAAIgBAEIgCAFIgDAFIgDAFIgDAEIgEADIgEAEIgFADIgFACIgFABIgFABIgGABIgGgBgARJkhIgEAAIgEgBIgEgCIgDgCIgDgDIgCgDIgCgDIgBgEIAAgDIAAgEIAAgEIABgDIACgEQA5hogMh2QgGg0gZguQg0hghLhPQhKhPhag8Qhbg+hqgdQgrgMgsgBIAEAFIAHALIAGAKIAGAJIACAFIACAFIABAFIABAGIABAFIAAAGIgBAHIAAAFIgBAFIgCAGIgDAGIgCAEIgEAEIgEADIgEADIgFADIgFABIgFABIgFAAIgFAAIgFgBIgFgCIgFgCIgFgEIgEgEIgEgEIgFgFIgDgDIgDgFIgDgEIgHgKIgHgLIgCgFIgDgFIgEgGIgFgDIgFgEIgEgFIgFgDIgEgDIgDgEIgEgEIgEgDIgEgDIgEgEIgEgGIgDgFIgFgKIgDgLIgBgLIgBgLIgBgOIgBgNIAAgHIACgGIACgGIADgGIADgFIAEgFIAFgEIAFgDIACgCIAEgDIAEgEIAOgHQAMgFAMgBIAVgCIAUAAIASAAIATgBIAMgDIATgGQAIgDAIgBIALgBIAXgCIAFAAIAGABIAGACIAGACIAFADIAFAEIAEAEIAEAEIADAFIADAFIACAFIACAGIABAGIAAAGIAAAFIAAAGIgBAFIgDAHIgDAGIgDAGIgDAEIgDAEIgDAEIgEADIgDADIgFACIgCABQAwANAuAXQBuA3BeBRQBbBPBGBhQBIBjASB4QAIAxgJAxQgOBPgqBFIgDADIgEACIgEACIgEABIgEAAg");
	this.shape_239.setTransform(205.5804,225.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]}).wait(3));

	// Capa_2
	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FEA66F").s().p("AuwgmIdhgLI8wAtIguA2g");
	this.shape_240.setTransform(361.5028,512.9395,3.8326,4.0036);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#D76735").s().p("AhVAwIhghfIEOADIBdBcg");
	this.shape_241.setTransform(229.0855,513.8903,3.8326,4.0036);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.lf(["#E97035","#F3944F"],[0.016,0.996],0,5.5,0,-5.4).s().p("AzfA3IgEhYMAnHgAVIgRBtg");
	this.shape_242.setTransform(479.0686,511.0878,3.8326,4.0036);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#437D54").s().p("EgouAUdMgCbgoPQMQgCeSgMUAkEgAQAHtgAMQgFEig1MAQgxLKhGNNg");
	this.shape_243.setTransform(483.207,250.0637,1.5968,1.6682);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#D76735").s().p("Ajri/ICvACIEoEnIhXBWg");
	this.shape_244.setTransform(657.9266,83.1637,3.8353,4.0066);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#D07341","#E97035"],[0.004,1],0,62.2,0,-62.2).s().p("AyDJuIhJzCIZdgJQDigCFdgKQD2gHAEAEQAMALguJoQgWE0gaEzg");
	this.shape_245.setTransform(484.8542,249.1465,3.8353,4.0066);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,0,959.5,533.1);


(lib.cardTapa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {abre:1,cierra:5};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.8)").s().p("Aj/BeIAAi7IH/AAIAAC7g");
	this.shape.setTransform(61.175,9.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

	// Capa_3
	this.textoID = new cjs.Text("20", "71px 'Bungee Regular'");
	this.textoID.name = "textoID";
	this.textoID.textAlign = "center";
	this.textoID.lineHeight = 73;
	this.textoID.lineWidth = 106;
	this.textoID.parent = this;
	this.textoID.setTransform(60.25,36.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC33").s().p("Ao3H+QRBgsAuvPIAAP7g");
	this.shape_1.setTransform(63.2,78.0625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDF80").s().p("ApXJYIAAyvISvAAIAASvg");
	this.shape_2.setTransform(60,69.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.textoID}]}).to({state:[]},1).wait(9));

	// Capa_1
	this.instance = new lib.Interpolación1();
	this.instance.setTransform(60,9.05,1,1,0,0,0,0,-60);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:0.1,regY:-58.9,scaleY:0.1533,skewX:-26.9171,x:60.05,y:9.1},3).to({regX:0,regY:-60,scaleY:1,skewX:0,x:60,y:9.05},2).to({regX:0.1,scaleY:0.6392,rotation:-14.9984,x:60.15,y:8.9},1).to({regX:0,scaleY:1,rotation:0,x:60,y:9.05},2).wait(1));

	// Capa_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ApXJYIAAyvISvAAIAASvg");
	this.shape_3.setTransform(60,69.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("ApXG0IAAtnISvAAIAANng");
	this.shape_4.setTransform(60,52.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("ApXEPIAAodISvAAIAAIdg");
	this.shape_5.setTransform(60,36.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("ApXBqIAAjUISvAAIAADUg");
	this.shape_6.setTransform(60,19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("ApXDNIAAmZISvAAIAAGZg");
	this.shape_7.setTransform(60,29.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("ApXEwIAApfISvAAIAAJfg");
	this.shape_8.setTransform(60,39.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("ApXGTIAAslISvAAIAAMlg");
	this.shape_9.setTransform(60,49.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("ApXH1IAAvpISvAAIAAPpg");
	this.shape_10.setTransform(60,59.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-6.6,138,135.7);


// stage content:
(lib.juego1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		var totalCards = 18;
		var avisos = ["Cumplo con mis tareas",
			"Llego puntual a mis clases",
			"Trabajo en silencio y orden",
			"Cuido todos los materiales",
			"Utilizo palabras magicas",
			"Permanezco ordenado en la fila",
			"Mantengo limpio mi espacio",
			"Respeto a todos por igual",
			"Trabajo en Silencio"
		];
		var turno = 1;
		var val1 = 100;
		var val2 = 101;
		var carta1 = 100;
		var carta2 = 100
		var pausaTime = 900000000;
		var matchs = 0;
		//
		var timePass = 0;
		var seg = 0;
		var enJuego = false;
		var score = 0;
		
		root.indicaciones.bt1.on("click", function () {
			root.indicaciones.gotoAndStop(1);
			playSound("/1/audio/inicio");
		});
		root.indicaciones.bt2.addEventListener("click", inicio);
		root.indicaciones.bt3.addEventListener("click", function(){
			window.open("/jugar/0", "_self");
		});
		
		function inicio() {
			temporizador();
			//CreateList
			var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8];
			shuffle(list)
		
			for (var i = 0; i < totalCards; i++) {
				root["tapa" + i].textoID.text = i + 1
				var cardOver = new lib.cardBase();
				root["tapa" + i].elID = i;
				root["tapa" + i].valor = list[i];
				root["tapa" + i].addEventListener("click", clicEnTarjeta.bind(this));
				//
				root.contenedor.addChild(cardOver);
				cardOver.x = root["tapa" + i].x
				cardOver.y = root["tapa" + i].y
				cardOver.gotoAndStop(list[i])
			}
			enJuego = true;
			root.indicaciones.visible = false;
		}
		
		function clicEnTarjeta(e) {
			var seleccionado = e.target.parent.elID
			var dataSelect = e.target.parent.valor
			//
			root["val" + turno] = dataSelect;
			root["carta" + turno] = seleccionado;
		
			if (turno == 2) {
				turno = 1
				root.mouseEnabled = false
				var compTime = setTimeout(function(){
					comprueba();
				},2000);
			} else {
				turno = 2
			}
			//
			e.target.parent.gotoAndPlay(1);
		}
		
		function comprueba() {
			if (root["val1"] == root["val2"]) {
				//GANARON
				score += 50;
				root.scoreText.text = score;
				playSound("/audio/bien");
				root["tapa" + root["carta1"]].visible = false;
				root["tapa" + root["carta2"]].visible = false;
				root.bienHecho.gotoAndPlay("gana")
				root.explica.text = avisos[root["val1"]]
				matchs++;
				if (matchs == 9) {
					enJuego = false;
					gameOver();
				}
			} else {
				score -= 5;
				root.scoreText.text = score;
				playSound("/audio/zoof");
				root["tapa" + root["carta1"]].gotoAndPlay("cierra")
				root["tapa" + root["carta2"]].gotoAndPlay("cierra")
			}
			root.mouseEnabled = true;
		}
		
		function gameOver() {
			enviaData(score,1);
			root.indicaciones.gotoAndStop(2);
			root.indicaciones.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// screenHelper
	this.indicaciones = new lib.indicacionesJuego();
	this.indicaciones.name = "indicaciones";
	this.indicaciones.setTransform(0.2,0.05);

	this.timeline.addTween(cjs.Tween.get(this.indicaciones).wait(1));

	// avisos
	this.bienHecho = new lib.Resultado();
	this.bienHecho.name = "bienHecho";
	this.bienHecho.setTransform(51.1,52.1,1,1,0,0,0,51.1,52.1);

	this.timeline.addTween(cjs.Tween.get(this.bienHecho).wait(1));

	// codeTimer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("AgDCIQhRAAgRhYIA9gHQAEAiAkAAIABAAQAlABAFgfIAAgEQAAgYgxgMQg2gKgMgSQgOgSAAgUIABgLQAIgwAwgLQAPgEARABQAlgBAwARIgVA2QgSgKgjgCIgLgBQgXAAgFAJIAAACQAAALBCAUQA9ARAAA0QAAAJgCALQgQBPhUADg");
	this.shape.setTransform(910.975,462.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AgaB5QgwgLgbgrQgSgegBgiQAAgNAEgPQAKgyArgcQAegUAhAAQANAAAOAEQAxAKAaArQASAfAAAhQAAAOgDAOQgLAygqAcQgeAUgiAAQgNAAgNgDgAgkg5QgYAQgGAcIgCAPQAAATAKARQAPAYAbAGIAOACQASAAARgLQAYgQAGgcIACgPQAAgTgKgRQgPgYgbgHIgOgBQgSAAgRALg");
	this.shape_1.setTransform(887.15,463.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AgJCAIgbgCQANheAAhPIAAgSQgmAEgjAFIgEAAIgCgJIAAgiIgBgNQAGgLDBgEIAIACIAAA3QAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAIhEAAIAAALQAAA2gJCCg");
	this.shape_2.setTransform(863.2,461.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006699").s().p("AgTAlIgfgqIgCAFIgBBjIgEAAIg2gCQAFgpACh3QAJglAbAAIAGAAQAYAAAyBZQAdArAAADIADAAQAKhJABhKQABgNAEAAIAZAAIAbACIAAACQgODPgGAAQABAhgmAHQgfAAgrhZg");
	this.shape_3.setTransform(840,464.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006699").s().p("AgdB4QhBAAgLhuIAAgNQAAg3AUg9QA6ACAAADQgUBBAAAvQAAAvASAQIAEAAQAbAAAchCQAOgsAAg2QAJgEAYAAIAdAAQgLBCAAA5QAAAcAHA1IAAACQggAFgYAHIAAgBQgEgHAAgNIAAgCIgBAAQgkAggeAAg");
	this.shape_4.setTransform(816.675,465.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006699").s().p("AhjCEIABh0QAAhjAPgXQAbgdAoAAIARAAQBBAAAdA9QAFATAAAOIAAAHQAAA+g9AhQgSAHgaACQgSgCgRgDIAABGIgWABQgVAAgQgEgAgkg5QgEARAAAfIAAAIQALALAWAAIAFAAQAdAAAMgaQAEgMAAgKIAAgDQAAgegogHIgMAAQgbAAAAAVg");
	this.shape_5.setTransform(794.525,461.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2E8E8").s().p("AgDCIQhRAAgRhYIA9gHQAEAiAkAAIABAAQAlABAFgfIAAgEQAAgYgxgMQg2gKgMgSQgOgSAAgUIABgLQAIgwAwgLQAPgEARABQAlgBAwARIgVA2QgSgKgjgCIgLgBQgXAAgFAJIAAACQAAALBCAUQA9ARAAA0QAAAJgCALQgQBPhUADg");
	this.shape_6.setTransform(908.725,464.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2E8E8").s().p("AgaB5QgwgLgbgrQgSgegBgiQAAgNAEgPQAKgyArgcQAegUAhAAQANAAAOAEQAxAKAaArQASAfAAAhQAAAOgDAOQgLAygqAcQgeAUgiAAQgNAAgNgDgAgkg5QgYAQgGAcIgCAPQAAATAKARQAPAYAbAGIAOACQASAAARgLQAYgQAGgcIACgPQAAgTgKgRQgPgYgbgHIgOgBQgSAAgRALg");
	this.shape_7.setTransform(884.9,465.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2E8E8").s().p("AgJCAIgbgCQANheAAhPIAAgSQgmAEgjAFIgEAAIgCgJIAAgiIgBgNQAGgLDBgEIAIACIAAA3QAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAIhEAAIAAALQAAA2gJCCg");
	this.shape_8.setTransform(860.95,463.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2E8E8").s().p("AgTAlIgfgqIgCAFIgBBjIgEAAIg2gCQAFgpACh3QAJglAbAAIAGAAQAYAAAyBZQAdArAAADIADAAQAKhJABhKQABgNAEAAIAZAAIAbACIAAACQgODPgGAAQABAhgmAHQgfAAgrhZg");
	this.shape_9.setTransform(837.75,465.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B2E8E8").s().p("AgdB4QhBAAgLhuIAAgNQAAg3AUg9QA6ACAAADQgUBBAAAvQAAAvASAQIAEAAQAbAAAchCQAOgsAAg2QAJgEAYAAIAdAAQgLBCAAA5QAAAcAHA1IAAACQggAFgYAHIAAgBQgEgHAAgNIAAgCIgBAAQgkAggeAAg");
	this.shape_10.setTransform(814.425,466.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B2E8E8").s().p("AhjCEIABh0QAAhjAPgXQAbgdAoAAIARAAQBBAAAdA9QAFATAAAOIAAAHQAAA+g9AhQgSAHgaACQgSgCgRgDIAABGIgWABQgVAAgQgEgAgkg5QgEARAAAfIAAAIQALALAWAAIAFAAQAdAAAMgaQAEgMAAgKIAAgDQAAgegogHIgMAAQgbAAAAAVg");
	this.shape_11.setTransform(792.275,463.725);

	this.scoreText = new cjs.Text("0", "33px 'Christmas Carols'", "#FFFFFF");
	this.scoreText.name = "scoreText";
	this.scoreText.textAlign = "center";
	this.scoreText.lineHeight = 45;
	this.scoreText.lineWidth = 100;
	this.scoreText.parent = this;
	this.scoreText.setTransform(846.5,483.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#B2E8E8").ss(3,1,1).p("ArKjyIWVAAQCWAAAACWIAAC5QAAACAAABQgCCTiUAAI2VAAQiVAAgBiTIAAi8QAAiWCWAAg");
	this.shape_12.setTransform(846.7,500.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006699").s().p("ArKDzQiVAAgBiTIAAi8QAAiWCWAAIWVAAQCWAAAACWIAAC5IAAADQgBCTiVAAg");
	this.shape_13.setTransform(846.7,500.225);

	this.instance = new lib.temporizador();
	this.instance.setTransform(51.85,47.5,1,1,0,0,0,52,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.scoreText},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Aviso
	this.explica = new cjs.Text("", "24px 'Bungee Regular'", "#FFFFFF");
	this.explica.name = "explica";
	this.explica.textAlign = "center";
	this.explica.lineHeight = 26;
	this.explica.lineWidth = 632;
	this.explica.alpha = 0.97647059;
	this.explica.parent = this;
	this.explica.setTransform(422.45,489.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,51,102,0.51)").s().p("EgxKADTQg+AAgsgsQgsgsAAg+IAAh5QAAg+AsgsQAsgsA+AAMBiVAAAQA+AAAsAsQAsAsAAA+IAAB5QAAA+gsAsQgsAsg+AAg");
	this.shape_14.setTransform(418.075,501.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.explica}]}).wait(1));

	// PostIt
	this.tapa16 = new lib.cardTapa();
	this.tapa16.name = "tapa16";
	this.tapa16.setTransform(694.85,388.5,1,1,0,0,0,60,64.5);

	this.tapa15 = new lib.cardTapa();
	this.tapa15.name = "tapa15";
	this.tapa15.setTransform(547.8,383.1,1,1,0,0,0,60,64.5);

	this.tapa14 = new lib.cardTapa();
	this.tapa14.name = "tapa14";
	this.tapa14.setTransform(411.85,399,1,1,0,0,0,60,64.5);

	this.tapa13 = new lib.cardTapa();
	this.tapa13.name = "tapa13";
	this.tapa13.setTransform(270.6,388.5,1,1,0,0,0,60,64.5);

	this.tapa12 = new lib.cardTapa();
	this.tapa12.name = "tapa12";
	this.tapa12.setTransform(129.1,383.1,1,1,0,0,0,60,64.5);

	this.tapa11 = new lib.cardTapa();
	this.tapa11.name = "tapa11";
	this.tapa11.setTransform(837.45,244.65,1,1,0,0,0,60,64.5);

	this.tapa10 = new lib.cardTapa();
	this.tapa10.name = "tapa10";
	this.tapa10.setTransform(694.85,254.05,1,1,0,0,0,60,64.5);

	this.tapa9 = new lib.cardTapa();
	this.tapa9.name = "tapa9";
	this.tapa9.setTransform(553.35,244.65,1,1,0,0,0,60,64.5);

	this.tapa8 = new lib.cardTapa();
	this.tapa8.name = "tapa8";
	this.tapa8.setTransform(419.9,254.05,1,1,0,0,0,60,64.5);

	this.tapa17 = new lib.cardTapa();
	this.tapa17.name = "tapa17";
	this.tapa17.setTransform(844.25,388.5,1,1,0,0,0,60,64.5);

	this.tapa7 = new lib.cardTapa();
	this.tapa7.name = "tapa7";
	this.tapa7.setTransform(281.15,244.65,1,1,0,0,0,60,64.5);

	this.tapa6 = new lib.cardTapa();
	this.tapa6.name = "tapa6";
	this.tapa6.setTransform(129.1,244.65,1,1,0,0,0,60,64.5);

	this.tapa5 = new lib.cardTapa();
	this.tapa5.name = "tapa5";
	this.tapa5.setTransform(820.2,99.6,1,1,0,0,0,60,64.5);

	this.tapa4 = new lib.cardTapa();
	this.tapa4.name = "tapa4";
	this.tapa4.setTransform(682.6,107.8,1,1,0,0,0,60,64.5);

	this.tapa3 = new lib.cardTapa();
	this.tapa3.name = "tapa3";
	this.tapa3.setTransform(547.8,99.6,1,1,0,0,0,60,64.5);

	this.tapa2 = new lib.cardTapa();
	this.tapa2.name = "tapa2";
	this.tapa2.setTransform(411.85,107.8,1,1,0,0,0,60,64.5);

	this.tapa1 = new lib.cardTapa();
	this.tapa1.name = "tapa1";
	this.tapa1.setTransform(270.6,107.8,1,1,0,0,0,60,64.5);

	this.tapa0 = new lib.cardTapa();
	this.tapa0.name = "tapa0";
	this.tapa0.setTransform(129,99.5,1,1,0,0,0,60,64.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tapa0},{t:this.tapa1},{t:this.tapa2},{t:this.tapa3},{t:this.tapa4},{t:this.tapa5},{t:this.tapa6},{t:this.tapa7},{t:this.tapa17},{t:this.tapa8},{t:this.tapa9},{t:this.tapa10},{t:this.tapa11},{t:this.tapa12},{t:this.tapa13},{t:this.tapa14},{t:this.tapa15},{t:this.tapa16}]}).wait(1));

	// PostDown
	this.contenedor = new lib.ContenedorFichas();
	this.contenedor.name = "contenedor";
	this.contenedor.setTransform(16.5,-27,1,1,0,0,0,76.5,37);

	this.timeline.addTween(cjs.Tween.get(this.contenedor).wait(1));

	// Capa_1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEA66F").s().p("AuwgmIdhgLI8wAtIguA2g");
	this.shape_15.setTransform(361.3344,512.8599,3.8322,4.0033);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D76735").s().p("AhVAwIhghfIEOADIBdBcg");
	this.shape_16.setTransform(228.9314,513.8106,3.8322,4.0033);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#E97035","#F3944F"],[0.016,0.996],0,5.5,0,-5.4).s().p("AzfA3IgEhYMAnHgAVIgRBtg");
	this.shape_17.setTransform(478.8876,511.0083,3.8322,4.0033);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#437D54").s().p("EgouAUdMgCbgoPQMQgCeSgMUAkEgAQAHtgAMQgFEig1MAQgxLKhGNNg");
	this.shape_18.setTransform(483.1263,250.0137,1.5967,1.6681);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D76735").s().p("Ajri/ICvACIEoEnIhXBWg");
	this.shape_19.setTransform(657.8673,83.1426,3.8352,4.0065);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#D07341","#E97035"],[0.004,1],0,62.2,0,-62.2).s().p("AyDJuIhJzCIZdgJQDigCFdgKQD2gHAEAEQAMALguJoQgWE0gaEzg");
	this.shape_20.setTransform(484.8004,249.1197,3.8352,4.0065);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(478.5,266.4,480.6,266.80000000000007);
// library properties:
lib.properties = {
	id: '4903AA856D6342348B84B5AE272B771D',
	width: 960,
	height: 533,
	fps: 30,
	color: "#0066CC",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4903AA856D6342348B84B5AE272B771D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;