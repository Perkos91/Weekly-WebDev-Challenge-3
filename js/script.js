$('.menu__toggle').on('click', function () {
    $('.menu__main').slideToggle('active');
})

const toogleMenu = document.querySelector(".menu-toogle");
const menuNav = document.querySelector(".main-nav");
const nav = document.querySelector('nav');


/*....Add active class to the current link in position....*/
$(document).ready(function () {
    $('a[href*=\\#]').bind('click', function (e) {
        e.preventDefault();
        const target = $(this).attr("href");
        console.log(target);
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600);
        return false;
    });
});