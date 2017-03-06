window.onload = function(){
	
	var editCenter = document.getElementById("editCenter");
	var centerIcon = document.getElementById("centerIcon");
	var editRight = document.getElementById("editRight");
	var rightIcon = document.getElementById("rightIcon");
	var left = document.getElementById("left");
	var center = document.getElementById("center");
	var right = document.getElementById("right");
	
	editCenter.addEventListener("mousedown", leftMove);
	editRight.addEventListener("mousedown", rightMove);
	document.addEventListener("mouseup", cancleMove);
	
	editCenter.addEventListener('mouseover', function(){
		centerIcon.style.display = "block";
	});
	editCenter.addEventListener('mouseout', function(){
		centerIcon.style.display = "none";
	});
	
	editRight.addEventListener('mouseover', function(){
		rightIcon.style.display = "block";
	});
	editRight.addEventListener('mouseout', function(){
		rightIcon.style.display = "none";
	});
	
	function leftMove(e){
		editCenter.addEventListener('mousemove', leftMoveing);
		left.addEventListener("mousemove", leftMoveing);
		center.addEventListener("mousemove", leftMoveing);
	};
	function leftMoveing(e) {
		if(e.pageX <= 800 && e.pageX >= 250){
			left.style.width = e.pageX +'px';
			center.style.marginLeft = e.pageX + 'px';
		}
	};
	function cancleMove(){
		editCenter.removeEventListener('mousemove', leftMoveing);
		left.removeEventListener('mousemove', leftMoveing);
		center.removeEventListener("mousemove", leftMoveing);
		
		editRight.removeEventListener('mousemove', rightMoveing);
		center.removeEventListener("mousemove", rightMoveing);
		right.removeEventListener("mousemove", rightMoveing);
	};
	
	function rightMove(e) {
		editRight.addEventListener('mousemove', rightMoveing);
		right.addEventListener("mousemove", rightMoveing);
		center.addEventListener("mousemove", rightMoveing);
	}
	function rightMoveing(e) {
		var w = document.body.offsetWidth - e.pageX;
		if(w <= 800 && w >=250){
			right.style.width = w +'px';
			center.style.marginRight = w + 'px';
		}
	};
}
