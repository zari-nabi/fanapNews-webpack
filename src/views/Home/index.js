import React, { useState, useEffect, useContext } from "react";
import NewsList from "../../components/NewsList";
import { NewsContext } from "../../contexts";
import getNews from "../../fakeJsons/getNews";
import Hero from "../../components/Hero";
import MainNews from "../../components/MainNews";
import SimpleText from "../../components/SimpleText";

export default function Home() {
    const { allNews, padNews } = useContext(NewsContext);
    console.log('pad', padNews)

    const [news, setNews] = useState([]);

    useEffect(() => {
        setNews(getNews.items);
    }, []);

    return (
        <>
            <section id="hero">
                <Hero />

            </section>
            <section id="about" className="about">
                <SimpleText
                    title="درباره ما"
                    description1="«سرزمین هوشمند پاد» پلتفرمی جامع و چند سویه است که با ارائه راهکارهایی متنوع از حوزه‌ها و بخش‌های مختلف، محصولات و امکاناتی گوناگون را در راستای تحقق زندگی بهتر برای مصرف کنندگان و افزایش سطح رضایت شهروندان از زندگی عرضه می‌کند."
                    description2="پاد در حقیقت یک پلتفرم تنها نیست، بلکه مجموعه‌ای از پلتفرم‌ها و ده‌ها محصول است که مانند یک اکوسیستم یکپارچه و فعال بر بستر پلتفرمی جامع و زیرساختی بنیان شده است. پاد با ارائه محصولاتی کاربردی و همراهی جامعه‌ای بی‌شمار از مشتریان و همکاران، بستری ایمن و خلاقانه برای فعالیت‌های فناورانه خواهد بود که تجربه‌ای عملیاتی و ثابت شده را به همراه دارد." />
            </section>
            <section id="why-us" className="why-us section-bg">
                <MainNews
                    title="اخبار پاد"
                    description=""
                    items={padNews}
                />
            </section>
            <section id="faq" className="faq">
            <NewsList items={allNews} title="خبرهای روز"/>
            </section>

           
        </>

    )
}