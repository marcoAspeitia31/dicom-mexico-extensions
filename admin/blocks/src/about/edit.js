import { RichText, MediaUpload } from '@wordpress/block-editor'
import { Button } from '@wordpress/components'

const Edit = ( props ) => {
    const {
        attributes: {
            title,
            sectionContent,
            imageOneUrl,
            imageOneAlt,
            imageTwoUrl,
            imageTwoAlt,
            subtitleOne,
            subtitleTwo,
            featuredSectionImage,
            featuredSectionImageAlt
        },
        setAttributes,
        className
    } = props
    const onChangeTitle = ( newTitle ) => setAttributes( { title: newTitle } )
    const onChangeContent = ( newContent ) => setAttributes( { sectionContent: newContent } )
    const onSelectImageOne = ( newImageOne ) => {
        setAttributes( {
            imageOneUrl: newImageOne.sizes.full.url,
            imageOneAlt: newImageOne.alt
        } )
    }
    const onChangeSubtitleOne = ( newSubtitleOne ) => setAttributes( { subtitleOne: newSubtitleOne } )
    const onSelectImageTwo = ( newImageTwo ) => {
        setAttributes( {
            imageTwoUrl: newImageTwo.sizes.full.url,
            imageTwoAlt: newImageTwo.alt
        } )
    }
    const onChangeSubtitleTwo = ( newSubtitleTwo ) => setAttributes( { subtitleTwo: newSubtitleTwo } )
    const onSelectFeaturedSectionImage = ( newFeaturedSectionImage ) => {
        setAttributes( {
            featuredSectionImage: newFeaturedSectionImage.sizes.full.url,
            featuredSectionImageAlt: newFeaturedSectionImage.alt
        } )
    }
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="h-100">
                            <RichText
                                tagName='h2'
                                className='display-6 mb-5'
                                placeholder='Agrega un título a esta sección'
                                value={ title }
                                onChange={ onChangeTitle }
                            />
                            <div className="row g-4 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <img src={ imageOneUrl } alt={ imageOneAlt }/>
                                        <MediaUpload
                                            type = 'image'
                                            onSelect={ onSelectImageOne }
                                            render = { ( { open } ) => (
                                                <Button
                                                    onClick = { open }
                                                    icon = 'format-image'
                                                    showTooltip = 'true'
                                                    label = 'Seleccionar imagen'
                                                />
                                            ) }
                                        />
                                        <RichText
                                            tagName='h5'
                                            className='mb-0 subtitle-2'
                                            placeholder='Característica 1'
                                            value = { subtitleOne }
                                            onChange = { onChangeSubtitleOne }
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <img src={ imageTwoUrl } alt={ imageTwoAlt }/>
                                        <MediaUpload
                                            type = 'image'
                                            onSelect={ onSelectImageTwo }
                                            render = { ( { open } ) => (
                                                <Button
                                                    onClick = { open }
                                                    isSmall = 'true'
                                                    icon = 'format-image'
                                                    showTooltip = 'true'
                                                    label = 'Seleccionar imagen'
                                                />
                                            ) }
                                        />
                                        <RichText
                                            tagName='h5'
                                            className='mb-0'
                                            placeholder='Característica 2'
                                            value = { subtitleTwo }
                                            onChange = { onChangeSubtitleTwo }
                                        />
                                    </div>
                                </div>
                            </div>
                            <RichText
                                tagName='p'
                                className='mb-4'
                                placeholder = 'Agregar el contenido de esta sección'
                                value = { sectionContent }
                                onChange = { onChangeContent }
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="main-image img-fluid" src={ featuredSectionImage } alt={ featuredSectionImageAlt }  />
                        <MediaUpload
                            type = 'image'
                            onSelect={ onSelectFeaturedSectionImage }
                            render = { ( { open } ) => (
                                <Button
                                    onClick = { open }
                                    icon = 'format-image'
                                    text = 'Agregar una imagen de 630 x 550'
                                    className = 'mt-3 btn bg-secondary text-white'
                                />
                            ) }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit