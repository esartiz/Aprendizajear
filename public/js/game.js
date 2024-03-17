(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"game_atlas_1", frames: [[1399,1084,207,291],[1922,0,120,112],[788,1515,145,66],[620,1515,166,69],[935,1571,336,27],[1864,1084,167,188],[1555,1444,211,137],[1608,1084,254,202],[427,1445,191,85],[427,1532,191,59],[1099,1491,191,78],[0,1084,675,359],[1399,1377,573,65],[1768,1444,164,164],[0,1445,281,97],[1922,114,86,109],[677,1084,560,247],[1608,1288,301,74],[620,1459,298,54],[1399,1444,154,189],[965,1333,132,229],[283,1445,142,169],[677,1333,286,124],[0,0,1920,1082],[1239,1084,158,405],[0,1544,252,42]]}
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



(lib.CachedBmp_47 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Tween26 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_47();
	this.instance.setTransform(-51.65,-72.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-72.6,103.5,145.5);


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_46();
	this.instance.setTransform(-30.1,-28.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,-28,60,56);


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7D6F9D").s().p("AgRA+IAAh7IAiAAIAAB7g");
	this.shape.setTransform(0.0238,0.0352,1.2073,1.76);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-10.8,4.300000000000001,21.700000000000003);


(lib.Tween23 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_39();
	this.instance.setTransform(-36.25,-16.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.2,-16.4,72.5,33);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_38();
	this.instance.setTransform(-41.4,-17.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.4,-17.2,83,34.5);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_37();
	this.instance.setTransform(-83.9,-6.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.9,-6.7,168,13.5);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFDBB0").s().p("AlnKvIAA5oILPB7IAAb4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-95.4,72,190.8);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFDBB0").s().p("Ak+L0IgR4cIKXhDIAIbXg");
	this.shape.setTransform(0,-0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCEAD").s().p("AlXMIIgQ5GILHhIIAIcNgAlPspIAQYcIKOB4IgH7Xg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.9,-90.3,71.9,180.7);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9FCAD7").s().p("AkWDhIAAnNIItHZg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-23.6,55.8,47.3);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9FCAD7").s().p("AjyC6IgKmlIH5HXgAjhCwIG8AtIkOj8gAjnCkICrjLIizing");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-23.5,50.6,47.1);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9FCAD7").s().p("AjsBkIDri/IAAgGIAGAAIB6hkIBuGLgADcC2IhjlmIhvBbIgGDdIgHAAgAjRBeIDKApIAGjSg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-19.8,47.5,39.6);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9FCAD7").s().p("AkGGKIgTt7IIzAJIgEPbgAj7GAIIGBjIACvAIoZgIg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-49.8,56.5,99.69999999999999);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9FCAD7").s().p("AhFHPQgIgIAAgLQAAgLAIgJQAIgHALAAQALAAAIAHQAIAJAAALQAAALgIAIQgIAHgLAAQgLAAgIgHgAAICdQgIgIAAgLQAAgMAIgHQAIgIALAAQALAAAJAIQAHAHAAAMQAAALgHAIQgJAIgLAAQgLAAgIgIgAg8hqQgIgIAAgLQAAgLAIgIQAIgIALAAQALAAAIAIQAIAIAAALQAAALgIAIQgIAIgLAAQgLAAgIgIgAAgmnQgIgJAAgKQAAgMAIgIQAHgIAMABQALgBAIAIQAIAIAAAMQAAAKgIAJQgIAHgLABQgMgBgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-47,15.6,94.1);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_31();
	this.instance.setTransform(-34.95,-39.4,0.4193,0.4193);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-39.4,70,78.9);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_30();
	this.instance.setTransform(-52.65,-42.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_29();
	this.instance_1.setTransform(-63.4,-50.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.4,-50.4,127,101);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_26();
	this.instance.setTransform(-47.85,-21.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.8,-21.1,95.5,42.5);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_25();
	this.instance.setTransform(-47.85,-14.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.8,-14.6,95.5,29.5);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_24();
	this.instance.setTransform(-47.85,-19.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.8,-19.3,95.5,39);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CC0000").s().p("AjaAAIgFgjQDfBDDghDIgEAjQh0AkhtAAQhuAAhngkg");
	this.shape.setTransform(1.825,29.8125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AjNEZIhPoMIgEAAIgCgSIgTAAIgNg1IKFACIgKAxIgPAAIg4IgQhwAihwAAQhvAAhwgigADEhLIAuAAIAZihIgwAAgAB0hMIAtAAIAZigIhAAAgAAghMIAxAAIAHigIg5gBgAg6hNIA4ABIABihIhBAAgAiOhNIAxAAIgFigIhFAAgAjghOIAvABIgXigIg0AAg");
	this.shape_1.setTransform(0.025,-1.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-33.3,64.5,66.69999999999999);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00CC33").s().p("AjaABIgFgjQDPA8Dwg8IgEAjQh8AihtAAQhuAAhfgig");
	this.shape.setTransform(1.825,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009966").s().p("AjNEbIhPoMIgEAAIgDgSIgRAAIgOg1IKFABIgKAyIgPAAIg4IgQh4AehwAAQhvAAhogegADEhKIAuAAIAZigIgvAAgAB0hKIAtAAIAZigIhAAAgAAghKIAxAAIAHigIg5gBgAg6hLIA4ABIAAihIhAAAgAiOhLIAxAAIgGigIhEgBgAjhhMIAxABIgYihIg0AAg");
	this.shape_1.setTransform(0,-1.9875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-33.3,64.6,66.6);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B15A46").s().p("AgEAHIgBgBIADgCICajDIAAF7IkvAEgAh+CzIEDgCIiDihgAAKAHICCCeIAAlBg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D79EAC").s().p("AgDAFICCChIkDACgAADgDICDikIAAFBg");
	this.shape_1.setTransform(0.65,1.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-19.1,30.299999999999997,38.3);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFDC91").s().p("Ai6imIAsgBIAJFUIAMgBIgIlTIE0gHIAIFYIlwAFg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B15A46").s().p("AjHixIGFgKIAKFwImIAHgAi6imIAFFVIFwgFIgIlYIk0AHIAIFTIgMABIgJlUg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-18.7,39.9,37.5);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B5DD9E").s().p("AhEiUIAJCJIAOCoIihABgAg5idIEJE5IjxABQgVkBgDg5g");
	this.shape.setTransform(-0.35,0.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B15A46").s().p("AhEixIEpFgInKADgAjSCmIChgCIgNinIgKiJgAglCkIDxgBIkIk5QACA5AVEBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-17.8,45.9,35.6);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#DF7864").s().p("AkbiKIIXEcIoGACgAkLiOIIngFIgOEhg");
	this.shape.setTransform(0.0125,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B15A46").s().p("AkoiZIJRgGIgPE8IovADgAkKCUIIHgCIoYkcgAkKiOIIYEcIAOkhg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-16,59.4,32.1);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B15A46").s().p("AjUC/IAQl5IEygEIBmF9gAB1CzIBPAAIhUk8gAi4ivIgPFiIEwAAIgGlkg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0B9DF").s().p("AB3CyIgFk7IBUE7gAjFCyIAOlhIEcgCIAGFjg");
	this.shape_1.setTransform(-0.175,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-19,42.5,38.1);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(-150.2,-79.85,0.4448,0.4448);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.2,-79.8,300.29999999999995,159.7);


(lib.letrasAutonomia = function(mode,startPosition,loop,reversed) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AAlgJIBiAAIAEANIhiAGgAiGgJIBgAAIgFARIhfACg");
	this.shape.setTransform(21,39.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAlA3IgEgVIhEACIgEATIhfAAIAZhtIDaAAIAaBtg");
	this.shape_1.setTransform(21.05,32.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AhqBaIAUhVIgTACIgFhaICygGIArCzgAgLBZIAeAAIgOhLg");
	this.shape_2.setTransform(20.7875,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AA4BYIgBisIBigBIgCCtgAhkBYIgEhVIgrADIgFhaICSgDIAECvg");
	this.shape_3.setTransform(21,18.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhmA3IgTgPIgEheIBiAAIABAqIA5AAIAAgqIBfAAIgBBRIgVAcg");
	this.shape_4.setTransform(23.5125,32.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AhngMIDPAAIgRAVIieAEg");
	this.shape_5.setTransform(23.525,39.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgxBYIAAhRIg6AAIABheIDRABIAEBeIg2gBIACBRg");
	this.shape_6.setTransform(21,18.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag0A3IAAhtIBnAAIACBtg");
	this.shape_7.setTransform(21.3375,32.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("Ag0AIIAAgQIBpAAIAAARg");
	this.shape_8.setTransform(21.375,39.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhYA3IgcgUIgEhZIBbAAIAEAqIA4gEIgBgmIBZAAIACBJIgYAkg");
	this.shape_9.setTransform(21.325,32.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("AhcgEIC5AAIgEAFIinAEg");
	this.shape_10.setTransform(21.725,38.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AAiBbIgChtIhCADIAJBqIhaAAIgHiQIAuglICTAAIAvAgIAFCVg");
	this.shape_11.setTransform(20.8875,18.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAhA3Ig9hgIADBgIhmAAIAAhtID/AAIgEBtg");
	this.shape_12.setTransform(22.9125,32.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AAjgFIBbAAIAAAFIhTAGgAh9AEIAAgJIBmAAIAAALg");
	this.shape_13.setTransform(22.7125,38.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AhsBaIAAhaIgoABIgFhaICQAEIA+B7IgGh+IBrADIgHCvg");
	this.shape_14.setTransform(21.025,18.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("ABAA3IgChnIgcBnIg4AAIgZheIgFBeIhoAAIAChtIE0AAIADBtg");
	this.shape_15.setTransform(22.9375,32.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990000").s().p("AicAHIAAgQIBoAAIgBATgABAAJIAAgSIBdAAIAAASgAgWgJIA4AAIgDAMIgxADg");
	this.shape_16.setTransform(22.95,39.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AiFBbIAChYIgmACIgFhZICggGIAkBkIArhhIBpADIAFCvg");
	this.shape_17.setTransform(20.825,18.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("Ag0A3IAAhtIBoAAIABBtg");
	this.shape_18.setTransform(23.2875,32.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AgdBYIAAhWIgpACIgEhaICTgBIACCvg");
	this.shape_19.setTransform(20.925,18.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990000").s().p("AAlgJIBjAAIADANIhjAGgAiGgJIBgAAIgFARIhfACg");
	this.shape_20.setTransform(21,39.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AAABBIhCAkIAOhKIg2gzIBKgJIAghEIAgBFIBLAJIg4AzIAOBKg");
	this.shape_21.setTransform(21.65,24.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6600").s().p("AAABhIhkA2IAWhvIhShNIBxgNIAwhmIAvBnIBxAPIhUBMIAVBvgABBBmIgOhKIA4gyIhLgKIgfhFIggBEIhLAJIA3AzIgPBKIBCgkg");
	this.shape_22.setTransform(21.625,24.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8,p:{x:21.375}},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_10},{t:this.shape_11},{t:this.shape_9}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_19},{t:this.shape_8,p:{x:23.3375}},{t:this.shape_18}]},1).to({state:[{t:this.shape_2},{t:this.shape_20},{t:this.shape_1}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,54.5);


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
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("ApcFeIAAq7IS5AAIAAK7g");
	this.shape.setTransform(60.5,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ApcFeIAAq7IS5AAIAAK7g");
	this.shape_1.setTransform(60.5,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,70);


(lib.tablero = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {f_in:1,f_out:10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// Layer_2
	this.instance = new lib.btTransp();
	this.instance.setTransform(0,0,2.5388,2.2829);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btTransp(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// Layer_3
	this.instance_1 = new lib.CachedBmp_15();
	this.instance_1.setTransform(9.45,65.35,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},1).wait(5));

	// Capa_1
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(150.2,79.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.1241,scaleY:1.1241},9).to({scaleX:1,scaleY:1},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-9.8,337.5,179.5);


(lib.relojN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"f_in":1,"f_out":10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// Layer_3
	this.instance = new lib.btTransp();
	this.instance.setTransform(-13.85,-11.35,0.8193,1.3403);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btTransp(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// Layer_5
	this.instance_1 = new lib.Tween24("synched",0);
	this.instance_1.setTransform(36.75,35.05,1,1,0,0,0,0,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:90,x:36.8,y:35.1},9).to({rotation:189.0011,x:36.85,y:35.25},2).to({rotation:360,x:36.75,y:35.05},3).wait(1));

	// Layer_1
	this.instance_2 = new lib.Tween24("synched",0);
	this.instance_2.setTransform(36.8,35.1,1,1.3626,90,0,0,0,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:180,x:36.85,y:35.05},2).to({regX:-0.1,scaleY:1.3625,rotation:270.0635,x:37.05,y:35.25},2).to({regX:0,rotation:342.0395,x:36.85,y:35.2},2).to({rotation:405.0009,x:36.8,y:35.1},3).to({scaleY:1.3626,rotation:450},5).wait(1));

	// Layer_4
	this.instance_3 = new lib.CachedBmp_42();
	this.instance_3.setTransform(-4.65,-6.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-11.3,99.1,93.8);


(lib.reglasVarias = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"f_in":1,"f_out":10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// Layer_3
	this.instance = new lib.btTransp();
	this.instance.setTransform(-8.4,-4.45,1.8885,1.3826,0,0,0,-0.3,-0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btTransp(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// Layer_8
	this.instance_1 = new lib.CachedBmp_36();
	this.instance_1.setTransform(35.25,11,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer_5
	this.instance_2 = new lib.Tween23("synched",0);
	this.instance_2.setTransform(148.75,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:85.05},2).to({y:53.35},2).to({y:85.05},2).to({startPosition:0},3).to({y:28},5).wait(1));

	// Layer_6
	this.instance_3 = new lib.Tween21("synched",0);
	this.instance_3.setTransform(102.65,55.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:94.7},3).to({y:73.15},3).to({y:94.7},3).to({y:55.95},5).wait(1));

	// Layer_7
	this.instance_4 = new lib.Tween22("synched",0);
	this.instance_4.setTransform(55.65,28.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:84.2},3).to({y:53},2).to({y:84.2},4).to({y:28.05},5).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C55828").s().p("AugEpIgzpRIenAIIgvJJg");
	this.shape.setTransform(104.45,35.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D07341").s().p("AvXFkIg9rIMAgpAAIIg5LAgAugEpIdFAAIAvpKI+ngHg");
	this.shape_1.setTransform(104.475,35.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-4.3,228.5,106);


(lib.escritorio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"f_in":1,"f_out":10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// Layer_3
	this.instance = new lib.btTransp();
	this.instance.setTransform(-5.35,53.5,2.3556,1.8102,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btTransp(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// Layer_8
	this.instance_1 = new lib.CachedBmp_44();
	this.instance_1.setTransform(99.2,81.75,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtfAFIAAgJIa/AAIgVAJg");
	this.shape.setTransform(173.125,81.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtfAaIAAhVIa/AAIgVBVQmrAimpAAQmrAAmrgig");
	this.shape_1.setTransform(173.125,86.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtfAvIAAiiIa/AAIgVCiQmrBFmpAAQmrAAmrhFg");
	this.shape_2.setTransform(173.125,92.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AtfBEIAAjuIa/AAIgVDuQmrBnmpAAQmrAAmrhng");
	this.shape_3.setTransform(173.125,97.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AtfBZIAAk7Ia/AAIgVE7QmrCKmpAAQmrAAmriKg");
	this.shape_4.setTransform(173.125,103.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AtfBuIAAmHIa/AAIgVGHQmrCsmpAAQmrAAmrisg");
	this.shape_5.setTransform(173.125,109.2454);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AtfCKIAAmGIa/AAIgVGGQmrBzmpAAQmrAAmrhzg");
	this.shape_6.setTransform(173.125,106.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AtfCnIAAmGIa/AAIgVGGQmrA6mpAAQmrAAmrg6g");
	this.shape_7.setTransform(173.125,103.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AtfDEIAAmHIa/AAIgVGHg");
	this.shape_8.setTransform(173.125,100.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AtfCeIAAk7Ia/AAIgVE7g");
	this.shape_9.setTransform(173.125,96.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AtfB4IAAjvIa/AAIgVDvg");
	this.shape_10.setTransform(173.125,92.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AtfBRIAAihIa/AAIgVChg");
	this.shape_11.setTransform(173.125,88.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AtfArIAAhVIa/AAIgVBVg");
	this.shape_12.setTransform(173.125,85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer_4
	this.instance_2 = new lib.Tween25("synched",0);
	this.instance_2.setTransform(153,28.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:67.25,y:28},9).to({x:153,y:28.05},5).wait(1));

	// Layer_5
	this.instance_3 = new lib.CachedBmp_45();
	this.instance_3.setTransform(0,55.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// Layer_6
	this.instance_4 = new lib.Tween26("synched",0);
	this.instance_4.setTransform(52.55,83.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:153.3},9).to({x:52.55},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,0,285.09999999999997,180.4);


(lib.canecas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"f_in":1,"f_out":10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// Layer_3
	this.instance = new lib.btTransp();
	this.instance.setTransform(-124.25,-15.75,2.4903,1.3826,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btTransp(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// Layer_6
	this.instance_1 = new lib.CachedBmp_21();
	this.instance_1.setTransform(-53.3,26.95,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer_4
	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.setTransform(47.55,33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-80.65},9).to({x:47.55},5).wait(1));

	// Layer_5
	this.instance_3 = new lib.Tween8("synched",0);
	this.instance_3.setTransform(91.25,33.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:120.25},9).to({x:91.25},5).wait(1));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhaCVIAAkpIC0AAIAAEpg");
	this.shape.setTransform(70.8,41.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiuCVIAAkpIFdAAIAAEpg");
	this.shape_1.setTransform(65.5,41.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkCCVIAAkpIIGAAIAAEpg");
	this.shape_2.setTransform(60.15,41.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlXCVIAAkpIKvAAIAAEpg");
	this.shape_3.setTransform(54.85,41.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmsCVIAAkpINZAAIAAEpg");
	this.shape_4.setTransform(49.525,41.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AoACVIAAkpIQBAAIAAEpg");
	this.shape_5.setTransform(44.2,41.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ApVCVIAAkpISrAAIAAEpg");
	this.shape_6.setTransform(38.875,41.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AqpCVIAAkpIVTAAIAAEpg");
	this.shape_7.setTransform(33.575,41.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ar+CVIAAkpIX9AAIAAEpg");
	this.shape_8.setTransform(28.225,41.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AtSCVIAAkpIalAAIAAEpg");
	this.shape_9.setTransform(22.925,40.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Aq6CVIAAkpIV1AAIAAEpg");
	this.shape_10.setTransform(32.5,41.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AoiCVIAAkpIRFAAIAAEpg");
	this.shape_11.setTransform(42.075,41.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AmKCVIAAkpIMVAAIAAEpg");
	this.shape_12.setTransform(51.65,41.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjyCVIAAkpIHlAAIAAEpg");
	this.shape_13.setTransform(61.225,41.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.7,-15.6,301.3,96.8);


(lib.biblioteca = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"f_in":1,"f_out":10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// Layer_3
	this.instance = new lib.btTransp();
	this.instance.setTransform(-10.6,-9.2,1.3576,3.8112,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btTransp(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// Layer_9
	this.instance_1 = new lib.CachedBmp_23();
	this.instance_1.setTransform(19.6,22.35,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer_6
	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.setTransform(59.8,190.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:58.65,y:221.95},3).to({x:61.4,y:218.15},3).to({x:58.65,y:221.95},3).to({x:59.8,y:190.6},5).wait(1));

	// Layer_7
	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.setTransform(57.95,143.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:54.8,y:187.9},3).to({x:58.65,y:176.6},3).to({x:54.8,y:187.9},3).to({x:57.95,y:143.05},5).wait(1));

	// Layer_8
	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.setTransform(57.95,64.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:58.65,y:152.05},3).to({x:61.4,y:134.25},3).to({x:58.65,y:152.05},3).to({x:57.95,y:64.15},5).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E1025").s().p("AiJSEIgTsdIABAAIge3qIFzACMAAAAkFg");
	this.shape.setTransform(29.375,125.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#581025").s().p("AkQSDMAAAgkFIIiADMAAAAkCg");
	this.shape_1.setTransform(75.3,125.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996633").s().p("AB/SiIlMAAMAAHglhIGUAAMgAqAhMIgDEyIgiABg");
	this.shape_2.setTransform(129.7625,128.3125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#593A1C").s().p("AmkUKIAAhXIAAgYIOwAAIAABvgAn1zGIgeAAIgRhDIRIAAIABBDg");
	this.shape_3.setTransform(54.875,129.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D06633").s().p("AnnS9IgQ5lIgWsUIQaAAIABAAMgAHAlhIgTAAIuwAAIAAAYg");
	this.shape_4.setTransform(57.275,128.0375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#593141").s().p("AjpUKIAAhvIAUAAIFLAAIAAAeIAABRgADFzGImTAAIgCAAIgBhDIG7AAIgUBDg");
	this.shape_5.setTransform(130.625,129.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-8.8,164.3,266.90000000000003);


(lib.afiche4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"f_in":1,"f_out":10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// Layer_3
	this.instance = new lib.btTransp();
	this.instance.setTransform(-4.95,-7,0.6876,2.9053);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btTransp(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// Layer_12
	this.instance_1 = new lib.CachedBmp_33();
	this.instance_1.setTransform(2.35,30.05,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer_11
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDBB0").ss(2,2,1).p("AFGBtIqLjZ");
	this.shape.setTransform(35.525,161.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFhsIKLDZ");
	this.shape_1.setTransform(35.525,159);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:161.55}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{y:138.8}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{y:161.55}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1).to({y:156.5},0).wait(1).to({y:153.95},0).wait(1).to({y:151.45},0).wait(1).to({y:148.9},0).wait(1).to({y:146.4},0).wait(1).to({y:143.85},0).wait(1).to({y:141.35},0).to({_off:true},1).wait(1).to({_off:false,y:143.35},0).wait(1).to({y:147.9},0).wait(1).to({y:152.45},0).wait(1).to({y:157},0).to({_off:true},1).wait(1));

	// Layer_10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFDBB0").ss(2,2,1).p("AFGA7IqLh1");
	this.shape_2.setTransform(35.525,9.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFg6IKLB0");
	this.shape_3.setTransform(35.525,24.2);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFg6IKLB1");
	this.shape_4.setTransform(35.525,38.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFg5IKLBz");
	this.shape_5.setTransform(35.525,81.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFDBB0").ss(2,2,1).p("AFGA6IqLh0");
	this.shape_6.setTransform(35.525,138.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFg5IKLB0");
	this.shape_7.setTransform(35.525,87.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{y:38.5}}]},1).to({state:[{t:this.shape_4,p:{y:52.85}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5,p:{y:81.5}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{y:124.45}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5,p:{y:113}}]},1).to({state:[{t:this.shape_7,p:{y:87.2}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_7,p:{y:35.65}}]},1).to({state:[{t:this.shape_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,y:67.15},0).to({_off:true},1).wait(1).to({_off:false,y:95.8},0).wait(1).to({y:110.15},0).to({_off:true},1).wait(4).to({_off:false,y:61.45},0).to({_off:true},1).wait(2));

	// Layer_9
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFDBB0").ss(2,2,1).p("AFGA7IqLh1");
	this.shape_8.setTransform(35.525,34.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFg6IKLB1");
	this.shape_9.setTransform(35.525,45.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFg6IKLB0");
	this.shape_10.setTransform(35.525,69.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFg5IKLB0");
	this.shape_11.setTransform(35.525,80.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFDBB0").ss(2,2,1).p("AFGA6IqLh0");
	this.shape_12.setTransform(35.525,138.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFg5IKLBz");
	this.shape_13.setTransform(35.525,97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9,p:{y:45.85}}]},1).to({state:[{t:this.shape_9,p:{y:57.5}}]},1).to({state:[{t:this.shape_10,p:{y:69.1}}]},1).to({state:[{t:this.shape_11,p:{y:80.7}}]},1).to({state:[{t:this.shape_11,p:{y:92.35}}]},1).to({state:[{t:this.shape_11,p:{y:103.95}}]},1).to({state:[{t:this.shape_10,p:{y:115.55}}]},1).to({state:[{t:this.shape_9,p:{y:127.2}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_10,p:{y:117.9}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_10,p:{y:76.05}}]},1).to({state:[{t:this.shape_9,p:{y:55.15}}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	// Layer_8
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFDBB0").ss(2,2,1).p("AFGA6IqLh0");
	this.shape_14.setTransform(35.525,58.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFg6IKLB0");
	this.shape_15.setTransform(35.525,67.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFg5IKLB0");
	this.shape_16.setTransform(35.525,76.45);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFg5IKLBz");
	this.shape_17.setTransform(35.525,94.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14,p:{y:58.65}}]}).to({state:[{t:this.shape_15,p:{y:67.55}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17,p:{y:94.25}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17,p:{y:121}}]},1).to({state:[{t:this.shape_15,p:{y:129.9}}]},1).to({state:[{t:this.shape_14,p:{y:138.8}}]},1).to({state:[{t:this.shape_17,p:{y:122.75}}]},1).to({state:[{t:this.shape_17,p:{y:106.75}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_14,p:{y:58.65}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(2).to({_off:false},0).wait(1).to({y:85.35},0).to({_off:true},1).wait(1).to({_off:false,y:103.2},0).wait(1).to({y:112.1},0).to({_off:true},1).wait(5).to({_off:false,y:90.7},0).wait(1).to({y:74.7},0).to({_off:true},1).wait(1));

	// Layer_7
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFDBB0").ss(2,2,1).p("AFGA6IqLh0");
	this.shape_18.setTransform(35.525,83.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFg5IKLBz");
	this.shape_19.setTransform(35.525,89.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFg5IKLB0");
	this.shape_20.setTransform(35.525,95.45);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFg6IKLB0");
	this.shape_21.setTransform(35.525,101.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18,p:{y:83.05}}]}).to({state:[{t:this.shape_19,p:{y:89.25}}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21,p:{y:101.65}}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19,p:{y:114}}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21,p:{y:126.4}}]},1).to({state:[{t:this.shape_19,p:{y:132.6}}]},1).to({state:[{t:this.shape_18,p:{y:138.8}}]},1).to({state:[{t:this.shape_21,p:{y:127.65}}]},1).to({state:[{t:this.shape_19,p:{y:116.5}}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_18,p:{y:83.05}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(2).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:107.85},0).to({_off:true},1).wait(1).to({_off:false,y:120.2},0).to({_off:true},1).wait(5).to({_off:false,y:105.35},0).wait(1).to({y:94.2},0).to({_off:true},1).wait(1));

	// Layer_6
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFDBB0").ss(2,2,1).p("AFGBOIqLib");
	this.shape_22.setTransform(35.525,109.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFhNIKLCb");
	this.shape_23.setTransform(35.525,112.65);
	this.shape_23._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22,p:{y:109.4}}]}).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22,p:{y:138.8}}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22,p:{y:109.4}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1).to({_off:false},0).wait(1).to({y:115.95},0).wait(1).to({y:119.2},0).wait(1).to({y:122.45},0).wait(1).to({y:125.75},0).wait(1).to({y:129},0).wait(1).to({y:132.25},0).wait(1).to({y:135.55},0).to({_off:true},1).wait(1).to({_off:false,y:132.9},0).wait(1).to({y:127.05},0).wait(1).to({y:121.15},0).wait(1).to({y:115.3},0).to({_off:true},1).wait(1));

	// Layer_5
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFDBB0").ss(2,2,1).p("AFGBcIqLi3");
	this.shape_24.setTransform(35.525,135.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFDBB0").ss(2,2,1).p("AlFhbIKLC3");
	this.shape_25.setTransform(35.525,135.6);
	this.shape_25._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24,p:{y:135.2}}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24,p:{y:138.8}}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24,p:{y:135.2}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1).to({_off:false},0).wait(1).to({y:136},0).wait(1).to({y:136.4},0).wait(1).to({y:136.8},0).wait(1).to({y:137.2},0).wait(1).to({y:137.6},0).wait(1).to({y:138},0).wait(1).to({y:138.4},0).to({_off:true},1).wait(1).to({_off:false,y:138.1},0).wait(1).to({y:137.35},0).wait(1).to({y:136.65},0).wait(1).to({y:135.9},0).to({_off:true},1).wait(1));

	// Layer_4
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0080A6").s().p("AlFKaIAA4oIKLB1IAAaog");
	this.shape_26.setTransform(35.525,95.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(15));

	// Layer_1
	this.instance_2 = new lib.Tween20("synched",0);
	this.instance_2.setTransform(36,95.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.1111,scaleY:1.1111},9).to({scaleX:1,scaleY:1},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-10.6,83.2,212);


(lib.afiche3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"f_in":1,"f_out":10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// Layer_3
	this.instance = new lib.btTransp();
	this.instance.setTransform(-4.95,0,0.6876,2.5805);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btTransp(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// Layer_6
	this.instance_1 = new lib.CachedBmp_28();
	this.instance_1.setTransform(0,41.75,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer_7
	this.instance_2 = new lib.Tween14("synched",0);
	this.instance_2.setTransform(34.75,78.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-5.4927,x:12.25,y:58.55},9).to({rotation:0,x:34.75,y:78.25},5).wait(1));

	// Layer_8
	this.instance_3 = new lib.Tween15("synched",0);
	this.instance_3.setTransform(35,120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.0152,scaleY:0.2347,skewY:9.9196,y:156.3},9).to({scaleX:1,scaleY:1,skewY:0,y:120.5},5).wait(1));

	// Layer_9
	this.instance_4 = new lib.Tween16("synched",0);
	this.instance_4.setTransform(35.2,144.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0.1,regY:0.1,scaleX:0.5126,scaleY:0.5126,rotation:74.9995,x:19.7,y:140.7},9).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:35.2,y:144.6},5).wait(1));

	// Layer_10
	this.instance_5 = new lib.Tween17("synched",0);
	this.instance_5.setTransform(35.7,97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-0.2,regY:-0.1,scaleX:0.3563,scaleY:0.3563,rotation:-144.2644,x:51.1,y:145.4},9).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:35.7,y:97.9},5).wait(1));

	// Layer_11
	this.instance_6 = new lib.Tween18("synched",0);
	this.instance_6.setTransform(36.25,38.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-0.1,scaleX:0.4008,scaleY:0.4008,rotation:175.9658,x:55.95,y:14.95},9).to({regY:0,scaleX:1,scaleY:1,rotation:0,x:36.25,y:38.65},5).wait(1));

	// Layer_4
	this.instance_7 = new lib.Tween19("synched",0);
	this.instance_7.setTransform(35.9,90.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.1152,scaleY:1.1152},9).to({scaleX:1,scaleY:1},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-10.4,83.2,201.5);


(lib.afiche2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"f_in":1,"f_out":10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(8));

	// Layer_2
	this.instance = new lib.btTransp();
	this.instance.setTransform(-6.9,-3.6,1.4231,1.5879);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btTransp(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

	// Layer_9
	this.instance_1 = new lib.CachedBmp_20();
	this.instance_1.setTransform(10.05,19.45,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},1).wait(7));

	// Layer_3
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(41.05,72.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:5.45,y:94.95},9).to({x:41.05,y:72.05},7).wait(1));

	// Layer_4
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.setTransform(44.1,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0.1,regY:0.1,scaleX:0.8754,scaleY:0.8754,rotation:-23.976,x:9.1,y:1.15},9).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:44.1,y:28.9},7).wait(1));

	// Layer_5
	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.setTransform(118,28.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:154.75,y:-11.8},9).to({x:118,y:28.05},7).wait(1));

	// Layer_6
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(94.3,72.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:85.9,y:103.4},9).to({x:94.3,y:72.05},7).wait(1));

	// Layer_7
	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.setTransform(133.2,70.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:145.5,y:90.2},9).to({x:133.2,y:70.45},7).wait(1));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFECB9").s().p("Asjn9IZHgMIgfQBI3rASgArjnBIA1ONIV5gQIAbuJg");
	this.shape.setTransform(80.35,52.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCD39D").s().p("ArknBIXJgLIgbOJI14AQg");
	this.shape_1.setTransform(80.425,52.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-29.6,198,151.8);


(lib.afiche1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"f_in":1,"f_out":10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// Layer_5
	this.instance = new lib.btTransp();
	this.instance.setTransform(-4.95,-7,0.6876,1.3536);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btTransp(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// Capa_1
	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.setTransform(34.95,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1924,scaleY:1.1924},9).to({scaleX:1,scaleY:1},5).wait(1));

	// bocadillo
	this.instance_2 = new lib.Tween12("synched",0);
	this.instance_2.setTransform(39.5,33.7,0.5911,0.5911);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:117.25,y:-40.85},8).to({scaleX:0.4638,scaleY:0.4638,x:39.5,y:33.7},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-91.3,187.6,179.1);


// stage content:
(lib.game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,29];
	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		for (var i = 1; i <= 10; i++) {
			root["bt" + i].ruta = i;
			root["bt" + i].on("click", function () {
				window.open("/jugar/" + this.ruta, "_self");
			})
			root["bt" + i].on("mouseover", function () {
				this.gotoAndPlay("f_in");
			})
			root["bt" + i].on("mouseout", function () {
				this.gotoAndPlay("f_out");
			})
		}
		function iniciaJuego() {
			var datos = recibeData();
			root.myName.text = datos[1];
			alert(datos[1])
		}
		
		root.salir.on("click", function () {
			window.open("/logout", "_self");
		})
	}
	this.frame_29 = function() {
		var datos = recibeData();
		this.myName.text = datos[1];
		this.stop();
		//
		for (var i = 3; i <= 12; i++){
			if(datos[i] > 0){
				this["let" + i].gotoAndStop(i)
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Capa_2
	this.myName = new cjs.Text("Cargando...", "normal 400 23px 'Fredoka One'");
	this.myName.name = "myName";
	this.myName.lineHeight = 30;
	this.myName.lineWidth = 523;
	this.myName.parent = this;
	this.myName.setTransform(21.05,21.25);
	if(!lib.properties.webfonts['Fredoka One']) {
		lib.webFontTxtInst['Fredoka One'] = lib.webFontTxtInst['Fredoka One'] || [];
		lib.webFontTxtInst['Fredoka One'].push(this.myName);
	}

	this.timeline.addTween(cjs.Tween.get(this.myName).wait(30));

	// Layer_2
	this.salir = new lib.btTransp();
	this.salir.name = "salir";
	this.salir.setTransform(0.3,516.2,1.1752,0.2986);
	new cjs.ButtonHelper(this.salir, 0, 1, 2, false, new lib.btTransp(), 3);

	this.instance = new lib.CachedBmp_49();
	this.instance.setTransform(8.1,516.2,0.5,0.5);

	this.bt10 = new lib.escritorio();
	this.bt10.name = "bt10";
	this.bt10.setTransform(246.85,359.8,1,1,0,0,0,140.1,89.6);

	this.bt5 = new lib.afiche1();
	this.bt5.name = "bt5";
	this.bt5.setTransform(327.9,277.2,1,1,0,0,0,35,39.5);

	this.bt9 = new lib.relojN();
	this.bt9.name = "bt9";
	this.bt9.setTransform(332.15,190.5,1,1,0,0,0,36.4,36.2);

	this.bt8 = new lib.reglasVarias();
	this.bt8.name = "bt8";
	this.bt8.setTransform(527,364.05,1,1,0,0,0,104.5,35.6);

	this.bt7 = new lib.afiche4();
	this.bt7.name = "bt7";
	this.bt7.setTransform(905.4,340.35,1,1,0,0,0,36,95.4);

	this.bt6 = new lib.afiche3();
	this.bt6.name = "bt6";
	this.bt6.setTransform(905,159.55,1,1,0,0,0,36,90.3);

	this.bt4 = new lib.biblioteca();
	this.bt4.name = "bt4";
	this.bt4.setTransform(785.7,295.95,1,1,0,0,0,77,129);

	this.bt3 = new lib.canecas();
	this.bt3.name = "bt3";
	this.bt3.setTransform(811.9,491.45,1,1,0,0,0,67.2,33.4);

	this.bt2 = new lib.afiche2();
	this.bt2.name = "bt2";
	this.bt2.setTransform(202.6,210.95,1,1,0,0,0,80.4,52.1);

	this.bt1 = new lib.tablero();
	this.bt1.name = "bt1";
	this.bt1.setTransform(527.1,239.05,1,1,0,0,0,150.2,79.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt1},{t:this.bt2},{t:this.bt3},{t:this.bt4},{t:this.bt6},{t:this.bt7},{t:this.bt8},{t:this.bt9},{t:this.bt5},{t:this.bt10},{t:this.instance},{t:this.salir}]}).wait(30));

	// letras
	this.let12 = new lib.letrasAutonomia();
	this.let12.name = "let12";
	this.let12.setTransform(723.1,118.75,1,1,0,0,0,21.6,27.3);

	this.let11 = new lib.letrasAutonomia();
	this.let11.name = "let11";
	this.let11.setTransform(668.75,118.75,1,1,0,0,0,21.6,27.3);

	this.let10 = new lib.letrasAutonomia();
	this.let10.name = "let10";
	this.let10.setTransform(614.4,118.75,1,1,0,0,0,21.6,27.3);

	this.let9 = new lib.letrasAutonomia();
	this.let9.name = "let9";
	this.let9.setTransform(560.05,118.75,1,1,0,0,0,21.6,27.3);

	this.let8 = new lib.letrasAutonomia();
	this.let8.name = "let8";
	this.let8.setTransform(505.7,118.75,1,1,0,0,0,21.6,27.3);

	this.let7 = new lib.letrasAutonomia();
	this.let7.name = "let7";
	this.let7.setTransform(451.35,118.75,1,1,0,0,0,21.6,27.3);

	this.let6 = new lib.letrasAutonomia();
	this.let6.name = "let6";
	this.let6.setTransform(397,118.75,1,1,0,0,0,21.6,27.3);

	this.let5 = new lib.letrasAutonomia();
	this.let5.name = "let5";
	this.let5.setTransform(342.65,118.75,1,1,0,0,0,21.6,27.3);

	this.let4 = new lib.letrasAutonomia();
	this.let4.name = "let4";
	this.let4.setTransform(288.3,118.75,1,1,0,0,0,21.6,27.3);

	this.let3 = new lib.letrasAutonomia();
	this.let3.name = "let3";
	this.let3.setTransform(233.95,118.75,1,1,0,0,0,21.6,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.let3},{t:this.let4},{t:this.let5},{t:this.let6},{t:this.let7},{t:this.let8},{t:this.let9},{t:this.let10},{t:this.let11},{t:this.let12}]}).wait(30));

	// Capa_1
	this.instance_1 = new lib.CachedBmp_50();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(0.2,109.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(30));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,270,480,271);
// library properties:
lib.properties = {
	id: '4865740411F7402CA1DC0C4F487B1CF6',
	width: 960,
	height: 540,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"/images/game_atlas_1.png?1656125937503", id:"game_atlas_1"}
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