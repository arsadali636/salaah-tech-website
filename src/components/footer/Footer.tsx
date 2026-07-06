import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/assets/logo2.png"
import playSore from "@/assets/playStore.png"
import appStore from "@/assets/appleStore.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


function Footer() {
    const company: any[] = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About', link: '/about' },
        // { id: 3, name: 'How We Work', link: '/contact' },
        // { id: 4, name: 'What Our Clients Say', link: '/contact' },
        { id: 5, name: 'Contact Us', link: '/contact' },
        { id: 6, name: 'Privacy Policy', link: '/privacy-policy' },
        { id: 7, name: 'Terms & Conditions', link: '/terms-conditions' },
    ]
    const services: any[] = [
        { id: 1, name: 'Mobile App Developement Services', link: '/app-development' },
        { id: 2, name: 'Web Development Services', link: '/web-development' },
        { id: 3, name: 'Flutter App Development Services', link: '/app-development' },
        // { id: 4, name: 'ERP Software Development Services', link: '/' },
        // { id: 5, name: 'Generative AI Development Company', link: '/' },
    ]
    const industries: any[] = [
        { id: 1, name: 'Healthcare', link: '' },
        { id: 2, name: 'E-commerce', link: '' },
        { id: 3, name: 'Education', link: '' },
        { id: 4, name: 'Real Estate', link: '/' },
        { id: 5, name: 'Tourism and Travel', link: '' },
    ]

    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <div className="bg-[#ecebeb] border-t">
            <div className='container'>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 py-10">
                    {/* <div className='flex flex-col gap-4'>
                        <h4 className=' text-lg sm:text-xl font-bold'>Download App</h4>
                        <div className='flex flex-col gap-5'>
                                <a href="https://play.google.com/store/apps/details?id=com.app.cabswalle&hl=en_IN" target="_blank">
                                    <Image className="h-auto w-[150px] p-[1px] rounded-lg bg-white" src={playSore} alt="logo" width={150} height={45} priority />
                                </a>
                        
                                <a href="https://apps.apple.com/in/app/cabswale/id6464491782" target="_blank">
                                    <Image className="h-auto w-[150px] p-[1px] rounded-lg bg-white" src={appStore} alt="logo" width={150} height={45} priority />
                                </a>
                        </div>
                    </div> */}
                    <div className="flex flex-col gap-4">
                        <h4 className=' text-lg font-bold border-b-2 border-black w-fit'>Company</h4>
                        <ul className="flex flex-col gap-4">
                            {
                                company.map(item => (
                                    <li key={item.id} className=' cursor-pointer transition duration-300 hover:text-primary'>
                                        <Link href={item.link}>{item.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className=' text-lg font-bold border-b-2 border-black w-fit'>Services</h4>
                        <ul className="flex flex-col gap-4">
                            {
                                services.map(item => (
                                    <li key={item.id} className=' cursor-pointer transition duration-300 hover:text-primary'>
                                        <Link href={item.link}>{item.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className=' text-lg font-bold border-b-2 border-black w-fit'>Industries</h4>
                        <ul className="flex flex-col gap-4">
                            {
                                industries.map(item => (
                                    <li key={item.id} className=''>
                                        {/* <Link href={item.link}> */}
                                        {item.name}
                                        {/* </Link> */}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className=' text-lg font-bold border-b-2 border-black w-fit'>Follow Us</h4>
                        <ul className="flex gap-4">
                            <li className=' cursor-pointer transition duration-300 hover:text-primary'>
                                <Link href={'https://www.facebook.com/profile.php?id=61573413990778'} target='_blank'><FaFacebookSquare size={28} /></Link>
                            </li>
                            <li className=' cursor-pointer transition duration-300 hover:text-primary'>
                                <Link href={'https://www.instagram.com/salaahtech?igsh=MTdsYmVscXBzZGI4Mw=='} target='_blank' ><FaInstagram size={28} /></Link>
                            </li>
                            {/* <li className=' cursor-pointer transition duration-300 hover:text-primary'>
                                <Link href={''} ><FaLinkedin size={28}/></Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className='border-t-[1px] border-white py-5'>
                    <p className=''>Copyright @{currentYear}. All Rights Reserved by <strong>Salaah Tech</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Footer