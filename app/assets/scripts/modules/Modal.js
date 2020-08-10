var $ = require('jquery');


$(document).ready(function() {

    // insert the contact page onload first

    var html = `
    <div id="cotact-modal" class="custom-modal">
        <div class="close-modal">
            <span id="close-contact">X</span>
        </div>
        <div class="block-content">
            
        <div class="contact">
            <div class="contact-wrapper">
                <h2 class="headline headline__centered headline__light">We'd love to hear from you</h2>
                <p class="modal__description">201 E. Risinger Rd Suite 101
                Fort Worth, TX 76140
                USA<br>
                
                Phone: (817) 568-1212<br>
                Fax: (817) 568-1295<br>
                Email: sales@tapeinnovations.com
                </p>
                <form>
                    <label for="fname">Full Name:</label>
                    <input type="text" placeholder="Full Name">
                    <label for="email">Email:</label>
                    <input type="email" placeholder="Email">
                    <label for="phone">Phone Number:</label>
                    <input type="number" placeholder="Phone Number"><br>
                    <label for="subject">Subject:</label>
                    <input class="input__subject" type="text" placeholder="Subject"><br>
                    <h4>Your Message</h4>
                    <textarea cols="60" rows="8"></textarea><br>
                    <button type="submit">Submit</button>
                </form>
            </div>
      </div>




        </div>
    </div>

    `

    $('body').prepend(html);


    
    $('.open-modal').click(function() {
        $('#cotact-modal').show(1000)
    });


    $('#close-contact').click(function() {
        $('#cotact-modal').hide(1000);
    })

})