/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks'
import edit from './edit'
import save from './save'
import featuredImage from '../../img/feature.jpg'
import icon1 from '../../img/icon/icon-09-light.png'



//Register the block
registerBlockType("dicom-mexico-extensions/facts", {
    title: __( 'Dicom Mexico facts', 'dicom-mexico-extensions' ),
    category: "dicom-blocks",
    icon: "yes-alt",
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2',
            default: 'Título de la sección'
        },
        content: {
            type: 'string',
            source: 'html',
            selector: 'p'
        },
        mainImage: {
            type: 'string',
            default: featuredImage,
            selector: 'img',
            attribute: 'src'
        },
        mainImageAlt: {
            type: 'string',
            default: 'Dicom México una empresa de imageniología médica de clase mundial',
            selector: 'img .main-image',
            attribute: 'alt'
        },
        titleOne: {
            type: 'string',
            source: 'html',
            selector: 'h5.title-one',
        },
        contentOne: {
            type: 'string',
            source: 'html',
            selector: 'span.content-one',
        },
        icon1: {
            type: 'string',
            default: icon1
        },
        titleTwo: {
            type: 'string',
            source: 'html',
            selector: 'h5.title-two',
        },
        contentTwo: {
            type: 'string',
            source: 'html',
            selector: 'span.content-two',
        },
        icon2: {
            type: 'string',
            default: icon1
        },
        titleThree: {
            type: 'string',
            source: 'html',
            selector: 'h5.title-three',
        },
        contentThree: {
            type: 'string',
            source: 'html',
            selector: 'span.content-three',
        },
        icon3: {
            type: 'string',
            default: icon1
        },
        align: {
            type: 'string',
            default: 'wide'
        }
    },
    supports: {
        align: ['wide']
    },
    //Wordpress gutenberg editor
    edit: edit,
    //Frontend result
    save: save,
} )