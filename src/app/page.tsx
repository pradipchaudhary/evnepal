import Brands from "@/components/Brands";
import ChargingStations from "@/components/ChargingStations";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import News from "@/components/News";
import Sellers from "@/components/Sellers";

export default function Home() {
    return (
        <>
            <Hero />
            <LogoTicker />
            <Features />
            <ChargingStations />
            <Brands />
            <Sellers />
            <News />
        </>
    );
}

// Simple icon components (you can replace these with your own icons)
