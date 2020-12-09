let dot = document.querySelectorAll('.slider-work__dot')
let slides = document.querySelectorAll('.slider-work__slide')
for (let i = 0; i < dot.length; i++) {
	dot[i].style.backgroundColor = 'rgba(255, 255, 255, 0.45)';
	dot[0].style.backgroundColor = 'white';
}
let step = 0
let stepCount = 0

function swipeLeft() {
	if (stepCount === 2) {
		return
	}
	dot[stepCount].style.backgroundColor = 'rgba(255, 255, 255, 0.45)';
	if (slides[0].clientWidth === 541) {
		step -= 541
		console.log(step)
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.transform = `translate(${step}px)`
		}
	}
	if (slides[0].clientWidth === 256) {
		step -= 256
		console.log(step)
		for (let h = 0; h < slides.length; h++) {
			slides[h].style.transform = `translate(${step}px)`
		}
	}
	stepCount++
	dot[stepCount].style.backgroundColor = 'white'
	console.log(stepCount)
}

function swipeRight() {
	if (stepCount === 0) {
		return
	}
	dot[stepCount].style.backgroundColor = 'rgba(255, 255, 255, 0.45)';
	if (slides[0].clientWidth === 541) {
		step += 541
		for (let l = 0; l < slides.length; l++) {
			slides[l].style.transform = `translate(${step}px)`
		}
	}
	if (slides[0].clientWidth === 256) {
		step += 256
		for (let j = 0; j < slides.length; j++) {
			slides[j].style.transform = `translate(${step}px)`
		}
	}
	stepCount--
	dot[stepCount].style.backgroundColor = 'white'
}
//ресет слайдера при масштабе окна
window.addEventListener('resize', () => {
	step = 0
	stepCount = 0
	for (let g = 0; g < slides.length; g++) {
		dot[g].style.backgroundColor = 'rgba(255, 255, 255, 0.45)'
		slides[g].style.transform = `translate(${step}px)`
		dot[0].style.backgroundColor = 'white'
	}
})
