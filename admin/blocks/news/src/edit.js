/**
 * The edit function describes the structure of your block in the context
 * of the editor. This represents what the editor will render when the
 * block is used.
 * 
 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/
 * @sice 1.0.0
 */

import { useBlockProps } from '@wordpress/block-editor'
import apiFetch from '@wordpress/api-fetch'
import { useState, useEffect } from '@wordpress/element'
import { InspectorControls } from '@wordpress/block-editor'
import { Panel, PanelBody, SelectControl, TextControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n';

const Edit = ( props ) => {

    const { attributes, setAttributes } = props
    const { category, per_page } = attributes
    const blockProps = useBlockProps()
    /**
     * useState Returns a stateful value, and a function to update it.
     * 
     * During the initial render, the returned state (posts) is the same
     * as the value passed as the first argument ( [] ). (empty array)
     * 
     * The setPosts function is used to update the state.
     * It accepts a new state value and enqueues a re-render of the component.
     * 
     * @link https://reactjs.org/docs/hooks-reference.html#usestate
     * @since 1.0.0
     */
    const [ posts, setPosts ] = useState( [] )
    const [ categories, setCategories ] = useState( [] )

    /**
     * Utility to make WordPress REST API requests
     * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/
     */
    const fetchPosts = async () => {
        let path = `/wp/v2/posts?per_page=${per_page}`
        if( category && category !=0 ) {
            path =  `${path}&categories=${category}`
        }
        const newPosts = await apiFetch( { path } )
        setPosts( newPosts )
    }
    const fetchCategories = async () => {
        const path = '/wp/v2/categories?hide_empty=true'
        const newCategories = await apiFetch( { path } )
        // Get the properties that we need to render and save in DDBB
        let filterCategories = [{label: 'All categories', value: 0}]
        filterCategories= filterCategories.concat(newCategories.map( ( currentCategory ) => {
            return {
                label: currentCategory.name,
                value: currentCategory.id
            }
        } ) )
        setCategories( filterCategories )
    }

    /**
     * The function passed to useEffect may return a clean-up function
     * 
     * @link https://reactjs.org/docs/hooks-reference.html#useeffect
     */
    useEffect( () => {
        fetchCategories()
    }, [] )

    useEffect( () => {
        fetchPosts()
    }, [category, per_page] )
    
    return (
        <>
        {
            categories.length > 0 &&
            <InspectorControls>
                <Panel>
                    <PanelBody title={ __( 'Categories', 'dicom-mexico-extensions' ) } initialOpen={true}>
                        <SelectControl
                            label={ __( 'Current category', 'dicom-mexico-extensions' ) }
                            value={ category || 0 }
                            options={ categories }
                            onChange={ (newCategory) => setAttributes( { category: newCategory } ) }
                        />
                    </PanelBody>
                    <PanelBody title={ __( 'Posts per page', 'dicom-mexico-extensions' ) } initialOpen={true}>
                        <TextControl                                
                            label={ __( 'Current post per page value', 'dicom-mexico-extensions' ) }
                            type='number'
                            value={ per_page }
                            onChange={ ( newPerPage ) => setAttributes( { per_page: newPerPage } ) }
                            help={ __( 'Choose the number of posts to render', 'dicom-mexico-extensions' ) }
                        />
                    </PanelBody>
                </Panel>
            </InspectorControls>
        }
        {
            posts.length > 0 && 
            <div { ...blockProps }>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto wow fadeInUp">
                            <h2 className="display-6 mb-5">Últimas noticias</h2>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {
                                posts.map( ( post ) => {
                                    return (
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" key={ post.id }>
                                            <div className="service-item">
                                                <img className="img-fluid" src={ post.featured_image_src } alt=""/>
                                                <div className="d-flex align-items-center bg-light">
                                                    <div className="service-icon flex-shrink-0 bg-primary">
                                                    </div>
                                                    <a className="h4 mx-4 mb-0" href={ post.link }>{ post.title.rendered }</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } )
                            }
                        </div>
                    </div>
                </div>
            </div>
        }
        </>        
    )
}

export default Edit
