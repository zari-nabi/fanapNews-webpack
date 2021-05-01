import React from "react";


export default function Hero() {
    return (
        
            <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators" id="hero-carousel-indicators" />
                <div className="carousel-inner" role="listbox">
                    {/* Slide 1 */}
                    <div className=" active" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/slide/slide-1.jpg)` }}>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/slide/slide-1.png`}/>
                        <div className="carousel-container">
                            <div className="container">
                                <h2 className="animate__animated animate__fadeInDown"><span>فناپ،</span> سکوی خلق آینده</h2>
                                <p className="animate__animated animate__fadeInUp">بانک‌داری الکترونیک . پرداخت الکترونیک . تجارت الکترونیک . بیمه و بورس الکترونیک</p>
                                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">بیشتر</a>
                            </div>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="carousel-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/slide/slide-2.jpg)` }}>
                        <div className="carousel-container">
                            <div className="container">
                                <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                            </div>
                        </div>
                    </div>
                    {/* Slide 3 */}
                    <div className="carousel-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/slide/slide-3.jpg)` }}>
                        <div className="carousel-container">
                            <div className="container">
                                <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

    )
}