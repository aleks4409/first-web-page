var $arrow = $("arrow a");

var $off = $("main").offset().top;

$("#arrow").on("click", function () {
    $('html,body').animate({
            scrollTop: $("main").offset().top
        },
        1200);
});

var $arrow1 = $("arrow1 a");

$("#arrow1").on("click", function () {
    $('html,body').animate({
        scrollTop: 0
    }, 1200)
})




const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation')

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);









function scroll(e) {

    var href = $(this).attr('href');

    e.preventDefault();

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 800);

    location.hash = href;

};

$('a[href*="#"]').click(scroll);
