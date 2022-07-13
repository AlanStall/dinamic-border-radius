
import React, { useState } from "react";
import './App.css'

export function App() {
  const [topLeft , setTopLeft] = useState("");  
  const [topRight , setTopRight] = useState("");  
  const [BottomLeft , setBottomLeft] = useState("");  
  const [BottomRight , setBottomRight] = useState("");
  const [allBorders , setallBorders] = useState("");

  function eachBorderRadius(){
    var inputTopLeft = topLeft + "px";
    var inputTopRight = topRight + "px";
    var inputBottomLeft = BottomLeft + "px";
    var inputBottomRight = BottomRight + "px";
    var borderTopLeft = document.querySelector('textarea');
    borderTopLeft.style.borderTopLeftRadius = inputTopLeft;
    var borderTopRight = document.querySelector('textarea');
    borderTopRight.style.borderTopRightRadius = inputTopRight;
    var borderBottomLeft = document.querySelector('textarea');
    borderBottomLeft.style.borderBottomLeftRadius = inputBottomLeft;
    var borderBottomRight = document.querySelector('textarea');
    borderBottomRight.style.borderBottomRightRadius = inputBottomRight;
  } 
  function allBordersRadius(){
    var inputAllBorders = allBorders + "px";
    var all = document.querySelector("textarea");
    all.style.borderRadius = inputAllBorders;
  }

  return (
    <>
      <header>

        <div className="container">
          <textarea 
            row="10" 
            type="text" 
            placeholder="Set how much rounded each corner will be"
          >          
          </textarea>
        </div>

        <div>
          <div>
            <h3 id="all-borders">Set Equal Corners Here</h3>
            <input 
              type="text" 
              className="all-borders"
              onChange={(e) => setallBorders(e.target.value)}
              onSelect={allBordersRadius}
            >          
            </input>
          </div> 
                 
          <input 
            type="text" 
            className="input-top-left"
            onChange={(e) => setTopLeft(e.target.value)}            
            onSelect={eachBorderRadius}
          >          
          </input>          
          <input 
            type="text" 
            className="input-top-right"
            onChange={(e) => setTopRight(e.target.value)}
            onSelect={eachBorderRadius}
          >          
          </input>
          <input 
            type="text" 
            className="input-bottom-left"
            onChange={(e) => setBottomLeft(e.target.value)}
            onSelect={eachBorderRadius}
          >          
          </input>
          <input 
            type="text" 
            className="input-bottom-right"
            onChange={(e) => setBottomRight(e.target.value)}
            onSelect={eachBorderRadius}
          >          
          </input>
        </div>
      </header>      
    </>
  )
}
