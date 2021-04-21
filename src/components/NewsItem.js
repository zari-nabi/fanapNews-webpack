import React from "react";
import Button from "./Button";
// import img from "../assets/img/values-1.png";
import { UpIcon } from './Icons';

export default function NewsItem({ title, description, isLogedIn, onClick, image }) {
    return (
        <div className="row g-0  rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative p-5" >
            <div class="col-auto d-none d-lg-block">
                {/* <img src={img} className="rounded float-end" alt="news" width={300} /> */}
            </div>
            <div className="col p-4 d-flex flex-column position-static">
                <h3 >{title}</h3>
                <p className="mb-auto">{description}</p>
            </div>

            {isLogedIn &&
                <div className="col-md-1" >
                    <div className="mb-5">
                        <Button onClick={onClick} className="btn btn-transparent btn-lg px-4 rounded">
                            <UpIcon onClick={onClick} className="btn btn-primary btn-lg px-4 rounded"/>
                            </Button>
                    </div>
                </div>
            }


        </div>
    )
}