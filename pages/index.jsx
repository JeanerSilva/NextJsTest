import React, { useState } from 'react'



function Home (){

    const [value, setValue]  = useState(0);

    function incrementaHolder () {
        setValue(value + 1)
    }

    return (
        <div>
            Home
            <div>{value}</div>
            <button onClick={incrementaHolder}>Incrementa</button>
        </div>
    )
}

export default Home;