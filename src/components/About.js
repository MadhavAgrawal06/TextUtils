import React from 'react';

export default function About(props) {

  const myStyle={
    color:props.mode==="dark"?"white":"black",
    backgroundColor:props.mode==="dark"?"#2b2d36ff":"white",
    borderColor:props.mode==="dark"?"#acb2c4ff":"#c8ccdbff",
    transition: 'all 0.3s ease-in-out'

  };

  return (
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
      <h1 className="mt-1 mb-4">About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b>Behind the Code</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
                Just someone who enjoys solving problems, writing code, and occasionally talking to computers.  
                <br />
                Check out my work here :{" "}
                <a href="https://github.com/MadhavAgrawal06" target="_blank" rel="noopener noreferrer" title="Visit Madhav Agrawal's GitHub profile"><b> github.com/MadhavAgrawal06</b></a>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            <b>What Does This App Do?</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            This app allows you to manipulate and analyze text easily. <br />
            You can convert text to <b>Uppercase / Lowercase, Listen text, Remove extra spaces, Copy it, and Preview text</b> in real-time.
            It's perfect for students, developers, and content writers.

            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <b>Why Use Our App?</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Simple, fast, and reliable — no sign-up needed. Our app works directly in your browser and respects your privacy.
            Whether you're editing content or just cleaning up text, it saves you time.

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
