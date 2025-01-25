import React, { useState } from 'react'
import classes from './Counter.module.scss'

function Counter() {
    const [counter, setCount] = useState(0)

    let increment = function () {
        setCount(counter + 1)
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={increment} className={classes.button}>click me ^^</button>
        </>
    )
}

export default Counter
