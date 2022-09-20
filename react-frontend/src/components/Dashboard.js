import Cookies from 'js-cookie'
import { useState } from 'react'
import { useContext } from 'react'
import { Navigate } from "react-router-dom";
import ContextApi from '../ContextApi'
import Sidebar from './Sidebar';

const Dashboard = () => {
    const [url, setUrl] = useState()
    const { user, isLogged} = useContext(ContextApi)

    const sendURL = (longURL, shortURL) => {
        console.log(Cookies.get('connect.sid'))
        fetch(`${process.env.REACT_APP_BACKEND_PREFIX}url-text/addUrl?userID=${user.id}&url=${longURL}&shorturl=${shortURL}`, {method:'POST',credentials: 'include',})
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
    }

    const urlShortener = () => {
        const longURL = url;
        if(url.length<1)return
        let shortURL = `${process.env.REACT_APP_BACKEND_PREFIX}url-text/` + longURL.replace(/[^a-z]/g,'').slice(-4);
        console.log(shortURL)
        sendURL(longURL, shortURL)
    };

    return(
        <div className="h-full w-full flex">
            <Sidebar />
            <div className='w-full ml-[16%] mt-28'>
                <div className='w-[50%] flex flex-col justify-center gap-4'>
                    <input type='text' value={url} onChange={(e)=>setUrl(e.target.value)} className='w-full rounded-md h-[35px] px-1 border-2 border-black' />
                    <button onClick={urlShortener} className='bg-blue-500 text-white rounded-md mx-auto w-[20%] '>Shorten Url</button>
                </div>

            </div>
            {!isLogged && <Navigate replace to="/login" />}
        </div>
    )
}

export default Dashboard