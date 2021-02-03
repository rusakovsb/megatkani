<?php

/**
 * @file
 * Basket block content.
 *
 * Available variables:
 * - $not_empty: Flag availability of items in the basket.
 * - $basket_items_list: List the contents of the basket.
 * - $total_sum: Total amount of items in the basket.
 * - $basket_page_link: Link to the basket page.
 * - $count_items: Number of items in basket.
 */
?>
<?php
if ($not_empty): ?>
<a href="/basket" class="basket-link">
  <span class="basket-link-text">
    <?php print t('Go to basket page'); ?>
  </span>
  <span class="basket-counter">
    <?php print $count_items; ?>
  </span>
</a>
<?php
else : ?>
<div class="basket-is-empty">
  <?php print t('Your basket is empty'); ?>
</div>
<?php endif;


