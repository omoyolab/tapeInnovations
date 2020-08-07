var $ = require('jquery');


$(document).ready(function() {
    
    $('.mtr-lm').click(function() {
       
        document.body.insertAdjacentHTML('beforeend', 
            `
                <div class="pop-up">
                    ${$(this).parent().parent().html()}
                </div>
            `
        )
    });

    

})