window.addEventListener("DOMContentLoaded", () => {

    const $form = document.getElementById('dme-login-form')

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    const alert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
    }

    if( $form ) {
        $form.addEventListener('submit',(e) => {
            e.preventDefault()
    
            const data = new FormData($form)
            const dataParse = new URLSearchParams(data)
    
            fetch(`${dme.rest_url}/login`,{
                method: 'POST',
                body: dataParse
            })
            .then( res => res.json() )
            .then( json => {
                if( json.error ){
                    alert(json.error, 'danger')
                }
            } )
            .catch( error => (`Hay un error ${error}`) )
    
        })
    }

    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            alert('Nice, you triggered this alert message!', 'success')
        })
    }

})