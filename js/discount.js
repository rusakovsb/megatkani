(function ($) {
    Drupal.behaviors.discount = {
      attach: function (context, settings) { 	
     
        $(".catalog-item, .product-card").each(function() {         
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
  
        var price = $(".price-value").html();
        if (price == "0.00" || price == "") {
          $(".product-card__price, .product-card__old-price, .product-card__actions").hide();
        } 

      }
    };
  })(jQuery);