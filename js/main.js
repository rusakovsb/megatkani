(function ($) {	 	
   
      if ($(window).width() > 768) {          
        $("#video").append('<video autoplay muted loop poster="/sites/all/themes/megatkani/images/fabric_desktop.jpg"><source src="/sites/default/files/video/fabric.mp4" type="video/mp4" /></video>');
      } 
      else {          
        $("#video").append('<img src="/sites/all/themes/megatkani/images/fabric_mobile.jpg" alt="Интернет-магазин тканей" />');
      }

      $("#block-views-exp-search-page .block-content").append('<button id="search-close-icon"><span></span><span></span></button>');	    
	  
	    $(".search-trigger").click(function () {	
        $("#block-views-exp-search-page").fadeIn(200);	  
	    });	
	  
	    $("#search-close-icon").click(function () {	
        $("#block-views-exp-search-page").fadeOut(200);	  
      });

      $(".region-popup").append('<button id="popup-close-icon"><span></span><span></span></button>');
    
      $(".product-card__button").click(function () {	
        $("#popup").fadeIn(200);
        $(".order-form").fadeIn(200); 
      });

      $(".catalog-item__quick-order-button").click(function () {
        var productName = $(this).closest(".catalog-item").find(".catalog-item__title a").text();
        $("#edit-submitted-quick-order-form-product-name").val(productName);	
        $("#popup").fadeIn(200);
        $(".quick-order-form").fadeIn(200); 
      });

      $("#popup-close-icon, #popup-overlay").click(function () {	
        $("#popup").fadeOut(200);	
        $(".order-form, .quick-order-form").fadeOut(200);
      });

      $(".menu-name-menu-catalog > ul > li.active-trail:not(:first-child)").insertBefore(".menu-name-menu-catalog > ul > li:first-child");

      $(".menu-name-menu-catalog li.expanded").removeClass("expanded");
      $(".menu-name-menu-catalog > ul > li").has("ul").prepend('<button class="catalog-submenu-toggle"><span></span><span></span></button>');      
      $(".menu-name-menu-catalog > ul > li li.active-trail").parent("li").addClass("expanded");
      $(".menu-name-menu-catalog > ul > li.active-trail > ul").show();
      $(".menu-name-menu-catalog > ul > li.active-trail > ul").parent("li").addClass("expanded");
      $(".menu-name-menu-catalog a").removeAttr("title");      

      $(".menu-name-menu-catalog > ul > li").each(function() {
        var catalogSubmenuToggle = $(this).find(".catalog-submenu-toggle");
        var catalogSubmenu = $(this).children("ul");        
        $(catalogSubmenuToggle).click(function () {
          $(catalogSubmenu).slideToggle(200);
          $(this).parent("li").toggleClass("expanded");
        });
      });

      var filterClick = function() {        
        $(".view-filters .views-exposed-widget > label").click(function () {          
          if(!$(this).hasClass("active")) {   
            $(".view-filters label").removeClass("active");   
            $(".view-filters .views-widget").removeClass("expanded"); 
            $(this).addClass("active"); 
            $(this).next(".views-widget").addClass("expanded");      
          }
          else {      
            $(this).removeClass("active");  
            $(this).next(".views-widget").removeClass("expanded");   
          }
        });
      };

      filterClick();

      $(document).ajaxComplete(function() {
        filterClick();
      });

})(jQuery);