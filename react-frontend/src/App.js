import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ContextApi from './ContextApi';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState()
  const [urls, setUrls] = useState()

  return (
    <div className="h-full w-full flex justify-center items-center">
      <Router>
        <ContextApi.Provider value={{user, setUser, urls, setUrls}}>
          <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="login" element={<Login />} />
          </Routes>
        </ContextApi.Provider>
      </Router>
    </div>
  );
}

export default App;
