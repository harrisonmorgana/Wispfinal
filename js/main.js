// Modified from http://stackoverflow.com/questions/977090/fading-in-a-background-image
$.fn.smartBackgroundImage = function(url){
	var t = this;
	$(this).css({ 'opacity' : 0 });
	//create an img so the browser will download the image:
	$('<img />')
		.attr('src', url)
		.load(function(){ //attach onload to set background-image
			t.each(function(){ 
				$(this)
					.css('backgroundImage', "url('"+url+"')" )
					.animate({ opacity: 1 }, 250);
			});
		});
	return this;
 }

$(window).load(function() { 
	// Lazy load background images
	$("section").each(function() { 
		$(this).smartBackgroundImage($(this).data('bg'));
	});
});