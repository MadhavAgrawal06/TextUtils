import React, { useState,useRef} from 'react'

export default function Form(props) {
    const [text,setText]=useState("");
    const textRef = useRef(null);

    const handleUpperClick=()=>{
       let newText=text.toUpperCase();
       setText(newText);
       props.handleAlert("success "," Converted to Upper Case !");
    }

    const handleLowerClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.handleAlert("success "," Converted to Lower Case !");
    }

    const handleListen = () => {
       let msg = new SpeechSynthesisUtterance();
       msg.text=text;
       window.speechSynthesis.speak(msg);
       props.handleAlert("warning "," Speaking Started !");
    }

    const handleClear=()=>{
      setText("");
      props.handleAlert("info "," Text is cleared !");
    }

    const handleSpaces=()=>{
      let newText=text.split(/\s+/);
      setText(newText.join(" "));
      props.handleAlert("info "," Extra Spaces are removed !");
    }

    const handleCopy=()=>{
      textRef.current.select();                                     // or use, let copiedText=  getElementbyId("#myBox");
      navigator.clipboard.writeText(textRef.current.value);
      props.handleAlert("info "," Copied to Clipboard !");
    }

    const handleChange=(e)=>{
       setText(e.target.value);
    }

    let wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    
  return (
    <>
    <div className='container my-4' style={{color:props.mode==="dark"?"white":"black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" id="myBox" value={text} ref={textRef} onChange={handleChange} style={{color:props.mode==="dark"?"white":"black",backgroundColor:props.mode==="dark"?"#4e4a4a":"#f2ebebff"}} rows="10"></textarea>
      </div>
      <button className={`btn btn-${props.mode==="dark"?"light":"dark"} mx-2 my-1`} onClick={handleUpperClick}>Convert to UpperCase</button>
      <button className={`btn btn-${props.mode==="dark"?"light":"dark"} mx-2 my-1`} onClick={handleLowerClick}>Convert to LowerCase</button>
      <button className={`btn btn-${props.mode==="dark"?"light":"dark"} mx-2 my-1`} onClick={handleListen}>Listen</button>
      <button className={`btn btn-${props.mode==="dark"?"light":"dark"} mx-2 my-1`} onClick={handleCopy}>Copy Text</button>
      <button className={`btn btn-${props.mode==="dark"?"light":"dark"} mx-2 my-1`} onClick={handleSpaces}>Clear Spaces</button>
      <button className={`btn btn-danger mx-2`} onClick={handleClear}>Clear</button>
    </div>

    <div className="container"style={{color:props.mode==="dark"?"white":"black"}}>
      <div></div>
        <br />
        <h2>Your text summary</h2>
        <br />
        <p>{wordCount} words and {text.length} characters</p>
        <p>{(wordCount*0.008).toFixed(4)} Minutes required to read</p>
        <br />
        <h2>Preview:</h2>
        <pre style={{backgroundColor:props.mode==="dark"?"#4e4a4a":"#f5f5edff",padding:"1.2rem",border:"2px solid #e6d9d9",borderRadius:"1rem",  whiteSpace: "pre-wrap"}}>{text===""?"Enter Something to get Preview":text}</pre>
    </div>
    </>
  )
}
