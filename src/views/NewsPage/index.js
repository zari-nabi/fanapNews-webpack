import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import NewsList from "../../components/NewsList";
import { NewsContext } from "../../contexts";
import getNews from "../../fakeJsons/getNews";
import MasterPage from "../../Layouts/Master/Master";

export default function NewsPage() {
    const { isLogedIn, allNews,setAllNews } = useContext(NewsContext);

    const history = useHistory();
    const [news, setNews] = useState(allNews);

    if (!isLogedIn) {
        history.push('/auth');
    };

    // useEffect(() => {
    //     setNews(getNews.items);
    // }, []);

    const handleSort = (arr, index, offset) => {
        const position = index + offset;
        if (position >= arr.length || position < 0) {
            return
        }
        let newArr = [...arr];
        let element = newArr.splice(index, 1)[0];
        newArr.splice(position, 0, element);
        return newArr;
    }

    const handleClick = (item) => {
        const currentNews = news.findIndex(n => n === item);

        if (currentNews) {
            const sorted = handleSort(news, currentNews, -1);
            setNews(sorted);
            console.log('sort', sorted)
            setAllNews(sorted)
        };
    }

    return (
            <div className="container">
                <div className="row">
                   <p></p>
                </div>
                <div className="row row-cols-1">
                    <NewsList items={news} isLogedIn={isLogedIn} handleClick={handleClick} />
                </div>
            </div>

    )
}

