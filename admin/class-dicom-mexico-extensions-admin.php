<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://devitm.com/
 * @since      1.0.0
 *
 * @package    Dicom_Mexico_Extensions
 * @subpackage Dicom_Mexico_Extensions/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Dicom_Mexico_Extensions
 * @subpackage Dicom_Mexico_Extensions/admin
 * @author     Marco <Aspeitia>
 */
class Dicom_Mexico_Extensions_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version, $blocks_assets ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

		$this->blocks_assets = $blocks_assets;

		$this->admin_path = plugin_dir_path( __FILE__ );

		add_action( 'init', array( $this, 'dme_register_blocks') );
		add_action( 'init', array( $this, 'dme_news_dynamic_block_init' ) );

		add_filter( 'block_categories_all', array( $this, 'dme_new_block_category'), 10 , 2 );

		add_action( 'enqueue_block_editor_assets', array( $this, 'dme_blocks_enqueue_scripts' ) );

		add_action( 'rest_api_init', array( $this, 'dme_posts_featured_media_api' ) );

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Dicom_Mexico_Extensions_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Dicom_Mexico_Extensions_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/dicom-mexico-extensions-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Dicom_Mexico_Extensions_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Dicom_Mexico_Extensions_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script(
			$this->plugin_name,
			plugin_dir_url( __FILE__ ) . 'js/dicom-mexico-extensions-admin.js',
			array( 'jquery' ),
			$this->version,
			false
		);

		wp_register_script(
			$this->plugin_name . '-editor-blocks',
			plugin_dir_url( __FILE__ ) . 'blocks/build/index.js',
			$this->blocks_assets['dependencies'],
			$this->blocks_assets['version']
		);

	}

	/**
	 * Register the Gutenberg blocks for the admin area.
	 *
	 * @since    1.0.0
	 * @link	 https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	public function dme_register_blocks() {

		$blocks = array(
			$this->plugin_name . '/about',
			$this->plugin_name . '/facts',
		);

		foreach( $blocks as $block_type ) {
			register_block_type(
				$block_type,
				array(
					'editor_script' => $this->plugin_name . '-editor-blocks'
				)
			);
		}
	}

	/**
	 * Register the Gutenberg custom categories blocks for the admin area.
	 *
	 * @since    1.0.0
	 * @link 	 https://developer.wordpress.org/reference/hooks/block_categories_all/
	 */
	public function dme_new_block_category( $block_categories, $block_editor_context ) {

		return array_merge(
			$block_categories,
			array(
				array(
					'slug'  => 'dicom-blocks',
					'title' => esc_html__( 'Bloques Dicom Mexico', 'dicom-mexico-extensions' ),
					'icon'  => 'awards', // Slug of a WordPress Dashicon or custom SVG
				)
			)
		);
	}

	/**
	 * Register the Gutenberg custom css blocks for the admin area.
	 *
	 * @since    1.0.0
	 * @link 	 https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/
	 */
	public function dme_blocks_enqueue_scripts() {

		wp_enqueue_style(
			'font-aswesome-style',
			plugin_dir_url( __FILE__ ) . 'css/all.min.css',
			array(),
			'5.10.2'
		);

		wp_enqueue_style(
			'bootstrap',
			plugin_dir_url( __FILE__ ) . 'css/bootstrap.min.css',
			array(),
			'5.0.0'
		);

		wp_enqueue_style(
			$this->plugin_name . '-main',
			plugin_dir_url( __FILE__ ) . 'css/style.css',
			array('bootstrap'),
			$this->version,
			'all'
		);
	}

	/**
	 * Register a dynamic gutenberg block
	 * 
	 * @since	1.0.0
	 * @link	https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/
	 */

	public function dme_news_dynamic_block_init() {
		register_block_type( 
			$this->admin_path . 'blocks/news',
			array(
				'render_callback'=> array( $this, 'dme_news_render_callback' )
			)
		);
	}

	// Database query to render in the frontend
	public function dme_news_render_callback( $block_attributes, $block_content ) {

		$block_classes = isset( $block_attributes['className'] ) ? $block_attributes[ 'className' ] . 'wp-block-dme-news' : 'wp-block-dme-news';
		$block_title = isset( $block_attributes['title'] ) ? $block_attributes['title'] : 'Últimas noticias';

		$args = array(
			'posts_per_page' => $block_attributes['per_page']
		);

		if( isset( $block_attributes['category'] ) && $block_attributes['category'] != 0 ) {
			$args['tax_query'] = array(
                array(
                    'taxonomy'  => 'category',
                    'field'     => 'term_id',
                    'terms'     => $block_attributes['category'], //
                )
            );
		}

		$posts = new WP_Query( $args );

		$render = '';

		if( $posts->have_posts( ) ) {
			$render .= '<div class="' . esc_attr( $block_classes ) . '">';
				$render .= '<div class="container-xxl py-5">';
					$render .= '<div class="container">';
						$render .= '<div class="text-center mx-auto wow fadeInUp">';
							$render .= '<h2 class="display-6 mb-5">' . $block_title . '</h2>';
						$render .= '</div>';
						$render .= '<div class="row g-4 justify-content-center">';
							while( $posts->have_posts( ) ){
								$posts->the_post( );
								$render.= '<div class="col-lg-4 col-md-6 wow fadeInUp">';
									$render .= '<div class="service-item">';
										$render .= get_the_post_thumbnail( get_the_ID(), 'services-thumb' );
										$render .= '<div class="d-flex align-items-center bg-light">';
											$render .= '<div class="service-icon flex-shrink-0 bg-primary">';
											$render .= '</div>';
											$render .= '<a class="h4 mx-4 mb-0" href=' . get_the_permalink( get_the_ID() ) . '>';
											$render .= get_the_title( get_the_ID( ) );
											$render .= '</a>';
										$render .= '</div>';
									$render .= '</div>';
								$render .= '</div>';
							}
						$render .= '</div>';
					$render .= '</div>';
				$render .= '</div>';
			$render .= '</div>';
		}

		wp_reset_postdata( );

		return $render;
	}

	/**
	 * Register custom featured image field to WP REST API
	 * 
	 * @link https://developer.wordpress.org/reference/functions/register_rest_field/
	 * @since 1.0.0
	 */
	public function dme_posts_featured_media_api() {

		$field = 'featured_image_src';

		register_rest_field( 
			array( 'post' ),
			$field,
			array(
				'get_callback'		=> array( $this, 'dme_get_post_featured_image'),
				'update_callback' 	=> null,
				'schema'			=> null,
			)
		);
	}

	public function dme_get_post_featured_image( $object ) {
		if( $object['featured_media'] ){
			//Get the image URL
			$field = wp_get_attachment_image_src( $object['featured_media'], 'services-thumb', false );

			//returns the URL
			return $field[0];
		}
		return false;
	}

}
