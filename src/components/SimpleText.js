import React from "react";

const SimpleText = ({ title, description1, description2 }) => {
    return (
        
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>About Us</h2>
                    <p>{title}</p>
                </div>
                <div className="row content">
                    <div className="col-lg-6">
                        <p>
                            {description1}
                        </p>
                        {/* <ul>
          <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
          <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
          <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
        </ul> */}
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <p>
                            {description2}
                        </p>
                        <a href="#" className="btn-learn-more">بیشتر</a>
                    </div>
                </div>
            </div>

    )
};

export default SimpleText;