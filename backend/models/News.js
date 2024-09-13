import mongoose from "mongoose";
const NewsSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: Date,
    source: String,
});

const News = mongoose.model("News", NewsSchema);
export default News;
