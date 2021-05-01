import React from "react";
import _ from "lodash";
import NewsItem from "./NewsItem";

export default function NewsList({ items,title, isLogedIn = false, handleClick }) {
    return (
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>NEWS</h2>
                <p>{title}</p>
            </div>
                {items.map(item =>
                    <NewsItem
                        key={item.id}
                        id={_.get(item, "id")}
                        title={_.get(item, "title")}
                        description={_.get(item, "description")}
                        image={_.get(item, "image")}
                        isLogedIn={isLogedIn}
                        handleUp={() => handleClick(item,-1)}
                        handleDown={() => handleClick(item,1)}
                    />
                )}
               
           
        </div>


    )
}