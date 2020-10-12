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
  <div class="container">
    <?php if ($page['sidebar_first']): ?>
      <div id="sidebar-first">
        <?php print render($page['sidebar_first']) ?>
      </div>
    <?php endif; ?>
    <main id="main">    
      <?php print $messages; ?>   
      <?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper"><?php print render($tabs); ?></div><?php endif; ?>  
      <?php if ($title): ?><h1 class="page-title"><?php print $title; ?></h1><?php endif; ?>
      <?php print render($page['content']); ?>  
    </main> 
  </div>
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

<?php if ($page['popup']): ?>
  <div id="popup">
    <div id="popup-overlay"></div>
    <?php print render($page['popup']) ?>
  </div>
<?php endif; ?>
