var $ = require('jquery');


$(document).ready(function() {
    
    $('.mtr-lm').click(function() {
        $('.pop-up').show(1000);
        $('.html-container').prepend($(this).parent().parent().html());
        $('.pop-up p').removeClass('limit-text');
    });


    $('.close-popup').click(function() {
        $('.pop-up').hide(1000);
        $('.html-container').empty();
    })

})