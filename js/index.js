// js styling for navbar toggle, please copy all.
let navbar = document.querySelector('ul');
let navbarClass = navbar.classList;
let navbarChange = document.querySelector('.navbar-change')
let navbarToggle = document.querySelector('#navbar-toggle')

navbarToggle.addEventListener('click', () =>{
    navbar.classList.toggle('navbarChange');
});

// currency selector
function updateSymbol(e){
    let selected = $('.currency-selector option:selected');
    $('.currency-symbol').text(selected.data('symbol'))
    $('.currency-amount').prop('placeholder',
    selected.data('placeholder'))
    $('.currency-addon-fixed').text(selected.text())
}
$('.currency-selector').on('change', updateSymbol)
updateSymbol()

// sliding text
// $('#slider').slideDown('2000');

// landing page typing text
let text='Donate for a cause that matters..'
let length= text.length;
let count = 0;

setTimeout(function loop() {
    document.querySelector('#typer').innerHTML = text.substring(0, count++);

    if (count >= length){
        return;
    }
    setTimeout(loop,150);
}, 150);

//  $('.main-heading').fadeOut(3000).fadeIn(2000);

 let topOffset = 90;
function moveHeading() {
    $('.main-heading').offset({
        // left: -200, // static offset
        top: topOffset
    });
    topOffset++;
    if (topOffset > 150) {
        topOffset = 150;
    }
};
setInterval(moveHeading, 20);
