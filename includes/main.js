$(document).ready(function () {
    $("#owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        touchDrag: true,
        dots: false,
        autoplay: true,
        center: true,
        margin: 20,

        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        },
    });
});



$(window).on("load",function () {
    $(".loading").fadeOut(2000)
})


// >>>>>>>>>>>>>>>>>>>>> Arrow - Up <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let sectionTop = $(".convert").offset().top
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > sectionTop) {
        // $(".arrow-up").addClass("d-block");
        $(".arrow-up").fadeIn(800);

    } else {
        // $(".arrow-up").removeClass("d-block");
        $(".arrow-up").fadeOut(800);
    }
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> End <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// >>>>>>>>>>> Animation To ScrollTop <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
$(".arrow-up").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 2000)
})
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> End <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>
new PureCounter();
// <<<<<<<<<<<<<<