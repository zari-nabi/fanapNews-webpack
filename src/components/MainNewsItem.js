import React from "react";

const MainNewsItem = ({id,title,description})=>{
    return(
        <li>
        <a data-toggle="collapse" className="collapse" href="#accordion-list-1"><span>{id}</span> {title} 
        {/* <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /> */}
        </a>
        <div id="accordion-list-1" className="collapse show" data-parent=".accordion-list">
            <p>{description} </p>
        </div>
    </li>
    )
}

export default MainNewsItem;