import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'owl.carousel2';

import './../scss/main.scss';

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:7
            }
        }
    });
});