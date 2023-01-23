/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import {registerBlockType} from '@wordpress/blocks'
import edit from './edit'
import save from './save'
import image1 from '../../img/icon/icon-09-primary.png'
import image2 from '../../img/icon/icon-07-primary.png'
import featuredImage from '../../img/about-2.jpg'

// Register the block
registerBlockType("dicom-mexico-extensions/about", {
    title: __( 'About', 'dicom-mexico-extensions' ),
    category: "dicom-blocks",
    icon: 'admin-users',
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2',
            default: 'Título de la sección'
        },
        sectionContent: {
            type: 'string',
            source: 'html',
            selector: 'p',
            default: 'Contenido de la sección'
        },
        imageOneUrl: {
            type: 'string',
            default: image1,
            selector: 'img .img1',
            attribute: 'src'
        },
        imageOneAlt: {
            type: 'string',
            default: 'Texto alternativo imagen 1',
            selector: 'img .img1',
            attribute: 'alt'
        },
        subtitleOne: {
            type: 'string',
            selector: 'h5',
            default: 'Característica 1'
        },
        imageTwoUrl: {
            type: 'string',
            default: image2,
            selector: 'img'
        },
        imageTwoAlt: {
            type: 'string',
            default: 'Texto alternativo imagen 2',
            selector: 'img'
        },
        subtitleTwo: {
            type: 'string',
            selector: 'h5 .subtitle-2',
            default: 'Característica 2'
        },
        featuredSectionImage: {
            type: 'string',
            default: featuredImage,
            selector: 'img.main-image',
            attribute: 'src'
        },
        featuredSectionImageAlt: {
            type: 'string',
            default: 'Texto alternativo imagen 1',
            selector: 'img.main-image',
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
    //Wordpress gutenberg editor
    edit: edit,
    //Frontend result
    save: save
} )