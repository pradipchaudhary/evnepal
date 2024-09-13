import axios from "axios";
import cheerio from "cheerio";

// Example function to scrape news data
async function scrapeEVNews() {
    const { data } = await axios.get("https://insideevs.com/news/");
    console.log(data)
    const $ = cheerio.load(data);

    const newsList = [];
    $("article").each((i, el) => {
        const title = $(el).find("h2").text();
        const content = $(el).find(".content").text();
        const source = "https://ev-news-site.com";
        newsList.push({ title, content, source });
    });
    return newsList;
}

export default scrapeEVNews;
