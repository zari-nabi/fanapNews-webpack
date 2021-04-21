import React, { useState, useEffect, useContext } from "react";
import NewsList from "../../components/NewsList";
import { NewsContext } from "../../contexts";
import getNews from "../../fakeJsons/getNews";
import MasterPage from "../../Layouts/Master/Master";
import hero from "../../assets/img/hero-img.png";

export default function Home() {
    const { allNews } = useContext(NewsContext);

    const [news, setNews] = useState([]);

    useEffect(() => {
        setNews(getNews.items);
    }, []);

    return (
        <>
            <section>
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={hero} className="d-block mx-lg-auto img-fluid" alt="news Themes" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">آخرین خبرهای روز</h1>
                            <p className="lead">اجتماعی سیاسی فرهنگی سلامتی ورزشی ...</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <a href="#more" className="btn btn-primary btn-lg px-4 me-md-2">مشاهده</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section id="more">
                <div className="container animated fadeInDown">
                    <div className="row row-cols-1">
                        <NewsList items={allNews} />
                    </div>
                </div>
            </section>
        </>

    )
}