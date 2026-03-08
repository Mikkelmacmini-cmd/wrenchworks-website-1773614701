<?php
if (!defined('ABSPATH')) exit;

add_action('after_setup_theme', function(){
  add_theme_support('title-tag');
  add_theme_support('html5', ['style','script','search-form']);
});

add_action('wp_enqueue_scripts', function(){
  wp_enqueue_style('full-bay-huly-style', get_stylesheet_uri(), [], '1.0.0');
  wp_enqueue_script('full-bay-huly-js', get_template_directory_uri() . '/theme.js', [], '1.0.0', true);
});
