import React from "react";
import Button from "./Button";
import { UpIcon } from './Icons';

export default function NewsItem({ id,title, description, isLogedIn, handleUp, handleDown, image }) {
    return (
        <>
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>

                <div className="col-lg-4">

                    <div className="col-auto d-none d-lg-block">
                        <img src={image} className="rounded float-end" alt="news" width={300} />
                    </div>

                </div>
                <div className="col-lg-8">
                    <div className="d-flex align-items-stretch justify-content-between">
                    <h4><span>{`${id} - `}</span><strong>{title}</strong></h4>

                    {isLogedIn &&
                        <div className="d-flex align-items-top">
                         
                            <div className="icon-box mb-4 mx-2" >
                                <Button onClick={handleUp} className="icon">
                                <i class="icofont-simple-up"></i>
                                    {/* <UpIcon className="btn btn-primary btn-lg px-4 rounded" /> */}
                                </Button>
                            </div>
                            <div className="icon-box mb-4" >
                                <Button onClick={handleDown} className="icon">
                                <i class="icofont-simple-down"></i>
                                    {/* <UpIcon className="btn btn-primary btn-lg px-4 rounded" /> */}
                                </Button>
                            </div>
                        </div>
                    }
                    </div>
                    
                    <p>{description}</p>
                </div>
            </div>

        </>
    )
}