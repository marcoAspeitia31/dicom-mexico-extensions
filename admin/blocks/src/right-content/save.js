import { RichText, useBlockProps } from '@wordpress/block-editor'

const Save = ( props ) => {

    const justifyFlexColumnContentCenter = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }

    const blockProps = useBlockProps.save( { style: justifyFlexColumnContentCenter } )

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

    return(
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <RichText.Content
                        tagName = 'h2'
                        className = 'display-6 mb-5 text-center dm-title'
                        value = { title }
                    />
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <img className='img-fliud' src={ imageUrl } alt={ imageAlt } />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center" data-wow-delay="0.5s">
                        <RichText.Content
                            tagName = 'p'
                            className = 'mb-4'
                            value = { content }
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Save