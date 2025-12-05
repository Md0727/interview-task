import React from "react";

export default function KeyMaterialsSection() {
    const materials = [
        {
            image: "https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/stainless-steel.webp",
            title: "Material One",
            icon: "https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/monarch/Icon.svg",
        },
        {
            image: "https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/Sapphirecrystal.webp",
            title: "Material Two",
            icon: "https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/monarch/Icon.svg",
        },
        {
            image: "https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/Suede.png",
            title: "Material Three",
            icon: "https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/monarch/Icon.svg",
        },
    ];

    return (
        <section
            className="w-full py-16 bg-black text-white"
            style={{
                background:
                    "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
            }}
        >
            <div className="max-w-6xl mx-auto px-4">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-medium text-center">
                    Key Materials
                </h2>

                {/* Subtitle */}
                <p className="text-center max-w-[450px] mx-auto mt-2 text-white/70">
                    Built from elements that blend simplicity with strength
                </p>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 md:w-[80%] mx-auto">

                    {materials.map((m, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center cursor-pointer hover:opacity-90 transition"
                        >
                            <img
                                src={m.image}
                                alt={m.title}
                                className="w-[140px] h-[140px] object-cover rounded-lg"
                            />

                            <h3 className="mt-4 text-center text-lg">
                                {m.title}
                            </h3>

                            <img
                                src={m.icon}
                                alt="icon"
                                className="mt-3 w-6 h-6 opacity-80"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
