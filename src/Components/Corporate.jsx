import React from "react";
import corporate1 from "../assets/Corporate/corporate1.png";
import corporate2 from "../assets/Corporate/corporate2.jpg";
import corporate3 from "../assets/Corporate/corporate3.jpg";
import corporate4 from "../assets/Corporate/corporate4.jpg";
import corporate5 from "../assets/Corporate/corporate5.jpg";
import corporate6 from "../assets/Corporate/corporate6.jpg";

export default function Corporate() {
    return (
        <section className="w-full bg-white py-30 px-4 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
                    Corporate Events Gallery
                </h2>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="grid gap-4">
                        <img
                            className="h-auto w-full rounded-lg object-cover object-center"
                            src={corporate1}
                            alt="Corporate Event 1"
                        />
                        <img
                            className="h-auto w-full rounded-lg object-cover object-center"
                            src={corporate2}
                            alt="Corporate Event 2"
                        />
                    </div>
                    <div className="grid gap-4">
                        <img
                            className="h-auto w-full rounded-lg object-cover object-center"
                            src={corporate3}
                            alt="Corporate Event 3"
                        />
                    </div>
                    <div className="grid gap-4">
                        <img
                            className="h-auto w-full rounded-lg object-cover object-center"
                            src={corporate4}
                            alt="Corporate Event 4"
                        />
                        <img
                            className="h-auto w-full rounded-lg object-cover object-center"
                            src={corporate5}
                            alt="Corporate Event 5"
                        />
                    </div>
                    <div className="grid gap-4">
                        <img
                            className="h-auto w-full rounded-lg object-cover object-center"
                            src={corporate6}
                            alt="Corporate Event 6"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
