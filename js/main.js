jQuery(document).ready(function(){

    // (function(){
    
    //               var words = [
    
    
    //                   'Fruits',
    
    //                   'Ice Cream',
    
    //                   'Veggies',
    
    //                   'Milk',
    
    //                   'Snacks'
    
    //                   ], i = 0;
    
    //               setInterval(function(){
    
    //                   $('#changingword').fadeOut(function(){
    
    //                       $(this).html(words[i=(i+1)%words.length]).fadeIn();
    
    //                   });
    
    //               }, 3000);
    
                    
    
    //           })();
    
               $('#carouselFade').carousel();
    
    });
    
    
    
     jQuery(document).ready(function(){
    
           $('.items').slick({
    
            infinite: true,
    
            autoplay:true,
    
            dots:false,
    
            arrow:false,
    
            slidesToShow: 1,
    
            slidesToScroll: 1,
    
      });
    
                $('.press').slick({
    
            infinite: true,
    
            autoplay:true,
    
            dots:true,
    
            arrow:false,
    
            slidesToShow: 3,
    
            slidesToScroll: 1,
             responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 667,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: 'unslick',
        },
      ],
    
      });
    
      baguetteBox.run('.tz-gallery');
    
      $(window).scroll(function() {
        if ($(this).scrollTop() > 0){  
            $('.header-sec').addClass("sticky");
          }
          else{
            $('.header-sec').removeClass("sticky");
          }
        });
    
    });
    
     
    