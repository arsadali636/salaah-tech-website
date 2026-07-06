"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'
import Image from 'next/image'
// import logo1 from "@/assets/salaah-white-logo.png"
import logo1 from "@/assets/salaah-tech-logo-white.png"
import { usePathname } from 'next/navigation'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";



type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Header() {

    const pathName = usePathname();
    const menuItems: any[] = [
        { id: 1, icon: <FaHome size={20} />, name: 'Home', link: '/' },
        { id: 2, icon: <BiSolidCategoryAlt size={20} />, name: 'Portfolio', link: '/portfolio' },
        { id: 3, icon: <FaInfoCircle size={20} />, name: 'About', link: '/about' },
        { id: 4, icon: <IoIosContacts size={20} />, name: 'Contact', link: '/contact' },
    ]

    const [state, setState] = React.useState({ left: false });

    const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='bg-primary h-[75px] flex items-center'>
                <Image className="h-[55px] w-auto" src={logo1} alt="logo" width={150} height={55} priority />
            </div>
            <List>
                {menuItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <Link href={item.link}>
                            <ListItemButton>
                                <ListItemIcon className='min-w-9'>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            {/* <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon className='min-w-9'>
                            <IoLogOut />
                        </ListItemIcon>
                        <ListItemText primary={'Logout'} />
                    </ListItemButton>
                </ListItem>
            </List> */}
        </Box>
    );

    const anchor = 'left';

    return (
        <div className='sticky top-0 z-[999]'>
            <div className="shadow-md bg-gradient-to-r from-[#4b6cb7] to-[#182848] text-white">
                <div className='container'>
                    <div className="header flex justify-between h-[75px] items-center ">
                        <Link href={'/'} className='ml-[-20px]'>
                            <Image className="h-[55px] w-auto" src={logo1} alt="logo" width={150} height={45} priority />
                            {/* <h4 className='text-2xl font-extrabold' style={{fontFamily: "cursive"}}>Salaah</h4> */}
                        </Link>
                        <div className="flex items-center gap-10">
                            <ul className="sm:flex gap-10 hidden">
                                {
                                    menuItems.map(item => (
                                        <div className='group' key={item.id}>
                                            <li className={`font-semibold cursor-pointer transition duration-300 hover:text-white ${pathName === item.link ? 'text-white' : ''}`}>
                                                <Link href={item.link}>{item.name}</Link>
                                            </li>
                                            <div className={`h-[3px] bg-white w-0 group-hover:w-full transition-all duration-300 ${pathName === item.link ? '!w-full' : 'w-0'}`}></div>
                                        </div>
                                    ))
                                }
                            </ul>
                            {/* <button className='bg-white text-primary px-5 py-2 rounded-full font-semibold rounded-br-none'>Download App</button> */}
                        </div>
                        {
                            !state[anchor] ?
                                <div className='sm:hidden'>
                                    <IoMdMenu onClick={toggleDrawer(anchor, true)} size={35} />
                                </div>
                                :
                                <div className='sm:hidden rounded-lg bg-[#ffffff38]'>
                                    <IoClose onClick={toggleDrawer(anchor, false)} size={35} />
                                </div>
                        }
                    </div>
                </div>
            </div>

            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                hideBackdrop={true}
            >
                <div className='close-icon fixed top-[15px] right-[13px] h-10 w-10' onClick={toggleDrawer(anchor, false)}></div>
                {list(anchor)}
            </Drawer>
        </div>
    );
}