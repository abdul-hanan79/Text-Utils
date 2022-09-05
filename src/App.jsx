
import './App.css';
import About from './components/About';
import React, { useState } from 'react'

import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1699);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode hase bee enabled", "success")
      // document.title = "TextUtils-Dark Mode"

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "success")
    }

  }

  // const togglemode2 = () => {
  //   if (mode === 'light') {
  //     setMode('dark')
  //     document.body.style.backgroundColor = "#808080"
  //     showAlert("Gray Mode mode hase bee enabled", "success")
  //   }
  //   else {
  //     setMode('light')
  //     document.body.style.backgroundColor = "white"
  //     showAlert("Light Mode has been enabled", "success")
  //   }

  // }
  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils"/> */}
        <Navbar title='TextUtils' mode={mode} toggleMode={togglemode} />
        {/* toggleMode2={togglemode2} */}
        <Alert alert={alert} />

        <div className="container ">
          <Routes>
            <Route  exact path="/about" element={<About mode={mode} />}/>
            <Route  exact path="/" element={<TextForm mode={mode} />}/>
             
          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;




// a quick brown fox jumps over the lazy dog a quick brown fox jumps over the lazy dog 