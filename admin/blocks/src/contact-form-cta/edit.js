import { 
    useBlockProps,
    RichText,
    InspectorControls,
    ColorPalette,
    InnerBlocks,
    URLInputButton,
    MediaUpload
} from '@wordpress/block-editor'
import {
    Panel,
    PanelBody,
    PanelRow,
    Button,
    TextControl
} from '@wordpress/components'

const Edit = ( props ) => {

    const {
        attributes: {
            backgroundImage,
            title,
            content,
            titleColor,
            textColor,
            inputURL,
            rightBackgroundImage,
            buttonText
        },
        setAttributes,
        className
    } = props

    // Background
    const onSelectBackgroundImage = newBackgroundImage => {
        setAttributes( { backgroundImage: newBackgroundImage.sizes.full.url } )
    }
    const onSelectRightBackgroundImage = newRightBackgroundImage => {
        setAttributes( { rightBackgroundImage: newRightBackgroundImage.sizes.full.url } )
    }

    const onChangeTitle = newTitle => setAttributes( { title: newTitle } )
    const onChangeContent = newContent => setAttributes( { content: newContent } )
    const onChangeTextColor = newTextColor => setAttributes( { textColor: newTextColor } )
    const onChangeTitleColor = newTitleColor => setAttributes( { titleColor: newTitleColor } )
    const onChangeInputURL = newInputURL => setAttributes( { inputURL: newInputURL } )
    const onChangeButtonText = newButtonText => setAttributes( { buttonText: newButtonText } )

    const bgImage = {
        position:  'absolute',
        zInex: '-10',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        /* The image used */
        backgroundImage: `url(${ backgroundImage })`,

        /* Create the parallax scrolling effect */
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const blockProps = useBlockProps( { 
        style: bgImage,
    } )

    const leftOverlay = {
        position:  'absolute',
        zInex: '-5',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        content: ' ',
        background: 'rgba(1,10,53,.8)'
    }

    const blockPropsOverlay = {
        style: leftOverlay
    }

    const bgLeftImage = {
        /* The image used */
        backgroundImage: `url(${ rightBackgroundImage })`,

        /* Create the parallax scrolling effect */
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const blockPropsTwo = useBlockProps( {
        className: 'col-lg-6 quote-form',
        style: bgLeftImage
    } )

    return(
        <>
            <InspectorControls>
                <Panel>
                    <PanelBody
                        title = { 'Color del título' }
                        initialOpen = { true }
                    >
                        <PanelRow>Cambia el color del título del bloque</PanelRow>
                        <ColorPalette
                            onChange = { onChangeTitleColor }
                            clearable = { false }
                            value = { titleColor }
                        />
                    </PanelBody>
                    <PanelBody
                        title = { 'Color del texto' }
                        initialOpen = { true }
                    >
                        <PanelRow>Cambia el color del texto del bloque</PanelRow>
                        <ColorPalette
                            onChange = { onChangeTextColor }
                            clearable = { false }
                            value = { textColor }
                        />
                    </PanelBody>
                    <PanelBody
                        title = { 'Texto del botón' }
                        initialOpen = { true }
                    >
                        <PanelRow>Cambia el texto del CTA sección izquierda</PanelRow>
                        <TextControl
                            value={ buttonText }
                            onChange={ onChangeButtonText }
                        />
                    </PanelBody>
                </Panel>
            </InspectorControls>

            <div className="container-fluid overflow-hidden my-5 px-lg-0">
                <div className="container quote px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className='col-lg-6 quote-text position-relative'>
                            <div {...blockProps}></div>
                            <div {...blockPropsOverlay}></div>
                            <div className="position-relative h-100 px-4 px-sm-5 ps-lg-0 wow fadeIn" data-wow-delay="0.1s">
                                <MediaUpload
                                    onSelect = { onSelectBackgroundImage }
                                    value = { backgroundImage }
                                    type = 'image'
                                    render = { ( { open } ) => (
                                        <Button
                                            onClick = { open } 
                                            icon = 'format-image'
                                            showTooltip = 'true'
                                            label = 'Elegir imagen de fondo'
                                        />
                                    ) }
                                />
                                <RichText
                                    tagName = 'h2'
                                    placeholder = 'Título del bloque'
                                    value = { title }
                                    onChange = { onChangeTitle }
                                    className = 'mb-4'
                                    style={ { color: titleColor } }
                                />
                                <RichText
                                    tagName = 'p'
                                    className= 'mb-5'
                                    value = { content }
                                    onChange = { onChangeContent }
                                    placeholder = 'Redacción del bloque'
                                    style={ { color: textColor } }
                                />
                                <a href={ inputURL } className="align-self-start btn btn-primary py-3 px-5">
                                    { buttonText }
                                </a>
                                <URLInputButton
                                    onChange = { onChangeInputURL }
                                    url = { inputURL }
                                />
                            </div>
                        </div>
                        <div { ...blockPropsTwo } >
                            <MediaUpload
                                    onSelect = { onSelectRightBackgroundImage }
                                    value = { rightBackgroundImage }
                                    type = 'image'
                                    render = { ( { open } ) => (
                                        <Button
                                            onClick = { open } 
                                            icon = 'format-image'
                                            showTooltip = 'true'
                                            label = 'Elegir imagen de fondo'
                                        />
                                    ) }
                            />
                            <div className="h-100 px-4 px-sm-5 pe-lg-0 wow fadeIn" data-wow-delay="0.5s">
                                <div className="bg-white p-4 p-sm-5">
                                    <div className="row g-3">
                                        <InnerBlocks/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Edit