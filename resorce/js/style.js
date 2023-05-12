$(document).ready(function (){
    'use strict';

    // ?CODE START

    $('header nav .menu ul li a').click(function(){
        $('header nav .menu ul li a').removeClass('active');
        $(this).addClass('active');
    })



    $('header nav .menuResIcon .fa-bars').click(function (){
        $('header nav .menu').fadeIn()
    })

    $('header nav .menuCloseIcon .fa-times').click(function (){
        $('header nav .menu').fadeOut(800)
    })

    $(window).resize(function () {
        const scrnSize = $(window).width();
        if (scrnSize > 991){
            $('header nav .menu').removeAttr('style')
        }
    })

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    }); 







})