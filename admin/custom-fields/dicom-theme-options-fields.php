<?php
/**
 * 
 */

if ( ! function_exists( 'dme_theme_options_metabox' ) ) {

    /**
     * Hook in and register a metabox to handle a theme options page and adds a menu item.
     */
    function dme_theme_options_metabox() {
    
        /**
         * Registers options page menu item and form.
         */
        $dme_options = new_cmb2_box( array(
            'id'           => 'dme-options-menu',
            'object_types' => array( 'options-page' ),    
            'option_key'   => 'dme-options-menu',
            'parent_slug'  => 'admin.php?page=dme-options-menu',
            'save_button'  => esc_html__( 'Guardar cambios', 'cmb2' ), // The text for the options-page save button. Defaults to 'Save'.
            'message_cb'   => 'dme_theme_options_message_callback',
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

        $dme_options->add_field( array(
            'name' => esc_html__( 'Slogan', 'cmb2' ),
            'desc' => esc_html__( 'Agregar slogan de la empresa', 'cmb2' ),
            'id'   => 'contact_slogan',
            'type' => 'textarea_small',
        ) );

        /**
         * ===========   Social Media   ============
         */
        $dme_options->add_field( array(
            'name' => esc_html__( 'Información de redes sociales', 'cmb2' ),
            'desc' => esc_html__( 'Agregar URLs de las redes sociales', 'cmb2' ),
            'id'   => 'dme_options_rrss_title',
            'type' => 'title',
        ) );
    
        $dme_options->add_field( array(
            'name' => esc_html__( 'Facebook', 'cmb2' ),
            'desc' => esc_html__( 'URL de Facebook', 'cmb2' ),
            'id'   => 'facebook_url',
            'type' => 'text_url',
        ) );

        $dme_options->add_field( array(
            'name' => esc_html__( 'Twitter', 'cmb2' ),
            'desc' => esc_html__( 'URL de twitter', 'cmb2' ),
            'id'   => 'twitter_url',
            'type' => 'text_url',
        ) );

        $dme_options->add_field( array(
            'name' => esc_html__( 'Instagram', 'cmb2' ),
            'desc' => esc_html__( 'URL de instagram', 'cmb2' ),
            'id'   => 'instagram_url',
            'type' => 'text_url',
        ) );

        $dme_options->add_field( array(
            'name' => esc_html__( 'Linkedin', 'cmb2' ),
            'desc' => esc_html__( 'URL de linkedin', 'cmb2' ),
            'id'   => 'linkedin_url',
            'type' => 'text_url',
        ) );
    }
    add_action( 'cmb2_admin_init', 'dme_theme_options_metabox' );

}

if( ! function_exists( 'dme_theme_options_message_callback' ) ) {

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