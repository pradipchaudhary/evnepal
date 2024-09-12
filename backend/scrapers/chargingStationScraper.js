// scrapers/chargingStationScraper.js
import axios from "axios";
import cheerio from "cheerio";
import ChargingStation from "../models/ChargingStation.js";

export const scrapeChargingStations = async () => {
    const url = "https://example.com/charging-stations";
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    $(".station").each(async (index, element) => {
        const name = $(element).find(".name").text();
        const location = $(element).find(".location").text();
        const price = parseFloat(
            $(element).find(".price").text().replace("NPR", "").trim()
        );
        const vatIncludedPrice = price * 1.13; // Assuming VAT is 13%

        const newStation = new ChargingStation({
            name,
            location,
            price,
            vatIncludedPrice,
        });
        await newStation.save();
    });
};
