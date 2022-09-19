import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col gap-20 items-center h-[60%] w-[35%] bg-white rounded-lg mb-8 p-2">
      <h1 className='text-lg font-bold'>Login</h1>
      <div className='flex flex-col items-center gap-12'>
        <div className='flex gap-5 items-center'>
          <label>Username:</label>
          <input value={username} onChange={(e)=>setUsername(e.target.value)} className="border-2 rounded-md p-1 border-black" />
        </div>

        <div className='flex gap-5 items-center'>
          <label>Password:</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} className='border-2 rounded-md p-1 border-black' />
        </div>

        <button className='w-[40%] h-[35px] bg-blue-500 text-white font-bold mt-6 rounded-md' onClick={(e)=>handleClick(e)}>Login</button>
      </div>
    </div>
  );
}

export default App;
