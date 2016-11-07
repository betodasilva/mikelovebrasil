window.onload = function(){
	var menu = document.getElementById('nav-main'), 
		openMenu = document.getElementById('open-menu'),
		closeMenu = document.getElementById('close-menu'),
		openBtn = document.getElementById('open-btn'),
		closeBtn = document.getElementById('close-btn'),
		body = document.body,
		screenW = screen.width;

	openMenu.onclick = function () {

			// openMenu.classList.toggle('active');
			menu.classList.add('nav-open--left');
			// body.classList.add('nav--push-to-right');
			closeBtn.classList.remove('btn--closed');
			openBtn.classList.add('btn--closed');
			openBtn.classList.add('btn--push-to-right');
	};

	closeMenu.onclick = function () {

			// openMenu.classList.toggle('active');
			menu.classList.remove('nav-open--left');
			openBtn.classList.remove('btn--push-to-right');
			openBtn.classList.remove('btn--closed');
			closeBtn.classList.add('btn--closed');
	};
	

};

