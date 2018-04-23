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

    // dados das regiões
    var json = {}

    // regioões
    $('body').on('click', '#mapa-brasil .regiao', function(){
        var regiao = $(this).data('regiao');

        // ativa região no mapa
        $('#mapa-brasil').find('.regiao').removeClass('active');
        $(this).addClass('active');

        // exibe detalhes da região
        $('.sm-info .regiao').removeClass('active');
        $('#' + regiao).addClass('active');
    })
});
