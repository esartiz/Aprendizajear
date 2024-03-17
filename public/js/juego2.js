(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"juego2_atlas_1", frames: [[1559,937,336,301],[0,1619,240,303],[1559,1240,315,296],[1466,1543,363,281],[995,1543,469,254],[1271,0,648,935],[242,1728,418,111],[0,1471,993,146],[242,1841,405,69],[0,1039,993,430],[242,1619,538,107],[995,1039,562,502],[1210,1826,448,61],[662,1799,546,83],[0,0,1269,1037],[1271,937,269,77],[649,1884,269,77],[1660,1826,288,85]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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



(lib.CachedBmp_68 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["juego2_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();
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


(lib.palabra4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF3300").s().p("AngDQQgzgIAAg3IAAgnQAAhpADhmQAngGAfgDQgGBEgBBpIAABHQBOgTAbAAIAMAAIAABFIgJAAQgZAAhfAYgAveDQQgfAAgRgsIg+jgQA3gVAKAAQAPAvAiB/QBLi3AIAAIA7AeIg7CBQg0CLgiAAgAJ6CtQgKgSgBgZIAAg9IgVADIAAhDIAYgDIAAgiQAAhlByAAIADAAQAyAAAtAGQAAAagKArQgkgGgpAAIgMAAQgsAAAAAaIAAAlIAegBQAbAAAZACIAAATQAAAbgCAZQgdgEg1AAIAAA/IApACQAdAAA8gJIAHBIQg7AGg5AAQg/AAgRgcgAiuCtQgLgSAAgZIAAg9IgWADIAAhDIAYgDIAAgiQAAhlBzAAIACAAQAzAAArAGQAAAagKArQgigGgpAAIgNAAQgsAAAAAaIAAAlIAegBQAbAAAaACIAAATQAAAbgCAZQgdgEg1AAIAAA/IAoACQAeAAA6gJIAHBIQg6AGg4AAQhAAAgQgcgACdBdIglg0IgCAGIgCB4IhFgDQAGgwADiPQAKgsAhAAIAGAAQAeAAA9BpQAjA1AAAEIACAAQANhZAAhYQACgPAFAAIA/ACIAAACQgSD4gHAAQAAAngtAJQgkAAg1hqgAPNDEQhfAAgVhoQAigDAngGQAEApAuAAIAAAAQAtAAAFgkIAAgFQABgdg9gNQhBgPgNgVQgQgTgBgaIABgNQAJg5A6gNQASgEAVAAQAtAAA5ATIgaBBQgUgMgqgDIgOAAQgdAAgFALIgBACQAAANBQAXQBKAVAAA+QAAALgCANQgUBfhkADgAs6CrIAtiEQAuiGAcgiQAMgLAOAAIAKAAQArAAAqCmIAUgBQAHAdAJArIgVACIAOBBIAAAHIhGALIgNhQIhdAEQgMAmgRAuQg6gNgGgGgArDAiIA0gCIAAgCQgGgbgQgpIgCAAgAGeCrQAPhwAAhfIAAgWQgtAFgpAGIgFAAIgCgLIAAgpIgCgPQAIgNDogEIAJACIAABBQAAAEgFAAIhQAAIAAANQABBAgMCcgAlJARIAAgYQAChLAJgRQAQAAAzALQgKAvAABMQAAA4AFBJIhBADQgIhUAAhCgAkzh8QgOgOgBgUQABgUAOgPQAOgOATAAQAVAAANAOQAPAPAAAUQAAAUgPAOQgNAPgVAAQgTAAgOgPg");
	this.shape.setTransform(110.1,20.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.palabra4, new cjs.Rectangle(0,0,220.2,41.6), null);


(lib.palabra3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF3300").s().p("AkGCEIgChcQgChRgJhFQAAgxBoAAIAGAAQB8AAAzBpQALAZAAAfIAAACQAABchGAlQhHAmhwAAQgaAAgEgngAjHhYQAIBxABBPQCOgPAAhZQAAg7hQgaQgRgFgUAAgABICJQgLgTAAgZIAAg9IgWADIAAhCIAZgDIAAgiQAAhmByAAIADAAQAyAAAtAGQAAAagLAsQgjgHgpAAIgNAAQgrAAAAAaIAAAlIAegBQAbAAAZACIAAAUQAAAagCAZQgdgEg1AAIAAA/IApACQAdAAA8gJIAGBIQg6AGg5ABQg/AAgRgcg");
	this.shape.setTransform(27.575,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.palabra3, new cjs.Rectangle(0,0,55.2,34.2), null);


(lib.palabra2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF3300").s().p("AjYCMQgLgTAAgZIAAg8IgWADIAAhDIAZgDIAAgiQAAhmByAAIADAAQAyAAAtAHQAAAZgLAsQgjgHgpAAIgNAAQgrAAAAAaIAAAlIAegBQAbAAAZADIAAATQAAAbgCAZQgdgFg1AAIAAA/IApACQAdAAA8gIIAGBHQg6AHg5AAQg/AAgRgcgAB6CiQhgAAgVhoQAjgCAngGQAEAoAtABIABAAQAsAAAGglIAAgEQAAgdg8gOQhBgOgOgUQgQgVAAgZIABgNQAJg5A5gOQATgEAVAAQAtAAA5AUIgaBBQgVgMgpgDIgOgBQgdAAgFALIgBACQAAANBQAYQBKAVAAA9QAAAMgDANQgTBehlADg");
	this.shape.setTransform(24.975,16.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.palabra2, new cjs.Rectangle(0,0,50,33.6), null);


(lib.palabra1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF3300").s().p("ACTCHIgChcQgChRgJhEQAAgyBoAAIAGAAQB8AAA0BqQALAYAAAfIAAACQAABchHAmQhHAlhwAAQgaAAgEgngADShVQAIBxABBPQCOgPAAhZQAAg7hQgaQgRgFgUAAgAguCqQhNAAgNiEIAAgSQAAg/AXhKQBGADAAADQgYBNAAA5QAAA4AVATIAFAAQAiAAAghQQARgzAAhBQALgEAcAAIAjAAQgNBOAABEQAAAiAJBAIAAACQgnAGgdAJIAAgCQgEgJAAgPIAAgCIgCAAQgqAnglAAgAHBCJIAtiEQAuiGAcgiQAMgKAOAAIALAAQArAAApCmIAUAAQAIAcAIAqIgUADIANBBIAAAGIhGALIgNhQIhdAEQgLAngRAuQg7gOgGgGgAI4ABIA0gBIAAgCQgGgcgQgqIgCAAgAl8CBIAphTQhKhXgRguQAwgiANAAQARAxA2A7QAQgeBPhkQAwAoAAAIQhYBtgcAxQgbAygPAsQhDgTAAgJgArUCJIAtiEQAtiGAdgiQAMgKAOAAIAKAAQArAAAqCmIAUAAQAHAcAJAqIgVADIANBBIAAAGIhFALIgNhQIhdAEQgMAngRAuQg6gOgGgGgApdABIA0gBIAAgCQgHgcgPgqIgCAAg");
	this.shape.setTransform(72.525,17.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.palabra1, new cjs.Rectangle(0,0,145.1,34.9), null);


(lib.palabra0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF3300").s().p("AhECpIgChdQgChQgJhFQAAgyBnAAIAGAAQB8AAA0BqQALAYAAAgIAAACQAABchHAlQhHAmhvAAQgaAAgEgngAgFgzQAHBwABBQQCOgPAAhZQAAg8hQgaQgRgEgUAAgAHJCTIgfggIAABLIgKAAQgrAAgSgGQACgWAAh3QAAh3ASgbQAggjAwAAIAVAAQBOAAAjBKQAGAXAAAQIAAAIQAABNhRAnQAWAWA5AcQgcAqgPAMQgrgRgygngAGvgtQgFAVAAAlIAAAIQANAQAaAAIAHAAQAjAAAPghQAEgOAAgLIAAgEQAAgkgwgHIgPAAQggAAAAAXgAkvCtQgLgSAAgZIAAg9IgWADIAAhDIAZgDIAAgiQAAhlByAAIADAAQAyAAAtAGQAAAagLArQgjgGgpAAIgNAAQgrAAAAAaIAAAlIAegBQAbAAAZACIAAATQAAAbgCAZQgdgEg1AAIAAA/IApACQAdAAA8gJIAGBIQg6AGg5AAQg/AAgRgcgApSC0IACiLQAAh3ARgbQAggjAwAAIAWAAQBNAAAjBKQAHAXAAAQIAAAIQAABLhKAnQgVAJghACQgVgCgUgFIAABVIgbABQgYAAgUgFgAoHgvQgEAVAAAlIAAAIQANAPAaAAIAGAAQAjAAAPggQAFgOAAgLIAAgEQAAgkgwgIIgPAAQghAAAAAYgADpARIAAgYQAChLAJgRQAQAAAzALQgKAvAABMQAAA4AGBJIhBADQgJhUAAhCgAD/h8QgOgOAAgUQAAgUAOgPQAOgOAUAAQAUAAAOAOQAOAPAAAUQAAAUgOAOQgOAPgUAAQgUAAgOgPg");
	this.shape.setTransform(59.525,20.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.palabra0, new cjs.Rectangle(0,0,119.1,41.6), null);


(lib.Interpolación5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_68();
	this.instance.setTransform(-84,-75.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-75.5,168,150.5);


(lib.Interpolación4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_67();
	this.instance.setTransform(-60.05,-75.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-75.8,120,151.5);


(lib.Interpolación3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_66();
	this.instance.setTransform(-78.95,-74.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.9,-74.3,157.5,148);


(lib.Interpolación2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_65();
	this.instance.setTransform(-90.8,-70.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.8,-70.5,181.5,140.5);


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
	this.instance = new lib.CachedBmp_64();
	this.instance.setTransform(-117.4,-63.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-63.6,234.5,127);


(lib.imgPregunta = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,2,1).p("A1F1FMAqLAAAMAAAAqLMgqLAAAg");
	this.shape.setTransform(135,135);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.imgPregunta, new cjs.Rectangle(-1,-1,272,272), null);


(lib.imgOpciones = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FCD39D").s().p("EgXCAnEMAAAhOHMAuFAAAMAAABOHg");
	this.shape.setTransform(147.5,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.imgOpciones, new cjs.Rectangle(0,0,295,500), null);


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

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.988)").s().p("A3hG/IAAt9MAvDAAAIAAN9g");
	this.shape.setTransform(149.425,44.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,0,301.1,89.4);


(lib.btOpcionesPass = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0099CC").s().p("AjWEnQgzAAghgRQgGgYAAgdIAAlxQAAiWCWAAIFxAAQAzAAAiARQAFAYAAAdIAAFxQAACWiWAAg");
	this.shape.setTransform(30.5,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("Ai7FGQh5AAgXhhQAhARAzAAIFxAAQCWAAAAiWIAAlxQAAgdgFgXQBBAhAABjIAAFxQAACWiWAAg");
	this.shape_1.setTransform(33.8,34.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00B2D6").s().p("AjWEnQgzAAghgRQgGgYAAgdIAAlxQAAiWCWAAIFxAAQAzAAAiARQAFAYAAAdIAAFxQAACWiWAAg");
	this.shape_2.setTransform(30.5,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099CC").s().p("AiVEQQhiAAgThPQgFgTAAgYIAAkrQAAh6B6AAIErAAQApAAAcAOQA1AbAABRIAAErQAAB6h6AAg");
	this.shape_3.setTransform(33.55,33.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006699").s().p("Ai4FPQh5AAgXhhQgGgYAAgdIAAlxQAAiWCWAAIFxAAQAzAAAiARQBBAhAABkIAAFxQAACWiWAAgAkOiVIAAErQAAAZAEASQAUBQBhAAIErAAQB6gBABh6IAAkrQAAhRg2gbQgcgNgpAAIkrAAQh5AAAAB5g");
	this.shape_4.setTransform(33.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,67);


(lib.btDetenerse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrCdQg5BAg4BqQh6gogYgdICwj4QhYiIhOhbQA5g/A8gjQA+BBBZCGQBKhoB9iCQBRAtAuAmQhHBUhoBwQg4BBgSAaQBeCmAhBdQg8AqhMAeQgUgkhDieg");
	this.shape.setTransform(73.55,70.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AF0000").s().p("AgsCdQg4BBg4BpQh7gogWgcICvj5QhYiIhNhbQA4g/A9gjQA9BBBZCGQBKhoB+iCQBQAtAvAmQhIBUhoBwQg3BBgUAaQBfClAgBeQg7AqhMAeQgUgjhEifg");
	this.shape_1.setTransform(76.4,72.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:76.4,y:72.4}},{t:this.shape,p:{x:73.55,y:70.4}}]}).to({state:[{t:this.shape_1,p:{x:83.75,y:78.6}},{t:this.shape,p:{x:80.9,y:76.6}}]},2).to({state:[]},1).wait(1));

	// Capa_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF4C98").s().p("AocIdQjgjgAAk9QAAk8DgjgQDgjgE8AAQE9AADgDgQDgDgAAE8QAAE9jgDgQjgDgk9AAQk8AAjgjgg");
	this.shape_2.setTransform(72.1665,71.9917,0.8044,0.8044);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B4C98").s().p("AmyGzQi0i0AAj/QAAj+C0i1QC0izD+gBQD/ABC0CzQC0C1AAD+QAAD/i0C0Qi0C1j/AAQj+AAi0i1g");
	this.shape_3.setTransform(77.075,77.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AmyGzQi0i0AAj/QAAj+C0i1QC0izD+gBQD/ABC0CzQC0C1AAD+QAAD/i0C0Qi0C1j/AAQj+AAi0i1g");
	this.shape_4.setTransform(72.175,72);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AF0000").s().p("AmyGzQi0i0AAj/QAAj+C0i0QC0i1D+ABQD/gBC0C1QC0C0AAD+QAAD/i0C0Qi0C0j/AAQj+AAi0i0g");
	this.shape_5.setTransform(77.075,77.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4,p:{x:72.175,y:72}}]},1).to({state:[{t:this.shape_4,p:{x:77.075,y:77.35}}]},1).wait(2));

	// Capa_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AocIdQjgjgAAk9QAAk8DgjgQDgjgE8AAQE9AADgDgQDgDgAAE8QAAE9jgDgQjgDgk9AAQk8AAjgjgg");
	this.shape_6.setTransform(76.5,76.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,153);


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


(lib.sorteador = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3
	this.btStop = new lib.btDetenerse();
	this.btStop.name = "btStop";
	this.btStop.setTransform(86.7,83.6,1,1,0,0,0,76.5,76.5);
	new cjs.ButtonHelper(this.btStop, 0, 1, 2, false, new lib.btDetenerse(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btStop).wait(6));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPDEIgChrQgDhegKhQQAAg6B4AAIAIAAQCPAAA9B7QANAcAAAlIAAADQAABrhTArQhTAsiAAAQgfAAgFgugAgGg7QAJCCABBeQCmgTAAhnQAAhGhegeQgUgFgWAAgAIUCrIgjgmIAABZIgMAAQgyAAgVgIQADgZgBiLQABiKATggQAmgpA4AAIAZAAQBbABAoBWQAIAaAAATIAAAJQAABahfAtQAaAaBDAhQghAxgSAOQgzgUg6gugAH2g0QgFAYAAArIAAAKQAPASAeAAIAIAAQApAAARgmQAFgQAAgNIAAgFQAAgqg3gJIgSAAQgmAAAAAcgAlhDKQgNgWAAgdIAAhHIgaAFIAAhPIAdgDIAAgoQAAh3CFABIAEAAQA5AAA1AHQAAAegNAzQgogHgwAAIgPAAQgyAAgBAdIAAArIAjgBQAgAAAdADIABAWQAAAggDAdQghgFg/AAIAABJIAwACQAhABBHgKIAHBTQhEAIhBgBQhLAAgTgggAq1DSIADiiQAAiKATggQAmgpA4AAIAZAAQBbAAAoBWQAIAbAAASIAAALQAABWhWAuQgYAKgnACQgZgCgXgFIAABiIgfACQgdAAgXgGgApdg3QgFAZAAArIAAAKQAPARAeAAIAIAAQApAAARglQAFgRAAgNIAAgFQAAgqg3gJIgSAAQgmAAAAAcgAEQAVIAAgeQAChXAKgTQASAAA8ANQgLA2AABZQAABBAHBWIhNACQgKhhABhMgAEpiRQgRgQAAgXQAAgYARgRQAQgQAXAAQAXAAARAQQAQARAAAYQAAAXgQAQQgRARgXAAQgXAAgQgRg");
	this.shape.setTransform(298.2,79.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACsCdIgDhrQgChegKhQQAAg6B5AAIAHAAQCQAAA9B7QAMAdAAAkIAAADQAABrhSArQhTAsiCAAQgfAAgEgugAD1hiQAKCCABBeQClgTAAhnQAAhGhdgeQgUgFgXAAgAg1DGQhaAAgQiaIAAgUQAAhLAchWQBRADAAAFQgcBaAABCQAABBAZAWIAFAAQAoAAAlhdQAVg7AAhMQAMgFAhAAIAoAAQgPBbAABQQAAAoAKBJIAAACQgtAIghAKIAAgCQgFgKAAgSIAAgCIgDAAQgxAtgrAAgAILCgIA1iaQA1icAhgnQAOgNAQAAIANAAQAyAAAwDCIAXAAQAJAhAKAxIgYADIAPBMIAAAHIhRANIgPhdIhsAEQgOAtgTA2QhFgQgHgHgAKWABIA8gBIAAgDQgHgggSgxIgCAAgAm7CWIAwhgQhWhlgUg2QA4goAPAAQAUA5A/BFQASgkBdh0QA3AvAAAIQhnCAgfA6QggA6gSAzQhOgWAAgLgAtMCgIA1iaQA1icAhgnQAOgNAQAAIANAAQAyAAAwDCIAXAAQAJAhAKAxIgYADIAPBMIAAAHIhRANIgPhdIhsAEQgOAtgTA2QhFgQgHgHgArBABIA8gBIAAgDQgHgggSgxIgCAAg");
	this.shape_1.setTransform(298.175,83.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj8CjQgMgWAAgdIAAhHIgaAFIAAhOIAcgDIAAgpQAAh3CGABIADAAQA6AAA0AHQAAAegMAzQgpgHgwgBIgPAAQgyABAAAdIAAArIAjgBQAfAAAeADIAAAXQAAAfgDAdQghgFg/AAIAABJIAwACQAiABBGgKIAHBTQhEAIhBgBQhKAAgUgggACPC+QhwAAgZh6QAogDAugHQAFAwA0gBIABAAQA0AAAGgqIABgFQAAgihGgPQhLgRgRgYQgTgYAAgeIABgPQALhCBDgQQAVgEAZAAQA0gBBDAXIgeBMQgZgNgwgEIgQgBQghAAgHANIgBACQAAAQBeAbQBVAZAABHQAAANgDAPQgWBvh1AEg");
	this.shape_2.setTransform(298.175,83.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkxCaIgDhsQgChegKhQQAAg6B5AAIAHAAQCQAAA8B8QAMAcAAAlIAAACQAABrhRAsQhTAriCAAQgfAAgEgtgAjohmQAKCDABBdQClgSAAhoQAAhFhdgfQgUgFgXAAgABUCfQgMgVAAgdIAAhHIgaAEIAAhOIAcgDIAAgpQAAh2CGAAIADAAQA6AAA0AHQAAAegMAzQgpgHgwAAIgPAAQgyAAAAAeIAAArIAjgBQAfAAAeADIAAAWQAAAfgDAdQghgFg/AAIAABKIAwACQAiAABGgKIAHBTQhEAIhBAAQhKAAgUghg");
	this.shape_3.setTransform(298.125,83.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AovDyQg8gJAAhAIAAguQAAh6AEh3QAtgHAkgDQgIBPABB6IAABUQBZgYAfAAIAQAAIAABRIgKAAQgfAAhuAcgAyBDyQgkAAgUgyIhJkFQBAgaAMAAQASA3AoCUQBXjVAJAAIBEAkIhECVQg8CigoAAgALjDKQgMgWAAgdIAAhHIgaAFIAAhPIAcgDIAAgoQAAh3CGABIADAAQA5AAA1AHQAAAegMAzQgqgHgvAAIgPAAQgzAAABAdIAAArIAjgBQAfAAAdADIABAWQAAAggDAdQghgFg/AAIAABJIAwACQAiABBFgKIAIBTQhEAIhCgBQhJAAgUgggAjMDKQgMgWAAgdIAAhHIgaAFIAAhPIAdgDIAAgoQgBh3CGABIADAAQA6AAAzAHQAAAegMAzQgogHgwAAIgOAAQgzAAAAAdIAAArIAjgBQAgAAAdADIABAWQAAAggEAdQghgFg+AAIAABJIAwACQAhABBFgKIAHBTQhDAIhBgBQhKAAgUgggAC3BsIgrg8IgDAIIgCCKIhQgCQAHg6ACimQANgzAmAAIAHAAQAjAABHB7QApA9AAAFIADAAQAPhoAAhmQABgSAGAAIBJADIAAADQgUEggHAAQAAAug1AKQgrAAg9h8gARuDlQhwAAgYh6QAngDAugHQAFAwA1gBIABAAQAzAAAGgqIABgFQAAgihGgPQhLgSgRgYQgTgXAAgeIABgPQALhCBDgQQAWgEAYAAQA0gBBDAXIgeBMQgYgNgwgEIgRgBQghAAgHANIgBACQAAAQBeAbQBWAYgBBIQAAANgDAPQgWBvh1AEgAvDDHIA1iaQA1icAggnQAPgNAQAAIANAAQAyAAAwDBIAXAAQAJAiAJAxIgXADIAOBMIAAAHIhQANIgPhdIhsAEQgOAtgUA2QhEgQgHgHgAs5AoIA9gCIAAgDQgHgggSgwIgCAAgAHiDHQASiDAAhuIAAgZQg1AFgwAHIgFAAIgDgMIAAgwIgCgSQAJgPEPgFIAKADIAABMQAAAEgFABIheAAIAAAOQAABLgMC2gAmBAVIAAgeQADhXAKgTQASAAA8ANQgLA2AABZQAABBAHBWIhNACQgKhhAAhMgAlniRQgRgQAAgXQAAgYARgRQAQgQAXAAQAXAAARAQQAQARAAAYQAAAXgQAQQgRARgXAAQgXAAgQgRg");
	this.shape_4.setTransform(298.2,79.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Capa_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AF0600").s().p("A6YFpIAArRMA0xAAAIAALRg");
	this.shape_5.setTransform(301.125,81.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("A3nNFQlcABj1j2Qj1j1AAlbQAAlaD1j2QD1j1FcAAMA8VAAAIAAHEMg0xAAAIAALSMA0xAAAIAAH0g");
	this.shape_6.setTransform(235,83.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,167.5);


(lib.secretPhrase = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.palabra5 = new lib.palabra4();
	this.palabra5.name = "palabra5";
	this.palabra5.setTransform(143.55,127.6,1,1,0,0,0,110.1,20.8);
	this.palabra5.alpha = 0;

	this.palabra4 = new lib.palabra3();
	this.palabra4.name = "palabra4";
	this.palabra4.setTransform(177.05,79.8,1,1,0,0,0,27.6,17.1);
	this.palabra4.alpha = 0;

	this.palabra3 = new lib.palabra2();
	this.palabra3.name = "palabra3";
	this.palabra3.setTransform(107.4,79.5,1,1,0,0,0,24.9,16.8);
	this.palabra3.alpha = 0;

	this.palabra2 = new lib.palabra1();
	this.palabra2.name = "palabra2";
	this.palabra2.setTransform(211.55,28,1,1,0,0,0,72.5,17.4);
	this.palabra2.alpha = 0;

	this.palabra1 = new lib.palabra0();
	this.palabra1.name = "palabra1";
	this.palabra1.setTransform(62.5,24.7,1,1,0,0,0,59.5,20.8);
	this.palabra1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.palabra1},{t:this.palabra2},{t:this.palabra3},{t:this.palabra4},{t:this.palabra5}]}).wait(1));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(14,1,1).p("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");
	this.shape.setTransform(143.55,76.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.secretPhrase, new cjs.Rectangle(-4,-3.1,295.1,158.5), null);


(lib.helpScreenScr = function(mode,startPosition,loop,reversed) {
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

	// pido
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.988)").s().p("ASlBpIAAg0IBLAAIAAgPIg5glQgLgGgDgJQgEgGAAgNIAAgtQAAgLAIgHQAHgIAMAAIByAAIAAAaIgLAbIhAAAIAAAJIA5AmQAKAGAEAJQAEAHAAANIAAAwQAAALgIAIQgHAHgLAAgAQNBpIAAjRICNAAIAAAaIgLAbIhAAAIAAAYIBAAAIAAAyIhAAAIAAAeIBLAAIAAA0gAOwBpIgfhhIgFAAIAIBHIAAAaIg8AAIAAjRIBFAAIAfBhIAFAAIgIhHIAAgaIA8AAIAADRgAK9BpQgMAAgHgHQgIgIAAgLIAAidQAAgLAIgHQAHgIAMAAIBoAAQAMAAAHAIQAIAHAAALIAACdQAAALgIAIQgHAHgMAAgALkA1IAaAAIAAhoIgaAAgAJJBpIAAjRIBCAAIAADRgAHGBpQgMAAgHgHQgIgIAAgLIAAidQAAgLAIgHQAHgIAMAAIByAAIAAAaIgLAbIhAAAIAABoIBLAAIAAA0gAEoBpQgMAAgHgHQgIgIAAgLIAAidQAAgLAIgHQAHgIAMAAIByAAIAAAaIgLAbIhAAAIAABoIBLAAIAAA0gAByBpQgMAAgHgHQgHgIAAgLIAAi3IBBAAIAACdIAbAAIAAidIBBAAIAADRgAAGBpIgRhCIgNAAIAABCIhCAAIAAjRICDAAQALAAAHAIQAIAHAAALIAABRQAAAJgFAGQgFAIgIACIAVAzIAAAagAgYgMIAZAAIAAgnIgZAAgAjUBpIAAicIgoAAIAAg1ICTAAIAAAaIgKAbIggAAIAACcgAmRBpIAAg0IBLAAIAAgPIg5glQgLgGgDgJQgEgGAAgNIAAgtQAAgLAIgHQAHgIAMAAIByAAIAAAaIgLAbIhAAAIAAAJIA5AmQAKAGAEAJQAEAHAAANIAAAwQAAALgIAIQgHAHgLAAgAnoBpIgfhhIgFAAIAIBHIAAAaIg8AAIAAjRIBFAAIAfBhIAFAAIgIhHIAAgaIA8AAIAADRgAqZBpIAAjRIBBAAIAADRgAt+BpIgShCIgNAAIAABCIhCAAIAAjRICEAAQALAAAHAIQAIAHAAALIAABRQAAAJgFAGQgFAIgIACIAVAzIAAAagAudgMIAaAAIAAgnIgaAAgAx9BpIAAjRICNAAIAAAaIgLAbIhAAAIAAAYIBAAAIAAAyIhAAAIAAAeIBLAAIAAA0gA0PBpIgijAIAAgRIBCAAIANCdIAIAAIANidIBCAAIAAARIgiDAg");
	this.shape.setTransform(654.825,257.25);

	this.bt1 = new lib.btTransp();
	this.bt1.name = "bt1";
	this.bt1.setTransform(506.5,207.15);
	new cjs.ButtonHelper(this.bt1, 0, 1, 2, false, new lib.btTransp(), 3);

	this.instance = new lib.CachedBmp_60();
	this.instance.setTransform(713.3,485.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_59();
	this.instance_1.setTransform(419,163.9,0.5,0.5);

	this.bt2 = new lib.btTransp();
	this.bt2.name = "bt2";
	this.bt2.setTransform(660,450.65);
	new cjs.ButtonHelper(this.bt2, 0, 1, 2, false, new lib.btTransp(), 3);

	this.instance_2 = new lib.CachedBmp_62();
	this.instance_2.setTransform(706.55,467.55,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_61();
	this.instance_3.setTransform(419,224.9,0.5,0.5);

	this.bt3 = new lib.btTransp();
	this.bt3.name = "bt3";
	this.bt3.setTransform(660,450.65);
	new cjs.ButtonHelper(this.bt3, 0, 1, 2, false, new lib.btTransp(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt1},{t:this.shape}]}).to({state:[{t:this.bt2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.bt3},{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// logo
	this.instance_4 = new lib.CachedBmp_63();
	this.instance_4.setTransform(43.1,48,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// Capa_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
	this.shape_1.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.fotosGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {anOn:1,anOff:7};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(5));

	// Capa_5
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.setTransform(174.1,114);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-152.9,y:-90},6).to({x:174.1,y:114},4).wait(1));

	// Capa_6
	this.instance_1 = new lib.Interpolación2("synched",0);
	this.instance_1.setTransform(466,110.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:620,y:-108.3},6).to({x:466,y:110.7},4).wait(1));

	// Capa_8
	this.instance_2 = new lib.Interpolación3("synched",0);
	this.instance_2.setTransform(370.3,289.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:335.3,y:608.15},6).to({x:370.3,y:289.55},4).wait(1));

	// Capa_9
	this.instance_3 = new lib.Interpolación4("synched",0);
	this.instance_3.setTransform(526.15,360.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:838.1,y:626.75},6).to({x:526.15,y:360.8},4).wait(1));

	// Capa_10
	this.instance_4 = new lib.Interpolación5("synched",0);
	this.instance_4.setTransform(162,353);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-108,y:343},6).to({x:162,y:353},4).wait(1));

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD39D").s().p("EgttgkIMBbbgAtMAAABHBMhZPACqg");
	this.shape.setTransform(323.45,265.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCD39D").s().p("EgttgeEMBbbgAtMAAAA7PMhZnACUg");
	this.shape_1.setTransform(323.45,226.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCD39D").s().p("EgttgYAMBbbgAtMAAAAvcMhZ9AB/g");
	this.shape_2.setTransform(323.45,187.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCD39D").s().p("EgttgR8MBbbgAtMAAAAjqMhaVABpg");
	this.shape_3.setTransform(323.45,149.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCD39D").s().p("EgttgL4MBbbgAtIAAX3MhatABUg");
	this.shape_4.setTransform(323.45,110.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCD39D").s().p("EgttgF1MBbbgAtIAAMFMhbDAA/g");
	this.shape_5.setTransform(323.45,71.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCD39D").s().p("EgttAAOMBbbgAsIAAAUMhbbAAog");
	this.shape_6.setTransform(323.45,32.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCD39D").s().p("EgttgI3MBbbgAtIAAR+Mha4ABLg");
	this.shape_7.setTransform(323.45,90.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCD39D").s().p("EgttgbCMBbbgAtMAAAA1VMhZyACKg");
	this.shape_8.setTransform(323.45,207.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270.3,-178.8,1168.4,881.2);


(lib.controlOpciones = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3
	this.instance = new lib.CachedBmp_58();
	this.instance.setTransform(9.3,3.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_2
	this.btOk = new lib.btOpcionesPass();
	this.btOk.name = "btOk";
	this.btOk.setTransform(151.2,43.55,0.822,0.822,0,-90,90,33.5,33.5);
	this.btOk.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, -34))];
	this.btOk.cache(-2,-2,71,71);
	new cjs.ButtonHelper(this.btOk, 0, 1, 2, false, new lib.btOpcionesPass(), 3);

	this.btNext = new lib.btOpcionesPass();
	this.btNext.name = "btNext";
	this.btNext.setTransform(260.15,27.55,0.822,0.822,0,0,180,33.5,33.5);
	new cjs.ButtonHelper(this.btNext, 0, 1, 2, false, new lib.btOpcionesPass(), 3);

	this.btPrev = new lib.btOpcionesPass();
	this.btPrev.name = "btPrev";
	this.btPrev.setTransform(27.55,27.55,0.822,0.822,0,0,0,33.5,33.5);
	new cjs.ButtonHelper(this.btPrev, 0, 1, 2, false, new lib.btOpcionesPass(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btPrev},{t:this.btNext},{t:this.btOk}]}).wait(1));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AuCSDMAAAgkFITJAAMAI8AkFg");
	this.shape.setTransform(414.175,-86.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.controlOpciones, new cjs.Rectangle(0,-202.4,504.1,277.4), null);


(lib.bienHechoClip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3
	this.bt = new lib.btTransp();
	this.bt.name = "bt";
	this.bt.setTransform(290.3,300.6,0.977,0.775);
	new cjs.ButtonHelper(this.bt, 0, 1, 2, false, new lib.btTransp(), 3);

	this.instance = new lib.CachedBmp_56();
	this.instance.setTransform(318.4,317.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_55();
	this.instance_1.setTransform(297.15,312.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.bt}]}).wait(1));

	// Capa_2
	this.instance_2 = new lib.CachedBmp_57();
	this.instance_2.setTransform(0.2,202.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Capa_1
	this.txt = new cjs.Text("", "italic 20px 'Arial'");
	this.txt.name = "txt";
	this.txt.lineHeight = 24;
	this.txt.lineWidth = 379;
	this.txt.alpha = 0.98823529;
	this.txt.parent = this;
	this.txt.setTransform(161.8,38.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,102,102,0.988)").s().p("EghvAVmMAAAgrLMBDgAAAMAAAArLg");
	this.shape.setTransform(344.9,159);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bienHechoClip, new cjs.Rectangle(0.2,20.8,583.1999999999999,433), null);


// stage content:
(lib.juego2 = function(mode,startPosition,loop,reversed) {
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
		createjs.Touch.enable(stage);
		
		var textos = [
			"", [
				"Observa la imagen. ¿Que crees que debe hacer Mario, el niño de la imagen?",
				"Ignorarlos, no prestarles atención",
				"Hablar con un adulto sobre lo que pasa.",
				"Hacer un plan de venganza, para hacerles lo mismo.",
				"Muy Bien:  Recuerda que aunque hay situaciones que parecen ser muy difíciles, siempre habrá alguien dispuesto ayudarnos, hablar con alguien de tu familia o tus maestros ayudará a que puedas resolver situaciones en las que no te sientes bien."
			],
			[
				"Observa la imagen. ¿Crees que las personas pueden adivinar nuestros pensamientos?",
				"Si, no es necesario contar nada, los demás pueden adivinarlo.",
				"No, si no digo lo que me pasa nadie puede saberlo.",
				"A veces, depende de los superpoderes.",
				"Muy bien. Pide ayuda. Si no expresas que lo que necesitas, como van a hacer los demás para saberlo. Ellos no son adivinos. Así que hazles saber que requieres ayuda."
			],
			[
				"Observa la Imagen.  Felipe se siente mal porque hay un tema de la escuela que no entiende. ¿Que debe hacer?",
				"Esperar a la siguiente clase a ver si el profesor nuevamente lo explica.",
				"Dejar el tema así, si saca mala nota la puede mejorar más adelante.",
				"Preguntarle a alguien en casa o en el colegio para que le explique el tema nuevamente.",
				"Muy bien, recuerda que algunas veces tendrás que oír un no por respuesta. Está bien, inténtalo de nuevo. Siempre hay alguien que está dispuesto a ayudarte."
			],
			[
				"Observa la imagen.  ¿A quién puede pedirle ayuda Carla?",
				"A sus familiares.",
				"A sus maestros.",
				"A familiares y maestros.",
				"Cuando tenemos dificultades en la escuela, a veces no sabemos con quien hablar, porque nos da pena, miedo, porque puede parecer una bobada, pero nunca dudes en pedir ayuda a tus padres y maestros. "
			],
			[
				"Observa la imagen.  Juanita hace sus tareas sola.  ¿Crees que siempre hay que pedir ayuda?",
				"Todas las cosas puedo hacerlas de forma autónoma.",
				"Siempre debo pedir ayuda.",
				"Pido ayuda cuando siento que no logro resolver algo.",
				"Muy bien.  Recuerda que hay muchas cosas que podemos hacer muy bien sin ayuda, pero pedir ayuda está bien, no dudes en hacerlo.  "
			]
		];
		
		var root = this;
		var ronda = -1;
		var cardN = 1;
		var puntos = 0;
		
		var gameList = [
			[1, 2],
			[2, 2],
			[3, 3],
			[4, 3],
			[5, 3]
		];
		shuffle(gameList)
		var sorteoX = root.sorteo.x;
		
		//Start Game
		root.bienHecho.visible = false;
		root.juegoStart.bt1.on("click", function () {
			root.juegoStart.gotoAndStop(1);
			playSound("/2/audio/000");
		});
		root.juegoStart.bt2.on("click",function () {
			iniciar();
			temporizador();
		});
		root.juegoStart.bt3.on("click",function () {
			window.open("/jugar/0", "_self");
		});
		//
		root.sorteo.btStop.on("click", showCard);
		root.controles.btNext.on("click", function () {
			if (cardN < 3) {
				createjs.Tween.get(root.imgRtas).to({
					y: (root.imgRtas.y - 535)
				}, 500, createjs.Ease.getPowIn(2.2));
				cardN++;
				playSound("/2/audio/" + gameList[ronda][0] + "_" + cardN);
				root.rtaTxt.text = textos[gameList[ronda][0]][cardN];
			}
		})
		root.controles.btPrev.on("click", function () {
			if (cardN > 1) {
				createjs.Tween.get(root.imgRtas).to({
					y: (root.imgRtas.y + 535)
				}, 500, createjs.Ease.getPowIn(2.2));
				cardN--
				playSound("/2/audio/" + gameList[ronda][0] + "_" + cardN);
				root.rtaTxt.text = textos[gameList[ronda][0]][cardN];
			}
		})
		root.controles.btOk.on("click", function () {
			if (cardN == gameList[ronda][1]) {
				var soundF = "bien";
				puntos += 75;
				hideCardsAndOptions()
			} else {
				var soundF = "mal";
				puntos -= 25;
			}
			root.scoreText.text = puntos;
			var audio2 = new Audio("/audio/" + soundF + ".mp3");
			audio2.pause();
			audio2.play();
		})
		
		//
		function iniciar() {
			root.scoreText.text = puntos;
			cardN = 1;
			root.imgRtas.y = 45;
			root.bienHecho.visible = false;
			root.controles.visible = false;
			root.sorteo.play();
			ronda++;
			if (ronda > 4) {
				gameOver();
			} else {
				root.scoreLevel.text = "Ronda " + (ronda + 1) + "/5"
				root.juegoStart.visible = false;
				createjs.Tween.get(root.sorteo)
					.wait(500)
					.to({
						x: 490
					}, 1000);
				root.sorteo.btStop.mouseEnabled = true
			}
		}
		
		function showCard() {
			root.sorteo.btStop.mouseEnabled = false
			root.sorteo.gotoAndStop(gameList[ronda][0]);
			createjs.Tween.get(root.sorteo)
				.wait(1000)
				.to({
					x: 790
				}, 1000)
				.call(function () {
					root.preguntaTxt.text = textos[gameList[ronda][0]][0];
					root.cardAnim.gotoAndPlay("anOn");
					var p = new createjs.Bitmap('/2/img/pr' + gameList[ronda][0] + ".png");
					root.imgPreg.addChild(p);
					playSound("/2/audio/pr" + gameList[ronda][0]).addEventListener("ended", function () {
						showOptions();
					});
				});
		}
		
		var ft1, ft2, ft3;
		function showOptions() {
			playSound("/2/audio/" + gameList[ronda][0] + "_1");
			root.rtaTxt.text = textos[gameList[ronda][0]][1];
			//
			ft1 = new createjs.Bitmap('/2/img/' + gameList[ronda][0] + "_1.png");
			ft2 = new createjs.Bitmap('/2/img/' + gameList[ronda][0] + "_2.png");
			ft3 = new createjs.Bitmap('/2/img/' + gameList[ronda][0] + "_3.png");
			ft2.y = ft1.y + 600;
			ft3.y = ft2.y + 600;
			root.imgRtas.addChild(ft1);
			root.imgRtas.addChild(ft2);
			root.imgRtas.addChild(ft3);
			//
			root.controles.visible = true;
			root.imgRtas.visible = true;
		}
		
		function hideCardsAndOptions() {
			root.imgRtas.removeChild(ft1);
			root.imgRtas.removeChild(ft2);
			root.imgRtas.removeChild(ft3);
			root.controles.visible = false;
			root.imgRtas.visible = false;
			root.preguntaTxt.text = "";
			root.rtaTxt.text = "";
			root.cardAnim.gotoAndPlay("anOff");
			root.bienHecho.visible = true;
			root.bienHecho.txt.text = textos[gameList[ronda][0]][4];
			playSound("/2/audio/" + gameList[ronda][0] + "_4");
			createjs.Tween.get(root.claveSecreta["palabra" + gameList[ronda][0]])
				.to({
					alpha: 100
				}, 1000);
		}
		root.bienHecho.bt.on("click", iniciar);
		
		function gameOver() {
			root.juegoStart.gotoAndStop(2);
			root.juegoStart.visible = true;
			enviaData(puntos, 2)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bienhechoscr
	this.bienHecho = new lib.bienHechoClip();
	this.bienHecho.name = "bienHecho";
	this.bienHecho.setTransform(326.25,266.7,1,1,0,0,0,295.2,227);

	this.timeline.addTween(cjs.Tween.get(this.bienHecho).wait(1));

	// helpScreen
	this.juegoStart = new lib.helpScreenScr();
	this.juegoStart.name = "juegoStart";
	this.juegoStart.setTransform(480,270,1,1,0,0,0,480,270);

	this.timeline.addTween(cjs.Tween.get(this.juegoStart).wait(1));

	// scoreLevel
	this.instance = new lib.CachedBmp_53();
	this.instance.setTransform(13.3,461.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_52();
	this.instance_1.setTransform(11.7,463.2,0.5,0.5);

	this.scoreText = new cjs.Text("0", "33px 'Christmas Carols'", "#FFFFFF");
	this.scoreText.name = "scoreText";
	this.scoreText.textAlign = "center";
	this.scoreText.lineHeight = 45;
	this.scoreText.lineWidth = 100;
	this.scoreText.parent = this;
	this.scoreText.setTransform(75.9,498.2,0.8151,0.808);

	this.instance_2 = new lib.CachedBmp_51();
	this.instance_2.setTransform(5.7,491.05,0.5,0.5);

	this.instance_3 = new lib.temporizador();
	this.instance_3.setTransform(690.6,494.75,1,1,0,0,0,52,23.4);

	this.scoreLevel = new cjs.Text("ronda: 1/5", "normal 400 25px 'Fredoka One'", "#FFFFFF");
	this.scoreLevel.name = "scoreLevel";
	this.scoreLevel.textAlign = "right";
	this.scoreLevel.lineHeight = 32;
	this.scoreLevel.lineWidth = 207;
	this.scoreLevel.parent = this;
	this.scoreLevel.setTransform(947.9,483.85);
	if(!lib.properties.webfonts['Fredoka One']) {
		lib.webFontTxtInst['Fredoka One'] = lib.webFontTxtInst['Fredoka One'] || [];
		lib.webFontTxtInst['Fredoka One'].push(this.scoreLevel);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scoreLevel},{t:this.instance_3},{t:this.instance_2},{t:this.scoreText},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// claveSecreta
	this.claveSecreta = new lib.secretPhrase();
	this.claveSecreta.name = "claveSecreta";
	this.claveSecreta.setTransform(802.65,111.25,1,1,0,0,0,143.6,78.2);

	this.timeline.addTween(cjs.Tween.get(this.claveSecreta).wait(1));

	// sorteo
	this.sorteo = new lib.sorteador();
	this.sorteo.name = "sorteo";
	this.sorteo.setTransform(790,256.15);

	this.timeline.addTween(cjs.Tween.get(this.sorteo).wait(1));

	// animateOp
	this.cardAnim = new lib.fotosGame();
	this.cardAnim.name = "cardAnim";
	this.cardAnim.setTransform(319.45,211.8,1,1,0,0,0,317.3,206);

	this.timeline.addTween(cjs.Tween.get(this.cardAnim).wait(1));

	// juego
	this.rtaTxt = new cjs.Text("", "18px 'Arial'");
	this.rtaTxt.name = "rtaTxt";
	this.rtaTxt.lineHeight = 22;
	this.rtaTxt.lineWidth = 117;
	this.rtaTxt.alpha = 0.98823529;
	this.rtaTxt.parent = this;
	this.rtaTxt.setTransform(655.3,235.85);

	this.preguntaTxt = new cjs.Text("", "bold 22px 'Arial'");
	this.preguntaTxt.name = "preguntaTxt";
	this.preguntaTxt.textAlign = "center";
	this.preguntaTxt.lineHeight = 27;
	this.preguntaTxt.lineWidth = 258;
	this.preguntaTxt.alpha = 0.98823529;
	this.preguntaTxt.parent = this;
	this.preguntaTxt.setTransform(179.35,333.55);

	this.controles = new lib.controlOpciones();
	this.controles.name = "controles";
	this.controles.setTransform(468.05,452,1,1,0,0,0,144,31);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("A3FRCICNhSIDtGaIiNBSgAPwU4IGajsIBSCNImaDsgARL2JICNhSIDtGaIiNBSgA3bzYIGajsIBSCNImaDsg");
	this.shape.setTransform(181.025,186.925);

	this.imgPreg = new lib.imgPregunta();
	this.imgPreg.name = "imgPreg";
	this.imgPreg.setTransform(178.75,182.7,1,1,0,0,0,130.3,130.3);

	this.imgRtas = new lib.imgOpciones();
	this.imgRtas.name = "imgRtas";
	this.imgRtas.setTransform(344.2,45,0.8817,0.8817);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.imgRtas},{t:this.imgPreg},{t:this.shape},{t:this.controles},{t:this.preguntaTxt},{t:this.rtaTxt}]}).wait(1));

	// juegoBg
	this.instance_4 = new lib.CachedBmp_54();
	this.instance_4.setTransform(7.2,5.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,270,780,270);
// library properties:
lib.properties = {
	id: '6F09669B17AA4BA493DE51C3BD050531',
	width: 960,
	height: 540,
	fps: 24,
	color: "#55A2D2",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"/images/juego2_atlas_1.png", id:"juego2_atlas_1"}
	],
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
an.compositions['6F09669B17AA4BA493DE51C3BD050531'] = {
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