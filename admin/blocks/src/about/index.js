/**
 * WordPress dependencies
 */
import {registerBlockType} from "@wordpress/blocks"

// Register the block
registerBlockType("dicom-mexico-extensions/about", {
    title: "Dicom Mexico About edited",
    category: "widgets",
    icon: "admin-users",
    //Wordpress gutenberg editor
    edit: () => <h2>Dicom Mexico About</h2>,
    //Frontend result
    save: () => <h2>Dicom Mexico About</h2>
} )