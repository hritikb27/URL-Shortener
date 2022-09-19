import Cookies from 'js-cookie'

const Dashboard = () => {

    const handleClick = () => {
        console.log(Cookies.get('connect.sid'))
        fetch('http://localhost:3000/demo', {method:'GET',credentials: 'include',})
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
    }
    return(
        <div className="h-full w-full flex justify-center items-center">
            <button onClick={handleClick}>Get data</button>
        </div>
    )
}

export default Dashboard