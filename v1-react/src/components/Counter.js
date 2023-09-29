import React, {useState, useEffect} from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(1)

   useEffect(() => {
      let interval = setInterval(() => {
              console.log("interval")
              setCount((prev) => prev + 1)
       }, 1000)

       return () => clearInterval(interval)
   }, [])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + count2)}>Increase</button>
            <hr/>
            <div>Increase + {count2}</div>
            <button onClick={() => setCount2(1)}>+1</button><br/>
            <button onClick={() => setCount2(5)}>+5</button><br/>
            <button onClick={() => setCount2(10)}>+10</button><br/>
        </div>
    )
}

export default Counter
