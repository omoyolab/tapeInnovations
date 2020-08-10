var $ = require('jquery');

// function switchDataCity(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }


$(document).ready(function() {

    $('#firstbtn').addClass('active');
    $('#firstcontent').show();
    
    $('.tablinkclick').click(function() {

        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontentclick");
        for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinkclick");
        for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        // document.getElementById(cityName).style.display = "block";
        $("#"+$(this).attr('data-target')).show();
        // evt.currentTarget.className += " active";
        $(this).addClass("active")

    });

    $('#firstbtn2').addClass('active');
    $('#firstcontent2').show();
    
    $('.tablinkclick2').click(function() {

        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontentclick2");
        for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinkclick2");
        for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        // document.getElementById(cityName).style.display = "block";
        $("#"+$(this).attr('data-target')).show();
        // evt.currentTarget.className += " active";
        $(this).addClass("active")

    });
})