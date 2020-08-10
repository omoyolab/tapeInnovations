var $ = require('jquery');


$(document).ready(function() {

    // insert the contact page onload first

    var html = `
    <div id="cotact-modal" class="custom-modal">
        <div class="close-modal">
            <span>X</span>
        </div>
        <div class="html-container">
            <h1>hellod</h1>
        </div>
    </div>

    `

    $('body').prepend(html);


    
    $('.open-modal').click(function() {
        $('#cotact-modal').show()
    });


    // $('.close-popup').click(function() {
    //     $('.pop-up').hide(1000);
    //     $('.html-container').empty();
    // })

})