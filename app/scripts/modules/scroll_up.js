define(['jquery'], function ($) {
    'use strict';

    var offset = $(window).height();

    $(window).scroll(function() {
        if( $(document).scrollTop() >= offset ) {
            $('#mainPage').fadeOut();
            $('header, .mainHeader').addClass('fixed');
        }
    });
});