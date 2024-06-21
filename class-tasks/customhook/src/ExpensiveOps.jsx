import React,{ useState } from "react";

export const ExpensiveOperationComponent = () => {
    const [amount, setAmount] = useState(0);
    const [age, setAge] = useState(0);
  
    const totalPriceInINR = (num) => {
      console.log("Converting to INR...");
      return num * 80;
    };
  
    const amountInINR = totalPriceInINR(amount);
  
    return (
      <div>
        <div>
          <button onClick={() => setAmount(amount + 1)}>
            Increment Dollar amount
          </button>
          <p>Amount in Dollars: {amount}</p>
          <p>Amount in INR: {amountInINR}</p>
        </div>
  
        <hr />
  
        <div>
          <p>Age: {age}</p>
          <button onClick={() => setAge(age + 1)}>Increment Age</button>
        </div>
      </div>
    );
  };

  