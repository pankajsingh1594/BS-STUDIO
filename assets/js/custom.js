$(document).ready(function(){

    //  Hero scoller open
    $(".banner__scroll").on("click",function(){
        $("html , body").animate({scrollTop: 700},1000);
    });

    // Home scroller close



    // Home accordion open
    $(".accordion__title").on("click",function(){
        const accordion = $(this).parent();

        accordion.find(".accordion__child").slideToggle();
        accordion.siblings().find(".accordion__child").slideUp();
        accordion.find(".accordion__title .add__icon").toggle().toggleClass("rotate__icons");
        accordion.find(".accordion__title .minus__icon").toggle();
        accordion.siblings().find(".accordion__title .add__icon").show();
        accordion.siblings().find(".accordion__title .minus__icon").hide();

        accordion.find(".accordion__title .plus__minus__icons").toggleClass("color__changing");
        accordion.siblings().find(".accordion__title .plus__minus__icons").removeClass("color__changing");
        
    })

    // Home accordion close
    
})



// slider 01 open
$('.slider_01').slick({
    draggable: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    touchThreshold:2000,
    autoplaySpeed: 2000,
    fade: true,
    speed:1000,
    slidesToShow: 1,
    slidesToScroll:1,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
});



// slider 01 close




// Hamburger Starts
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Hamburger Ends


