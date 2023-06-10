import { React, useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { BsTelegram } from 'react-icons/bs'

export default function ShowTableTg() {

    const [responseData, setResponseData] = useState([]);
    const url = 'https://fashion-backend-r8hh.onrender.com';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url + '/test/telegramSlot');
                setResponseData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
    }, [])

    return (
        <div className="">
            <h1 className="title m-5 flex items-center justify-center">
                <div className='flex flex-col justify-center items-center'><BsTelegram size={50} />Телеграм слот</div>
            </h1>
            <div className='flex gap-5 items-center'>
                <div className='w-[150px] h-[40px] bg-emerald-300'></div><p>- Свободные слоты</p>
            </div>
            <div className='flex gap-5 items-center mt-5 mb-5'>
                <div className='w-[150px] h-[40px] bg-rose-300'></div><p>- Слот недоступен</p>
            </div>
            <table className='border border-collapse text-center mb-10'>
                <thead className='bg-fuchsia-950'>
                    <tr>
                        <th className='lg:text-[14px] text-[8px] text-white p-2 border'><BsTelegram /></th>
                        <th className='lg:text-[14px] text-[8px] text-white w-[30px] border'>№</th>
                        <th className='lg:text-[14px] text-[8px] text-white w-[300px] border'>Монако</th>
                        <th className='lg:text-[14px] text-[8px] text-white w-[300px] border'>Лидер</th>
                        <th className='lg:text-[14px] text-[8px] text-white w-[300px] border'>Феникс</th>
                        <th className='lg:text-[14px] text-[8px] text-white w-[300px] border'>Туран</th>
                    </tr>
                </thead>
                <tbody className='lg:text-sm text-[6px]'>
                    {
                        responseData.map(elem => (
                            <tr key={elem._id} data-elem={elem} className='border'>
                                {elem.num === 1 && <th rowSpan='10' className='bg-sky-100/40 text-[6px] lg:text-[10px]'><a href={`https://t.me/${elem.account}`}>{elem.account}</a></th>}
                                <td className='lg:text-[12px] border text-[6px]'>{elem.num}</td>
                                <td className={`lg:text-[12px] text-[6px] ${elem.monako === 'слот недоступен' ? 'bg-rose-300' : elem.monako === 'доступный слот' ? 'bg-emerald-300' : ''} border`}>
                                    {elem.monako}
                                </td>
                                <td className={`lg:text-[12px] text-[6px] ${elem.lider === 'слот недоступен' ? 'bg-rose-300' : elem.lider === 'доступный слот' ? 'bg-emerald-300' : ''} border`}>
                                    {elem.lider}
                                </td>
                                <td className={`lg:text-[12px] text-[6px] ${elem.fenix === 'слот недоступен' ? 'bg-rose-300' : elem.fenix === 'доступный слот' ? 'bg-emerald-300' : ''} border`}>
                                    {elem.fenix}
                                </td>
                                <td className={`lg:text-[12px] text-[6px] ${elem.turan === 'слот недоступен' ? 'bg-rose-300' : elem.turan === 'доступный слот' ? 'bg-emerald-300' : ''} border`}>
                                    {elem.turan}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
