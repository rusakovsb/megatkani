<!DOCTYPE html>
<html lang="<?php print $language->language; ?>">
<head>
<?php if(stristr($_SERVER['REQUEST_URI'], '/composition')) { ?>
<meta name="robots" content="noindex, nofollow"/>
<?php } ?>
<?php if(stristr($_SERVER['REQUEST_URI'], '/color')) { ?>
<meta name="robots" content="noindex, nofollow"/>
<?php } ?>
<?php if(stristr($_SERVER['REQUEST_URI'], '/pattern')) { ?>
<meta name="robots" content="noindex, nofollow"/>
<?php } ?>
<?php if(stristr($_SERVER['REQUEST_URI'], '?field_product')) { ?>
<meta name="robots" content="noindex, nofollow"/>
<?php } ?>
<?php print $head; ?>
<title><?php print $head_title; ?></title>
<?php print $styles; ?>
</head>
<body class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
  <?php print $scripts; ?>
</body>
</html>