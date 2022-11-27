jQuery(function($) {
	$(".filter").click(function() {
	
var master = [];

// Identify the master values.

$('.selected ul' ).first().find('li').each(function(index,value) {
    master.push($(this).text());
});

$('ul:not(:first)').each(function(ulIndex) {
    $(this).find('li').each(function(index) {
        if(master[index] != $(this).text()) {
            $(this).addClass('mismatch');        
        }  
		else {
			$(this).addClass('match');
		}
    });
});
});

	$(".reset").click(function() {
	
var master = [];

// Identify the master values.

$('.selected ul' ).first().find('li').each(function(index,value) {
    master.push($(this).text());
});

$('ul:not(:first)').each(function(ulIndex) {
    $(this).find('li').each(function(index) {
            $(this).removeClass('mismatch');
			$(this).removeClass('match');
    });
});
});

});