// Change the nav opacity lors du scrool
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('bck-nav')
            $('header').addClass('fixed-top')
            $('nav').addClass('change-height-menu')

        } else {
            $('header').removeClass('.bck-nav')
            $('header').removeClass('fixed-top')
            $('nav').removeClass('change-height-menu')

        }
    });
});

// CHANGE BCK-COLOR
$(window).on("scroll touchmove", function () {
    if ($(document).scrollTop() >= $("#container-skills").position().top) {
        $('body').css('background', "white");

    };
});

// FERMER MENU Mobil
$('.nav-link').click(function () {
    $('#navbarNav').collapse('hide');
});

// ADD CLASS ACTIVE-MENU DEPENDING THE SCROLL SECTION
$(window).on("scroll touchmove", function () {
    if ($(document).scrollTop() >= $("#profil").position().top) {
        $('#profil-menu').addClass('active-menu')
        $('#expertise-menu').removeClass('active-menu')
        $('#realisation-menu').removeClass('active-menu')
        $('#contact-menu').removeClass('active-menu')
    };
});

$(window).on("scroll touchmove", function () {
    if ($(document).scrollTop() >= $("#container-skills").position().top) {
        $('#expertise-menu').addClass('active-menu')
        $('#profil-menu').removeClass('active-menu')
        $('#realisation-menu').removeClass('active-menu')
        $('#contact-menu').removeClass('active-menu')
    };
});

$(window).on("scroll touchmove", function () {
    if ($(document).scrollTop() >= $("#realisation").position().top) {
        $('#realisation-menu').addClass('active-menu')
        $('#expertise-menu').removeClass('active-menu')
        $('#profil-menu').removeClass('active-menu')
        $('#contact-menu').removeClass('active-menu')
    };
});


$(window).on("scroll touchmove", function () {
    if ($(document).scrollTop() >= $("#contact-container").position().top) {
        $('#contact-menu').addClass('active-menu')
        $('#realisation-menu').removeClass('active-menu')
        $('#expertise-menu').removeClass('active-menu')
        $('#profil-menu').removeClass('active-menu')
    };
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
    targets: '.container__desc',
    translateY: [20],
    opacity: [0.2, 1],
    duration: 4000
});


$('.carousel').carousel({
    interval: 80000
})

// Get the container element
var btnContainer = document.getElementById("navbarNav");

// Get all links with class="btn" inside the container
var links = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-menu");
        current[0].className = current[0].className.replace(" active-menu", "");
        this.className += " active-menu";
    });
}


