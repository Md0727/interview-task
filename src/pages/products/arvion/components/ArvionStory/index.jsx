import React from "react";
import KeyMaterialsSection from "../KeyMaterialsSection";

export const ArvionStory = () => {
    return (
        <div
            style={{
                backgroundImage:
                    "url('https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/Arvion_desktop.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
            }}
        >
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    opacity: 1,
                    visibility: "visible",
                    pointerEvents: "auto",
                    display: "block",
                }}
            >
                <div className="relative overflow-hidden">

                    <div
                        className="absolute inset-x-0 top-0 h-1/2 pointer-events-none z-0"
                        style={{
                            background:
                                "linear-gradient(180deg, #4A3621 9.11%, rgba(74, 54, 33, 0.00) 53.79%)",
                        }}
                    />

                    <div className="relative flex flex-col md:flex-row items-center md:items-start justify-start px-0 pt-12 md:pt-40 md:px-8 gap-8 md:w-[80%] mx-auto">

                        {/* Mobile Title */}
                        <div className="text-center mb-8 md:hidden">
                            <p className="text-[#FFFFFF61] font-decimal text-[14px] font-medium leading-[135%] uppercase mb-2">
                                IDEATION
                            </p>
                            <h2 className="text-white font-rotoris text-[32px] font-semibold leading-[120%] tracking-[-1.44px] px-4">
                                Where speed meets <br />simplicity and design <br />meets instinct.
                            </h2>
                        </div>

                        {/* Desktop Left */}
                        <div className="hidden md:flex flex-col w-1/2 z-[2] text-left pl-8 md:pt-[40px]">
                            <p className="text-[#FFFFFF61] font-decimal text-[14px] font-medium leading-[135%] uppercase">
                                IDEATION
                            </p>
                            <h2 className="text-white md:mt-[12px] font-rotoris text-[40px] font-semibold leading-[120%] tracking-[-1.44px]">
                                Where speed meets <br />simplicity and <br />design meets instinct.
                            </h2>
                            <p className="text-white/70 mt-[40px] text-lg md:text-[22px] leading-[150%] font-rotoris font-normal">
                                Inspired by classic performance dashboards built around one hand,{" "}
                                <span className="text-white font-semibold">
                                    Arvion features a single hand that reads time as instinctively as velocity.
                                </span>{" "}
                                Timeless, focused design.
                            </p>
                        </div>

                        {/* Desktop Right */}
                        <div className="hidden md:flex flex-col w-1/2 z-[2] items-start">
                            <div className="relative w-full h-[680px] md:h-[500px] lg:h-[440px] z-[1] pointer-events-none overflow-visible">
                                <img
                                    src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/Astonia-speedometer.webp"
                                    alt="speedometer"
                                    className="absolute left-1/2 -translate-x-1/2 top-0 w-[222px] md:w-[215px] lg:w-[265px] h-auto opacity-80 rounded-[8px]"
                                />
                                <img
                                    src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV_sketch_01.webp"
                                    alt="Watch detail"
                                    className="absolute z-20 left-1/2 -translate-x-1/2 top-0 w-[333px] h-auto drop-shadow-xl"
                                    style={{ transform: "translate3d(0%, 173px, 0)" }}
                                />
                            </div>
                        </div>

                        {/* Mobile Images */}
                        <div className="relative w-full md:hidden max-w-5xl mx-auto h-[480px] z-[1] rounded-[8px] pointer-events-none overflow-hidden">
                            <img
                                src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/Astonia-speedometer.webp"
                                alt="speedometer mobile"
                                className="absolute left-1/2 -translate-x-1/2 top-0 w-[222px] h-auto opacity-80 rounded-[8px]"
                            />
                            <img
                                src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV_sketch_01.webp"
                                alt="Watch detail"
                                className="
                                        absolute z-20 left-1/2 -translate-x-1/2 
                                        top-[120px]  
                                        w-[333px] h-auto drop-shadow-xl
                                    "
                            />

                        </div>
                    </div>

                    {/* Mobile Description */}
                    <p className="text-white/70 text-center mt-4 text-lg md:text-[22px] w-[80%] mx-auto leading-[150%] pb-5 md:hidden block">
                        Inspired by classic performance dashboards built around one hand, Arvion features{" "}
                        <span className="text-white font-semibold">
                            a single hand that reads time as instinctively as velocity
                        </span>.
                        Timeless, focused design.
                    </p>

                    {/* Mobile 3 Images Section */}
                    <div className="relative md:hidden w-full h-[680px] z-[1] pointer-events-none overflow-visible">
                        <img
                            src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV2.webp"
                            className="z-10 absolute left-[35%] -translate-x-[40%] top-0 w-[222px] h-auto opacity-80 rounded-[8px]"
                        />
                        <img
                            src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV3.webp"
                            className="absolute z-20 left-[65%] -translate-x-[65%] rounded-[8px] top-0 w-[222px] h-auto drop-shadow-xl"
                        />
                        <img
                            src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV_sketch_02.webp"
                            className="absolute z-0 left-1/2 -translate-x-1/2 top-0 w-[400px] h-auto opacity-70"
                        />
                    </div>

                    {/* ENGINEERING Section */}
                    <div className="relative overflow-hidden mt-10">

                        {/* Mobile Title */}
                        <div className="text-center md:hidden">
                            <p className="text-[#FFFFFF61] font-decimal text-[14px] font-medium leading-[135%] uppercase mb-2">
                                ENGINEERING
                            </p>
                            <h2 className="text-white font-rotoris text-[32px] font-semibold leading-[120%] tracking-[-1.44px]">
                                Powered by <br /> Q-matic™ technology
                            </h2>
                        </div>

                        <div className="relative flex flex-col md:flex-row-reverse items-center justify-start px-0 py-4 md:px-8 gap-12 md:w-[80%] mx-auto">

                            {/* Desktop Title */}
                            <div className="hidden md:flex flex-col justify-center w-1/2 max-w-lg space-y-6 z-[2] text-left pl-8">
                                <p className="text-[#FFFFFF61] font-decimal text-[14px] font-medium leading-[135%] uppercase">
                                    ENGINEERING
                                </p>
                                <h2 className="text-white font-rotoris text-[40px] font-semibold leading-[120%] tracking-[-1.44px]">
                                    Powered by <br /> Q-matic™ technology
                                </h2>
                                <p className="text-white/70 text-lg md:text-[22px] leading-[150%] font-rotoris font-normal">
                                    Our <span className="text-white font-semibold">RSE20 Q-matic™ hybrid calibre</span> features a single hand reads hours like a speedometer.{" "}
                                    <span className="text-white font-semibold">Minute markers every 10 minutes.</span> Date at 3 o'clock. 50m water-resistant. Less is more.
                                </p>
                            </div>

                            {/* Desktop Images */}
                            <div className="relative w-full md:w-[40%] h-[560px] md:h-[580px] lg:h-[610px] pointer-events-none overflow-visible">
                                <img
                                    src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV_sketch_03.webp"
                                    className="z-20 absolute left-[40%] -translate-x-[40%] top-0 w-[286px] md:w-[386px] opacity-80"
                                    style={{ transform: "translate3d(-20%, 5.5px, 0)" }}
                                />
                                <img
                                    src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV4.webp"
                                    className="absolute z-10 left-[65%] -translate-x-[65%] top-0 w-[186px] md:w-[246px] drop-shadow-xl"
                                    style={{ transform: "translate3d(0%, 121.7px, 0)" }}
                                />
                                <img
                                    src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/ARV_sketch_04.webp"
                                    className="absolute z-0 left-1/2 -translate-x-1/2 -top-10 w-[300px] md:w-[500px] opacity-70"
                                    style={{ transform: "translate3d(-11%, 353.7px, 0)" }}
                                />
                            </div>
                        </div>

                        {/* Mobile Description */}
                        <p className="text-white/70 text-center text-lg md:text-[22px] w-[80%] mx-auto leading-[150%] md:hidden block pb-4">
                            Our <span className="text-white font-semibold">RS E20 Q-matic™ hybrid calibre</span> features a single hand reads hours like a speedometer.{" "}
                            <span className="text-white font-semibold">
                                Minute markers every 10 minutes
                            </span>
                            . Date at 3 o'clock. 50m water-resistant. Less is more.
                        </p>
                    </div>
                </div>
            </div>

            <KeyMaterialsSection />
        </div>
    );
};
