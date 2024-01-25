import React, { useState } from 'react'

function Counter() {
    let [count, setcount] = useState(0);
    const handleIncrement = () => {
        setcount(count +1);
    }

    const handleDecrement = () => {
        if(count > 0){
            setcount(count - 1);
        } 
        
    }
  return (
    <div className='main-div'>
        <button onClick={handleIncrement}>Increment</button>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter