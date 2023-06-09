import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://fashion-backend-r8hh.onrender.com/test/logins', { username, password });
            const { token } = response.data;

            localStorage.setItem('token', token);
            navigate('/');
            window.location.reload()
            console.log('Вход выполнен успешно');
        } catch (error) {
            setError('Неверное имя пользователя или пароль');
            console.error(error);
        }
    };


    return (
        <section className="bg-slate-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen w-full lg:py-0">
                <div className="w-full grid place-items-center">
                    <a href="/" className="text-white flex items-center mb-6 text-2xl font-semibold text-gray-900">
                        fashion rynok
                    </a>
                    <div className="w-full bg-white shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Вход в аккаунт
                            </h1>
                            {error && <p className="text-red-500">{error}</p>}
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                        Логин
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 outline-none"
                                        placeholder="name@gmail.com"
                                        required=""
                                        maxLength="40"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                        Пароль
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 outline-none"
                                        required=""
                                        maxLength="30"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500">
                                                Запомнить меня
                                            </label>
                                        </div>
                                    </div>
                                    <a href="/" className="text-sm font-medium text-primary-600 hover:underline">
                                        Забыли пароль?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:opacity-80"
                                >
                                    Вход
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
