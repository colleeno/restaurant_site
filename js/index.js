$(document).ready(function(){


$(window).on('scroll',function(){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#menu-items').css('top',(0-(scrolled*.75))+'px');

}

});
