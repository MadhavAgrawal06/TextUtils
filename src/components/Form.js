import React, { useState} from 'react'

export default function Form(props) {
    const [text,setText]=useState("");

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
      navigator.clipboard.writeText(text);                  
      props.handleAlert("info "," Copied to Clipboard !");
    }

    const handleChange=(e)=>{
       setText(e.target.value);
    }

    let wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
      <h1 className='mb-3 mt-1'>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" spellCheck={false} id="myBox" value={text} onChange={handleChange} style={{color:props.mode==="dark"?"white":"black",backgroundColor:props.mode==="dark"?"#4a4c4eff":"#f2ebebff"}} rows="10"></textarea>
      </div>
      <button disabled={wordCount===0} className={`btn btn-${props.mode==="dark"?"primary":"dark"} mx-2 my-1`} onClick={handleUpperClick}>Convert to UpperCase</button>
      <button disabled={wordCount===0} className={`btn btn-${props.mode==="dark"?"primary":"dark"} mx-2 my-1`} onClick={handleLowerClick}>Convert to LowerCase</button>
      <button disabled={wordCount===0} className={`btn btn-${props.mode==="dark"?"primary":"dark"} mx-2 my-1`} onClick={handleListen}>Listen</button>
      <button disabled={wordCount===0} className={`btn btn-${props.mode==="dark"?"primary":"dark"} mx-2 my-1`} onClick={handleCopy}>Copy Text</button>
      <button disabled={wordCount===0} className={`btn btn-${props.mode==="dark"?"primary":"dark"} mx-2 my-1`} onClick={handleSpaces}>Clear Spaces</button>
      <button disabled={text.length===0} className={`btn btn-danger mx-2 my-1`} onClick={handleClear}>Clear</button>
    </div>

    <div className="container"style={{color:props.mode==="dark"?"white":"black"}}>
        <br />
        <h2 className='my-3'><i>Your Text Summary</i> :</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{(wordCount*0.008)} minutes required to read</p>
        <br />
          <h2 className='mb-2'><i>Preview</i> :</h2>
          <pre style={{backgroundColor:props.mode==="dark"?"#4e4a4a":"#f5f5edff",padding:"1.2rem",border:"2px solid #e6d9d9",borderRadius:"1rem",  whiteSpace: "pre-wrap"}}>{text===""?"Nothing to Preview":text}</pre>
        </div>
    </>
  )
}
