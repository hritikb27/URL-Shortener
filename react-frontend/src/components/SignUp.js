import { useState } from "react";
import { Router, Navigate } from "react-router-dom";
import { useContext } from 'react'
import ContextApi from '../ContextApi'

const SignUp = () => {
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [login, setLogin] = useState(false)
    const {urls, setUrls, user, setUser} = useContext(ContextApi)

    const handleClick = (e) => {
        e.preventDefault();
        const data = { name, username, password }
        fetch(`http://localhost:3000/user/addUser?name=${name}&username=${username}&password=${password}`, {
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
                setUser(data)
                setLogin(true)
            })
    }
    return (
        <div className="flex flex-col gap-20 items-center h-[60%] w-[35%] bg-white rounded-lg mb-8 p-2">
            <h1 className='text-lg font-bold'>SignUp</h1>
            <div className='flex flex-col items-center gap-12'>
                <div className='flex gap-5 items-center'>
                    <label>Name:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="border-2 rounded-md p-1 border-black" />
                </div>
                
                <div className='flex gap-5 items-center'>
                    <label>Username:</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="border-2 rounded-md p-1 border-black" />
                </div>

                <div className='flex gap-5 items-center'>
                    <label>Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='border-2 rounded-md p-1 border-black' />
                </div>

                <button className='w-[40%] h-[35px] bg-blue-500 text-white font-bold mt-6 rounded-md' onClick={(e) => handleClick(e)}>SignUp</button>
            </div>
            {login && <Navigate replace to="/dashboard" />}
        </div>
    )
}

export default SignUp