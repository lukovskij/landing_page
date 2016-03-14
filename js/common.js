var scr = screen.width;
var home = document.getElementById('home');
home = home.offsetHeight;
var services = document.getElementById('services');
services = services.offsetHeight;
var portfolio = document.getElementById('portfolio');
portfolio = portfolio.offsetHeight;
var about = document.getElementById('about');
about = about.offsetHeight;
var team = document.getElementById('team');
team = team.offsetHeight;
var links = document.getElementById('links');
links = links.offsetHeight;
var aboutSum = about+team+links;

$(document).ready(function() {
   //peremotka

    $('.mnu_fix li:nth-child(1)').click(function(){
       $.scrollTo('#home', 1000);
    });
     $('.mnu_fix li:nth-child(2)').click(function(){
       $.scrollTo('#services', 1000);
    });
     $('.mnu_fix li:nth-child(3)').click(function(){
       $.scrollTo('#portfolio', 1000);
    });
     $('.mnu_fix li:nth-child(4)').click(function(){
       $.scrollTo('#about', 1000);
    });
     $('.mnu_fix li:nth-child(5)').click(function(){
       $.scrollTo('#contact', 1000);
    });

    $('.mnu li:nth-child(1)').click(function(){
       $.scrollTo('#home', 1000);
    });
     $('.mnu li:nth-child(2)').click(function(){
       $.scrollTo('#services', 1000);
    });
     $('.mnu li:nth-child(3)').click(function(){
       $.scrollTo('#portfolio', 1000);
    });
     $('.mnu li:nth-child(4)').click(function(){
       $.scrollTo('#about', 1000);
    });
     $('.mnu li:nth-child(5)').click(function(){
       $.scrollTo('#contact', 1000);
    });
    //animated
   $(window).scroll(function(){
    //services
    var ser =$('#services')[0];
    var posSer = ser.getBoundingClientRect().top;
    var box = $('div.box');

    //portfolio line 1
    var portf =$('.portf_line_1')[0];
    var posPortf = portf.getBoundingClientRect().top;
    var boxPortf = $('.portf_line_1');

    //portfolio line 2
    var portf2 =$('.portf_line_2')[0];
    var posPortf2 = portf2.getBoundingClientRect().top;
    var boxPortf2 = $('.portf_line_2');

    //about_us about_line_1
    var about_line1 =$('.about_line_1')[0];
    var about_line_1 = about_line1.getBoundingClientRect().top;
    var content1 = $('.content_anim');
    var img1 = $('.img_anim');

    //about_us about_line_2
    var about_line2 =$('.about_line_2')[0];
    var about_line_2 = about_line2.getBoundingClientRect().top;

    //about_us about_line_3
    var about_line3 =$('.about_line_3')[0];
    var about_line_3 = about_line3.getBoundingClientRect().top;

    //about_us about_line_4
    var about_line4 =$('.about_line_4')[0];
    var about_line_4 = about_line4.getBoundingClientRect().top;

    //about_us about_line_5
    var about_line5 =$('.content_anim5')[0];
    var about_line_5 = about_line5.getBoundingClientRect().top;

    //team_line
    var team_line =$('.team_line')[0];
    var teamL = team_line.getBoundingClientRect().top;

    //links_line
    var link_line =$('.links_line')[0];
    var linkL = link_line.getBoundingClientRect().top;

    //contact_line1
    var contactline1 =$('.contact_line1')[0];
    var contactL1 = contactline1.getBoundingClientRect().top;

    //contact_line2
    var contactline2 =$('.contact_line2')[0];
    var contactL2 = contactline2.getBoundingClientRect().top;

    if(posSer < 92){
           box.addClass('animated bounce');
       }
       //portfolio
       if(posPortf <= 287){
           boxPortf.addClass('animated bounceInRight');
       }

       if(posPortf2 <= 271){
           boxPortf2.addClass('animated bounceInLeft');
       }

       //about_us
       if(about_line_1 <=253){
            content1.addClass('animated rollIn');
           img1.addClass('animated rotateIn');
        }
       if(about_line_2 <= 254){
           $('.content_anim2').addClass('animated rollIn');
           $('.img_anim2').addClass('animated rotateIn');
       }
       if(about_line_3 <= 375){
           $('.content_anim3').addClass('animated rollIn');
           $('.img_anim3').addClass('animated rotateIn');
       }
       if(about_line_4 <= 374){
           $('.content_anim4').addClass('animated rollIn');
           $('.img_anim4').addClass('animated rotateIn');
       }
       if(about_line_5 <= 430){
           $('.content_anim5').addClass('animated rollIn');
       }

       //team_line
       if(teamL <=251){
           $('.team_line').addClass('animated lightSpeedIn')
       }

       //link_line
        if(linkL <=496){
           $('.links_line').addClass('animated lightSpeedIn')
       }

        //contact_line1
        if(contactL1 <= 306){
           $('.contact_line1').addClass('animated flipInX')
       }

        //contact_line2
        if(contactL2 <= 213){
           $('.contact_line2').addClass('animated flipInY')
        }
    });
    //************************
    $(window).scroll(function(){
        var scroTop = $(window).scrollTop();
        if(scroTop >20){
            $(".top_line").hide();
            $(".top_line_min_fix").show();
        }else{
             $(".top_line").show();
            $(".top_line_min_fix").hide();
        }
    });
    //navigation
    $(window).scroll(function(){
        var scrTop = $(window).scrollTop();
        if(scrTop => 0 && scrTop < home){

            $(".mnu_fix li:nth-child(1) a").addClass("active");
        }
        if(scrTop > home){

            $(".mnu_fix li:nth-child(1) a").removeClass("active");
        }
    });

    $(window).scroll(function(){
        var scrTop = $(window).scrollTop();
        if(scrTop >= home && scrTop < services+home){

            $(".mnu_fix li:nth-child(2) a").addClass("active");
        }
        if(scrTop > services+home || scrTop < home){

            $(".mnu_fix li:nth-child(2) a").removeClass("active");
        }
    });

     $(window).scroll(function(){
        var scrTop = $(window).scrollTop();
        if(scrTop >= home+services && scrTop < services+home+portfolio){

            $(".mnu_fix li:nth-child(3) a").addClass("active");
        }
        if(scrTop > services+home+portfolio || scrTop < home+services){

            $(".mnu_fix li:nth-child(3) a").removeClass("active");
        }
    });
   $(window).scroll(function(){
        var scrTop = $(window).scrollTop();
        if(scrTop >= home+services+portfolio && scrTop < services+home+portfolio+aboutSum){

            $(".mnu_fix li:nth-child(4) a").addClass("active");
        }
        if(scrTop > services+home+portfolio+aboutSum || scrTop < home+services+portfolio){

            $(".mnu_fix li:nth-child(4) a").removeClass("active");
        }
    });
    $(window).scroll(function(){
        var scrTop = $(window).scrollTop();
        if(scrTop >= home+services+portfolio+aboutSum){

            $(".mnu_fix li:nth-child(5) a").addClass("active");
        }
        if(scrTop < home+services+portfolio+aboutSum){

            $(".mnu_fix li:nth-child(5) a").removeClass("active");
        }
    });
    //************************

    //mnu button
    $('.btn_mnu').click(function(){
        $('.btn_mnu').toggleClass('on');
        $('.mnu_top').slideToggle();
    });
    $(window).resize(function(){
        if($(window).width() > 500){
            $('.mnu_top').removeAttr('style');
        }
    });
     $('.btn_mnu_fix').click(function(){
        $('.btn_mnu_fix').toggleClass('on');
        $('.mnu_top_fix').slideToggle();
    });
   $(window).resize(function(){
        if($(window).width() > 500){
            $('.mnu_top_fix').removeAttr('style');
        }
    });
//    $(window).scroll(function(){
//        var scrTop = $(window).scrollTop();
//        if(scrTop > 22){
//            $('.top_line').hide();
//            $('.top_line_min_fix').show();
//        }
//         if(scrTop < 22){
//            $('.top_line').show();
//            $('.top_line_min_fix').hide();
//        }
        /*******dobavlenie classa********
        if(scrTop < 22){
            $('.top_line').show();
            $('.top_line_min_fix').hide();
        }
        if(scrTop >= 700)
            {
                $('.ser').addClass("active");
                $('.home').removeClass("active");
            }
         if(scrTop >= (1300))
            {
                $('.port').addClass("active");
                $('.ser').removeClass("active");
            }
        if(scrTop >= (2600))
            {
                $('.abt').addClass("active");
                $('.port').removeClass("active");
            }
        if(scrTop >= (5300))
            {
                $('.cnct').addClass("active");
                $('.abt').removeClass("active");
            }
        ****************************/
    //});
//   $(".mnu_top_fix a , .mnu_top a").mPageScroll2id({
//		offset : 100,
//		scrollSpeed : 200
//	});
});
