import { RichText, useBlockProps } from '@wordpress/block-editor'

const Save = ( props ) => {

    const iconClass = {
        width: '90px',
        height: '90px'
    }
    const blockProps = useBlockProps.save({
        style: iconClass
    })
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
        }
    } = props

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp">
                        <RichText.Content
                            tagName = 'h2'
                            className = 'display-6 mb-5'
                            value = { title }
                        />
                        <RichText.Content
                            tagName='p'
                            className='mb-5 content'
                            value= { content }
                        />
                        <div className="d-flex mb-5">
                            <div className='d-flex flex-column'>
                                <div { ...blockProps } className="flex-shrink-0 btn-square bg-primary rounded-circle icon-facts">
                                    <img className="img-fluid" src={icon1} alt=""/>
                                </div>
                            </div>
                            <div className="ms-4">
                                <RichText.Content
                                    tagName='h5'
                                    className='mb-3 title-one'
                                    value={ titleOne }
                                />
                                <RichText.Content
                                    tagName='span'
                                    className='content-one'
                                    value={ contentOne }
                                />
                            </div>
                        </div>
                        <div className="d-flex mb-5">
                            <div className='d-flex flex-column'>
                                <div { ...blockProps } className="flex-shrink-0 btn-square bg-primary rounded-circle icon-facts">
                                    <img className="img-fluid" src={icon2} alt=""/>
                                </div>
                            </div>
                            <div className="ms-4">
                                <RichText.Content
                                    tagName='h5'
                                    className='mb-3 title-two'
                                    value= { titleTwo }
                                />
                                <RichText.Content
                                    tagName='span'
                                    className='content-two'
                                    value={ contentTwo }
                                />
                            </div>
                        </div>
                        <div className="d-flex mb-0">
                            <div className='d-flex flex-column'>
                                <div { ...blockProps } className="flex-shrink-0 btn-square bg-primary rounded-circle icon-facts">
                                    <img className="img-fluid" src={icon3} alt=""/>
                                </div>
                            </div>
                            <div className="ms-4">
                                <RichText.Content
                                    tagName='h5'
                                    className='mb-3 title-three'
                                    value={ titleThree }
                                />
                                <RichText.Content
                                    tagName='span'
                                    className='content-three'
                                    value={ contentThree }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp">
                    <div className="featured-facts position-relative rounded overflow-hidden h-100">
                        <img className="position-absolute w-100 h-100 featured-facts-img" src={ mainImage } alt={ mainImageAlt } />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )

}

export default Save