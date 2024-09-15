# [EV Nepal](#ev-nepal)

EV Nepal is a comprehensive platform for gathering and displaying information about Electric Vehicles (EVs) in Nepal. The application scrapes data from various websites to provide real-time information on EV charging stations, sellers, available brands, charge prices, news, and events.

## Features

- **Real-Time Data**: Scrape and display up-to-date information about EVs in Nepal.
- **Charging Stations**: Information on the locations and details of EV charging stations.
- **Sellers**: List of EV sellers and their contact details.
- **Brands**: Information about different EV brands available in Nepal.
- **Charge Prices**: Details on the pricing for EV charging.
- **News & Events**: Latest news and upcoming events related to EVs.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Web Scraping**: [Puppeteer](https://github.com/puppeteer/puppeteer) or [Cheerio](https://github.com/cheeriojs/cheerio)
- **Frontend**: React.js
- **Styling**: Tailwind CSS

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/pradipchaudhary/evnepal.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd evnepal
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the root directory and add your configuration details. Example:

    ```env
    MONGO_URI=your_mongodb_uri
    PORT=3000
    ```

5. **Start the application:**

    ```bash
    npm start
    ```

## Usage

1. **Access the application:**

    Open your browser and go to `http://localhost:3000` to view the application.

2. **Explore the features:**

    Navigate through different sections to find information on charging stations, sellers, brands, charge prices, and more.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please open an issue on the [GitHub repository](https://github.com/pradipchaudhary/evnepal) or contact me at [your-email@example.com](mailto:your-email@example.com).

