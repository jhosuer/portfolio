let bodyFunction = () => {
	let navId = document.getElementById('aboutnav');
	let navId2 = document.getElementById('worknav');
	let navId3 = document.getElementById('footernav');
	let link = document.getElementById('link');
	let link2 = document.getElementById('link2');
	let link3 = document.getElementById('link3');
	let link4 = document.getElementById('link4');
	let navUl = document.getElementById('nav');
	let clickToNav = document.getElementById('navbtn');
	navId.addEventListener('click', function(e) {
		 let url = e.target.href;
	    let hash = url.substring(url.indexOf("#")+1);
	    $('html, body').animate({
	        scrollTop: $('#'+hash).offset().top
	    }, 800);
	    return false;
	});

	navId2.addEventListener('click', function(e) {
		 let url = e.target.href;
	    let hash = url.substring(url.indexOf("#")+1);
	    $('html, body').animate({
	        scrollTop: $('#'+hash).offset().top
	    }, 800);
	    return false;
	});

	navId3.addEventListener('click', function(e) {
		 let url = e.target.href;
	    let hash = url.substring(url.indexOf("#")+1);
	    $('html, body').animate({
	        scrollTop: $('#'+hash).offset().top
	    }, 800);
	    return false;
	});

	link.addEventListener('click', function() {
		// Link to a different page;
		location.href='https://www.figma.com/file/EuBixvX80Jqy8zFzlEirmJlv/ApoE4';
		location.target='_blank';
	});
	link2.addEventListener('click', function() {
		// Link to a different page;
		location.href='https://www.figma.com/file/aOYoWzJ8XpowvPxe2TVJUvqy/Learning-Portal';
		location.target='_blank';
	});
	link3.addEventListener('click', function() {
		// Link to a different page;
		location.href='https://www.figma.com/file/4fhOs4RRH3zqg4YT1a0PtX/bitway';
		location.target='_blank';
	});
	link4.addEventListener('click', function() {
		// Link to a different page;
		location.href='http://havanzer.com/';
		location.target='_blank';
	});
	clickToNav.addEventListener('click', function() {
		// if(navUl.style.display == 'block') {
		// 	navUl.style.display = 'none';
		// } else {
		// 	navUl.style.display = 'block';
		// }
		if ((window.matchMedia('screen and (max-width: 768px)').matches) && (navUl.style.display == 'block'))   {
			navUl.style.display = 'none';
		} else {
			navUl.style.display = 'block';
		}
	});
}
bodyFunction();
