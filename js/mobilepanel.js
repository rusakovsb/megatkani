(function ($) {
  Drupal.behaviors.mobilePanel = {
    attach: function(context, settings) {
	
      $(".region-header").once().append('<button id="menu-icon"><span></span><span></span><span></span></button>');
	  
	    $(".region-mobile-panel").once().prepend('<div id="mobile-panel-header"><button id="menu-close-icon"><span></span><span></span></button></div>');	 

	    $("#menu-icon").click(function () {
        TweenMax.to("#mobile-panel", 0.5, {
          ease: Power1.easeOut,
          x: "0%",
          boxShadow: "-3px 0px 3px 0px rgba(0, 0, 0, 0.3)"         
        })   
      });	

      $("#menu-close-icon").click(function () {
        TweenMax.to("#mobile-panel", 0.5, {
          ease: Power1.easeOut,
          x: "100%",
          boxShadow: "-3px 0px 3px 0px rgba(0, 0, 0, 0)" 
        })   
      });	 
	
    }
  };
})(jQuery);



