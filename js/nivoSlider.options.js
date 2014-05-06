/*
 * Javascript slider options for Nivo Slider.
 * Open source Nivo Slider, originally obtained and modified from: http://nivo.dev7studios.com
 */
 
$(window).load(function() {
	$('#slider').nivoSlider( {
		effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
		slices: 6, // For slice animations
		boxCols: 8, // For box animations
		boxRows: 4, // For box animations
		animSpeed: 800, // Slide transition speed
		pauseTime: 2400, // How long each slide will show
		startSlide: 0, // Set starting Slide (0 index)
		directionNav: true, // Next & Prev navigation
		controlNav: false, // 1,2,3... navigation
		controlNavThumbs: false, // Use thumbnails for Control Nav
		pauseOnHover: true, // Stop animation while hovering
		manualAdvance: true, // Force manual transitions
		prevText: 'Prev', // Prev directionNav text
		nextText: 'Next', // Next directionNav text
		randomStart: true // Start on a random slide
	} ); 
} );