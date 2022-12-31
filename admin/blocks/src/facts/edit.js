import { RichText, MediaUpload } from '@wordpress/block-editor'
import { Button } from '@wordpress/components'

const Edit = ( props ) => {
    const {
        attributes: {
            title,
            sectionContent,
            mainImage,
            mainImageAlt,
            title1,
            content1,
            icon1,
            title2,
            content2,
            icon2,
            title3,
            content3,
            icon3
        },
        setAttributes,
        classNameNameName
    } = props

    // State functions
    const onChangeTitle = ( newTitle ) => setAttributes( { title: newTitle } )
    const onChangeSectionContent = ( newSectionContent ) => setAttributes( { sectionContent: newSectionContent } )
    const onSelectMainImage = ( newMainImage ) => {
        setAttributes({
            mainImage: newMainImage.sizes.full.url,
            mainImageAlt: newMainImage.alt
        })
    }
    //Section 1
    const onChangeTitle1 = newTitle1 => setAttributes( { title1: newTitle1 } )
    const onChangeContent1 = newContent1 => setAttributes( { content1: newContent1 } )
    const onSelectIcon1 = newIcon1 => {
        setAttributes({
            icon1: newIcon1.sizes.thumbnail
        })
    }
    //Section 2
    const onChangeTitle2 = newTitle2 => setAttributes( { title2: newTitle2 } )
    const onChangeContent2 = newContent2 => setAttributes( { content2: newContent2 } )
    const onSelectIcon2 = newIcon2 => {
        setAttributes({
            icon2: newIcon2.sizes.thumbnail
        })
    }
    //Section 3
    const onChangeTitle3 = newTitle3 => setAttributes( { title3: newTitle3 } )
    const onChangeContent3 = newContent3 => setAttributes( { content3: newContent3 } )
    const onSelectIcon3 = newIcon3 => {
        setAttributes({
            icon3: newIcon3.sizes.thumbnail
        })
    }
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp">
                        <RichText
                            tagName = 'h2'
                            className = 'display-6 mb-5'
                            placeholder = 'Agregar título a la sección'
                            value = { title }
                            onChange = { onChangeTitle }
                        />
                        <RichText
                            tagName='p'
                            className='mb-5'
                            placeholder='Agrega el contenido principal a esta sección'
                            value={ sectionContent }
                            onChange={ onChangeSectionContent }
                        />
                        <div className="d-flex mb-5">
                            <div className='d-flex flex-column'>
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle icon-facts">
                                    <img className="img-fluid" src={icon1} alt=""/>
                                </div>
                                <MediaUpload
                                    type='image'
                                    onSelect={ onSelectIcon1 }
                                    render= { ( { open } ) => (
                                        <Button
                                            onClick={ open }
                                            icon = 'format-image'
                                            showTooltip = 'true'
                                            label = 'Seleccionar ícono imagen'                                        
                                        />
                                    ) }
                                />
                            </div>
                            <div className="ms-4">
                                <RichText
                                    tagName='h4'
                                    className='mb-3'
                                    placeholder='Característica uno'
                                    value={ title1 }
                                    onChange={ onChangeTitle1 }
                                />
                                <RichText
                                    tagName='span'
                                    placeholder='Descripción de la característica uno'
                                    value={ content1 }
                                    onChange={ onChangeContent1 }
                                />
                            </div>
                        </div>
                        <div className="d-flex mb-5">
                            <div className='d-flex flex-column'>
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle icon-facts">
                                    <img className="img-fluid" src={icon2} alt=""/>
                                </div>
                                <MediaUpload
                                    type='image'
                                    onSelect={ onSelectIcon2 }
                                    render= { ( { open } ) => (
                                        <Button
                                            onClick={ open }
                                            icon = 'format-image'
                                            showTooltip = 'true'
                                            label = 'Seleccionar ícono imagen'                                        
                                        />
                                    ) }
                                />
                            </div>
                            <div className="ms-4">
                                <RichText
                                    tagName='h4'
                                    className='mb-3'
                                    placeholder='Característica uno'
                                    value={ title2 }
                                    onChange={ onChangeTitle2 }
                                />
                                <RichText
                                    tagName='span'
                                    placeholder='Descripción de la característica uno'
                                    value={ content2 }
                                    onChange={ onChangeContent2 }
                                />
                            </div>
                        </div>
                        <div className="d-flex mb-0">
                            <div className='d-flex flex-column'>
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle icon-facts">
                                    <img className="img-fluid" src={icon3} alt=""/>
                                </div>
                                <MediaUpload
                                    type='image'
                                    onSelect={ onSelectIcon3 }
                                    render= { ( { open } ) => (
                                        <Button
                                            onClick={ open }
                                            icon = 'format-image'
                                            showTooltip = 'true'
                                            label = 'Seleccionar ícono imagen'                                        
                                        />
                                    ) }
                                />
                            </div>
                            <div className="ms-4">
                                <RichText
                                    tagName='h4'
                                    className='mb-3'
                                    placeholder='Característica uno'
                                    value={ title3 }
                                    onChange={ onChangeTitle3 }
                                />
                                <RichText
                                    tagName='span'
                                    placeholder='Descripción de la característica uno'
                                    value={ content3 }
                                    onChange={ onChangeContent3 }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp">
                    <div className="featured-facts position-relative rounded overflow-hidden h-100">
                        <img className="position-absolute w-100 h-100 featured-facts-img" src={ mainImage } alt={ mainImageAlt } />
                        <MediaUpload
                            type='image'
                            onSelect={ onSelectMainImage }
                            render = { ( { open } ) => (
                                <Button
                                    onClick={ open }
                                    icon = 'format-image'
                                    showTooltip = 'true'
                                    label = 'Seleccionar imagen'
                                    text = 'Agregar una imagen de 600 x 630'
                                    className='position-absolute w-100 h-100 featured-facts-img'
                                />
                            ) }
                        />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Edit