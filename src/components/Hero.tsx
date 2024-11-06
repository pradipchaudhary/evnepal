const Hero = () => {
    return (
        <section className="relative bg-transparent py-20 md:py-32">
            <div className="container mx-auto px-6 lg:px-12 text-center md:max-w-4xl rounded-lg p-10">
                {/* Main Headline */}
                <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-muted-foreground sm:text-7xl text-gray-900">
                    Real-Time Electric Vehicle Data and Resources
                </h1>
                {/* text-center text-3xl font-medium text-gray-900 dark:text-gray-50
                sm:text-6xl */}
                {/* Subtitle */}
                <p className="mt-6 text-center text-lg leading-6 text-gray-600 md:max-w-2xl">
                    Access real-time insights on EV charging stations, brands,
                    sellers, and the latest news about EVs across Nepal.
                </p>
                {/* Call-to-Action Buttons */}

                <div className="mt-10">
                    <a
                        href="#explore"
                        className="bg-black text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
                    >
                        Get Started
                    </a>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="absolute w-48 h-48 bg-gray-300 opacity-10 rounded-full blur-3xl top-10 left-20"></div>
                <div className="absolute w-32 h-32 bg-gray-300 opacity-10 rounded-full bottom-10 right-20 blur-3xl"></div>
            </div>
        </section>
    );
};

export default Hero;
