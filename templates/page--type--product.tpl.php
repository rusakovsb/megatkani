<header id="header">  
  <div class="container">  
    <?php print render($page['header_first']); ?>
    <?php print render($page['header_second']); ?>
  </div>
</header> 

<main id="main">
  <div class="container">  
    <?php print $messages; ?>   
    <?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper"><?php print render($tabs); ?></div><?php endif; ?>
    <?php print render($page['content']); ?>
  </div>
</main> 

<div id="featured">
  <div class="container">
    <?php print render($page['featured']) ?>
  </div>
</div>

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
