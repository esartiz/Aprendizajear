(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"juego6_atlas_1", frames: [[0,1082,1523,297],[0,0,1920,1080],[1525,1284,313,78],[0,1916,790,116],[0,1381,1140,294],[1142,1894,286,78],[1142,1558,790,116],[0,1677,1140,237],[1142,1676,790,116],[1142,1794,588,98],[1142,1381,781,175],[792,1916,330,95],[1525,1187,330,95],[1525,1082,352,103]]}
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



(lib.CachedBmp_168 = function() {
	this.initialize(ss["juego6_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_167 = function() {
	this.initialize(ss["juego6_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_166 = function() {
	this.initialize(ss["juego6_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_165 = function() {
	this.initialize(ss["juego6_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_164 = function() {
	this.initialize(ss["juego6_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_163 = function() {
	this.initialize(ss["juego6_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_162 = function() {
	this.initialize(ss["juego6_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_161 = function() {
	this.initialize(ss["juego6_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_160 = function() {
	this.initialize(ss["juego6_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_159 = function() {
	this.initialize(ss["juego6_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_158 = function() {
	this.initialize(ss["juego6_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_157 = function() {
	this.initialize(ss["juego6_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_156 = function() {
	this.initialize(ss["juego6_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_155 = function() {
	this.initialize(ss["juego6_atlas_1"]);
	this.gotoAndStop(13);
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


(lib.empt = function(mode,startPosition,loop,reversed) {
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


(lib.nFoto = function(mode,startPosition,loop,reversed) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ANrNrI7VAAIAA7VIbVAAg");
	this.shape.setTransform(87.5,87.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AtqNrIAA7VIbVAAIAAbVg");
	this.shape_1.setTransform(87.5,87.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(10,1,1).p("ANrNrI7VAAIAA7VIbVAAg");
	this.shape_2.setTransform(87.5,87.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AtqNrIAA7VIbVAAIAAbVg");
	this.shape_3.setTransform(87.5,87.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00CC00").ss(1,1,1).p("ANrNrI7VAAIAA7VIbVAAg");
	this.shape_4.setTransform(87.5,87.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AtqNrIAA7VIbVAAIAAbVg");
	this.shape_5.setTransform(87.5,87.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF3300").ss(10,1,1).p("ANrNrI7VAAIAA7VIbVAAg");
	this.shape_6.setTransform(87.5,87.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE6F7").s().p("AtqNrIAA7VIbVAAIAAbVg");
	this.shape_7.setTransform(87.5,87.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,185,185);


(lib.nCard = function(mode,startPosition,loop,reversed) {
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
	this.idNum = new cjs.Text("0", "normal 400 38px 'Fredoka One'", "#FFFFFF");
	this.idNum.name = "idNum";
	this.idNum.textAlign = "center";
	this.idNum.lineHeight = 48;
	this.idNum.lineWidth = 47;
	this.idNum.parent = this;
	this.idNum.setTransform(28.0165,27.7,1.1042,1.1042);
	if(!lib.properties.webfonts['Fredoka One']) {
		lib.webFontTxtInst['Fredoka One'] = lib.webFontTxtInst['Fredoka One'] || [];
		lib.webFontTxtInst['Fredoka One'].push(this.idNum);
	}

	this.timeline.addTween(cjs.Tween.get(this.idNum).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4C9F4").s().p("AtqNrIAA7VIbVAAIAAbVg");
	this.shape.setTransform(142.4,87.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6699").s().p("AkRH0IAAvnIIkAAIAAPng");
	this.shape_1.setTransform(27.45,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nCard, new cjs.Rectangle(0,0,229.9,175), null);


(lib.btVerficar = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_159();
	this.instance.setTransform(50.3,20.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_158();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btVerficar, new cjs.Rectangle(0,0,390.5,87.5), null);


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
	this.shape.graphics.f("#003399").s().p("A+pFFIAAqJMA9TAAAIAAKJg");
	this.shape.setTransform(196.15,32.525);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,392.3,65.1);


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


(lib.screenHelperF = function(mode,startPosition,loop,reversed) {
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
	this.bt1.setTransform(497.65,296.75,1.596,2.6237,0,0,0,196.2,32.5);
	new cjs.ButtonHelper(this.bt1, 0, 1, 2, false, new lib.btTransp(), 3);

	this.instance = new lib.CachedBmp_160();
	this.instance.setTransform(292.75,271.35,0.5,0.5);

	this.bt2 = new lib.btTransp();
	this.bt2.name = "bt2";
	this.bt2.setTransform(313.1,454.6,1.596,2.6237,0,0,0,196.2,32.5);
	new cjs.ButtonHelper(this.bt2, 0, 1, 2, false, new lib.btTransp(), 3);

	this.instance_1 = new lib.CachedBmp_163();
	this.instance_1.setTransform(171.55,415.2,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_162();
	this.instance_2.setTransform(43.35,406.05,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_161();
	this.instance_3.setTransform(223.65,244.2,0.5,0.5);

	this.bt3 = new lib.btTransp();
	this.bt3.name = "bt3";
	this.bt3.setTransform(308,464,1.596,2.6237,0,0,0,196.2,32.5);
	new cjs.ButtonHelper(this.bt3, 0, 1, 2, false, new lib.btTransp(), 3);

	this.instance_4 = new lib.CachedBmp_166();
	this.instance_4.setTransform(164.9,415.2,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_165();
	this.instance_5.setTransform(43.35,406.05,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_164();
	this.instance_6.setTransform(223.65,237.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.bt1}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.bt2}]},1).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.bt3}]},1).wait(1));

	// Layer_1
	this.instance_7 = new lib.CachedBmp_168();
	this.instance_7.setTransform(92.05,61.9,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_167();
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,0,965.1,549.4);


// stage content:
(lib.juego6 = function(mode,startPosition,loop,reversed) {
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
		var fichasId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		var turno = 1;
		var pos = new Array();
		var audio = new Audio();
		var score = 0;
		var intentos = 10;
		
		shuffle(fichasId);
		
		root.helpScr.bt1.on("click", function () {
			root.helpScr.gotoAndStop(1);
			playSound("/6/audio/inicio");
		})
		root.helpScr.bt2.on("click", inicio)
		root.helpScr.bt3.on("click", gameOver)
		
		function inicio() {
			temporizador();
			root.helpScr.visible = false;
			var inicialX = 15;
			var inicialY = 7;
			var nX = inicialX;
			var nY = inicialY;
			var colCard = 1;
			for (var i = 0; i < fichasId.length; i++) {
				tarjeta = new lib.nCard();
				tarjeta.x = nX;
				tarjeta.y = nY;
				tarjeta.idNum.text = i + 1;
				root.contCards.addChild(tarjeta);
				pos.push({
					x: nX + 55,
					y: nY
				});
		
				//Cards
				nCard = new lib.nFoto();
				nCard.x = nX + 55;
				nCard.y = nY;
				nCard.valor = fichasId[i];
				nCard.casilla = i;
				nCard.on("click", tarjetaSeleccionada);
				nCard.gotoAndStop(0)
				root.fichas.addChild(nCard);
				//CardsFt
				var ft = new createjs.Bitmap('/6/img/' + fichasId[i] + ".png");
				ft.scaleX = 0.35;
				ft.scaleY = 0.35;
				nCard.addChild(ft);
				//Cuadr
				if (colCard < 4) {
					colCard++;
					nX += 235;
				} else {
					colCard = 1;
					nX = inicialX;
					nY += 176;
				}
			}
		}
		
		var sel1, sel2;
		function tarjetaSeleccionada(e) {
			playSound("/6/audio/" + e.currentTarget.valor);
			e.currentTarget.mouseEnabled = false;
			if (turno == 1) {
				sel1 = e.currentTarget
				e.currentTarget.gotoAndStop(1)
				turno = 2;
			} else {
				sel2 = e.currentTarget;
				e.currentTarget.gotoAndStop(1)
				turno = 1;
				organizaFichas(sel1, sel2);
			}
		}
		
		function organizaFichas(s1, s2) {
			audio = new Audio("/audio/zoof.mp3");
			audio.play();
		
			var nCs1 = s1.casilla;
			var nCs2 = s2.casilla;
		
			createjs.Tween.get(s1)
				.to({
					x: pos[s2.casilla].x,
					y: pos[s2.casilla].y
				}, 300)
				.call(function () {
					createjs.Tween.get(s2)
						.to({
							x: pos[s1.casilla].x,
							y: pos[s1.casilla].y
						}, 300)
						.call(function () {
							s1.gotoAndStop(0)
							s2.gotoAndStop(0)
							s1.casilla = nCs2;
							s2.casilla = nCs1;
							s1.mouseEnabled = true
							s2.mouseEnabled = true
						});
				});
		
		}
		
		root.verifica.on("click", function () {
			var aciertos = 0;
			Array.prototype.forEach.call(root.fichas.children, function (child, i) {
				if (child.valor == child.casilla) {
					aciertos++;
					child.gotoAndStop(2)
					child.mouseEnabled = false;
					audio = new Audio("/audio/bien.mp3");
					audio.play();
					score = (intentos * 100) + 20;
				} else {
					child.gotoAndStop(3);
				}
			});
			if (root.fichas.children.length == aciertos) {
				enviaData(score,6) 
				root.helpScr.gotoAndStop(2);
				root.helpScr.visible = true;
				playSound("/6/audio/final");
			}
			intentos--;
			root.scoreText.text = score;
		})
		
		function gameOver() {
			window.open("/jugar/0", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.helpScr = new lib.screenHelperF();
	this.helpScr.name = "helpScr";
	this.helpScr.setTransform(480,270,1,1,0,0,0,480,270);

	this.timeline.addTween(cjs.Tween.get(this.helpScr).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_157();
	this.instance.setTransform(604.55,484.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_156();
	this.instance_1.setTransform(602.3,486.75,0.5,0.5);

	this.scoreText = new cjs.Text("0", "33px 'Christmas Carols'", "#FFFFFF");
	this.scoreText.name = "scoreText";
	this.scoreText.textAlign = "center";
	this.scoreText.lineHeight = 45;
	this.scoreText.lineWidth = 100;
	this.scoreText.parent = this;
	this.scoreText.setTransform(847.8,492.05);

	this.instance_2 = new lib.CachedBmp_155();
	this.instance_2.setTransform(760,483.35,0.5,0.5);

	this.instance_3 = new lib.temporizador();
	this.instance_3.setTransform(911.55,439.5,1,1,0,0,0,52,23.4);

	this.verifica = new lib.btVerficar();
	this.verifica.name = "verifica";
	this.verifica.setTransform(689.55,441.4,0.832,0.8315,0,0,0,177.7,43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.verifica},{t:this.instance_3},{t:this.instance_2},{t:this.scoreText},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// fichas
	this.fichas = new lib.empt();
	this.fichas.name = "fichas";
	this.fichas.setTransform(59.1,44.8,1,1,0,0,0,59.1,44.8);

	this.timeline.addTween(cjs.Tween.get(this.fichas).wait(1));

	// contCards
	this.contCards = new lib.empt();
	this.contCards.name = "contCards";
	this.contCards.setTransform(59.1,44.8,1,1,0,0,0,59.1,44.8);

	this.timeline.addTween(cjs.Tween.get(this.contCards).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,270,488.20000000000005,270);
// library properties:
lib.properties = {
	id: '92D0085E78354038BA9128BFEE90681C',
	width: 960,
	height: 540,
	fps: 24,
	color: "#FFFFCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"/images/juego6_atlas_1.png", id:"juego6_atlas_1"}
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
an.compositions['92D0085E78354038BA9128BFEE90681C'] = {
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