<?php
/**
 * Front page custom metaboxes
 * 
 * @link https://github.com/CMB2/CMB2/blob/develop/example-functions.php
 * @since 1.0.0
 */

if( ! function_exists( 'front_page_repeatable_banner_metabox' )  ) {
    
    function front_page_repeatable_banner_metabox() {
    
        $id_front_page = get_option( 'page_on_front' );

        $all_pages = get_pages();
        $options_select = array();

        foreach($all_pages as $page) {
            $options_select[ get_permalink( $page->ID ) ] = $page->post_title;
        }
    
        /**
         * Repeatable Field Groups
         */
        $front_page_repeatable_banner = new_cmb2_box( array(
            'id'           => 'front_page_repeatable_banner_box',
            'title'        => esc_html__( 'Banner', 'cmb2' ),
            'object_types' => array( 'page' ),
            'show_on_cb' => 'dme_show_if_front_page',
        ) );
    
        $group_field_id = $front_page_repeatable_banner->add_field( array(
            'id'          => 'front_page_repeatable_banner_slide',
            'type'        => 'group',
            'description' => esc_html__( 'Agrega, ordena o elimina slides de banner<', 'cmb2' ),
            'options'     => array(
                'group_title'    => esc_html__( 'Slide banner {#}', 'cmb2' ), // {#} gets replaced by row number
                'add_button'     => esc_html__( 'Agregar un Slide', 'cmb2' ),
                'remove_button'  => esc_html__( 'Eliminar Slide', 'cmb2' ),
                'sortable'       => true,
                'closed'         => true, // true to have the groups closed by default
                'remove_confirm' => esc_html__( 'Are you sure you want to remove?', 'cmb2' ), // Performs confirmation before removing group.
            ),
        ) );
    
        $front_page_repeatable_banner->add_group_field( $group_field_id, array(
            'name'       => esc_html__( 'Título Banner', 'cmb2' ),
            'id'         => 'titulo_slide',
            'type'       => 'text',
            //'repeatable' => true, // Repeatable fields are supported w/in repeatable groups (for most types)
        ) );
    
        $front_page_repeatable_banner->add_group_field( $group_field_id, array(
            'name'       => esc_html__( 'Slogan', 'cmb2' ),
            'id'         => 'slogan_slide',
            'type'       => 'text',
            //'repeatable' => true, // Repeatable fields are supported w/in repeatable groups (for most types)
        ) );
    
        $front_page_repeatable_banner->add_group_field( $group_field_id, array(
            'name' => esc_html__( 'Imagen', 'cmb2' ),
            'id'   => 'imagen_slide',
            'type' => 'file',
            'desc' => esc_html__( 'Medida sugerida de 1400 x 650 pixeles', 'cmb2' ),
            'text'    => array(
                'add_upload_file_text' => 'Agregar imagen al slide' // Change upload button text. Default: "Add or Upload File"
            ),
            // query_args are passed to wp.media's library query.
            'query_args' => array(
                'type' => array(
                    'image/jpeg',
                    'image/png',
                ),
            ),
        ) );
    
        $front_page_repeatable_banner->add_group_field( $group_field_id, array(
            'name' => esc_html__( 'CTA Text', 'cmb2' ),
            'id'   => 'texto_cta',
            'type' => 'text',
        ) );
    
        $front_page_repeatable_banner->add_group_field( $group_field_id, array(
            'name' => esc_html__( 'CTA Page Redirection', 'cmb2' ),
            'id'   => 'url_cta',
            'type' => 'select',
            'show_option_none' => true,
            'options' => $options_select,
        ) );
    
    }
    add_action( 'cmb2_admin_init', 'front_page_repeatable_banner_metabox' );
    
}

if ( ! function_exists( 'dme_show_if_front_page' ) ){

    function dme_show_if_front_page( $cmb ) {
        // Don't show this metabox if it's not the front page template.
        if ( get_option( 'page_on_front' ) !== $cmb->object_id ) {
            return false;
        }
        return true;
    }

}