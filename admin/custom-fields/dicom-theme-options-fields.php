<?php
/**
 * 
 */

if ( ! class_exists( 'dme_theme_options_metabox' ) ) {

    /**
     * Hook in and register a metabox to handle a theme options page and adds a menu item.
     */
    function dme_theme_options_metabox() {
    
        /**
         * Registers options page menu item and form.
         */
        $dme_options = new_cmb2_box( array(
            'id'           => 'dme-options-menu',
            //'title'        => esc_html__( 'Theme Options', 'cmb2' ),
            'object_types' => array( 'options-page' ),
    
            /*
             * The following parameters are specific to the options-page box
             * Several of these parameters are passed along to add_menu_page()/add_submenu_page().
             */
    
            'option_key'      => 'dme-options-menu', // The option key and admin menu page slug.
            //'icon_url'        => 'dashicons-palmtree', // Menu icon. Only applicable if 'parent_slug' is left empty.
            // 'menu_title'              => esc_html__( 'Options', 'cmb2' ), // Falls back to 'title' (above).
            'parent_slug'             => 'admin.php?page=dme-options-menu', // Make options page a submenu item of the themes menu.
            // 'capability'              => 'manage_options', // Cap required to view options-page.
            // 'position'                => 1, // Menu position. Only applicable if 'parent_slug' is left empty.
            // 'admin_menu_hook'         => 'network_admin_menu', // 'network_admin_menu' to add network-level options page.
            // 'priority'                => 10, // Define the page-registration admin menu hook priority.
            // 'display_cb'              => false, // Override the options-page form output (CMB2_Hookup::options_page_output()).
            'save_button'             => esc_html__( 'Guardar cambios', 'cmb2' ), // The text for the options-page save button. Defaults to 'Save'.
            // 'disable_settings_errors' => true, // On settings pages (not options-general.php sub-pages), allows disabling.
            'message_cb'              => 'dme_theme_options_message_callback',
            // 'tab_group'               => '', // Tab-group identifier, enables options page tab navigation.
            // 'tab_title'               => null, // Falls back to 'title' (above).
            // 'autoload'                => false, // Defaults to true, the options-page option will be autloaded.
        ) );
    
        /**
         * ========== Logo ==========
         */
        $dme_options->add_field( array(
            'name' => esc_html__( 'Logos', 'cmb2' ),
            'desc' => esc_html__( 'Ingresa los logos que se mostrarán en el sitio web', 'cmb2' ),
            'id'   => 'dme_options_logos_title',
            'type' => 'title',
        ) );
    
        $dme_options->add_field( array(
            'name' => esc_html__( 'Logo header', 'cmb2' ),
            'desc' => esc_html__( 'Subir logo en resolución 170px x 45px', 'cmb2' ),
            'id'   => 'dme_options_logos_image_header',
            'type' => 'file',
            'text'    => array(
                'add_upload_file_text' => 'Agregar logo header' // Change upload button text. Default: "Add or Upload File"
            ),
            // query_args are passed to wp.media's library query.
            'query_args' => array(
                'type' => array(
                    'image/jpeg',
                    'image/png',
                ),
            ),
            'preview_size' => 'full',
        ) );

        $dme_options->add_field( array(
            'name' => esc_html__( 'Logo footer', 'cmb2' ),
            'desc' => esc_html__( 'Subir logo de footer en resolución 200px x 60px', 'cmb2' ),
            'id'   => 'dme_options_logos_image_footer',
            'type' => 'file',
            'text'    => array(
                'add_upload_file_text' => 'Agregar logo footer' // Change upload button text. Default: "Add or Upload File"
            ),
            // query_args are passed to wp.media's library query.
            'query_args' => array(
                'type' => array(
                    'image/jpeg',
                    'image/png',
                ),
            ),
            'preview_size' => 'thumbnail',
        ) );

        /**
         * ===========   Contact info   ============
         */
        $dme_options->add_field( array(
            'name' => esc_html__( 'Información de contacto', 'cmb2' ),
            'desc' => esc_html__( 'Números, emails y direcciones de contacto', 'cmb2' ),
            'id'   => 'dme_options_contact_title',
            'type' => 'title',
        ) );

        $dme_options->add_field( array(
            'name' => esc_html__( 'Email', 'cmb2' ),
            'desc' => esc_html__( 'Email de contacto principal', 'cmb2' ),
            'id'   => 'contact_email',
            'type' => 'text_email',
        ) );

        $dme_options->add_field( array(
            'name' => esc_html__( 'Teléfono', 'cmb2' ),
            'desc' => esc_html__( 'Teléfono de la empresa', 'cmb2' ),
            'id'   => 'contact_phone_number',
            'type' => 'text_medium',
            'attributes' => array(
                'type' => 'number',
            ),
        ) );
    
        $dme_options->add_field( array(
            'name' => esc_html__( 'Oficina', 'cmb2' ),
            'desc' => esc_html__( 'Agregar la dirección de la oficina', 'cmb2' ),
            'id'   => 'contact_address',
            'type' => 'textarea_small',
        ) );
    
    }
    add_action( 'cmb2_admin_init', 'dme_theme_options_metabox' );

}

if( ! class_exists( 'dme_theme_options_message_callback' ) ) {
    /**
     * Callback to define the optionss-saved message.
     *
     * @param CMB2  $cmb The CMB2 object.
     * @param array $args {
     *     An array of message arguments
     *
     *     @type bool   $is_options_page Whether current page is this options page.
     *     @type bool   $should_notify   Whether options were saved and we should be notified.
     *     @type bool   $is_updated      Whether options were updated with save (or stayed the same).
     *     @type string $setting         For add_settings_error(), Slug title of the setting to which
     *                                   this error applies.
     *     @type string $code            For add_settings_error(), Slug-name to identify the error.
     *                                   Used as part of 'id' attribute in HTML output.
     *     @type string $message         For add_settings_error(), The formatted message text to display
     *                                   to the user (will be shown inside styled `<div>` and `<p>` tags).
     *                                   Will be 'Settings updated.' if $is_updated is true, else 'Nothing to update.'
     *     @type string $type            For add_settings_error(), Message type, controls HTML class.
     *                                   Accepts 'error', 'updated', '', 'notice-warning', etc.
     *                                   Will be 'updated' if $is_updated is true, else 'notice-warning'.
     * }
     */
    function dme_theme_options_message_callback( $cmb, $args ) {
        if ( ! empty( $args['should_notify'] ) ) {

            if ( $args['is_updated'] ) {

                // Modify the updated message.
                $args['message'] = sprintf( esc_html__( '%s &mdash; Updated!', 'cmb2' ), $cmb->prop( 'title' ) );
            }

            add_settings_error( $args['setting'], $args['code'], $args['message'], $args['type'] );
        }
    }
}
