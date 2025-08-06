import './App.css';
import Navbar from "./components/Navbar.js";
import Alert from './components/Alert.js';
import Form from "./components/Form.js"
import About from "./components/About.js"
import React,{useState} from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

function App() {
  
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState()

  const changeMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#2b2c35ff";
      handleAlert("success"," Changed to Dark Mode");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      handleAlert("success"," Changed to Light Mode");
    }
  }

    const handleAlert=(type,message)=>{
        setAlert({
          type:type,
          msg:message
        });
        setTimeout(()=>{
          setAlert(null);
        },2000);
    };
  
  return (
  <>
  <Router>
    
  <Navbar title="TextUtils" mode={mode} toggleMode={changeMode} aboutText="About"/>
  <Alert alert={alert}/>

  <Routes> 
     <Route exact path="/about" element={<About mode={mode}/>}/>
     <Route exact path="/" element={<Form heading="Paste or Type Your Text" mode={mode} handleAlert={handleAlert}/>}/>
  </Routes>

  </Router>
  </>
  );
}

export default App;
