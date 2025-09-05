/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import edit from './edit'
import save from './save'
import bgImage from '../../img/carousel-1.jpg'


// Register Block
registerBlockType("dicom-mexico-extensions/insights", {
    title: __( 'Insights', 'dicom-mexico-extensions' ),
    category: 'dicom-blocks',
    icon: 'star-filled',
    attributes: {
        image: {
            type: 'string',
            selector: 'div.facts'
        },
        insightNumberOne: {
            type: 'string',
            source: 'html',
            selector: 'h3.insight-number-one',
            default: '1234'
        },
        insightTitleOne: {
            type: 'string',
            source: 'html',
            selector: 'span.insight-title-one',
            default: 'Happy clients'
        },
        insightNumberTwo: {
            type: 'string',
            source: 'html',
            selector: 'h3.insight-number-two',
            default: '1234'
        },
        insightTitleTwo: {
            type: 'string',
            source: 'html',
            selector: 'span.insight-title-two',
            default: 'Happy clients'
        },
        insightNumberThree: {
            type: 'string',
            source: 'html',
            selector: 'h3.insight-number-three',
            default: '1234'
        },
        insightTitleThree: {
            type: 'string',
            source: 'html',
            selector: 'span.insight-title-three',
            default: 'Happy clients'
        },
        insightNumberFour: {
            type: 'string',
            source: 'html',
            selector: 'h3.insight-number-four',
            default: '1234'
        },
        insightTitleFour: {
            type: 'string',
            source: 'html',
            selector: 'span.insight-title-four',
            default: 'Happy clients'
        },
        align: {
            type: 'string',
            default: 'full'
        }
    },
    supports: {
        align: ['full']
    },
    // Wordpress gutenberg editor
    edit: edit,
    // Frontend result
    save: save,
})