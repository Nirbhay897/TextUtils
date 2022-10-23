// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "Success");
      document.title = 'TextUtils-Dark Mode';

      // setInterval(() => {
      //   document.title = 'TextUtils - Dark Mode';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
      document.title = 'TextUtils-Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar title = "Texutils" AboutText="About Textutils"/> */}
      {/* <Navbar/> */}
        <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container mb-3">
        <Routes>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/" element={ <TextForm  showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />}></Route>
        </Routes> 
      </div>
        </Router>
        {/* <About /> */}
    </>
  );
}
export default App;
