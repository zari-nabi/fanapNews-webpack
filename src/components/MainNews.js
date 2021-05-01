import React from "react";
import _ from "lodash";
import MainNewsItem from "./MainNewsItem";

export default function MainNews({ items, title, description, isLogedIn = false, handleClick }) {
    return (
        <div className="container-fluid" data-aos="fade-up">
            <div className="row">
                <div className="col-lg-5 align-items-stretch video-box" style={{ backgroundImage: 'url("assets/img/why-us.jpg")' }} data-aos="zoom-in" data-aos-delay={100}>
                    {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" /> */}
                </div>
                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
                    <div className="content">
                        <h3>{title} <strong></strong></h3>
                        <p>{description}  </p>
                    </div>
                    <div className="accordion-list">
                        <ul>
                            {items.map(item =>
                                <MainNewsItem
                                    key={item.id}
                                    id={_.get(item, "id")}
                                    title={_.get(item, "title")}
                                    description={_.get(item, "description")}
                                // isLogedIn = {isLogedIn}
                                // onClick = {() => handleClick(item)}
                                />
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


// const MainNews = (props) => {
//     const { title, description, news1, news2, news3, des1, des2, des3, isLogedIn, onClick, image } = props;
//     return (
//         <div className="container-fluid" data-aos="fade-up">
//             <div className="row">
//                 <div className="col-lg-5 align-items-stretch video-box" style={{ backgroundImage: 'url("assets/img/why-us.jpg")' }} data-aos="zoom-in" data-aos-delay={100}>
//                     <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
//                 </div>
//                 <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
//                     <div className="content">
//                         <h3>{title} <strong></strong></h3>
//                         <p>{description}  </p>
//                     </div>
//                     <div className="accordion-list">
//                         <ul>
//                             <li>
//                                 <a data-toggle="collapse" className="collapse" href="#accordion-list-1"><span>01</span> {news1} <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
//                                 <div id="accordion-list-1" className="collapse show" data-parent=".accordion-list">
//                                     <p>{des1} </p>
//                                 </div>
//                             </li>
//                             <li>
//                                 <a data-toggle="collapse" href="#accordion-list-2" className="collapsed"><span>02</span> {news2} <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
//                                 <div id="accordion-list-2" className="collapse" data-parent=".accordion-list">
//                                     <p>{des2}            </p>
//                                 </div>
//                             </li>
//                             <li>
//                                 <a data-toggle="collapse" href="#accordion-list-3" className="collapsed"><span>03</span> {news3} <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
//                                 <div id="accordion-list-3" className="collapse" data-parent=".accordion-list">
//                                     <p>{des3}             </p>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default MainNews;