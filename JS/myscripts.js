// Change opacity lors du scrool
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('opacity')
            $('header').addClass('fixed-top')
            $('nav').addClass('change-height-menu')
        } else {
            $('header').removeClass('opacity')
            $('header').removeClass('fixed-top')
            $('nav').removeClass('change-height-menu')
        }
    });
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({ duration: 900 })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    }).add({
        targets: '.ml11',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    }).add({
        targets: '.line',
        opacity: 0,
        duration: 10,
        easing: "easeOutExpo",
        delay: 100
    });


anime({
    targets: '.container-profil',
    translateY: [70],
    opacity: [0.2, 1],
    duration: 4000
});