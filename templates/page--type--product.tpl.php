<header id="header">  
  <div class="container">  
    <?php print render($page['header_first']); ?>
    <?php print render($page['header_second']); ?>
  </div>
</header> 

<?php if ($page['highlighted']): ?>
  <div id="highlighted">
    <div class="container">
      <?php print render($page['highlighted']) ?>
    </div>
  </div>
<?php endif; ?>

<div id="main-wrapper">
  <main id="main">
    <div class="container">  
      <?php print $messages; ?>   
      <?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper"><?php print render($tabs); ?></div><?php endif; ?>
      <?php print render($page['content']); ?>
    </div>
  </main> 
</div>

<?php if ($page['featured']): ?>
  <div id="featured">
    <div class="container">
      <?php print render($page['featured']) ?>
    </div>
  </div>
<?php endif; ?>

<footer id="footer">
  <div class="container">
    <?php print render($page['footer']) ?>
  </div>
</footer>

<div id="mobile-panel">
  <?php print render($page['mobile_panel']) ?>
</div>


