import { useState } from 'react'
const Counter = () => {
    const [count,setCount] = useState(0);
    return (
        <div>
            <h1>counter: {count}</h1>
            <button onClick={()=>setCount((prevCount)=>prevCount+1)}>increment</button>
            <button onClick={()=>setCount((prevCount)=>prevCount-1)} disabled={count===0}>decrement</button>
            <button onClick={()=>setCount(0)} disabled={count===0}>reset</button>
        </div>
    )
}

export {Counter};