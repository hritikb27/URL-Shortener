import { useContext } from 'react'
import { Link } from "react-router-dom";
import ContextApi from '../ContextApi'

const Sidebar = () => {
    const { user, setIsLogged } = useContext(ContextApi)
    const handleLogout = () => {
        setIsLogged(false)
    }
    return (
        <aside className='left-0 fixed h-full w-[15%] bg-gray-400 '>
            <div className='flex flex-col items-center mt-28 gap-4'>
                <p className='mb-6'>Welcome {user && user.name}!</p>
                <Link to='/dashboard'><p className='text-lg font-bold cursor-pointer'>Home</p></Link>
                <Link to='/track'><p className='text-lg font-bold cursor-pointer'>Track URLs</p></Link>
                <p className='text-lg font-bold cursor-pointer' onClick={handleLogout}>Logout</p>
            </div>
        </aside>
    )
}

export default Sidebar;