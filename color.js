var modeTrack = 6;
var colors = [];

var square = document.querySelectorAll('.square');
var colorselect;
var colordis = document.querySelector('#colordis');
var message = document.querySelector('#message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');

var merge = document.querySelectorAll('.merge')



init();

function init() {
	modeChange();

	squareClick();

	resetting();
}


function modeChange() {
	for (var i = 0; i < merge.length; i++) {
	merge[i].addEventListener('click', function() {
		merge[0].classList.remove('mode');
		merge[1].classList.remove('mode');
		this.classList.add('mode');
		if (this.textContent === 'EASY') {
			modeTrack = 3;
		} else{
			modeTrack = 6;
		}

		resetting();
	}) 
}

}

function squareClick() {
	for (var i = 0; i < square.length; i++) {
	


	square[i].addEventListener('click', function() {
		var colorclick = this.style.backgroundColor;
		if (colorclick === colorselect) {
			message.textContent = 'Correct!';
			message.style.color = 'green';
			reset.textContent = 'Play Again?';
			changeColor(colorselect);
			h1.style.backgroundColor = colorselect;
		}
		else {
			this.style.backgroundColor = '#232323';
			message.textContent = 'Try Again';
		    message.style.color = 'red';
		}
	});
}
}

function resetting() {
	colors = colorGenerator(modeTrack);
	colorselect = colorSelect();
	colordis.textContent = colorselect;
	for (var i = 0; i < square.length; i++) {
		if (colors[i]) {
			square[i].style.display = 'block';
			square[i].style.backgroundColor = colors[i];
		} else {
			square[i].style.display = 'none';
		}
		
	}

	h1.style.backgroundColor = 'steelblue';
	reset.textContent = 'New Colors';
	message.textContent = '';

}

// easy.addEventListener('click', function () {
// 	message.textContent = '';
// 	h1.style.backgroundColor = 'steelblue';
// 	easy.classList.add('mode');
// 	hard.classList.remove('mode');
// 	modeTrack = 3;
// 	colors = colorGenerator(modeTrack);
// 	colorselect = colorSelect();
// 	colordis.textContent = colorselect;
// 	for (var i = 0; i < square.length; i++) {
// 		if (colors[i]) {
// 			square[i].style.backgroundColor = colors[i];
// 		}
// 		else {
// 			square[i].style.display = 'none';
// 		}
// 	}

// })




// hard.addEventListener('click', function() {
// 	message.textContent = '';
// 	h1.style.backgroundColor = 'steelblue';
// 	hard.classList.add('mode');
// 	easy.classList.remove('mode');
// 	modeTrack = 6;
// 	colors = colorGenerator(modeTrack);
// 	colorselect = colorSelect();
// 	colordis.textContent = colorselect;
// 	for (var i = 0; i < square.length; i++) {
// 		square[i].style.backgroundColor = colors[i];
// 		square[i].style.display = 'block';
		
// 	}
// })








function changeColor(color) {
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = color;
	}
}

function colorSelect() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function colorGenerator(num) {
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomGenerator())
	}
	return arr;
}


function randomGenerator() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}


reset.addEventListener('click', function () {
	resetting();
	// colors = colorGenerator(modeTrack);
	// colorselect = colorSelect();
	// colordis.textContent = colorselect;
	// for (var i = 0; i < colors.length; i++) {
	// 	square[i].style.backgroundColor = colors[i];
	// }

	// h1.style.backgroundColor = 'steelblue';
	// this.textContent = 'New Colors';
	// message.textContent = '';
})



