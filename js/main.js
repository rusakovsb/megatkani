(function ($) {	 	
   
      if ($(window).width() > 768) {          
        $("#video").append('<video autoplay muted loop poster="/sites/default/files/fabric.jpg"><source src="/sites/default/files/video/fabric.mp4" type="video/mp4" /></video>');
      } 
      else {          
        $("#video").append('<img src="/sites/default/files/fabric.jpg" alt="fabric" />');
      }

      $("#block-views-exp-search-page .content").once().append('<button id="search-close-icon"><span></span><span></span></button>');	    
	  
	    $("#search-icon").click(function () {	
        $("#block-views-exp-search-page").fadeIn();	  
	    });	
	  
	    $("#search-close-icon").click(function () {	
        $("#block-views-exp-search-page").fadeOut();	  
      });

      $(".region-popup").once().append('<button id="popup-close-icon"><span></span><span></span></button>');
    
      $("#order-button").click(function () {	
        $("#popup").fadeIn();	  
      });

      $("#popup-close-icon, #popup-overlay").click(function () {	
        $("#popup").fadeOut();	
      });

      $(".catalog-item, .product-info").each(function() { 
        var oldPrice = Number($(this).find(".old-price-value").text());
        var specificDiscount = Number($(this).find(".specific-discount").text());
        var categoryDiscount = Number($(this).find(".category-discount").text());
        var newSpecificPrice = ((100 - specificDiscount) / 100) * oldPrice;
        var newCategoryPrice = ((100 - categoryDiscount) / 100) * oldPrice;
        if (specificDiscount != 0 || categoryDiscount != 0) {
          if (specificDiscount != 0) {    
            $(this).find(".price-value").text(newSpecificPrice.toFixed(2)); 
          }  
          else {
            $(this).find(".price-value").text(newCategoryPrice.toFixed(2));
          } 
        }   
        else {
          $(this).find(".old-price").hide();
        }
      })       
   
})(jQuery);