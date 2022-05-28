import React, { useEffect, useState } from 'react'
import GenerateRandomColor from './Generaterandomcolor'

let array = [];
export const BallonGroup = () => {

    // getting data from GenerateRandomColor JS file
    const {color, generateColor, generatedColors} = GenerateRandomColor();
    
    // using useState hook
    const [val, setVal] = useState("");
    
    // handling input value
    const handleChange = (e) => {
        setVal(e.target.value);
        console.log(val);
    }

    // handling what to do when we shoot
    const handleClick = () => {
        color.map((random) => {if(random.id===Number(val)){array.push(random)} return array});
        color.splice(Number(val-1),1);
        console.log(array, color)
        generatedColors();
    }

    useEffect(()=>{
        generateColor();
    }, [])
    
    return (
        <div style= {{display: "flex", justifyContent: "space-around"}}>
            <div style={{border: "1px solid black", width: "40%", height: "400px", display: "flex", flexWrap: "wrap"}}>
                {array.length!==0?array.map((item)=><button style={{backgroundColor: "#" + item.randomColor, height: "100px", width: "100px", border: "1px solid black", borderRadius: "50px"}}></button>):array}
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                {color.map((random)=>
                    <div id={random.id}>
                    <button style={{backgroundColor: "#" + random.randomColor, height: "100px", width: "100px", border: "1px solid black", borderRadius: "50px"}} ></button>
                </div>)}
            </div>
            <div>
                <input type="number" value={val} placeholder='Enter any number' onChange={handleChange}/>
                <button onClick={handleClick}>Shoot</button>
            </div>
        </div>
  )
}
