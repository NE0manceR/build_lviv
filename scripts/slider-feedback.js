let comment = document.querySelector('.slider-feedback__feedback');
let person = document.querySelector('.slider-feedback__person');
let dots = document.querySelectorAll('.slider-feedback__dot');
let arrows = document.querySelectorAll('.slider-feedback_color');
let textComents = [
	'COMENT 1 ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros at nunc venenatis varius ac ut nisl. Cras vulputate' +
	' efficitur' +
	' ligula, ac bibendum est placerat vel. Integer sit amet lectus non enim maximus varius sed non arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros at nunc venenatis varius ac ut nisl. Cras vulputate efficitur ligula, ac bibendum est placerat vel. Integer sit amet lectus non enim maximus varius sed non arcu.',
	'COMENT 2 ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros at nunc venenatis varius ac ut nisl. Cras vulputate efficitur' +
	' ligula, ac bibendum est placerat vel. Integer sit amet lectus non enim maximus varius sed non arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros at nunc venenatis varius ac ut nisl. Cras vulputate efficitur ligula, ac bibendum est placerat vel. ',
	'COMENT 3 ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros at nunc venenatis varius ac ut nisl. Cras vulputate efficitur' +
	' ligula, ac bibendum est placerat vel. Integer sit amet lectus non enim maximus varius sed non arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
	'COMENT 4 ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros at nunc venenatis varius ac ut nisl. Cras vulputate efficitur' +
	' ligula, ac bibendum est placerat vel. Integer sit amet lectus non enim maximus varius sed non arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros at nunc venenatis varius ac ut nisl. Cras vulputate efficitur ligula, ac bibendum est placerat vel. Integer sit amet lectus non enim maximus varius sed non arcu.',
]

let commentStep = 0;

let persons = [
	'Андрій Микитюк',
	'Андрій Гірняк',
	'Тарас Шевченко',
	'Андрій Шевченко',
]

comment.innerHTML = textComents[0];
person.innerHTML = persons[0];


function feedbackLeft() {
	if (commentStep === 3) {
		return;
	}

	if (commentStep === 2) {
		arrows[0].style.stroke = 'rgba(196, 196, 196, 0.45)'
	}
	arrows[1].style.stroke = '#FF9900';
	dots[commentStep].style.width = '6px';
	dots[commentStep].style.height = '6px';
	dots[commentStep].style.backgroundColor = "rgba(196, 196, 196, 0.45)"
	comment.style.opacity = "0";
	person.style.opacity = "0";
	commentStep++

	setTimeout(() => {
		comment.innerHTML = textComents[commentStep];
		person.innerHTML = persons[commentStep];
		comment.style.opacity = "1";
		person.style.opacity = "1";
	}, 600)

	dots[commentStep].style.width = '9px';
	dots[commentStep].style.height = '9px';
	dots[commentStep].style.backgroundColor = "#FF9900"
}

function feedbackRight() {

	if (commentStep === 0) {
		return;
	}

	if (commentStep === 1) {
		arrows[1].style.stroke = 'rgba(196, 196, 196, 0.45)'
	}
	arrows[0].style.stroke = '#FF9900';
	dots[commentStep].style.width = '6px';
	dots[commentStep].style.height = '6px';
	dots[commentStep].style.backgroundColor = "rgba(196, 196, 196, 0.45)"
	comment.style.opacity = "0";
	person.style.opacity = "0";
	commentStep--

	setTimeout(() => {
		comment.innerHTML = textComents[commentStep];
		person.innerHTML = persons[commentStep];
		comment.style.opacity = "1";
		person.style.opacity = "1";
	}, 600)
	dots[commentStep].style.width = '9px';
	dots[commentStep].style.height = '9px';
	dots[commentStep].style.backgroundColor = "#FF9900"
}