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

		$this->plugin_path = plugin_dir_path( dirname( __FILE__ ) );

		add_action( 'init', array( $this, 'dme_register_blocks') );

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
	 */
	public function dme_register_blocks() {

		$blocks = array(
			$this->plugin_name . '/about',
			$this->plugin_name . '/facts',
		);

		foreach( $blocks as $block ) {
			register_block_type(
				$block,
				array(
					'editor_script' => $this->plugin_name . '-editor-blocks'
				)
			);
		}

	}

}
