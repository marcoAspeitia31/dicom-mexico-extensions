import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor'

const Save = ( props ) => {

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
        }
    } = props

    //const blockProps = useBlockProps.save()

    return(
        <div className="container-fluid overflow-hidden my-5 px-lg-0">
            <div className="container quote px-lg-0">
                <div className="row g-0 mx-lg-0">
                    <div className="col-lg-6 quote-text" data-parallax="scroll" data-image-src={ backgroundImage }>
                        <div className="h-100 px-4 px-sm-5 ps-lg-0 wow fadeIn" data-wow-delay="0.1s">
                            <RichText.Content
                                tagName = 'h2'
                                value = { title }
                                className = 'mb-4'
                                style = { { color: titleColor } }
                            />
                            <RichText.Content
                                tagName = 'p'
                                className= 'mb-5'
                                value = { content }
                                style = { { color: textColor } }
                            />
                            <a href={ inputURL } className="align-self-start btn btn-primary py-3 px-5">
                                { buttonText }
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 quote-form" data-parallax="scroll" data-image-src={ rightBackgroundImage }>
                        <div className="h-100 px-4 px-sm-5 pe-lg-0 wow fadeIn" data-wow-delay="0.5s">
                            <div className="bg-white p-4 p-sm-5">
                                <div className="row g-3">
                                    <InnerBlocks.Content/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Save