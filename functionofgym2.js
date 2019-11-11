$(function(){
    
      // smooth scrolling navigation
     /*  $("nav a").click( function() {
        var target = $(this).attr("href");
        $("body, html").animate({
          scrollTop: $(target).offset().top,
          color:"#fefefe"
        }, 300);
        return true;
      });


      $("nav a").click(function(){
         $("nav a").addClass("acte");
         $(this).removeClass("acte");
          });

      //scrollSpy call  $(target).addClass('acte');
      // $("nav a").not(target).removeClass('acte'); 
  
      
      $(".Exercises a").click(function(){
        var target = $(this).attr("href");
         $(target).addClass("active2");
         $(".Exercises div").not($(target)).removeClass("active2");
          });

          $('.Exercises a').click(function(e){
            $('.Exercises a').removeClass("active1");
            $(this).addClass("active1");
           // $('.exercises div.active2').removeClass("active2");
            //$('.exercises div').addClass("active2");
            return true;
            });
   
          
         
  
  

  
  
        /* 
            }) 
   */
  $(document).ready(function(){
    alert("this website is not alllow to use on mobile phone or tablet")
    if(window.innerWidth < 760){
      $("#body").css({
        display:"none"
      })
    }
  })
  
   $("section").height($(window).height());
   if ($(window).width() <= "400" ) {
   $("section").css({
    "height":"100%"
   });
     
   }else{
   $("section").height();

   }
 
  $("nav a").click( function() {
    var target = $(this).attr("href");
    $("body, html").animate({
      scrollTop: $(target).offset().top,
      color:"#fefefe"
    }, 300);
    return true;
  });

  var section=["abs" , "leg" ,"back" ,"shoulder","chest"];
  var section2=["sat" , "sun" ,"mon" ,"tus","wed","ther","fri"];
  

  for (let i = 0; i < section2.length; i++) {
    $(".dailyworkout a[href='#"+section2[i]+"']").click(function(){
      var target = $(this).attr("href");
      $(target).addClass("see");
      $(".dailyworkout .day").not($(target)).removeClass("see");
    })
  }


  for (let i = 0; i < section.length; i++) {
    $(".exercise a[href='#"+section[i]+"']").click(function(){
      var target = $(this).attr("href");
      $(target).addClass("see");
      $(".exercise .exe").not($(target)).removeClass("see");
    })
    
  }



   
          
  
     
  
  
  
  
  
  
})