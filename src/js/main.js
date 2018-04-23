// css
import '../scss/main.scss'

// js
import anime from 'animejs'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'owl.carousel2'
import './global-svg.js'

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
    })

    // dados das regiões
    var json = {}

    // regioões
    $('body').on('click', '#mapa-brasil .regiao', function(){
        var regiao = $(this).data('regiao')

        // ativa região no mapa
        $('#mapa-brasil').find('.regiao').removeClass('active')
        $(this).addClass('active')

        // exibe detalhes da região
        $('.sm-info .regiao').removeClass('active')
        $('#' + regiao).addClass('active')
    })
})

// hero animation
var timeline = anime.timeline()
let duration = 300

timeline
    .add({
        targets: '.hero .brand',
        translateY: -120,
        opacity: 0,
        height: 0,
        easing: 'easeInOutQuad',
        duration: duration,
    })
    .add({
        targets: '.hero .search, .hero .hero-info',
        marginTop: 20,
        paddingBottom: 20,
        easing: 'easeInOutQuad',
        duration: duration,
        offset: 0,
    })
    .pause()

let h = $('.hero').outerHeight()
let pos = 0
let y = 0

$('body').css('padding-top', h + 50)

$(window).on('scroll', function (event) {

    y = $(this).scrollTop() * 2

    if (y > 0 && y <= h) {
        pos = (y * duration) / h
    } else if (y <= 0) {
        pos = 0
    } else {
        pos = duration
    }

    timeline.seek(pos)
})
