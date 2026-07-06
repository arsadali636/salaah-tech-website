"use client";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import React from 'react';
import Image from 'next/image';

import img1 from "@/assets/upaj.png";
import img2 from "@/assets/buyume.png";
import img3 from "@/assets/ramainin.png";
import img4 from "@/assets/toybiz.png";
import img5 from "@/assets/naguosnook.png";

import playStore from "@/assets/playStore.png";
import appStore from "@/assets/appleStore.png";
import Link from 'next/link';

const Portfolio = () => {
    const projects = [
        {
          title: "UPAJ - Kisan ka Super App",
          description: `Upaj is an AI-powered agricultural platform designed to help farmers optimize their crop yield.
    It provides real-time weather updates, soil analysis, and predictive insights for better farming decisions.`,
          images: [img1],
          playLink: "https://play.google.com/store/search?q=upaj&c=apps&hl=en_IN",
          appleLink: "https://apps.apple.com/in/app/upaj-kisan-ka-super-app/id6450405730",
          type: "app"
        },
        {
          title: "BuyUMe - Learn & Earn Online",
          description: `Buyume is an advanced e-commerce platform designed to enhance online shopping experiences.
    It offers AI-powered recommendations to help users discover products based on their preferences.`,
          images: [img2],
          playLink: "https://play.google.com/store/search?q=Buyume&c=apps&hl=en_IN",
          appleLink: "https://apps.apple.com/in/app/buyume/id1574456662",
          type: "app"
        },
        {
          title: "Ramaini Register Mobile App",
          description: `Ramainin is a spiritual platform dedicated to promoting dowry-free marriages and selfless service.
    It connects like-minded individuals who believe in simple, values-based wedding traditions.`,
          images: [img3],
          playLink: "https://play.google.com/store/apps/details?id=org.jagatgururampalji.ramaini&hl=en_IN",
          appleLink: "",
          type: "app"
        },
        {
          title: "Toy Biz",
          description: `Toy Biz is an innovative exhibition platform designed for large-scale events and trade shows in stadiums.
    It provides a dynamic space for businesses to showcase their products, services, and latest innovations.`,
          images: [img4],
          playLink: "https://play.google.com/store/apps/details?id=com.toybizexhibition&hl=en_IN",
          appleLink: "https://apps.apple.com/in/app/toy-biz/id6502781969",
          type: "app"
        },
        {
          title: "Neighbrsnook",
          description: `Neighbrsnook is a social networking platform designed to connect local communities.
    It helps neighbors share updates, organize events, and collaborate on community projects.`,
          images: [img5],
          webLink: "https://neighbrsnook.com/",
          type: "website"
        },
      ];

    return (
        <div className="container mt-10 mb-20 flex flex-col gap-16">
            {/* Section Title */}
            <div className="text-center max-w-screen-md m-auto">
                <h1 className="text-3xl font-bold mb-2 text-primary">Our Portfolio</h1>
                <p>Explore our diverse portfolio showcasing innovative projects and cutting-edge solutions tailored to meet our clients' unique business needs. We take pride in delivering exceptional results that drive success.</p>
            </div>

            <div>
                <Swiper
                    className=""
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000 }}
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.title}>
                           <div key={project.title} className="portfolio-item bg-white rounded-3xl shadow-lg border m-5 overflow-hidden flex justify-center gap-10 sm:flex-row flex-col p-5">
            <div className='sm:w-1/3 w-full'>
              <Image src={project.images[0]} width={350} height={350} alt={project.title} className="w-full h-[350px] object-contain" />
            </div>
            <div className="p-4 sm:w-2/3 w-full">
              <h3 className="text-2xl font-bold mb-2 text-primary">{project.title}</h3>
              <p className="text-sm leading-relaxed">{project.description}</p>
              {project.type === 'app' ? (
                <div className="mt-5">
                  <h3 className="text-lg font-semibold">Check it out on Apple & Play Store</h3>
                  <div className="flex gap-5 mt-3">
                    {project.playLink && (
                      <a href={project.playLink} target="_blank" rel="noopener noreferrer">
                        <Image className="h-auto w-[150px] p-[1px] rounded-lg bg-white" src={playStore} alt="Play Store" width={150} height={45} priority />
                      </a>
                    )}
                    {project.appleLink && (
                      <a href={project.appleLink} target="_blank" rel="noopener noreferrer">
                        <Image className="h-auto w-[150px] p-[1px] rounded-lg bg-white" src={appStore} alt="App Store" width={150} height={45} priority />
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <a href={project.webLink} target="_blank" rel="noopener noreferrer">

                  <button className="mt-5 px-12 py-2 border-[2px] border-[#000851] text-[#000851] font-medium hover:bg-[#000851] hover:text-white">
                    Visit Website
                  </button>
                  </a>
            
              )}
            </div>
          </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Portfolio;
