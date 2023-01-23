import { RichText, MediaUpload } from '@wordpress/block-editor'
import { Button } from '@wordpress/components'

const Edit = ( props ) => {
    const {
        attributes: {
            title,
            content,
            mainImage,
            mainImageAlt,
            titleOne,
            contentOne,
            icon1,
            titleTwo,
            contentTwo,
            icon2,
            titleThree,
            contentThree,
            icon3
        },
        setAttributes,
        className
    } = props

    // State functions
    const onChangeTitle = ( newTitle ) => setAttributes( { title: newTitle } )
    const onChangeContent = ( newContent ) => setAttributes( { content: newContent } )
    const onSelectMainImage = ( newMainImage ) => {
        setAttributes({
            mainImage: newMainImage.sizes.full.url,
            mainImageAlt: newMainImage.alt
        })
    }
    //Section 1
    const onChangeTitleOne = ( newTitleOne ) => setAttributes( { titleOne: newTitleOne } )
    const onChangeContentOne = ( newContentOne ) => setAttributes( { contentOne: newContentOne } )
    const onSelectIcon1 = ( newIcon1 ) => {
        setAttributes({
            icon1: newIcon1.sizes.full.url
        })
    }
    //Section 2
    const onChangeTitleTwo = ( newTitleTwo ) => setAttributes( { titleTwo: newTitleTwo } )
    const onChangeContentTwo = ( newContentTwo ) => setAttributes( { contentTwo: newContentTwo } )
    const onSelectIcon2 = ( newIcon2 ) => {
        setAttributes({
            icon2: newIcon2.sizes.full.url
        })
    }
    //Section 3
    const onChangeTitleThree = ( newTitleThree ) => setAttributes( { titleThree: newTitleThree } )
    const onChangeContentThree = ( newContentThree ) => setAttributes( { contentThree: newContentThree } )
    const onSelectIcon3 = ( newIcon3 ) => {
        setAttributes({
            icon3: newIcon3.sizes.full.url
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
                            className='mb-5 content'
                            placeholder='Agregar descripción de la sección'
                            value= { content }
                            onChange = { onChangeContent }
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
                                    tagName ='h5'
                                    className ='mb-3 title-one'
                                    placeholder ='Agrega un título a este apartado'
                                    value = { titleOne }
                                    onChange = { onChangeTitleOne }
                                />
                                <RichText
                                    tagName = 'span'
                                    className = 'content-one'
                                    placeholder = 'Descripción sección 1'
                                    value = { contentOne }
                                    onChange = { onChangeContentOne }
                                />
                            </div>
                        </div>
                        <div className="d-flex mb-5">
                            <div className='d-flex flex-column'>
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle icon-facts">
                                    <img className="img-fluid" src={icon2} alt=""/>
                                </div>
                                <MediaUpload
                                    type = 'image'
                                    onSelect = { onSelectIcon2 }
                                    render =  { ( { open } ) => (
                                        <Button
                                            onClick = { open }
                                            icon = 'format-image'
                                            showTooltip = 'true'
                                            label = 'Seleccionar ícono imagen'                                        
                                        />
                                    ) }
                                />
                            </div>
                            <div className="ms-4">
                                <RichText
                                    tagName = 'h5'
                                    className = 'mb-3 title-two'
                                    placeholder = 'Agregar título 2'
                                    value = { titleTwo }
                                    onChange = { onChangeTitleTwo }
                                />
                                <RichText
                                    tagName = 'spam'
                                    className = 'content-two'
                                    placeholder = 'Agregar descripcion 2'
                                    value = { contentTwo }
                                    onChange = { onChangeContentTwo }
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
                                    tagName = 'h5'
                                    className = 'mb-3 title-three'
                                    placeholder = 'Agregar título 3'
                                    value = { titleThree }
                                    onChange = { onChangeTitleThree }
                                />
                                <RichText
                                    tagName = 'spam'
                                    className = 'content-three'
                                    placeholder = 'Agregar descripcion 3'
                                    value = { contentThree }
                                    onChange = { onChangeContentThree }
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