import { useState,useRef,useEffect } from 'react'
import './App.css' 

function App() {
    const inputRef = useRef(null);
    const displayRef = useRef(null);
  
    const handleInputChange = () => {
      // Directly access the DOM to get the current value of the input field
      const inputValue = inputRef.current.value;
      // Update the DOM element to display the current value by accessing the dom.
      //  document.getElementById('display').innerText = `Current value: ${inputValue}`;
      // Update the DOM element to display the current value
      displayRef.current.textContent = `Current value: ${inputValue}`;
      if (displayRef.current.style.backgroundColor === 'yellow') {
        displayRef.current.style.backgroundColor = 'aqua';
      } else {
        displayRef.current.style.backgroundColor = 'yellow';
      }
      console.log(displayRef);
    };
  
    useEffect(() => {
      // Initialize display content when the component mounts
      inputRef.current.focus();
      if (displayRef.current) {
        displayRef.current.textContent = 'Current value: ';
      }
    }, []);
    console.log(displayRef);
    return (
      <div>
        <input ref={inputRef} type="text" onChange={handleInputChange} placeholder="Type something" />
        <p ref={displayRef} id ="display"></p>
      </div>
    );
}

export default App
