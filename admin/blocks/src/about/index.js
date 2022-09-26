/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import {registerBlockType} from "@wordpress/blocks"
import edit from './edit'

// Register the block
registerBlockType("dicom-mexico-extensions/about", {
    title: __( 'Dicom Mexico About edited', 'dicom-mexico-extensions' ),
    category: "dicom-blocks",
    icon: "admin-users",
    //Wordpress gutenberg editor
    edit,
    //Frontend result
    save: () => <h2>Dicom Mexico About</h2>
} )