/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks'
import featuredImage from '../../img/feature.jpg'
import icon1 from '../../img/icon/icon-09-light.png'
import edit from './edit'
import save from './save'


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
        sectionContent: {
            type: 'string',
            source: 'html',
            selector: 'p',
            default: 'Contenido de la sección',
        },
        mainImage: {
            type: 'string',
            default: featuredImage,
            selector: 'img'
        },
        mainImageAlt: {
            type: 'string',
            default: 'Dicom México una empresa de imageniología médica de clase mundial',
            selector: 'img .main-image'
        },
        title1: {
            type: 'string',
            source: 'html',
            selector: 'h5',
            default: 'Título 1'
        },
        content1: {
            type: 'string',
            source: 'html',
            selector: 'p',
            default: 'Contenido de la sección 1'
        },
        icon1: {
            type: 'string',
            default: icon1
        },
        title2: {
            type: 'string',
            source: 'html',
            selector: 'h5',
            default: 'Título 2'
        },
        content2: {
            type: 'string',
            source: 'html',
            selector: 'p',
            default: 'Contenido de la sección 2'
        },
        icon2: {
            type: 'string',
            default: icon1
        },
        title3: {
            type: 'string',
            source: 'html',
            selector: 'h5',
            default: 'Título 3'
        },
        content3: {
            type: 'string',
            source: 'html',
            selector: 'p',
            default: 'Contenido de la sección 3'
        },
        icon3: {
            type: 'string',
            default: icon1
        }
    },
    //Wordpress gutenberg editor
    edit: edit,
    //Frontend result
    save: () => <h2>Dicom Mexico Facts</h2>
} )