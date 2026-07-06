import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { FaCode } from 'react-icons/fa'

import sImg1 from "@/assets/services/app.jpeg";
import sImg2 from "@/assets/services/web.jpeg";
import sImg3 from "@/assets/services/flutter.jpeg";

function OurServices() {
    return (
        <div className="container mt-10 mb-20 flex flex-col gap-16">
            {/* section-title  */}
            <div className="text-center max-w-screen-md m-auto">
                <h1 className="text-3xl font-bold mb-2 text-primary">Our Services</h1>
                <p>We empower businesses with top-notch <span className="text-primary">Mobile and Web App Development Services</span>. Partner with us to create award-winning websites that enhance your business credibility and boost client engagement.</p>
            </div>

            {/* 1st service app dev  */}
            <div className="flex flex-col sm:flex-row items-center gap-10">
                <div className="w-full sm:w-1/4">
                    <Image src={sImg1} className="w-full h-auto rounded-xl shadow-md" width={200} height={200} alt="appImage" />
                </div>
                <div className="w-full sm:w-3/4 flex flex-col gap-5">
                    <h1 className="text-2xl font-bold">
                        Mobile App Development Services</h1>
                    <p>We specialize in delivering award-winning mobile app development services. With extensive experience, we create impactful, digitally transformative, and feature-rich applications tailored to meet your business needs. Whether you need consumer-focused apps or enterprise-level solutions, our expert app developers work closely with you to understand your requirements and seamlessly guide the app development process from ideation to deployment.</p>
                    <div className="max-w-screen-sm grid sm:grid-cols-2 gap-5">
                        <Button variant="outlined" className="justify-start gap-3 capitalize cursor-none pointer-events-none"> <FaCode size={18} />Android App Development</Button>
                        <Button variant="outlined" className="justify-start gap-3 capitalize cursor-none pointer-events-none"> <FaCode size={18} />iOS App Developmentt</Button>
                        <Button variant="outlined" className="justify-start gap-3 capitalize cursor-none pointer-events-none"> <FaCode size={18} />Cross Platform App Development</Button>
                    </div>
                </div>
            </div>

            {/* 2st service web dev  */}
            <div className="flex flex-col sm:flex-row-reverse items-center gap-10">
                <div className="w-full sm:w-1/4">
                    <Image src={sImg2} className="w-full h-auto rounded-xl shadow-md" width={200} height={200} alt="appImage" />
                </div>
                <div className="w-full sm:w-3/4 flex flex-col gap-5">
                    <h1 className="text-2xl font-bold">
                        Website Development Services
                    </h1>
                    <p>
                        We offer customized web development services designed to meet your business needs. Our responsive and SEO-friendly websites are tailored to enhance customer engagement and improve visibility. Whether you need a website to boost interaction or strengthen your online presence, we deliver interactive, scalable, brand-focused, and business-ready solutions. Let us help you create a website that drives results.
                    </p>

                    <div className="max-w-screen-sm grid sm:grid-cols-2 gap-5">
                        <Button variant="outlined" className="justify-start gap-3 capitalize cursor-none pointer-events-none"> <FaCode size={18} />Web Design and Development</Button>
                        <Button variant="outlined" className="justify-start gap-3 capitalize cursor-none pointer-events-none"> <FaCode size={18} />E-commerce Web Development</Button>
                        <Button variant="outlined" className="justify-start gap-3 capitalize cursor-none pointer-events-none"> <FaCode size={18} />PHP Web Development</Button>
                        <Button variant="outlined" className="justify-start gap-3 capitalize cursor-none pointer-events-none"> <FaCode size={18} />React JS Development</Button>
                        <Button variant="outlined" className="justify-start gap-3 capitalize cursor-none pointer-events-none"> <FaCode size={18} />Angular Development</Button>
                        <Button variant="outlined" className="justify-start gap-3 capitalize cursor-none pointer-events-none"> <FaCode size={18} />Next JS Development</Button>
                    </div>
                </div>
            </div>

            {/* 3st service flutter dev  */}
            <div className="flex flex-col sm:flex-row items-center gap-10">
                <div className="w-full sm:w-1/4">
                    <Image src={sImg3} className="w-full h-auto rounded-xl shadow-md" width={200} height={200} alt="appImage" />
                </div>
                <div className="w-full sm:w-3/4 flex flex-col gap-5">
                    <h1 className="text-2xl font-bold">
                        Flutter App Development Services
                    </h1>
                    <p>
                        Flutter is a rapidly growing cross-platform app development framework for creating high-performance native iOS and Android applications. Our Flutter App Development Services help you build robust and visually appealing applications with native-like performance. We specialize in empowering businesses with high-quality and interactive applications. Our skilled Flutter development team excels at building apps using a single codebase while ensuring an exceptional user experience.
                    </p>
                    <div className="max-w-screen-sm grid sm:grid-cols-2 gap-5">
                        <Button variant="outlined" className="justify-start gap-3 capitalize cursor-none pointer-events-none"> <FaCode size={18} />Flutter App UI/UX Design</Button>
                        <Button variant="outlined" className="justify-start gap-3 capitalize cursor-none pointer-events-none"> <FaCode size={18} />Flutter Consultation Services</Button>
                        <Button variant="outlined" className="justify-start gap-3 capitalize cursor-none pointer-events-none"> <FaCode size={18} />Flutter Enterprise App Development</Button>
                        <Button variant="outlined" className="justify-start gap-3 capitalize cursor-none pointer-events-none"> <FaCode size={18} />Flutter App Support & Maintenance</Button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurServices