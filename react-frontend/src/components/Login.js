import { useState } from "react";
import Cookies from 'js-cookie'
import { useContext } from 'react'
import ContextApi from '../ContextApi'
import { Router, Navigate, Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [errorMsg, setErrorMsg] = useState()
    const { setUser, isLogged, setIsLogged} = useContext(ContextApi)

    const handleClick = (e) => {
        e.preventDefault();
        if(!username || !password){
            setErrorMsg('Please enter credentials first')
            return
        }
        const data = { username, password }
        fetch(`${process.env.REACT_APP_BACKEND_PREFIX}login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                if(data.statusCode === 401){
                    setErrorMsg('Please sign up first!')
                    return
                }else{
                    setUser(data)
                    setIsLogged(true)
                }
            })
    }
    return (
        <div className="flex flex-col gap-20 items-center h-[60%] w-[35%] bg-white rounded-lg mb-8 p-2">
            <h1 className='text-lg font-bold'>Login</h1>
            <div className='flex flex-col items-center gap-10'>
                <div className='flex gap-5 items-center'>
                    <label>Username:</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="border-2 rounded-md p-1 border-black" />
                </div>

                <div className='flex gap-5 items-center'>
                    <label>Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='border-2 rounded-md p-1 border-black' />
                </div>
                <span className="text-red-500">{errorMsg && errorMsg}</span>
                <button className='w-[40%] h-[35px] bg-blue-500 text-white font-bold rounded-md' onClick={(e) => handleClick(e)}>Login</button>
                <p>Don't have an Account?</p>
                <Link  className='w-[30%] h-[35px] bg-blue-500 text-white flex justify-center items-center font-bold mt-1 rounded-md' to='/'>SignUp</Link>
            </div>
            {isLogged && <Navigate replace to="/dashboard" />}
        </div>
    )
}

export default Login