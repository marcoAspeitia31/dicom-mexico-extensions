<?php
// Silence is golden

if( ! function_exists( 'dme_login_form' ) ) {

    function dme_login_form(){

        $response = '<form id="dme-login-form" class="text-start text-dark">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input name="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">Well never share your email with anyone else.</div>
                        </div>                        
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input name="password" type="password" class="form-control" id="password">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="remember">
                            <label class="form-check-label" for="remember" name="remember">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <div id="liveAlertPlaceholder" class="py-3"></div>
                    </form>';

        return $response;

    }

    add_shortcode( 'dme_login', 'dme_login_form' );

}
