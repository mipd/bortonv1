$(document).ready(function () {

    $('.carousel').carousel({
        interval: 4000
        });

    var nav = $('.navbar');
    var origOffsetY = nav.offset().top;
    // var cHeight = $('contact').outerHeight();

    // $('section[data-type="contact"]').each(function(){
    //      // declare the variable to affect the defined data-type
    //      var $scroll = $(this);
                         
    //       $(window).scroll(function() {
    //         // HTML5 proves useful for helping with creating JS functions!
    //         // also, negative value because we're scrolling upwards                             
    //         var yPos = -($window.scrollTop() / $scroll.data('speed')); 
             
    //         // background position
    //         var coords = '50% '+ yPos + 'px';
    //         alert('yes');
    //         // move the background
    //         $scroll.css({ backgroundPosition: coords });    
    //       }); // end window scroll
    //    });  // end section function
    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.navbar').addClass('sticky');
            $('body').addClass('shift');
        } else {
            $('.navbar').removeClass('sticky');
            $('body').removeClass('shift');
        }

        // alert(contactOffsetY);

        // if ($(window).scrollTop() >= contact.offset().bottom) {
        //     alert('yes');
        // }
        // parallax();

    }

    document.onscroll = scroll;

    function scrollNav() {
      $('.nav a').click(function(){  
        //Toggle Class
        $(".active").removeClass("active");      
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.'+theClass).parent('li').addClass('active');
        //Animate
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 400);
        return false;
      });
      $('.scrollTop a').scrollTop();
    }

    scrollNav();


});

// function parallax(){
//     // alert('yes');
//     var scrolled = $(window).scrollTop();
//     $('.contact').css('height',(cHeight-scrolled) + 'px');
//     alert($('contact').css('height'));
// }