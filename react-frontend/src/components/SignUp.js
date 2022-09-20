import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useContext } from 'react'
import ContextApi from '../ContextApi'

const SignUp = () => {
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const {urls, setUrls, user, setUser, isLogged, setIsLogged} = useContext(ContextApi)

    const handleClick = (e) => {
        e.preventDefault();
        const data = { name, username, password }
        fetch(`${process.env.REACT_APP_BACKEND_PREFIX}user/addUser?name=${name}&username=${username}&password=${password}`, {
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
                setIsLogged(true)
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

                <button className='w-[40%] min-h-[35px] bg-blue-500 text-white font-bold rounded-md' onClick={(e) => handleClick(e)}>SignUp</button>

                <div className="flex flex-col w-full h-full items-center gap-8">
                    <p>Already have an Account?</p>
                    <Link className='w-[30%] h-[35px] bg-blue-500 text-white flex justify-center items-center font-bold rounded-md' to='/login'>Login</Link>
                </div>
            </div>
            {isLogged && <Navigate replace to="/dashboard" />}
        </div>
    )
}

export default SignUp