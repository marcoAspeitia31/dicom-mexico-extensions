import { RichText } from '@wordpress/block-editor';

const Save = ( props ) => {

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
            featuredSectionImage
        }
    } = props

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="h-100">
                            <RichText.Content
                                tagName='h2'
                                className='display-6 mb-5'
                                value={ title }
                            />
                            <div className="row g-4 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center img1">
                                        <img className="flex-shrink-0 me-3" src={ imageOneUrl } alt={ imageOneAlt }/>
                                        <RichText.Content
                                            tagName = 'h5'
                                            className = 'mb-0'
                                            value = { subtitleOne }
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 me-3" src={ imageTwoUrl } alt={ imageTwoAlt }/>
                                        <RichText.Content
                                            tagName = 'h5'
                                            className = 'mb-0 subtitle-2'
                                            value = { subtitleTwo }
                                        />
                                    </div>
                                </div>
                            </div>
                            <RichText.Content
                                tagName='p'
                                className='mb-4'
                                value = { sectionContent }
                            />
                            </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <img className="img-fluid" src={ featuredSectionImage } />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Save