import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "EV Nepal - Real-Time Electric Vehicle Data and Resources",
    description:
        "Stay updated with real-time information on electric vehicles in Nepal, including charging stations, sellers, brands, prices, and news, powered by Node.js and MongoDB.",
    keywords: [
        "EV Nepal",
        "electric vehicles",
        "Nepal EV data",
        "charging stations Nepal",
        "EV brands Nepal",
        "real-time EV information",
        "EV news Nepal",
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://evnepal.com", // Adjust to the final deployed URL if different
        title: "EV Nepal - Real-Time Electric Vehicle Data and Resources",
        description:
            "Explore comprehensive, up-to-date information on electric vehicles in Nepal, including charging locations, brands, pricing, and more.",
        images: [
            {
                url: "https://evnepal.com/banner.jpg", // Ensure a full URL for the image
                width: 1200,
                height: 630,
                alt: "EV Nepal Cover Image - Real-Time EV Data in Nepal",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@EV_Nepal", // Replace with Twitter handle if available
        title: "EV Nepal - Real-Time Electric Vehicle Data",
        description:
            "Access real-time data on EV charging, brands, prices, and news in Nepal.",
        images: "https://evnepal.com/banner.jpg", // Full URL for Twitter image preview
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased `}
            >
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
                </div>
                <Header />
                {children}
            </body>
        </html>
    );
}
