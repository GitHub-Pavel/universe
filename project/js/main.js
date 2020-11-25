setTimeout(function () {
    $('body').addClass('loaded')
    setTimeout(function () {
        $('h1').addClass('animate__fadeInDown')
    }, 300)
}, 8000)

$(function () {
    let scaleEarth = 1.00

    console.log($('.header').height())
    console.log($(window).scrollTop())

    $('.preloader__slider').slick({
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'ease-in-out',
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false

    })

    // Window scroll
    let windowPrevScroll = $(window).scrollTop()
    $(window).scroll( function (e) {

        // earth animation
        if ($(window).scrollTop() < $('.header').height() / 2) {
            if ($(window).scrollTop() > windowPrevScroll) {
                if (scaleEarth < 1.3) {
                    scaleEarth = scaleEarth + 0.007
                } else {
                    scaleEarth = 1.3
                }
            } else {
                if (scaleEarth > 1.00) {
                    scaleEarth = scaleEarth - 0.01
                } else {
                    scaleEarth = 1.00
                }
            }
        }
        if ($(window).scrollTop() == 0) {
            scaleEarth = 1
        }
        $('.header__video').css({
            'transform': 'scale('+scaleEarth+')'
        })// earth animation

        windowPrevScroll = $(window).scrollTop()
    })
})