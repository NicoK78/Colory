"use strict"
   
var scene = new Kinetic.Stage({
	container: "color",
    width: 1024,
    height: 512,
});

var calque = new Kinetic.Layer();
var colorSelect;

for(var i = 0; i < datas.length; i++) {
	var path = new Kinetic.Path({
		x: 20,
		y: 40,
		data: datas[i].path,
		fill: 'white',
		stroke: 'black',
	});

	path.on("click", function(){
		this.fill(colorSelect);
		calque.draw();
		console.log(colorSelect);
	});

	calque.add(path);
	calque.draw();
}

scene.add(calque);



for(var i = 0; i < maPalette.length; i++) {
	var rect = new Kinetic.Rect({
		x: 700 + Math.floor(i/5)*60,
		y: 50 + (i%5)*60,
		width: 50,
		height: 50,
		fill: maPalette[i],
		stroke: 'black',
	});

	rect.on("click", function(){ 
		colorSelect = this.getFill();
		console.log(colorSelect);
	});

	calque.add(rect);
	calque.draw();
}

scene.add(calque);