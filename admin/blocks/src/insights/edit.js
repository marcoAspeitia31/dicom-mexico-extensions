import { RichText, MediaUpload, useBlockProps } from '@wordpress/block-editor'
import { Button } from '@wordpress/components'

const Edit = ( props ) => {
    const { 
        attributes: {
            image,
            insightNumberOne,
            insightTitleOne,
            insightNumberTwo,
            insightTitleTwo,
            insightNumberThree,
            insightTitleThree,
            insightNumberFour,
            insightTitleFour,
        },
        setAttributes,
        className
    } = props

    // Insight 1
    const onChangeInsightNumberOne = ( newInsightNumberOne ) => {
        setAttributes( { insightNumberOne: newInsightNumberOne } )
    }
    const onChangeInsightTitleOne = ( newInsightTitleOne ) => {
        setAttributes( { insightTitleOne: newInsightTitleOne } )
    }

    // Insight 2
    const onChangeInsightNumberTwo = ( newInsightNumberTwo ) => {
        setAttributes( { insightNumberTwo: newInsightNumberTwo } )
    }
    const onChangeInsightTitleTwo = ( newInsightTitleTwo ) => {
        setAttributes( { insightTitleTwo: newInsightTitleTwo } )
    }

    // Insight 3
    const onChangeInsightNumberThree = ( newInsightNumberThree ) => {
        setAttributes( { insightNumberThree: newInsightNumberThree } )
    }
    const onChangeInsightTitleThree = ( newInsightTitleThree ) => {
        setAttributes( { insightTitleThree: newInsightTitleThree } )
    }

    // Insight 4
    const onChangeInsightNumberFour = ( newInsightNumberFour ) => {
        setAttributes( { insightNumberFour: newInsightNumberFour } )
    }
    const onChangeInsightTitleFour = ( newInsightTitleFour ) => {
        setAttributes( { insightTitleFour: newInsightTitleFour } )
    }

    // BackgroundImage
    const onSelectImage =  newImage => {
        setAttributes( { image: newImage.sizes.full.url } )
    }

    const parallax = {
        /* The image used */
        backgroundImage: `url(${image})`,
        
        
        /* Create the parallax scrolling effect */
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(1, 10, 53, .8)',

        /* Only apply this in backend */
        display: 'flex',
        flexDirection: 'column'
    }

    const blockProps = useBlockProps( { style: parallax } );


    return (
        <div className="container-fluid facts my-5 py-5 display-flex flex-column" { ...blockProps }>

            <MediaUpload
                onSelect={ onSelectImage }
                type='image'
                value={image}
                render={({open})=>(
                    <Button
                        onClick={open}
                        icon='format-image'
                        showTooltip='true'
                        label='Elegir imagen de fondo'
                    />
                )}
            />

            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-sm-6 col-lg-3 wow fadeIn text-center" data-wow-delay="0.1s">
                        <RichText
                            tagName='h3'
                            className='display-4 text-white insight-number-one'
                            value={ insightNumberOne }
                            onChange={ onChangeInsightNumberOne }
                        />
                        <RichText
                            tagName='span'
                            className='text-primary insight-title-one'
                            value={ insightTitleOne }
                            onChange={ onChangeInsightTitleOne }
                        />
                    </div>
                    <div className="col-sm-6 col-lg-3 wow fadeIn text-center" data-wow-delay="0.3s">
                        <RichText
                            tagName='h3'
                            className='display-4 text-white insight-number-two'
                            value={ insightNumberTwo }
                            onChange={ onChangeInsightNumberTwo }
                        />
                        <RichText
                            tagName='span'
                            className='text-primary insight-title-two'
                            value={ insightTitleTwo }
                            onChange={ onChangeInsightTitleTwo }
                        />
                    </div>
                    <div className="col-sm-6 col-lg-3 wow fadeIn text-center" data-wow-delay="0.5s">
                        <RichText
                            tagName='h3'
                            className='display-4 text-white insight-number-three'
                            value={ insightNumberThree }
                            onChange={ onChangeInsightNumberThree }
                        />
                        <RichText
                            tagName='span'
                            className='text-primary insight-title-three'
                            value={ insightTitleThree }
                            onChange={ onChangeInsightTitleThree }
                        />
                    </div>
                    <div className="col-sm-6 col-lg-3 wow fadeIn text-center" data-wow-delay="0.7s">
                        <RichText
                            tagName='h3'
                            className='display-4 text-white insight-number-four'
                            value={ insightNumberFour }
                            onChange={ onChangeInsightNumberFour }
                        />
                        <RichText
                            tagName='span'
                            className='text-primary insight-title-four'
                            value={ insightTitleFour }
                            onChange={ onChangeInsightTitleFour }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit