<!DOCTYPE html>
<!--
	NOTES:
	1. All tokens are represented by '$' sign in the template.
	2. You can write your code only wherever mentioned.
	3. All occurrences of existing tokens will be replaced by their appropriate values.
	4. Blank lines will be removed automatically.
	5. Remove unnecessary comments before creating your template.
-->
<html>
<head>
<meta charset="UTF-8">
<meta name="authoring-tool" content="Adobe_Animate_CC">
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>juego5</title>
<!-- write your code here -->
<style>
  #animation_container {
	position:absolute;
	margin:auto;
	left:0;right:0;
	top:0;bottom:0;
  }
</style>
<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script src="/js/juego5.js"></script>
<script type='text/javascript' src='/libs/app.js'></script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("C66E0E2EC2204AD08B422937137B575A");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.juego5();
	stage = new lib.Stage(canvas);
	stage.enableMouseOver();	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'both',true,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
</script>
<!-- write your code here -->
</head>
<body onload="init();" style="margin:0px;">
	<div id="animation_container" style="background-color:rgba(85, 162, 210, 1.00); width:960px; height:534px">
		<canvas id="canvas" width="960" height="534" style="position: absolute; display: block; background-color:rgba(85, 162, 210, 1.00);"></canvas>
		<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:960px; height:534px; position: absolute; left: 0px; top: 0px; display: block;">
		</div>
	</div>
</body>
</html>