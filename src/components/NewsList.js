import React from "react";
import _ from "lodash";
import NewsItem from "./NewsItem";

export default function NewsList({ items,isLogedIn=false,handleClick }) {
    return (
        <div className="row row-cols-1">
            {items.map(item =>
                <NewsItem
                    key={item.id}
                    title={_.get(item, "title")}
                    description={_.get(item , "description") }
                    image = {_.get(item,"image")}
                    isLogedIn = {isLogedIn}
                    onClick = {() => handleClick(item)}
                />
            )}

        </div>
    )
}