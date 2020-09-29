<?php

function megatkani_process_html_tag(&$vars) {
  $el = &$vars['element'];  
  unset($el['#attributes']['type'], $el['#value_prefix'], $el['#value_suffix']);
  if (isset($el['#attributes']['media']) && $el['#attributes']['media'] === 'all') {
    unset($el['#attributes']['media']);
  }
}

function megatkani_preprocess_page(&$vars) {
	if (isset($vars['node'])) {
		$vars['theme_hook_suggestions'][] = 'page__type__'.$vars['node']->type;
	}
}

function megatkani_menu_tree__main_menu($variables) {
  return '<nav class="navigation"><ul class="main-menu">' . $variables['tree'] . '</ul></nav>';
}

function megatkani_menu_tree__menu_footer($variables) {
  return '<nav class="navigation"><ul class="footer-menu">' . $variables['tree'] . '</ul></nav>';
}

function megatkani_menu_link(array $variables) {
  if (!empty($variables['element']['#attributes']['class'])) {
    foreach ($variables['element']['#attributes']['class'] as $key => $class) {
      if ($class == 'leaf') {
        unset($variables['element']['#attributes']['class'][$key]);
        $variables['element']['#attributes']['class'][] = 'menu-item';
      }
    }
  }
  return theme_menu_link($variables);
}

function megatkani_button($variables) {
  $element = $variables['element'];
  $element['#attributes']['type'] = 'submit';
  $attributes = array('id', 'value');
  if (!empty($element['#name'])) {
    $attributes[] = 'name';
  }
  element_set_attributes($element, $attributes);  $element['#attributes']['class'][] = 'form-' . $element['#button_type'];
  if (!empty($element['#attributes']['disabled'])) {
    $element['#attributes']['class'][] = 'form-button-disabled';
  }

  return '<input' . drupal_attributes($element['#attributes']) . ' />';
}

function megatkani_form_comment_form_alter(&$form, &$form_state) {
  if (isset($form['actions']['submit'])) {
    $form['actions']['submit']['#value'] = t('Submit comment');
  }
}

function megatkani_pager($variables) {
  $tags = $variables['tags'];
  $element = $variables['element'];
  $parameters = $variables['parameters'];
  $quantity = empty($variables['quantity']) ? 0 : $variables['quantity'];
  global $pager_page_array, $pager_total;

  // Nothing to do if there is no pager.
  if (!isset($pager_page_array[$element]) || !isset($pager_total[$element])) {
    return;
  }

  // Nothing to do if there is only one page.
  if ($pager_total[$element] <= 1) {
    return;
  }

  // Calculate various markers within this pager piece:
  // Middle is used to "center" pages around the current page.
  $pager_middle = ceil($quantity / 2);

  // current is the page we are currently paged to
  $pager_current = $pager_page_array[$element] + 1;

  // first is the first page listed by this pager piece (re quantity)
  $pager_first = $pager_current - $pager_middle + 1;

  // last is the last page listed by this pager piece (re quantity)
  $pager_last = $pager_current + $quantity - $pager_middle;

  // max is the maximum page number
  $pager_max = $pager_total[$element];

  // End of marker calculations.
  // Prepare for generation loop.
  $i = $pager_first;
  if ($pager_last > $pager_max) {

    // Adjust "center" if at end of query.
    $i = $i + ($pager_max - $pager_last);
    $pager_last = $pager_max;
  }
  if ($i <= 0) {

    // Adjust "center" if at start of query.
    $pager_last = $pager_last + (1 - $i);
    $i = 1;
  }

  // End of generation loop preparation.
  $li_first = theme('pager_first', array(
    'text' => isset($tags[0]) ? $tags[0] : t('« first'),
    'element' => $element,
    'parameters' => $parameters,
  ));
  $li_previous = theme('pager_previous', array(
    'text' => isset($tags[1]) ? $tags[1] : t('‹ previous'),
    'element' => $element,
    'interval' => 1,
    'parameters' => $parameters,
  ));
  $li_next = theme('pager_next', array(
    'text' => isset($tags[3]) ? $tags[3] : t('next ›'),
    'element' => $element,
    'interval' => 1,
    'parameters' => $parameters,
  ));
  $li_last = theme('pager_last', array(
    'text' => isset($tags[4]) ? $tags[4] : t('last »'),
    'element' => $element,
    'parameters' => $parameters,
  ));
  if ($pager_total[$element] > 1) {
    if ($li_first) {
      $items[] = array(
        'class' => array(
          'pager-first',
        ),
        'data' => $li_first,
      );
    }
    if ($li_previous) {
      $items[] = array(
        'class' => array(
          'pager-previous',
        ),
        'data' => $li_previous,
      );
    }

    // When there is more than one page, create the pager list.
    if ($i != $pager_max) {
      if ($i > 1) {
        $items[] = array(
          'class' => array(
            'pager-ellipsis',
          ),
          'data' => '…',
        );
      }

      // Now generate the actual pager piece.
      for (; $i <= $pager_last && $i <= $pager_max; $i++) {
        if ($i < $pager_current) {
          $items[] = array(
            'class' => array(
              'pager-item',
            ),
            'data' => theme('pager_previous', array(
              'text' => $i,
              'element' => $element,
              'interval' => $pager_current - $i,
              'parameters' => $parameters,
            )),
          );
        }
        if ($i == $pager_current) {
          $items[] = array(
            'class' => array(
              'pager-current',
            ),
            'data' => $i,
          );
        }
        if ($i > $pager_current) {
          $items[] = array(
            'class' => array(
              'pager-item',
            ),
            'data' => theme('pager_next', array(
              'text' => $i,
              'element' => $element,
              'interval' => $i - $pager_current,
              'parameters' => $parameters,
            )),
          );
        }
      }
      if ($i < $pager_max) {
        $items[] = array(
          'class' => array(
            'pager-ellipsis',
          ),
          'data' => '…',
        );
      }
    }

    // End generation.
    if ($li_next) {
      $items[] = array(
        'class' => array(
          'pager-next',
        ),
        'data' => $li_next,
      );
    }
    if ($li_last) {
      $items[] = array(
        'class' => array(
          'pager-last',
        ),
        'data' => $li_last,
      );
    }
    return '<nav class="pagination">' . theme('item_list', array(
      'items' => $items,
      'attributes' => array('class' => array('pager')),
    )) . '</nav>' ;
  }
}

function megatkani_preprocess_image_style(&$vars) {
  if($vars['style_name'] == 'medium'){
    $vars['attributes']['itemprop'][] = 'image';
  }
}