(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"juego3_atlas_1", frames: [[0,1646,1489,337],[0,1118,1136,526],[1138,1118,843,337],[0,0,2002,1116]]},
		{name:"juego3_atlas_2", frames: [[854,392,354,95],[0,377,498,95],[0,166,762,112],[995,0,843,137],[995,139,843,137],[0,280,684,95],[764,278,762,112],[0,0,993,164],[1840,0,113,182],[1528,278,280,280],[0,474,330,95],[854,489,330,95],[500,392,352,103]]}
];


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



(lib.CachedBmp_88 = function() {
	this.initialize(ss["juego3_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["juego3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["juego3_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["juego3_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(img.CachedBmp_83);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2352,735);


(lib.CachedBmp_82 = function() {
	this.initialize(ss["juego3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["juego3_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["juego3_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["juego3_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["juego3_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["juego3_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["juego3_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["juego3_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["juego3_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["juego3_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["juego3_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["juego3_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["juego3_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(img.CachedBmp_69);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2352,735);// helper functions:

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


(lib.winAnimate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {bien:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxpRqMAAAgjTMAjTAAAMAAAAjTg");
	this.shape.setTransform(113,113);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFE3").s().p("Av3QtQgSlygMmAQgXqfABqTIAAgBQGogTG7gPQE8gKE5gFQDmgEDlABIB/ABIAOE6IATJUQATIdABIQIAABpQm8ASnSARQnWAPnZACIh0AAIhyAAg");
	this.shape_1.setTransform(115.1979,115.0034);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFC6").s().p("AuGPwQgllGgWlkQgupyACpZIAAgBQF0gnGbgeQElgUEegJQDWgJDTACIB2ACIAbEZIAnIhQAmH5ACHhIAABhQmHAlmxAiQmxAdm2AEIhrAAIhqAAg");
	this.shape_2.setTransform(117.4311,117.0068);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFAA").s().p("AsVOzQg2kbgjlHQhEpFADogIAAgBQFAg7F7gsQEOgeECgNQDGgODCACIBsAEIAqD4IA6HuQA5HWADGxIAABZQlRA4mRAzQmMArmSAGIhVABIhwgBg");
	this.shape_3.setTransform(119.629,119.0192);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF8E").s().p("AqkN2QhIjvgukrQhboYAEnnIAAAAQENhPFbg6QD3gpDmgSQC2gSCwADQAxABAyAEIA3DYQAmDKAoDwQBMGzAEGAIAABSQkbBKlwBEQloA6lvAIIhQABIhkgBg");
	this.shape_4.setTransform(121.827,121.023);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF71").s().p("AozM4QhajDg5kOQhznrAGmtIAAgBQDYhiE7hJQDgg0DMgVQClgXCeAEQAtACAuADQAhBWAkBiQAuCrAyDcQBfGQAFFQQABAlgBAlQjlBdlQBVQlCBIlMAKIhEABQgwAAgvgCg");
	this.shape_5.setTransform(124.0551,123.0219);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF55").s().p("AnBL7QhtiXhEjyQiKm+AHl0IAAAAQClh2EbhYQDIg+CxgaQCVgbCMAFQApACApAEQAoBEAqBTQA4CNA8DHQByFtAGEfQABAigBAhQivBwkvBmQkeBWkoAMIg/ACQgqAAgpgDg");
	this.shape_6.setTransform(126.253,125.0252);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF39").s().p("AlQK+Qh/hshQjVQigmSAIk6QBxiJD7hnQCxhICWgeQCEgfB7AFQAkACAkAFQAwAzAxBDQBBBvBGCzQCFFJAHDvQABAegBAdQh6CCkOB3Qj5BmkEAOIg3ABQgmAAglgDg");
	this.shape_7.setTransform(128.451,127.0378);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF1C").s().p("AjfKBQiRhAhbi5Qi3lmAKj/QA8idDbh1QCahTB7giQB0gkBpAGQAfACAgAGQA2AhA5A1QBKBQBQCeQCYEmAIC/QACAZgCAaQhECVjuCIQjUB0jhAQQgYABgYAAQghAAgggDg");
	this.shape_8.setTransform(130.6837,129.0414);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_9.setTransform(132.8814,131.0528);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,0,0.949)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_10.setTransform(132.8814,127.4028);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,0,0.898)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_11.setTransform(132.8814,123.8028);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,0,0.851)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_12.setTransform(132.8814,120.1528);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,0,0.8)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_13.setTransform(132.8814,116.5028);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,0,0.749)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_14.setTransform(132.8814,112.9028);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,0,0.698)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_15.setTransform(132.8814,109.2528);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,0,0.651)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_16.setTransform(132.8814,105.6028);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,0,0.6)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_17.setTransform(132.8814,101.9528);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,0,0.549)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_18.setTransform(132.8814,98.3528);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,0,0.502)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_19.setTransform(132.8814,94.7028);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,0,0.451)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_20.setTransform(132.8814,91.0528);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,0,0.4)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_21.setTransform(132.8814,87.4528);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,0,0.349)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_22.setTransform(132.8814,83.8028);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,0,0.302)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_23.setTransform(132.8814,80.1528);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,0,0.251)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_24.setTransform(132.8814,76.5528);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,0,0.2)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_25.setTransform(132.8814,72.9028);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,0,0.149)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_26.setTransform(132.8814,69.2528);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,0,0.102)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_27.setTransform(132.8814,65.6028);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,0,0.051)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_28.setTransform(132.8814,62.0028);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,0,0)").s().p("Al3GTQjOk5ALjGQAJixC6iEQCDhcBggnQBlgpBWAHQBWAIBcA2QBUAyBaCJQCrEEAJCOQANC/jpCtQivCCi9ASQgXADgVAAQjHAAh3i1g");
	this.shape_29.setTransform(132.8814,58.3528);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226,226);


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


(lib.imagenBtDrag = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgnDAnEMAAAhOHMBOHAAAMAAABOHg");
	this.shape.setTransform(250,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.imagenBtDrag, new cjs.Rectangle(0,0,500,500), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("EgodAJfIAAy9MBQ7AAAIAAS9g");
	this.shape.setTransform(259.025,60.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,518.1,121.4);


(lib.btPlay = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_75();
	this.instance.setTransform(44,18.65,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_74();
	this.instance_1.setTransform(-3.5,-3.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btPlay, new cjs.Rectangle(-3.5,-3.5,140,140), null);


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


(lib.helperInstruction = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// ttlo
	this.instance = new lib.CachedBmp_76();
	this.instance.setTransform(241.45,7.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Capa_2
	this.bt1 = new lib.btTransp();
	this.bt1.name = "bt1";
	this.bt1.setTransform(484.7,336,1,1,0,0,0,259,60.6);
	new cjs.ButtonHelper(this.bt1, 0, 1, 2, false, new lib.btTransp(), 3);

	this.instance_1 = new lib.CachedBmp_78();
	this.instance_1.setTransform(321.45,312.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_77();
	this.instance_2.setTransform(299.05,307.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_85();
	this.instance_3.setTransform(360.75,479.6,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_86();
	this.instance_4.setTransform(291.75,475.5,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_83();
	this.instance_5.setTransform(-107.85,251.95,0.5,0.5);

	this.playPregunta = new lib.btPlay();
	this.playPregunta.name = "playPregunta";
	this.playPregunta.setTransform(180.85,177.7,1,1,0,0,0,66.3,66.3);

	this.bt2 = new lib.btTransp();
	this.bt2.name = "bt2";
	this.bt2.setTransform(468.85,479.25,1,1,0,0,0,259,60.6);
	new cjs.ButtonHelper(this.bt2, 0, 1, 2, false, new lib.btTransp(), 3);

	this.instance_6 = new lib.CachedBmp_82();
	this.instance_6.setTransform(212.9,148.35,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_81();
	this.instance_7.setTransform(264.7,397.2,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_80();
	this.instance_8.setTransform(264.7,298.65,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_79();
	this.instance_9.setTransform(471.8,111.4,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_88();
	this.instance_10.setTransform(671.55,479.6,0.5,0.5);

	this.bt3 = new lib.btTransp();
	this.bt3.name = "bt3";
	this.bt3.setTransform(707.4,485.95,1,1,0,0,0,259,60.6);
	new cjs.ButtonHelper(this.bt3, 0, 1, 2, false, new lib.btTransp(), 3);

	this.instance_11 = new lib.CachedBmp_87();
	this.instance_11.setTransform(116.45,156.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.bt1}]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.bt2},{t:this.playPregunta},{t:this.instance_5},{t:this.instance_4,p:{x:291.75}},{t:this.instance_3}]},1).to({state:[{t:this.instance_4,p:{x:566.6}},{t:this.instance_11},{t:this.bt3},{t:this.instance_10}]},1).wait(1));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhKNAqMQgyAAAAgyMAAAhSzQAAgyAyAAMCUbAAAQAyAAAAAyMAAABSzQAAAygyAAg");
	this.shape.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.8,0,1176,619.5);


// stage content:
(lib.juego3 = function(mode,startPosition,loop,reversed) {
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
		var enunciado = ["",
			"Estamos en clase y el profesor debe salir del salón por una urgencia. ¿Yo que hago?",
			"El profesor debe dedicarle más tiempo a un compañero para explicar algo que yo ya sé. ¿qué hago mientras tanto?",
			"La profesora se enfermó y enviaron en reemplazo otra profesora que está un poco perdida de los temas. ¿qué hago?",
			"El lunes no hay clase y yo no tengo tareas. ¿Qué puedo hacer en casa para mejorar mis conocimientos del colegio?",
			"La profesora ha perdido sus lentes y no ve muy bien. ¿Puedo hacer algo al respecto?",
			"El día de ayer me sentí mal, no pude asistir al colegio y explicaron un tema que no entiendo. ¿Qué puedo hacer?",
			"La profesora está ocupada atendiendo una mamá en la puerta. Todos los niños empiezan a hablar y jugar. ¿qué debo hacer?"
		];
		var opcionData = [
			[""],
			[
				"",
				"Aprovechar para hablar con mis amigos de forma tranquila",
				"Aprovechar para terminar actividades que me hacen falta.",
				"Jugar a correr por el salón.",
				"Salir del salón para averiguar cual es la urgencia del profesor."
			],
			[
				"",
				"Sacar mis audífonos y escuchar música mientras tanto.",
				"Hacer dibujos en mi cuaderno.",
				"Prestar atención para repasar el tema.",
				"Revisar si mis apuntes están completos o si tengo preguntas sobre el tema."
			],
			[
				"",
				"Ayudarle, explicándole de forma respetuosa cuales son los temas de clase.",
				"Quedarme sin hacer nada, finalmente es un reemplazo.",
				"Burlarme de ella por no saber.",
				"Pedir la palabra y colaborarle con la explicación."
			],
			[
				"",
				"Confirmar que no tengo actividades pendientes.",
				"Repasar las cosas que no tengo muy claras.",
				"Quedarme sin hacer nada, pues no hay clase.",
				"Salir de la casa sin pedir permiso a nadie."
			],
			[
				"",
				"Ayudarla a leer los problemas o apuntes del tablero.",
				"Reirme porque no ve bien.",
				"Ayudarla a buscar los lentes si se perdieron cerca.",
				"Ponerme a charlar con mis compañeros mientras ella los busca."
			],
			[
				"",
				"Puedo en mis recesos buscar ayuda de los profesores para que me explique",
				"Quedarme confundido, pues me da vergüenza preguntar",
				"En clase preguntarles a mis amigos mientras la profesora explica",
				"Buscar información en mi libro o en el cuaderno de mi compañero si mi profesor está ocupado."
			],
			[
				"",
				"Pedirles de forma respetuosa que hagan silencio.",
				"Gritarles y regañarlos para que no hagan ruido.",
				"Ponerme a charlar y desorganizar el salón.",
				"Buscar a otro maestro e informarle lo que pasa con el curso."
			]
		];
		
		createjs.Touch.enable(stage);
		var root = this;
		var ronda = 0;
		var cardN = 0;
		var score = 0;
		var validador = [
			[],
			[1, 1, 1, 0, 0],
			[2, 0, 0, 1, 1],
			[3, 1, 0, 0, 1],
			[4, 1, 1, 0, 0],
			[5, 1, 0, 1, 0],
			[6, 1, 0, 0, 1],
			[7, 1, 0, 0, 1]
		]
		
		root.juegoStart.bt1.on("click", function() {
			root.juegoStart.gotoAndStop(1);
			playSound("/3/audio/inicio");
		});
		root.juegoStart.bt2.on("click", function () {
			temporizador();
			iniciar();
		});
		root.juegoStart.bt3.on("click", function () {
			window.open("/jugar/0", "_self");
		});
		
		function iniciar() {
			root.juegoStart.visible = false
			ronda++;
			if (ronda > 7) {
				gameOver();
			}
			root.enunciadoTxt.text = ronda + ". " + enunciado[ronda];
		
			playSound("/3/audio/pr" + ronda);
		
			nuevaTarjeta();
		
			root.ficha.on("mousedown", onMouseDown.bind(this));
			root.ficha.on("pressmove", onMouseMove.bind(this));
			root.ficha.on("pressup", onMouseUp.bind(this));
		
			root.playPregunta.on("click", function () {
				playSound("/3/audio/pr" + ronda)
			})
		}
		
		function nuevaTarjeta() {
			cardN++;
			if (cardN > 4) {
				cardN = 0;
				iniciar();
			}
			root.opcTxt.text = cardN + ". " + opcionData[ronda][cardN];
			var p = new createjs.Bitmap('/3/img/' + ronda + "_" + cardN + ".jpg");
			root.ficha.addChild(p);
		}
		
		function onMouseDown(evt) {
			playSound("/3/audio/r" + ronda + "_" + cardN)
			var item = evt.currentTarget;
			item.offset = {
				x: 0,
				y: 0
			};
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
		}
		
		function onMouseUp(evt) {
			var item = evt.currentTarget;
			item.drag = false;
			if ((item.x < 60) && (item.y > 280)) {
				validar(1);
			} else if ((item.x > 720) && (item.y > 280)) {
				validar(0);
			} else {
				
			}
			item.x = 367;
			item.y = 100;
		}
		
		function onMouseMove(evt) {
			var item = evt.currentTarget;
			if (item.drag) {
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		
		var audioValida = new Audio();
		function validar(dd) {
			audioValida.pause();
			if (dd == validador[ronda][cardN]) {
				audioValida = new Audio("/audio/bien.mp3");
				score += 1000;
				root.animaValida.gotoAndPlay("bien");
				root.animaValida.x = root.ficha.x
				root.animaValida.y = root.ficha.y
				nuevaTarjeta()
			} else {
				score -= 10;
				audioValida = new Audio("/audio/mal.mp3");
			}
			audioValida.play();
			root.scoreText.text = score;
		}
		
		
		function gameOver(){
			root.juegoStart.gotoAndStop(2)
			root.juegoStart.visible = true;
			enviaData(score,3)
		}
		
		
		///-----> Fin del codigo
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ayuda
	this.juegoStart = new lib.helperInstruction();
	this.juegoStart.name = "juegoStart";
	this.juegoStart.setTransform(480,270,1,1,0,0,0,480,270);

	this.timeline.addTween(cjs.Tween.get(this.juegoStart).wait(1));

	// baskets
	this.instance = new lib.CachedBmp_69();
	this.instance.setTransform(-110.1,269.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// card
	this.opcTxt = new cjs.Text("", "bold 20px 'Arial'", "#FFFFFF");
	this.opcTxt.name = "opcTxt";
	this.opcTxt.textAlign = "center";
	this.opcTxt.lineHeight = 24;
	this.opcTxt.lineWidth = 335;
	this.opcTxt.parent = this;
	this.opcTxt.setTransform(485.25,374.7);

	this.enunciadoTxt = new cjs.Text("", "28px 'Arial'");
	this.enunciadoTxt.name = "enunciadoTxt";
	this.enunciadoTxt.textAlign = "center";
	this.enunciadoTxt.lineHeight = 33;
	this.enunciadoTxt.lineWidth = 808;
	this.enunciadoTxt.parent = this;
	this.enunciadoTxt.setTransform(484.45,9);

	this.playPregunta = new lib.btPlay();
	this.playPregunta.name = "playPregunta";
	this.playPregunta.setTransform(178.6,195.1,1,1,0,0,0,66.3,66.3);

	this.ficha = new lib.imagenBtDrag();
	this.ficha.name = "ficha";
	this.ficha.setTransform(367,100,0.452,0.452);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ficha},{t:this.playPregunta},{t:this.enunciadoTxt},{t:this.opcTxt}]}).wait(1));

	// animations
	this.animaValida = new lib.winAnimate();
	this.animaValida.name = "animaValida";
	this.animaValida.setTransform(-279.45,120,1,1,0,0,0,113,113);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AxpRqMAAAgjTMAjTAAAMAAAAjTg");
	this.shape.setTransform(480,213);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.animaValida}]}).wait(1));

	// bg
	this.instance_1 = new lib.CachedBmp_73();
	this.instance_1.setTransform(741.35,112.2,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_72();
	this.instance_2.setTransform(739.1,114,0.5,0.5);

	this.scoreText = new cjs.Text("0", "33px 'Christmas Carols'", "#FFFFFF");
	this.scoreText.name = "scoreText";
	this.scoreText.textAlign = "center";
	this.scoreText.lineHeight = 45;
	this.scoreText.lineWidth = 100;
	this.scoreText.parent = this;
	this.scoreText.setTransform(817.6,157.4);

	this.instance_3 = new lib.CachedBmp_71();
	this.instance_3.setTransform(729.8,148.7,0.5,0.5);

	this.instance_4 = new lib.temporizador();
	this.instance_4.setTransform(59.65,194.9,1,1,0,0,0,52,23.4);

	this.instance_5 = new lib.CachedBmp_70();
	this.instance_5.setTransform(-7.65,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.scoreText},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(369.9,270,696.0000000000001,366.9);
// library properties:
lib.properties = {
	id: '4865740411F7402CA1DC0C4F487B1CF6',
	width: 960,
	height: 540,
	fps: 30,
	color: "#F3C88F",
	opacity: 1.00,
	manifest: [
		{src:"/images/CachedBmp_83.png", id:"CachedBmp_83"},
		{src:"/images/CachedBmp_69.png", id:"CachedBmp_69"},
		{src:"/images/juego3_atlas_1.png", id:"juego3_atlas_1"},
		{src:"/images/juego3_atlas_2.png", id:"juego3_atlas_2"}
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
an.compositions['4865740411F7402CA1DC0C4F487B1CF6'] = {
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