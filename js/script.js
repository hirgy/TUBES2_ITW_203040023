// event pada saat link klik
var scroll = new SmoothScroll('a[href*="#"]');

// change color scroll
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 550)
});

//  coursel
$('.carousel').carousel({
    interval: 4000
})

// skills
function Circlle(el){
    $(el).circleProgress({fill: {color: ' #deb887'}})
    .on('circle-animation-progress', function(event, progress, stepValue){

        $(this).find('strong').text(String(stepValue.toFixed(2))+'%'
        );
    });
};

Circcle('.round');