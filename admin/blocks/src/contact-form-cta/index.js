/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import edit from './edit'
import save from './save'

registerBlockType('dicom-mexico-extensions/contact-form-cta', {
    title: __( 'Concact Form CTA', 'dicom-mexico-extensions' ),
    category: 'dicom-blocks',
    icon: 'email',
    attributes: {
        backgroundImage: {
            type: 'string',
            selector: 'div.quote-text',
        },
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
        titleColor: {
            type: 'string',
            default: '#ffffff'
        },
        textColor: {
            type: 'string',
            default: '#ffffff'
        },
        buttonText:{
            type: 'string',
            default: 'Más información',
            selector: 'a.btn'
        },
        inputURL: {
            selector: 'a',
            type: 'string',
            source: 'attribute',
            attribute: 'href'
        },
        rightBackgroundImage: {
            type: 'string',
            selector: 'div.quote-form',
        },
        align: {
            type: 'string',
            default: 'full'
        }
    },
    supports: {
        align: ['full']
    },
    edit: edit,
    save: save,
})