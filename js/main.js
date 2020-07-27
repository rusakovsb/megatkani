(function ($) {
  Drupal.behaviors.themeScripts = {
    attach: function(context, settings) {
	 	
      var mainVideo = $("#main-video");
      var windowWidth = $(window).width();      
      if (windowWidth < 800) {          
        mainVideo.append('<source src="/sites/default/files/video/textile.webm" type="video/webm" />');
      } else {          
        mainVideo.append('<source src="/sites/default/files/video/textile.mp4" type="video/mp4" />');
      }

      $("#block-views-exp-search-page .content").once().append('<button id="search-close-icon"></button>');	    
	  
	    $("#search-icon").click(function () {	
        $("#block-views-exp-search-page").addClass("active");	  
	    });	
	  
	    $("#search-close-icon").click(function () {	
        $("#block-views-exp-search-page").removeClass("active");	  
      });

      $(".region-popup").once().append('<button class="popup-close"></button>');
    
      $("#order-button").click(function () {	
        $("#popup").fadeIn();	  
      });

      $(".popup-close").click(function () {	
        $("#popup").fadeOut();	
      });

      $("#popup-overlay").click(function () {
        $("#popup").fadeOut();
      });

    }
  };
})(jQuery);