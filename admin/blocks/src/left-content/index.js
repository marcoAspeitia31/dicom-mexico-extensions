/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import edit from './edit'
import save from './save'

registerBlockType('dicom-mexico-extensions/left-content', {
    title: __( 'Left Content', 'dicom-mexico-extensions' ),
    category: 'dicom-blocks',
    icon: 'media-text',
    attributes: {
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
        imageUrl: {
            type: 'string',
            selector: 'img',
            attribute: 'src'
        },
        imageAlt: {
            type: 'string',
            selector: 'img',
            attribute: 'alt'
        },
        align: {
            type: 'string',
            default: 'wide'
        }
    },
    supports: {
        align: ['wide']
    },
    edit: edit,
    save: save,

})