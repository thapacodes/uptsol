

$('#slider').owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    autoplayTimeout: 9000,
});
$('#first').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#cource_main').owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2
        },
        700: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
});

$(window).scroll(function(){
    if($(this).scrollTop()>300){
$('.gotop').fadeIn();
    }else{
$('.gotop').fadeOut();
    }
})

$('.gotop').click(function(){
$('html,body').animate({scrollTop:0},1000);
})