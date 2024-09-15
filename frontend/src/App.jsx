import React from "react";

const App = () => {
    // Sample data to simulate dynamic content
    const chargingStations = [
        {
            name: "Kathmandu EV Station",
            location: "Kathmandu",
            availablePorts: 5,
        },
        {
            name: "Lalitpur Charging Hub",
            location: "Lalitpur",
            availablePorts: 2,
        },
    ];

    const sellers = [
        { name: "Nepal EV Motors", location: "Pokhara" },
        { name: "GreenWheels Nepal", location: "Kathmandu" },
    ];

    const news = [
        { title: "New EV Model Launched in Nepal", date: "2024-09-10" },
        { title: "Government EV Subsidies Extended", date: "2024-08-30" },
    ];

    const events = [
        {
            title: "Nepal EV Expo 2024",
            date: "2024-11-05",
            location: "Kathmandu",
        },
        { title: "EV Future Talks", date: "2024-10-20", location: "Lalitpur" },
    ];

    // Function to display charging stations
    function displayChargingStations() {
        const chargingList = document.getElementById("charging-list");
        chargingStations.forEach((station) => {
            const stationDiv = document.createElement("div");
            stationDiv.classList.add("station");

            stationDiv.innerHTML = `
          <h3>${station.name}</h3>
          <p>Location: ${station.location}</p>
          <p>Available Ports: ${station.availablePorts}</p>
      `;
            chargingList.appendChild(stationDiv);
        });
    }

    // Function to display sellers
    function displaySellers() {
        const sellersList = document.getElementById("sellers-list");
        sellers.forEach((seller) => {
            const sellerDiv = document.createElement("div");
            sellerDiv.classList.add("seller");

            sellerDiv.innerHTML = `
          <h3>${seller.name}</h3>
          <p>Location: ${seller.location}</p>
      `;
            sellersList.appendChild(sellerDiv);
        });
    }

    // Function to display news
    function displayNews() {
        const newsList = document.getElementById("news-list");
        news.forEach((article) => {
            const newsDiv = document.createElement("div");
            newsDiv.classList.add("news");

            newsDiv.innerHTML = `
          <h3>${article.title}</h3>
          <p>Date: ${article.date}</p>
      `;
            newsList.appendChild(newsDiv);
        });
    }

    // Function to display events
    function displayEvents() {
        const eventsList = document.getElementById("events-list");
        events.forEach((event) => {
            const eventDiv = document.createElement("div");
            eventDiv.classList.add("event");

            eventDiv.innerHTML = `
          <h3>${event.title}</h3>
          <p>Date: ${event.date}</p>
          <p>Location: ${event.location}</p>
      `;
            eventsList.appendChild(eventDiv);
        });
    }

    // Initialize the app by populating data
    document.addEventListener("DOMContentLoaded", () => {
        displayChargingStations();
        displaySellers();
        displayNews();
        displayEvents();
    });

    return (
        <div>
            <header>
                <h1>EV-Nepal</h1>
                <p>Your hub for Electric Vehicle (EV) information in Nepal</p>
            </header>

            <main>
                <section id="charging-stations">
                    <h2>Charging Stations</h2>
                    <div id="charging-list"></div>
                </section>

                <section id="sellers">
                    <h2>EV Sellers</h2>
                    <div id="sellers-list"></div>
                </section>

                <section id="news">
                    <h2>Latest News</h2>
                    <div id="news-list"></div>
                </section>

                <section id="events">
                    <h2>Upcoming Events</h2>
                    <div id="events-list"></div>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 EV-Nepal. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
