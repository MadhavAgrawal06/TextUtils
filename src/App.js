import './App.css';
import Navbar from "./components/Navbar.js";
import Alert from './components/Alert.js';
import Form from "./components/Form.js"
import About from "./components/About.js"
import React,{useState} from 'react';
import{
  HashRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

function App() {
  
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState()

  const changeMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#343333";
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
     <Route exact path="/about" element={<About />}/>
     <Route exact path="/" element={<Form heading="Enter Text Below to Analyze" mode={mode} handleAlert={handleAlert}/>}/>
  </Routes>

  </Router>
  </>
  );
}

export default App;
