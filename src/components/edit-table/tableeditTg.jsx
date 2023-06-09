import { useEffect, useState } from 'react';
import { AiFillEdit, AiOutlinePlus } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import axios from 'axios';


const EditableTg = () => {

    const [inputValues, setInputValues] = useState({});
    const [responseData, setResponseData] = useState([]);
    const url = 'https://fashion-backend-r8hh.onrender.com';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Promise.all(
                responseData.map((elem) =>
                    axios.patch(`${url}/test/telegramSlot/${elem._id}`, {
                        monako: inputValues[elem._id]?.monako || elem.monako,
                        lider: inputValues[elem._id]?.lider || elem.lider,
                        fenix: inputValues[elem._id]?.fenix || elem.fenix,
                        turan: inputValues[elem._id]?.turan || elem.turan,
                    })
                )
            );
            fetchData();
            window.location.reload()
            console.log('Data updated successfully');

            const updatedInputValues = { ...inputValues };
            responseData.forEach((elem) => {
                updatedInputValues[elem._id] = {
                    monako: inputValues[elem._id]?.monako || elem.monako,
                    lider: inputValues[elem._id]?.lider || elem.lider,
                    fenix: inputValues[elem._id]?.fenix || elem.fenix,
                    turan: inputValues[elem._id]?.turan || elem.turan,
                };
            });
            setInputValues(updatedInputValues);

        } catch (error) {
            console.error(error);
        }
    };


    const fetchData = async () => {
        try {
            const response = await axios.get(url + '/test/telegramSlot');
            setResponseData(response.data);

            const initialInputValues = {};
            response.data.forEach(elem => {
                initialInputValues[elem._id] = {
                    monako: elem.monako || "",
                    lider: elem.lider || "",
                    fenix: elem.fenix || "",
                    turan: elem.turan || "",
                };
            });

            setInputValues(initialInputValues);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])


    const addBtn = async (e) => {
        var req = prompt("Напишите Телеграм канал");

        if (req) {
            try {
                const response = await axios.post(url + '/slot/telegram', {
                    account: req
                });
                console.log(response.data);
                window.location.reload()

            } catch (error) {
                console.error(error);
            }
        }
    }

    return (

        <div className="container mx-auto">
            <h1 className="title m-5 text-center">Редактировать таблицу</h1>
            <div className='flex gap-5 items-center'>
                <div className='w-[150px] h-[40px] bg-emerald-300'></div><p>- Свободные слоты</p>
            </div>
            <div className='flex gap-5 items-center mt-5 mb-5'>
                <div className='w-[150px] h-[40px] bg-rose-300'></div><p>- Слот недоступен</p>
            </div>
            <form onSubmit={handleSubmit}>
                <table className='border border-collapse text-center'>
                    <thead className='bg-sky-950'>
                        <tr>
                            <th className='lg:text-[14px] text-[8px] text-white p-2 border'><BsTelegram /></th>
                            <th className='lg:text-[14px] text-[8px] text-white w-[30px] border'>№</th>
                            <th className='lg:text-[14px] text-[8px] text-white w-[300px] border'>Монако</th>
                            <th className='lg:text-[14px] text-[8px] text-white w-[300px] border'>Лидер</th>
                            <th className='lg:text-[14px] text-[8px] text-white w-[300px] border'>Феникс</th>
                            <th className='lg:text-[14px] text-[8px] text-white w-[300px] border'>Туран</th>
                        </tr>
                    </thead>
                    <tbody className='lg:text-sm text-[8px]'>
                        {
                            responseData.map(elem => (
                                <tr key={elem._id} data-elem={elem} className='border'>
                                    {elem.num === 1 && <th rowSpan='10' className='pl-2 pr-2 text-[6px] lg:text-[10px]'>{elem.account}</th>}
                                    <td className='lg:text-[12px] border text-[8px]'>{elem.num}</td>
                                    <td className={`text-[12px] ${inputValues[elem._id]?.monako === 'слот недоступен' ? 'bg-rose-300' : inputValues[elem._id]?.monako === 'доступный слот' ? 'bg-emerald-300' : ''} border`}>
                                        <input
                                            className={`outline-none  w-full text-center ${inputValues[elem._id]?.monako === 'слот недоступен' ? 'bg-rose-300' : inputValues[elem._id]?.monako === 'доступный слот' ? 'bg-emerald-300' : ''} lg:text-[10px] text-[6px]`}
                                            name='monaco'
                                            placeholder='Слот пуст'
                                            type='text'
                                            autocomplete="off"
                                            value={inputValues[elem._id]?.monako || ''}
                                            onChange={(e) => {
                                                setInputValues((prevState) => ({
                                                    ...prevState,
                                                    [elem._id]: {
                                                        ...(prevState[elem._id] || {}),
                                                        monako: e.target.value,
                                                    },
                                                }));
                                            }}
                                        />
                                    </td>
                                    <td className={`text-[12px] ${inputValues[elem._id]?.lider === 'слот недоступен' ? 'bg-rose-300' : inputValues[elem._id]?.lider === 'доступный слот' ? 'bg-emerald-300' : ''} border`}>
                                        <input
                                            className={`outline-none w-full ${inputValues[elem._id]?.lider === 'слот недоступен' ? 'bg-rose-300' : inputValues[elem._id]?.lider === 'доступный слот' ? 'bg-emerald-300' : ''} text-center lg:text-[10px] text-[6px]`}
                                            name='lider'
                                            placeholder='Слот пуст'
                                            type='text'
                                            autocomplete="off"
                                            value={inputValues[elem._id]?.lider || ''}
                                            onChange={(e) => {
                                                setInputValues((prevState) => ({
                                                    ...prevState,
                                                    [elem._id]: {
                                                        ...(prevState[elem._id] || {}),
                                                        lider: e.target.value,
                                                    },
                                                }));
                                            }}
                                        />
                                    </td>
                                    <td className={`text-[12px] ${inputValues[elem._id]?.fenix === 'слот недоступен' ? 'bg-rose-300' : inputValues[elem._id]?.fenix === 'доступный слот' ? 'bg-emerald-300' : ''} border`}>
                                        <input
                                            className={`outline-none w-full ${inputValues[elem._id]?.fenix === 'слот недоступен' ? 'bg-rose-300' : inputValues[elem._id]?.fenix === 'доступный слот' ? 'bg-emerald-300' : ''} text-center lg:text-[10px] text-[6px]`}
                                            name='fenix'
                                            placeholder='Слот пуст'
                                            type='text'
                                            autocomplete="off"
                                            value={inputValues[elem._id]?.fenix || ''}
                                            onChange={(e) => {
                                                setInputValues((prevState) => ({
                                                    ...prevState,
                                                    [elem._id]: {
                                                        ...(prevState[elem._id] || {}),
                                                        fenix: e.target.value,
                                                    },
                                                }));
                                            }}
                                        />
                                    </td>
                                    <td className={`text-[12px] ${inputValues[elem._id]?.turan === 'слот недоступен' ? 'bg-rose-300' : inputValues[elem._id]?.turan === 'доступный слот' ? 'bg-emerald-300' : ''} border`}>
                                        <input
                                            className={`outline-none w-full ${inputValues[elem._id]?.turan === 'слот недоступен' ? 'bg-rose-300' : inputValues[elem._id]?.turan === 'доступный слот' ? 'bg-emerald-300' : ''} text-center lg:text-[10px] text-[6px]`}
                                            name='turan'
                                            placeholder='Слот пуст'
                                            type='text'
                                            autocomplete="off"
                                            value={inputValues[elem._id]?.turan || ''}
                                            onChange={(e) => {
                                                setInputValues((prevState) => ({
                                                    ...prevState,
                                                    [elem._id]: {
                                                        ...(prevState[elem._id] || {}),
                                                        turan: e.target.value,
                                                    },
                                                }));
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className='flex justify-between'>
                    <button type='submit' className='mt-5 p-1 text-sm flex items-center border p-3 text-white bg-indigo-600 mb-10'><AiFillEdit className='mr-1' /> Изменить</button>
                    <button type='button' onClick={addBtn} className='mt-5 p-1 text-sm flex items-center border p-3 text-white bg-indigo-600 mb-10'><AiOutlinePlus className='mr-1' /> Добавить аккаунт</button>
                </div>
            </form>
        </div>
    );
}

export default EditableTg;
