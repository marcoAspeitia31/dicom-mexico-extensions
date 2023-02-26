<?php
/**
 * Api rest para forms personalizados
 * 
 * @since 1.0.0
 */

 if( ! function_exists( '' ) ) {

    function dme_api_login() {

        /**
         * Register custom rest route for the login form
         * 
         * @link https://developer.wordpress.org/reference/functions/register_rest_route/
         * @since 1.0.0
         */
        register_rest_route(
            'dme',
            'login',
            array(
                'methods'   => 'POST',
                'callback'  => 'dme_login_callback',
            ),
        );

    }
    add_action( 'rest_api_init', 'dme_api_login' );

    function dme_login_callback( $request ) {

        $creds = array(
            'user_login'    => $request['email'],
            'user_password' => $request['password'],
            'remember'      => true,
        );
        $user = wp_signon( $creds, false );

        if ( is_wp_error( $user ) ) {
            return array('error' => $user->get_error_message() );
        }

        return array('success'=>$user);
    
    }

 }