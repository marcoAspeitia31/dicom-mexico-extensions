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
import featuredImage from '../../img/service-1.jpg'

const Edit = ( props ) => {

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

    /**
     * Utility to make WordPress REST API requests
     * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/
     */
    const fetchPosts = async () => {
        let path = '/wp/v2/posts'
        const newPosts = await apiFetch( { path } )
        setPosts( newPosts )
    }

    /**
     * The function passed to useEffect may return a clean-up function
     * 
     * @link https://reactjs.org/docs/hooks-reference.html#useeffect
     */
    useEffect( () => {
        fetchPosts()
    }, [] )
    
    return (
        <>
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
                                    console.log(post)
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

/* 



    <div { ...blockProps }>
            <h2>Últimas entradas</h2>
            <ul className='posts'>
                {
                    posts.map( ( post ) => {
                        return (
                            <li key={ post.id }>
                                <a href={ post.link }>{ post.title.rendered }</a>
                            </li>
                        )
                    } )
                }
            </ul>
        </div>
*/