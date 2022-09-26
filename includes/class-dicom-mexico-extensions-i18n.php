<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://devitm.com/
 * @since      1.0.0
 *
 * @package    Dicom_Mexico_Extensions
 * @subpackage Dicom_Mexico_Extensions/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Dicom_Mexico_Extensions
 * @subpackage Dicom_Mexico_Extensions/includes
 * @author     Marco <Aspeitia>
 */
class Dicom_Mexico_Extensions_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'dicom-mexico-extensions',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
