import { LayOut } from "../components/LayOut";
import { AiFillInstagram, } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'
import { NavLink } from "react-router-dom";

export default function EditSlots() {
    return (
        <LayOut>
            <div>
                <h1 className="text-center m-10">Редактирование слотов</h1>
            </div>
            <div className="flex justify-around flex-col lg:flex-row justify-center items-center gap-4">
                <NavLink to='edit-instagram' className="w-[200px] h-[150px] border flex flex-col justify-center items-center rounded-[6px] cursor-pointer">
                    <AiFillInstagram size={50} />
                    <h1 className="text-sm">Редактировать <br /> инстаграм слот</h1>
                </NavLink>
                <NavLink to='edit-telegram' className="w-[200px] h-[150px] border flex flex-col justify-center items-center rounded-[6px] cursor-pointer">
                    <FaTelegram size={45} />
                    <h1 className="text-sm">Редактировать <br /> телеграм слот</h1>
                </NavLink>
                <NavLink to='edit-whatsapp' className="w-[200px] h-[150px] border flex flex-col justify-center items-center rounded-[6px] cursor-pointer">
                    <RiWhatsappFill size={50} />
                    <h1 className="text-sm">Редактировать <br /> whatsapp слот</h1>
                </NavLink>
            </div>
        </LayOut>
    )
}