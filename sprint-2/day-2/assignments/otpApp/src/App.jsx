// App.js
import React from 'react';
import OtpInput from './otp';

const App = () => {
  const handleOtpSubmit = (otp) => {
    console.log('Submitted OTP:', otp);
    alert(`Submitted OTP: ${otp}`);
  };

  return (
    <div className="app" style={{margin:"auto"}}>
      <h1 style={{textAlign:"center"}}>Enter OTP</h1>
      <OtpInput length={6} onSubmit={handleOtpSubmit} />
    </div>
  );
};

export default App;
