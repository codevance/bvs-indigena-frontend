// css
import '../scss/main.scss';

// js
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'owl.carousel2';
import './global-svg.js';

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        center: true,
        responsiveClass: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
            0: { items: 1.75, nav: false },
            600: { items: 3 },
            1000: { items: 5 },
            1500: { items: 7 }
        }
    });
});