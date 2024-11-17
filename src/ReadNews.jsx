import "./ReadNews.css"

function ReadNews() {
    return (
        <section className="ReadNews">
            <p>BLOG</p>
            <p>Be First Who Read News</p>
            <p>Explore the latest stories about our dishes, offers, events and future plans here.</p>
            <div>
                <div className="NewsItem">
                    <div className="LinkWithBG NewsLeft">
                        <a href="">View More</a>
                    </div>
                    <div className="ReadNewsTitleContainer">
                        <p className="ReadNewsTitle">Delicious</p>
                        <p className="ReadNewsTitle">March 19, 2022</p>
                    </div>
                    <p className="LinkWithBGName">The Legend of US Cuisine: The Story of Hungry People</p>
                    <p>Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the
                        creative activity to beta test override the food quality.</p>
                </div>
                <div className="NewsItem">
                    <div className="LinkWithBG NewsRight">
                        <a href="">View More</a>
                    </div>
                    <div className="ReadNewsTitleContainer">
                        <p className="ReadNewsTitle">Cooking</p>
                        <p className="ReadNewsTitle">March 19, 2022</p>
                    </div>
                    <p className="LinkWithBGName">The Most Popular Delicious Food of Mediterranean Cuisine</p>
                    <p>Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the
                        creative activity to beta test override the food quality.</p>
                </div>
            </div>
        </section>
    )
}

export default ReadNews;