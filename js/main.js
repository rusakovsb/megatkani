(function ($) {
  Drupal.behaviors.themeScripts = {
    attach: function(context, settings) {
	 	
      var mainVideo = $("#main-video");
      var windowWidth = $(window).width();      
      if (windowWidth < 768) {          
        mainVideo.append('<source src="/sites/default/files/video/fabric.webm" type="video/webm" />');
      } 
      else {          
        mainVideo.append('<source src="/sites/default/files/video/fabric.mp4" type="video/mp4" />');
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

      $(".catalog-item, .product-info").each(function() { 
        var oldPrice = Number($(this).find(".old-price-value").text());
        var specificDiscount = Number($(this).find(".specific-discount").text());
        var categoryDiscount = Number($(this).find(".category-discount").text());
        var newSpecificPrice = ((100 - specificDiscount) / 100) * oldPrice;
        var newСategoryPrice = ((100 - categoryDiscount) / 100) * oldPrice;
        if ($(this).find(".specific-discount").is(":empty")) {          
          $(this).find(".new-price-value").prepend(newСategoryPrice.toFixed(2));  
        }  
        else {
          $(this).find(".new-price-value").prepend(newSpecificPrice.toFixed(2));
        }    
        if ( ($(this).find(".specific-discount").is(":empty")) && ($(this).find(".category-discount").is(":empty")) ) {
          $(this).find(".new-price, .old-price").hide();
        }
        else {          
          $(this).find(".price").hide();
        }  
      }) 
   
    }
  };
})(jQuery);