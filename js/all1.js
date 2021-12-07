

  
var slide_I1 = 1;
show_slide1(slide_I1);
	
function slide_index_change1(n) {
	show_slide1(slide_I1 += n);
	}

function show_slide1(n) {
	var i;
	
	var x1 = document.getElementsByClassName("story-img1");
	if (n > x1.length) {slide_I1 = 1}
	if (n < 1) {slide_I1 = x1.length}
	for (i = 0; i < x1.length; i++) {
		x1[i].style.display = "none";  
	}
	console.log(n)
	console.log(x1[slide_I1])
	x1[slide_I1-1].style.display = "block";   
	
	}

var slide_I2 = 1;
show_slide2(slide_I2);
	
function slide_index_change2(n) {
	show_slide2(slide_I2 += n);
	}

function show_slide2(n) {
	var i;
	
	var x1 = document.getElementsByClassName("story-img2");
	console.log(x1.length)
	if (n > x1.length) {slide_I2 = 1}
	if (n < 1) {slide_I2 = x1.length}
	for (i = 0; i < x1.length; i++) {
		console.log(x1[i])
		x1[i].style.display = "none";  
	}
	x1[slide_I2-1].style.display = "block";   
	
	}
var slide_I3 = 1;
show_slide3(slide_I3);
	
function slide_index_change3(n) {
	show_slide3(slide_I3 += n);
	}

	function show_slide3(n) {
		var i;
		
		var x1 = document.getElementsByClassName("story-img3");
		if (n > x1.length) {slide_I3 = 1}
		if (n < 1) {slide_I3 = x1.length}
		for (i = 0; i < x1.length; i++) {
			x1[i].style.display = "none";  
		}
		x1[slide_I3-1].style.display = "block";   
		
		}	
document.body.onkeyup = function(e) {
var code = e.keyCode;
if(code === 74) {
	window.scrollTo(document.body.scrollLeft,
					document.body.scrollTop + 500);
}
};