import News from "../models/News.js";

export const getAllNews = async (req, res) => {
    const news = await News.find();
    res.json(news);
};
export const addNews = async (req, res) => {
    const newsItem = new News(req.body);
    await newsItem.save();
    res.status(201).json(newsItem);
};
