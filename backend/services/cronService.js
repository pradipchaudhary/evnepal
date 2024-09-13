import cron from "cron";
import scrapeEVNews from "./scraper";
import News from "../models/News";

cron.schedule("0 0 * * *", async () => {
    const news = await scrapeEVNews();
    await News.insertMany(news);
    console.log("News updated!");
});
