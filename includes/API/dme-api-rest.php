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

    function dme_login_callback( $request ){

        $user_exists = get_user_by( 'login', $request['name'] );
        $email_exists = get_user_by( 'email', $request['email'] );

        if( $user_exists ) {
            return array('error' => 'El usuario ' . $request["name"] . ' ya está registrado');
        }
        elseif( $email_exists ) {
            return array('error' => 'El email ' . $request["email"] . ' ya está registrado');
        }

        $userdata = array(
            'user_login'    => $request['name'],
            'user_pass'     => $request['password'],
            'user_email'    => $request['email'],
            'role'          => 'editor'
        );
        $user_created = wp_insert_user( $userdata );

        return array('user_created'=>$user_created);

    }

 }