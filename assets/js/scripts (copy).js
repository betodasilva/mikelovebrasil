window.onload = function(){
	var menu = document.getElementById('nav-main'), 
		showLeft = document.getElementById('open-menu'),
		button = document.getElementById('btn'),
		body = document.body;

	showLeft.onclick = function () {
		showLeft.classList.toggle('active');
		menu.classList.toggle('nav-open--left');
		body.classList.toggle('nav--push-to-right');
		button.classList.toggle('btn--closed');	
	};

	var width = screen.width;
	if(width < 684) {
		
	}

};


