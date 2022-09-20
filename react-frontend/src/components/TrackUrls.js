import { useContext, useEffect, useState } from 'react'
import { Navigate } from "react-router-dom";
import ContextApi from '../ContextApi'
import Sidebar from './Sidebar';

const TrackUrls = () => {
    const { user, setIsLogged } = useContext(ContextApi)
    const [urls, setUrls] = useState()
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_PREFIX}url-text/urls?userID=${user.id}`, { method: 'GET', credentials: 'include', })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setUrls(data)
            })
    }, [])
    return (
        <div className="h-full w-full flex justify-center">
            <Sidebar />
            <div className="mt-28 ml-[15%] w-[60%] flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            URL
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Long URL
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Views
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {urls && urls.map((url) => (
                                        <tr key={url.email}>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{url.shorturl}</td>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {url.url}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{url.views}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackUrls