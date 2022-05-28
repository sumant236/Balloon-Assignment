import { useState } from 'react'

export const GenerateRandomColor = () => {
    const [color, setColor] = useState([]);
    let arr = [];
    let i=0;
    // generate random color 5 times
    const generateColor = () => {
      while(i<5){
        arr.push({randomColor: Math.floor(Math.random()*16777215).toString(16), id: ++i})
      }
      setColor(arr);
      console.log(arr, color)
    }
    const generatedColors = () => {
      i=0;
      color.map((random)=>random.id=++i);
    }
    return {color, generateColor, generatedColors};
}

export default GenerateRandomColor;
