$(function () {
    'use strict'
    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    });

    $('.lightbox').fancybox();
    
    resize_carousel();

    $('window').resize(function(){
        resize_carousel();
    });

    function resize_carousel(){
        if($('#carousel-wrapper').length > 0 && $('.content-box').length > 0){
            $('#carousel-wrapper').find('.carousel-inner').width($('.content-box').innerWidth() - 280);
        }
    }
})
