window.onload = function(){
	var menu = document.getElementById('nav-main'), 
		openMenu = document.getElementById('open-menu'),
		button = document.getElementById('btn'),
		body = document.body,
		screenW = screen.width;

	openMenu.onclick = function () {

			openMenu.classList.toggle('active');
			menu.classList.toggle('nav-open--left');
			body.classList.toggle('nav--push-to-right');
			button.classList.toggle('btn--closed');	
	};

	

};

