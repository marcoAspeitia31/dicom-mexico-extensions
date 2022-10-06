<?php
/**
 * Register a dynamic gutenberg block
 * 
 * @since	1.0.0
 * @link	https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
 */

function dme_news_render_callback( $block_attributes, $block_content ) {
    $return = '<p class=wp-block-plz-news>Hola</p>';

    return $return;
}


function dme_news_block_init() {
    register_block_type( __DIR__, array(
        'render_callback'=> 'dme_news_render_callback'
    ) );
}
add_action('init', 'dme_news_block_init');