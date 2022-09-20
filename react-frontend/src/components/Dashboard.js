import Cookies from 'js-cookie'
import { useState } from 'react'
import { useContext } from 'react'
import ContextApi from '../ContextApi'

const Dashboard = () => {
    const [url, setUrl] = useState()
    const {urls, setUrls, user, setUser} = useContext(ContextApi)

    const handleClick = () => {
        console.log(Cookies.get('connect.sid'))
        fetch('http://localhost:3000/demo', {method:'GET',credentials: 'include',})
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
    }
    return(
        <div className="h-full w-full flex">
            <aside className='left-0 fixed h-full w-[15%] bg-gray-400 '>
                <div className='flex flex-col items-center mt-28 gap-4'>
                    <p className='mb-6'>Welcome {user && user.name}!</p>
                    <p className='text-lg font-bold'>Track URLs</p>
                    <p className='text-lg font-bold'>Logout</p>
                </div>
            </aside>
            <div className='ml-[16%] mt-28'>
                <div className='flex flex-col justify-start'>
                    <input type='text' value={url} onChange={(e)=>setUrl(e.target.value)} />
                    <button onClick={handleClick}>Shorten Url</button>
                </div>

            </div>
        </div>
    )
}

export default Dashboard