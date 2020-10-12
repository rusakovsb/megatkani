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
      });

      $("#popup-close-icon, #popup-overlay").click(function () {	
        $("#popup").fadeOut(200);	
      });

      $(".menu-name-menu-catalog li.expanded").removeClass("expanded").addClass("has-submenu");
      $(".menu-name-menu-catalog li.has-submenu > a").addClass("catalog-link").after('<button class="catalog-submenu-toggle"><span></span><span></span></button>');      
      $(".menu-name-menu-catalog li.has-submenu li.active-trail").closest("li.has-submenu").addClass("expanded");
      $(".menu-name-menu-catalog li.has-submenu.active-trail > ul").show();
      $(".menu-name-menu-catalog li.has-submenu.active-trail > ul").closest("li.has-submenu").addClass("expanded");
      $(".menu-name-menu-catalog a").removeAttr("title");

      $(".menu-name-menu-catalog li.has-submenu").each(function() {
        var submenuToggle = $(this).find(".catalog-submenu-toggle");
        var catalogSubmenu = $(this).children("ul");
        $(this).find(".catalog-link, .catalog-submenu-toggle").wrapAll('<div class="catalog-link-wrapper"></div>');
        $(submenuToggle).click(function () {
          $(catalogSubmenu).slideToggle(200);
          $(this).toggleClass("expanded");
        });
      });

      var filterClick = function() {        
        $(".view-filters label").click(function () {          
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

      $(".view").ajaxComplete(function() {
        filterClick();
      });

})(jQuery);