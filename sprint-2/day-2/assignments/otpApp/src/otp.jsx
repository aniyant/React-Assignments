// OtpInput.js
import React, { useRef, useEffect } from 'react';
import './otpInput.css'; // Import your CSS file for styling

const OtpInput = ({ length = 6, onSubmit }) => {
  const inputRefs = useRef([]);
  const otpValues = useRef(Array(length).fill(''));

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      otpValues.current[index] = value;
      if (index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value === '') {
      otpValues.current[index] = '';
    }
    forceUpdate();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && otpValues.current[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData('text').slice(0, length);
    pasteData.split('').forEach((char, index) => {
      if (/^[0-9]$/.test(char)) {
        otpValues.current[index] = char;
      }
    });
    forceUpdate();
    if (pasteData.length < length) {
      inputRefs.current[pasteData.length].focus();
    } else {
      inputRefs.current[length - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpValues.current.every(value => value !== '')) {
      onSubmit(otpValues.current.join(''));
    }
  };

  const forceUpdate = () => {
    inputRefs.current = [...inputRefs.current];
  };

  return (
    <form onSubmit={handleSubmit} className="otp-form">
      <div className="otp-input-container" onPaste={handlePaste}>
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
            value={otpValues.current[index]}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="otp-input"
          />
        ))}
      </div>
      <button type="submit" disabled={otpValues.current.some(value => value === '')} className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default OtpInput;
