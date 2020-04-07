(function ($) {
  Drupal.behaviors.themeScripts = {
    attach: function(context, settings) {
	 	
	    $(".slide-image").each(function() {
        var attr = $(this).attr('data-image-src');
        $(this).css('background-image', 'url('+attr+')');      
      }); 

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