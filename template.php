<?php
/**
 * Implements hook_html_head_alter().
 * This will overwrite the default meta character type tag with HTML5 version.
 */
function megatkani_html_head_alter(&$head_elements) {
  $head_elements['system_meta_content_type']['#attributes'] = array(
    'charset' => 'utf-8'
  );
}

/**
 * Override or insert variables into the page template.
 */
function megatkani_preprocess_page(&$vars) {
	if (isset($vars['node'])) {
		$vars['theme_hook_suggestions'][] = 'page__type__'.$vars['node']->type;
	}
}

/**
 * Override or insert variables into the node template.
 */
function megatkani_preprocess_node(&$variables) {
  $node = $variables['node'];
  if ($variables['view_mode'] == 'full' && node_is_page($variables['node'])) {
    $variables['classes_array'][] = 'node-full';
  }
}

