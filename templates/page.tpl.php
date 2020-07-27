<header id="header">  
  <div class="container">  
    <?php print render($page['header']); ?>
  </div>
</header> 

<nav id="breadcrumbs">  
  <div class="container">  
    <?php print render($page['breadcrumbs']); ?>
  </div>
</nav>  

<main id="main">
  <div class="container">  
    <?php print $messages; ?>   
    <?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper"><?php print render($tabs); ?></div><?php endif; ?>  
    <?php if ($title): ?><h1 class="page-title"><?php print $title; ?></h1><?php endif; ?>
    <?php print render($page['content']); ?>
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
  <?php print render($page['popup']) ?>
</div>
