$(function(){


  $(window).on('load', function(){

    setTimeout(function(){
      $('.slick-active .hero-copy').addClass('active');   
    },500);
    

  });
	
	$('nav li').on('mouseenter', function(){
        $(this).find('.sub-menu').fadeIn('fast');
	});
	$('nav li').on('mouseleave', function(){
        $(this).find('.sub-menu').fadeOut('fast');
	});


	//Slick slider
    $('.slides').slick({
          infinite:true,
          autoplay: true,
          autoplaySpeed:6000,
          dots:true,
          speed: 400,
          customPaging : function(slider, i) { 
            return '<a></a>';
          },
          prevArrow: $('.prev-arrow'),
          nextArrow: $('.next-arrow'),
          slidesToShow:1,
          slidesToScroll:1
          
    });
    $('.slides').on('afterChange', function(){

        $('.slick-active .hero-copy, .slick-cloned .hero-copy').addClass('active');      

    });


    $('.hidden-fold').hide();
    $('.hidden-header').on('click', function(){

      var $top = $(this).offset().top - 210;

      $(this).toggleClass('active'); 
      $(this).parent().find('.hidden-fold').slideToggle(250);
      $(this).parent().parent().siblings().find('.hidden-fold').slideUp(250);
      $(this).find('i').toggleClass('active');
      $(this).parent().parent().siblings().find('i, .hidden-header').removeClass('active');

    });


    
});


