<header id="header">  
  <div class="container">  
    <?php print render($page['header']); ?>
  </div>
</header> 

<div id="promo">
  <div id="info">
    <?php print render($page['info']) ?>
  </div>
</div>

<nav id="breadcrumbs">  
  <div class="container">  
    <?php print render($page['breadcrumbs']); ?>
  </div>
</nav>  

<main id="main">
  <div class="container">  
    <?php print $messages; ?>   
    <?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper"><?php print render($tabs); ?></div><?php endif; ?>  
    <div id="content-wrapper">
      <div id="content-left">
        <?php print render($page['content_left']); ?>
      </div>
      <div id="content-main">  
        <?php if ($title): ?><h1 class="page-title"><?php print $title; ?></h1><?php endif; ?>
        <?php print render($page['content']); ?>
      </div>
    </div>
  </div>
</main> 

<footer id="footer">
  <div class="container">
    <?php print render($page['footer']) ?>
  </div>
</footer>

<div id="mobile-panel">
  <?php print render($page['mobile_panel']) ?>
</div>

<div id="popup">
  <div id="popup-overlay"></div>
  <?php print render($page['popup']) ?>
</div>
