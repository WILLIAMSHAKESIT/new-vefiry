window.addEventListener('load', () => {
	var
		carousels = document.querySelectorAll('.carousel')
	;

	for (var i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}
});

function carousel(root) {
	var
		figure = root.querySelector('figure'),
		nav = root.querySelector('nav'),
		images = figure.children,
		n = images.length,
		gap = root.dataset.gap || 0,
		bfc = 'bfc' in root.dataset,
		
		theta =  2 * Math.PI / n,
		currImage = 0
	;
	
	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	window.addEventListener('resize', () => { 
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
	});
    let interval;
    let interval2
    let duration = 1500
    interval = setInterval(function(){
        setTime()
    },duration)
    function setTime(){
        currImage++
        rotateCarousel(currImage);
    }
    $('.carousel figure a').on('mouseenter',function(){
        clearInterval(interval)
        clearInterval(interval2)
    })
    $('.carousel figure a').on('mouseleave',function(){
        interval2 = setInterval(function(){
            setTime()
        },duration)
    })

	function setupCarousel(n, s) {
		var	
			apothem = s / (2 * Math.tan(Math.PI / n))
		;
		
		figure.style.transformOrigin = `50% 50% ${- apothem}px`;

		for (var i = 0; i < n; i++)
			images[i].style.padding = `${gap}px`;
		for (i = 1; i < n; i++) {
			images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
			images[i].style.transform = `rotateY(${i * theta}rad)`;
		}
		if (bfc)
			for (i = 0; i < n; i++)
				 images[i].style.backfaceVisibility = 'hidden';
		
		rotateCarousel(currImage);
	}

	function rotateCarousel(imageIndex) {
		figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
	}
}
