import { RichText, MediaUpload } from '@wordpress/block-editor'
import { Button } from '@wordpress/components'

const Edit = (props) => {
    const {
        attributes: {
            title,
            content,
            imageUrl,
            imageAlt
        },
        setAttributes,
        className
    } = props

    const onChangeTitle = newTitle => setAttributes( { title: newTitle } )
    const onChangeContent = newContent => setAttributes( { content: newContent } )
    const onSelectImage = ( newImage ) => {
        setAttributes({
            imageUrl: newImage.sizes.full.url,
            imageAlt: newImage.alt
        })
    }

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <RichText
                        tagName = 'h2'
                        className = 'display-6 mb-5 text-center dm-title'
                        placeholder = 'Título del apartado'
                        value = { title }
                        onChange= { onChangeTitle }
                    />
                    <div className="col-lg-6 order-md-2">
                        
                        <img className='img-fliud' src={ imageUrl } alt={ imageAlt } />
                        <MediaUpload
                            type='image'
                            onSelect={ onSelectImage }
                            render={ ( { open } ) => (
                                <Button
                                    onClick={open}
                                    icon='format-image'
                                    showTooltip='true'
                                    label='Seleccionar imagen'
                                />
                            )}
                        />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center order-md-1">
                        <RichText
                            tagName = 'p'
                            className = 'mb-4'
                            placeholder = 'Agrega una breve descripción'
                            value = { content }
                            onChange = { onChangeContent }
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Edit