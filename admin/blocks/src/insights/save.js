import { RichText, useBlockProps } from '@wordpress/block-editor'

const Save = ( props ) => {

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
        }
    } = props

    const parallax = {
        position:  'absolute',
        zInex: '-10',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',

        /* The image used */
        backgroundImage: `url(${ image })`,
        
        
        /* Create the parallax scrolling effect */
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    }
    
    const overlay = {
        position:  'absolute',
        zInex: '-5',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(1, 10, 53, .8)'
    }

    const blockProps = useBlockProps.save( { style: parallax } );
    const blockPropsOverlay = useBlockProps.save( { style: overlay } )

    return (
        <div className="container-fluid facts my-5 py-5 position-relative">
            <div { ...blockProps } ></div>
            <div { ...blockPropsOverlay }></div>
            <div className="container py-5 position position-relative">
                <div className="row g-5">
                    <div className="col-sm-6 col-lg-3 wow fadeIn text-center" data-wow-delay="0.1s">
                        <h3 className='display-4 text-white insight-number-one' data-toggle="counter-up">
                            <RichText.Content
                                value={ insightNumberOne }
                            />
                        </h3>
                        <RichText.Content
                            tagName='span'
                            className='text-primary insight-title-one'
                            value={ insightTitleOne }
                        />
                    </div>
                    <div className="col-sm-6 col-lg-3 wow fadeIn text-center" data-wow-delay="0.3s">
                        <RichText.Content
                            tagName='h3'
                            className='display-4 text-white insight-number-two'
                            data-toggle='counter-up'
                            value={ insightNumberTwo }
                        />
                        <RichText.Content
                            tagName='span'
                            className='text-primary insight-title-two'
                            value={ insightTitleTwo }
                        />
                    </div>
                    <div className="col-sm-6 col-lg-3 wow fadeIn text-center" data-wow-delay="0.5s">
                        <RichText.Content
                            tagName='h3'
                            className='display-4 text-white insight-number-three'
                            data-toggle='counter-up'
                            value={ insightNumberThree }
                        />
                        <RichText.Content
                            tagName='span'
                            className='text-primary insight-title-three'
                            value={ insightTitleThree }
                        />
                    </div>
                    <div className="col-sm-6 col-lg-3 wow fadeIn text-center" data-wow-delay="0.7s">
                        <RichText.Content
                            tagName='h3'
                            className='display-4 text-white insight-number-four'
                            data-toggle='counter-up'
                            value={ insightNumberFour }
                        />
                        <RichText.Content
                            tagName='span'
                            className='text-primary insight-title-four'
                            value={ insightTitleFour }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Save