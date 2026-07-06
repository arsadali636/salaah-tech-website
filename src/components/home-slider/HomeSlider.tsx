"use client";
import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';

import bImg1 from "@/assets/banners/mobile.png";
import bImg2 from "@/assets/banners/website.png";

function HomeSlider() {
    return (
        <div className="sm:h-[calc(100vh-170px)] h-[calc(100vh-70px)] w-screen flex items-center justify-center bg-gray-100">
            <div className="h-full w-full">
                <Swiper
                    // style={{ "--swiper-pagination-color": "#ef7d00" }} // Set the bullet color
                    className="h-full"
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    color="red"
                    // navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{ delay: 2000 }}
                >
                    <SwiperSlide>
                        <div className="main-div h-full relative overflow-hidden">
                            <div className="container flex items-center justify-between gap-5 sm:pt-5 pt-12 py-5 w-full h-full sm:flex-row flex-col-reverse">
                                <div className="sm:w-1/2 sm:h-[unset] h-1/2 text-center sm:text-left sm:block flex flex-col justify-center items-center">
                                    <h1 className="sm:text-4xl text-2xl text-primary font-bold sm:mb-4 mb-1">App Development Services</h1>
                                    <h3 className="sm:text-xl text-lg text-gray-600 font-bold mb-2">Innovative Solutions for Modern Businesses</h3>
                                    {/* <p className="sm:text-lg text-md">
              Empower your business with cutting-edge mobile app development services that redefine user experience. Our team specializes in creating high-quality, feature-rich apps tailored to your business objectives. Whether it’s iOS or Android, we deliver solutions designed to boost engagement and streamline your digital strategy.
              </p> */}
                                    <p className="sm:text-lg text-md">
                                        Empower your business with cutting-edge app development services. Build high-quality, feature-rich mobile apps to meet your goals and enhance user experience.
                                    </p>
                                    <Link href="/app-development">
                                        <button className="mt-5 px-12 py-2 border-[2px] border-[#000851] text-[#000851] font-medium hover:bg-[#000851] hover:text-white">
                                            Click Me
                                        </button>
                                    </Link>
                                </div>
                                <div className="sm:w-1/2 sm:flex sm:justify-center sm:items-center h-1/2 sm:h-full">
                                    <Image className="object-contain w-full h-full sm:h-[100%]" src={bImg1} height={0} width={0} alt="image1" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main-div h-full relative overflow-hidden">
                            <div className="container flex items-center justify-between gap-5 sm:pt-5 pt-12 py-5 w-full h-full sm:flex-row flex-col-reverse">
                                <div className="sm:w-1/2 sm:h-[unset] h-1/2 text-center sm:text-left sm:block flex flex-col justify-center items-center">
                                    <h1 className="sm:text-4xl text-2xl text-primary font-bold sm:mb-4 mb-1">Web Development Services</h1>
                                    <h3 className="sm:text-xl text-lg text-gray-600 font-bold mb-2">Transforming Ideas into Digital Excellence</h3>
                                    {/* <p className="sm:text-lg text-md">
            Create stunning, responsive, and SEO-friendly websites customized to meet your unique business requirements. Our expert team focuses on building scalable web solutions that not only enhance your online presence but also drive growth. From intuitive designs to robust functionality, we ensure your website delivers an exceptional user experience.
              </p> */}
                                    <p className="sm:text-lg text-md">
                                        Create stunning, responsive, and SEO-friendly websites tailored to your business needs. Enhance your online presence with scalable web solutions.
                                    </p>
                                    <Link href="/web-development">
                                        <button className="mt-5 px-12 py-2 border-[2px] border-[#000851] text-[#000851] font-medium hover:bg-[#000851] hover:text-white">
                                            Click Me
                                        </button>
                                    </Link>
                                </div>
                                <div className="sm:w-1/2 sm:flex sm:justify-center sm:items-center h-1/2 sm:h-full">
                                    <Image className="object-contain w-full h-full sm:h-[100%]" src={bImg2} height={0} width={0} alt="image1" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
        <div className="main-div h-full relative overflow-hidden">
          <div className="container flex items-center justify-between gap-5 sm:pt-5 pt-12 py-5 w-full h-full sm:flex-row flex-col-reverse">
            <div className="sm:w-1/2 sm:h-[unset] h-1/2 text-center sm:text-left sm:block flex flex-col justify-center items-center">
            <h1 className="sm:text-4xl text-2xl text-primary font-bold sm:mb-4 mb-1">Flutter App Development Services</h1>
            <h3 className="sm:text-xl text-lg text-gray-600 font-bold mb-2">Cross-Platform Apps for Maximum Impact</h3>
            // <p className="sm:text-lg text-md">
            //   Develop visually stunning and high-performance apps with Flutter, the leading cross-platform framework. Our team leverages a single codebase to build robust apps with native-like functionality, ensuring faster development and consistent performance. With Flutter, we help your business create engaging digital experiences for both iOS and Android platforms.
            //   </p>
            <p className="sm:text-lg text-md">
              Build robust, visually stunning cross-platform apps with Flutter. Leverage a single codebase for native performance and exceptional user experience.
              </p>
              <button className="mt-5 px-12 py-2 border-[2px] border-[#000851] text-[#000851] font-medium hover:bg-[#000851] hover:text-white">
                <Link href="">Click Me</Link>
              </button>
            </div>
            <div className="sm:w-1/2 sm:flex sm:justify-center sm:items-center h-1/2 sm:h-full">
              <Image className="object-contain w-full h-full sm:h-[75%]" src={mobileImg} height={0} width={0} alt="image1" />
            </div>
          </div>
        </div>
      </SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    )
}

export default HomeSlider