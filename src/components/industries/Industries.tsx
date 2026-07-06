import Image from 'next/image'
import React from 'react'

import ecommerce from "@/assets/industries/ecommerce.jpeg";
import education from "@/assets/industries/education.jpeg";
import healthcare from "@/assets/industries/healthcare.jpeg";
import manufacture from "@/assets/industries/manufacture.jpeg";
// import oilGas from "@/assets/industries/oil-gas.webp";
// import realestate from "@/assets/industries/realestate.webp";
import retail from "@/assets/industries/retail.jpeg";
import tour from "@/assets/industries/tour.jpeg";
import blogging from "@/assets/industries/blogging.png";

function Industries() {

    const industries = [
        { name: "E-Commerce", image: ecommerce },
        { name: "Education", image: education },
        { name: "Healthcare", image: healthcare },
        // { name: "Real Estate", image: realestate },
        { name: "Manufacturing", image: manufacture },
        { name: "Tourism and Travel", image: tour },
        { name: "Retail", image: retail },
        // { name: "Oil and gas industry", image: oilGas },
        { name: "Blogging", image: blogging },
    ]

    return (
        <div className="container mt-10 mb-20 flex flex-col gap-16">
            {/* section-title  */}
            <div className="text-center max-w-screen-md m-auto">
                <h1 className="text-3xl font-bold mb-2 text-primary">Industries We Serve</h1>
                <p>We are your best technology partner and gateway to high-performing, scalable, and responsive mobile app services. Your search for the best mobile app development company is finally over. We offer the most scalable and extensible mobile & web app solutions for businesses to gain a competitive edge.</p>
            </div>


            <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-10 gap-5">
                {industries.map((item, index) => (
                    <div
                        key={index}
                        className="relative shadow-md bg-blue-500 text-white flex items-center justify-center flex-col aspect-[3/2] rounded-xl overflow-hidden"
                    >
                        <Image src={item.image} className="w-full h-full object-cover shadow-md transition-transform duration-300 hover:scale-110" width={200} height={200} alt="appImage" />
                        <div className="bg-white font-bold text-primary h-9 absolute bottom-0 left-0 right-0 flex justify-center items-center">{item.name}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Industries