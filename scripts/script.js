let mobileWrap = document.querySelector('.mobile-wrap');
let mobileMenu = document.querySelector('.mobile-menu')

function openMobile() {
	mobileWrap.style.display = 'grid';
	setTimeout(() => {
		mobileMenu.style.transform = "translateX(1%)"
	}, 100)
}

function closeMobileMenu() {
	mobileMenu.style.transform = "translateX(100%)"
	setTimeout(() => {
		mobileWrap.style.display = 'none';
	}, 500)
}
