import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import NewsList from "../../components/NewsList";
import { NewsContext } from "../../contexts";

export default function NewsPage() {
    const { isLogedIn, allNews, setAllNews } = useContext(NewsContext);

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
        debugger
        if (position >= arr.length || position < 0) {
            return
        }
        let newArr = [...arr];
        let element = newArr.splice(index, 1)[0];
        newArr.splice(position, 0, element);
        return newArr;
    }

    const handleClick = (item, step) => {
        const currentNews = news.findIndex(n => n === item);
debugger
            const sorted = handleSort(news, currentNews, step);
            if(sorted){
                setNews(sorted);
                console.log('sort', sorted)
                setAllNews(sorted)

        };
    }


    return (
        <section id="faq" className="faq">
                <div className="carousel-inner mb-4" role="listbox">
                    {/* Slide 1 */}
                        <img src={`${process.env.PUBLIC_URL}/assets/img/slide/news-bg.jpg`}/>
                        <div className="carousel-container">
                            <div className="container">
                                <h1 className="animate__animated animate__fadeInDown"> مدیریت خبرها</h1>
                            </div>
                        </div>
                    </div>
            <NewsList items={news} title=" خبرها" isLogedIn={isLogedIn} handleClick={handleClick} />
        </section>

    )
}

