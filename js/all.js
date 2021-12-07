
function flip_card1(n){
	console.log(n)
	var x1 = document.getElementsByClassName("flip-card-front");
	x1[n].style.display = "none";
	var x2 = document.getElementsByClassName("flip-card-back");
	x2[n].style.display = "block";
}
