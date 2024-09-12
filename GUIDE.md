To build the large-scale app "ev-nepal" using Node.js, here’s a breakdown of the project structure, along with a comprehensive explanation of its files and folders.

### **Folder Structure:**

```
ev-nepal/
│
├── config/
│   └── db.js              # Database configuration (MongoDB)
│
├── controllers/
│   ├── chargingStationController.js  # Handles charging station routes logic
│   ├── sellerController.js           # Manages sellers/brand info
│   └── newsController.js             # Manages EV news and events
│
├── models/
│   ├── ChargingStation.js  # MongoDB schema for charging stations
│   ├── Seller.js           # Schema for seller and EV brand info
│   └── News.js             # Schema for news and event information
│
├── routes/
│   ├── chargingStationRoutes.js  # API routes for charging stations
│   ├── sellerRoutes.js           # API routes for sellers
│   └── newsRoutes.js             # API routes for news/events
│
├── services/
│   ├── scraper.js          # Logic for scraping websites
│   └── cronService.js      # Cron job for scheduling scraping tasks
│
├── middlewares/
│   └── auth.js             # JWT authentication middleware
│
├── public/
│   └── images/             # Store media files
│
├── views/
│   └── home.ejs            # EJS template for the home page
│
├── utils/
│   ├── helper.js           # Helper functions like pagination, formatting
│   └── logger.js           # Custom logger configuration
│
├── .env                    # Environment variables
├── server.js               # Entry point, setting up Express app
├── package.json            # Dependencies and scripts
└── README.md               # Documentation and setup guide
```

### **Step-by-Step Implementation:**

#### **1. Server and Database Configuration:**

**`server.js`**:

```js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const connectDB = require("./config/db");
connectDB();

// Routes
app.use("/api/charging-stations", require("./routes/chargingStationRoutes"));
app.use("/api/sellers", require("./routes/sellerRoutes"));
app.use("/api/news", require("./routes/newsRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

**`config/db.js`**:

```js
const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
module.exports = connectDB;
```

#### **2. Models (Mongoose Schemas):**

**`models/ChargingStation.js`**:

```js
const mongoose = require("mongoose");
const ChargingStationSchema = new mongoose.Schema({
    name: String,
    location: String,
    price: Number,
    capacity: Number,
});
module.exports = mongoose.model("ChargingStation", ChargingStationSchema);
```

**`models/Seller.js`**:

```js
const mongoose = require("mongoose");
const SellerSchema = new mongoose.Schema({
    name: String,
    brand: String,
    address: String,
    contact: String,
});
module.exports = mongoose.model("Seller", SellerSchema);
```

**`models/News.js`**:

```js
const mongoose = require("mongoose");
const NewsSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: Date,
    source: String,
});
module.exports = mongoose.model("News", NewsSchema);
```

#### **3. Controllers:**

**`controllers/chargingStationController.js`**:

```js
const ChargingStation = require("../models/ChargingStation");

exports.getAllStations = async (req, res) => {
    const stations = await ChargingStation.find();
    res.json(stations);
};
exports.addStation = async (req, res) => {
    const station = new ChargingStation(req.body);
    await station.save();
    res.status(201).json(station);
};
```

**`controllers/sellerController.js`**:

```js
const Seller = require("../models/Seller");

exports.getAllSellers = async (req, res) => {
    const sellers = await Seller.find();
    res.json(sellers);
};
exports.addSeller = async (req, res) => {
    const seller = new Seller(req.body);
    await seller.save();
    res.status(201).json(seller);
};
```

**`controllers/newsController.js`**:

```js
const News = require("../models/News");

exports.getAllNews = async (req, res) => {
    const news = await News.find();
    res.json(news);
};
exports.addNews = async (req, res) => {
    const newsItem = new News(req.body);
    await newsItem.save();
    res.status(201).json(newsItem);
};
```

#### **4. Routes:**

**`routes/chargingStationRoutes.js`**:

```js
const express = require("express");
const {
    getAllStations,
    addStation,
} = require("../controllers/chargingStationController");
const router = express.Router();

router.get("/", getAllStations);
router.post("/", addStation);

module.exports = router;
```

**`routes/sellerRoutes.js`**:

```js
const express = require("express");
const { getAllSellers, addSeller } = require("../controllers/sellerController");
const router = express.Router();

router.get("/", getAllSellers);
router.post("/", addSeller);

module.exports = router;
```

**`routes/newsRoutes.js`**:

```js
const express = require("express");
const { getAllNews, addNews } = require("../controllers/newsController");
const router = express.Router();

router.get("/", getAllNews);
router.post("/", addNews);

module.exports = router;
```

#### **5. Scraping and Cron Jobs**:

**`services/scraper.js`**:

```js
const axios = require("axios");
const cheerio = require("cheerio");

// Example function to scrape news data
async function scrapeEVNews() {
    const { data } = await axios.get("https://ev-news-site.com");
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

module.exports = { scrapeEVNews };
```

**`services/cronService.js`**:

```js
const cron = require("node-cron");
const { scrapeEVNews } = require("./scraper");
const News = require("../models/News");

cron.schedule("0 0 * * *", async () => {
    const news = await scrapeEVNews();
    await News.insertMany(news);
    console.log("News updated!");
});
```

#### **6. Authentication Middleware**:

**`middlewares/auth.js`**:

```js
const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
};
```

---

### **Documentation (README.md)**:

````
# EV-Nepal

## Description
EV-Nepal is an application that aggregates and displays Electric Vehicle (EV) related information, such as charging stations, sellers, news, and events in Nepal. This app scrapes data from various sources and offers real-time updates.

## Features
- Display EV charging stations, sellers, and brands.
- Provide news and event updates.
- User authentication for reviews and feedback.
- Scheduled web scraping.

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Git

### Setup
1. Clone the repository.
   ```bash
   git clone https://github.com/your-username/ev-nepal.git
   cd ev-nepal
````

2. Install dependencies.
    ```bash
    npm install
    ```
3. Create `.env` file and add the following:
    ```
    MONGO_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
    ```
4. Start the server.
    ```bash
    npm run dev
    ```

## API Endpoints

-   `GET /api/charging-stations`: Retrieve all charging stations.
-   `POST /api/charging-stations`: Add new charging station.
-   `GET /api/sellers`: Retrieve all sellers.
-   `POST /api/sellers`: Add new seller.
-   `GET /api/news`: Retrieve latest EV news.

## License

MIT

```

---

This structure and code form the basis of a large-scale EV information app in Nepal built with Node.js, MongoDB
```
