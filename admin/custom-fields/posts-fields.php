<?php
/**
 * Posts metaboxes
 * 
 * @link https://github.com/CMB2/CMB2
 * @since 1.0.0
 */

add_action( 'cmb2_init', 'dme_posts_metabox' );
function dme_posts_metabox() {

    $prefix = 'dme_posts_metabox_';

	$dme_posts = new_cmb2_box( array(
		'id'           => $prefix . 'fields',
		'title'        => esc_html__( 'Image icon to display in the loop', 'dicom-mexico-extensions' ),
		'object_types' => array( 'post' ), // Post type
		'context'      => 'side',
		'priority'     => 'high',
		'show_names'   => true,
		'show_in_rest' => WP_REST_Server::ALLMETHODS, // WP_REST_Server::READABLE|WP_REST_Server::EDITABLE, // Determines which HTTP methods the box is visible in.
	) );

	$dme_posts->add_field( array(
		'name' => esc_html__( 'Image', 'dicom-mexico-extensions' ),
		'desc' => esc_html__( 'Upload an image or enter a URL.', 'dicom-mexico-extensions' ),
		'id'   => $prefix . 'icon_image_loop',
		'type' => 'file',
	) );

}