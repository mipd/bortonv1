// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }

$(document).ready(function () {

    var nav = $('.navigation');
    var origOffsetY = nav.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.navigation').addClass('sticky');
        } else {
            $('.navigation').removeClass('sticky');
        }
    }
    document.onscroll = scroll;

});

// $(document).scroll(function(){
//     // If has not activated (has no attribute "data-top"
//     if (!$('.navigation').attr('data-top')) {
//         // If already fixed, then do nothing
//         //if ($('.navigation').hasClass('.navigation-fixed')) return;
//         // Remember top position
//         var offset = $('.navigation').offset()
//         $('.navigation').attr('data-top', offset.top);
//     }

//     if ($('.navigation').attr('data-top') <= $(this).scrollTop()) //- $('.navigation').outerHeight() 
//     {
//         //alert("at top!");
//         $('.navigation').css({
//             position: 'fixed', 
//             top: '0'
//             // color: '#ff0000',
//             // height: '30px',
//             // 'text-align': 'left',
//             // font: 'Helvetica',
//             // 'font-size': '14px',
//             // 'padding-top': '12px',
//             // 'padding-left': '30px',
//         }) 
//         // addClass('.navigation-fixed');
//         // $('.navigation').removeClass('.navigation-float');
        
//     }
//     else
//     {
//         //alert("not at top!");
//         $('.navigation').css({
//             position: 'absolute', top:'608', bottom: 'auto'
//         })
//         // $('.navigation').removeClass('.navigation-fixed');
//         // $('.navigation').addClass('.navigation-float');
//     }
// });

// $(document).ready(function(){
//     // Cache the Window object
//     $window = $(window);
                
//    $('section[data-type="background"]').each(function(){
//      var $bgobj = $(this); // assigning the object
                    
//       $(window).scroll(function() {
                    
//         // Scroll the background at var speed
//         // the yPos is a negative value because we're scrolling it UP!                              
//         var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
        
//         // Put together our final background position
//         var coords = '75% '+ yPos + 'px';

//         // Move the background
//         $bgobj.css({ backgroundPosition: coords });
//         });
//     });
        
// }); // window scroll Ends
