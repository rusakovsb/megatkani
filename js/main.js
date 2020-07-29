(function ($) {
  Drupal.behaviors.themeScripts = {
    attach: function(context, settings) {
	 	
      var mainVideo = $("#main-video");
      var windowWidth = $(window).width();      
      if (windowWidth < 768) {          
        mainVideo.append('<source src="/sites/default/files/video/fabric.webm" type="video/webm" />');
      } else {          
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

      if ($(".catalog-item__discount").is(":empty")) {
        $(".catalog-item__old-price, .catalog-item__new-price").hide();
      }
      else {
        $(".catalog-item__price").hide();
      }

      if ($(".product-card__discount").is(":empty")) {
        $(".product-card__old-price, .product-card__new-price").hide();
      }
      else {
        $(".product-card__price").hide();
      }

      $(".catalog-item").each(function() { 
        var oldPrice = Number($(this).find(".catalog-item__old-price-value").text());
        var discount = Number($(this).find(".catalog-item__discount").text());
        var newPrice = ((100 - discount) / 100) * oldPrice;
        $(this).find(".catalog-item__new-price-value").prepend(newPrice.toFixed(2));        
      }) 
   
      $(".product-card").each(function() { 
        var productOldPrice = Number($(this).find(".product-card__old-price-value").text());
        var productDiscount = Number($(this).find(".product-card__discount").text());
        var productNewPrice = ((100 - productDiscount) / 100) * productOldPrice;
        $(this).find(".product-card__new-price-value").prepend(productNewPrice.toFixed(2));        
      }) 



    }
  };
})(jQuery);