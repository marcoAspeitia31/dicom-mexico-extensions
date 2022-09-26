/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks'

//Register the block
registerBlockType("dicom-mexico-extensions/facts", {
    title: __( 'Dicom Mexico facts', 'dicom-mexico-extensions' ),
    category: "dicom-blocks",
    icon: "smiley",
    //Wordpress gutenberg editor
    edit: () => <h2>Dicom Mexico Facts</h2>,
    //Frontend result
    save: () => <h2>Dicom Mexico Facts</h2>
} )