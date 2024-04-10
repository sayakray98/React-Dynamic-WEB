import React, { useState } from 'react';
import './App.css';
import Project from './Components/Project';
import Alert from './Components/alert';
import About from './Components/About';
import Home from './Components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode('light');
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("light mode has been Enabled", "success");
    }
  };

  return (

    <>
      <BrowserRouter>
        <Project title="Brand" button="GET STARTED" mode={mode} togglemode={togglemode} />

        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
