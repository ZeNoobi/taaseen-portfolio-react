"use client";
import { useState } from "react"


const Playground = () => {

let forsee:number;

    let obj = {
        firstName:"Craig",
        lastName: "Feurgison",
        age: 27,
        food: ()=>{return "I am eating Pizza"},
        hobby: "None"
    }

    let [numba, setnumba] = useState(0);

    function increaseC () {
        setnumba(numba+1);
        forsee = forsee + numba;
    }


    return(
        <div className='h-[1000px] w-full'>
            <p>Hello</p>
            <p>{obj.firstName}</p>
            <p>{obj.lastName}</p>
            <p>Here is what I am eating. {obj.food()}</p>
            <p>My hobby is {obj.hobby}</p>
            <div><h5>My Counter:</h5></div>
            <div>{numba}</div>
            <div><button className='border-2 border-red-500' onClick={increaseC}>Click ME!</button></div>
        </div>
    )
}

export default Playground;