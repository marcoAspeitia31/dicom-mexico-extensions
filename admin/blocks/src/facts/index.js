/**
 * Wordpress dependencies
 */
import {registerBlockType} from '@wordpress/blocks'

//Register the block
registerBlockType("dicom-mexico-extensions/facts", {
    title: 'Dicom Mexico facts',
    category: "widgets",
    icon: "smiley",
    //Wordpress gutenberg editor
    edit: () => <h2>Dicom Mexico Facts</h2>,
    //Frontend result
    save: () => <h2>Dicom Mexico Facts</h2>
} )