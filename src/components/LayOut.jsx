import { React, useState } from "react";
import { AiOutlineLogout, AiOutlineUser, AiOutlineTool, AiOutlineBarChart, AiOutlineClose } from 'react-icons/ai'
import { FaUsers, FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsInstagram } from 'react-icons/bs'
import { FaTelegram } from 'react-icons/fa'
import { SiWhatsapp } from 'react-icons/si'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const LayOut = ({ children }) => {

    const [showNavbar, setShowNavbar] = useState(true)
    const [select, setSelect] = useState(false)

    const handleSelect = () => {
        setSelect(!select)
    }

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/')
        window.location.reload()
        console.log('Выход выполнен успешно');
    };



    const navigate = useNavigate();

    return (
        <>
            <button onClick={handleShowNavbar} className="rounded bg-black/50 p-2 inline-flex fixed top-1 left-1 sm:hidden m-4">
                <RxHamburgerMenu className="text-white" />
            </button>
            <aside className={`border-r border-r-gray-500 fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${showNavbar ? '-translate-x-full ' : ''} sm:translate-x-0`}>
                <div className="h-full px-3 py-4 overflow-y-auto bg-slate-900 relative text-white">
                    <div className="flex justify-between">
                        <div className="flex items-center pl-2.5 mb-5">
                            {/* <FcRegisteredTrademark size={35} /> */}
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Fashion Rynok</span>
                        </div>
                        <div className="sm:hidden inline-flex" onClick={handleShowNavbar}><AiOutlineClose /></div>
                    </div>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavLink to='/home-page' className="flex items-center p-2 rounded-lg hover:text-black hover:bg-gray-100">
                                <AiOutlineBarChart size={25} />
                                <span className="ml-3">Статистика</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className="flex items-center p-2 rounded-lg hover:text-black hover:bg-gray-100">
                                <BsInstagram size={25} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Инстаграм слот</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/telegram' className="flex items-center p-2 rounded-lg hover:text-black hover:bg-gray-100">
                                <FaTelegram size={25} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Телеграмм слот</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/whatsapp' className="flex items-center p-2 rounded-lg hover:text-black hover:bg-gray-100">
                                <SiWhatsapp size={25} />
                                <span className="flex-1 ml-3 whitespace-nowrap">whatsapp слот</span>
                            </NavLink>
                        </li>
                        <li onClick={handleSelect}>
                            <div className="flex items-center p-2 rounded-lg hover:text-black hover:bg-gray-100 cursor-pointer">
                                <FaUsers size={25} />
                                <span className="flex-1 ml-3 whitespace-nowrap flex items-center">Отделы {select ? <FaAngleUp className="ml-2" /> : <FaAngleDown className="ml-2" />}</span>
                            </div>
                            {
                                select && <div className="flex flex-col w-full gap-2 items-center">
                                    <div><NavLink className="p-2 rounded-lg hover:text-black hover:bg-gray-100">Монако</NavLink></div>
                                    <div><NavLink className="p-2 rounded-lg hover:text-black hover:bg-gray-100">Лидер</NavLink></div>
                                    <div><NavLink className="p-2 rounded-lg hover:text-black hover:bg-gray-100">Феникс</NavLink></div>
                                    <div><NavLink className="p-2 rounded-lg hover:text-black hover:bg-gray-100">Туран</NavLink></div>
                                </div>
                            }

                        </li>
                        <li>
                            <NavLink className="flex items-center p-2 rounded-lg hover:text-black hover:bg-gray-100">
                                <AiOutlineUser size={25} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Коллектив</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/settings' className="flex items-center p-2 rounded-lg hover:text-black hover:bg-gray-100">
                                <AiOutlineTool size={25} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Настройки</span>
                            </NavLink>
                        </li>
                        <li>
                            <div onClick={handleLogout} className="flex items-center p-2 rounded-lg hover:text-black hover:bg-gray-100 cursor-pointer">
                                <AiOutlineLogout size={25} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Выйти</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="sm:ml-64 p-2">
                {children}
            </div>
        </>
    )
}