<header id="header">  
  <div class="container">  
    <?php print render($page['header_first']); ?>
    <?php print render($page['header_second']); ?>
  </div>
</header> 

<div id="video">
  <?php print render($page['video']) ?>
  <main id="main">
    <div class="container">    
      <?php print $messages; ?>   
      <?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper"><?php print render($tabs); ?></div><?php endif; ?>  
      <?php if ($title): ?><h1 class="homepage-title"><span><?php print $title; ?></span></h1><?php endif; ?>
      <?php print render($page['content']); ?>
    </div>
  </main> 
</div>

<?php if ($page['highlighted']): ?>
  <div id="highlighted">
    <div class="container">
      <?php print render($page['highlighted']) ?>
    </div>
  </div>
<?php endif; ?>

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
