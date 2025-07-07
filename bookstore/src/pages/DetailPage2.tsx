import type React from "react";
import { useEffect, useState } from "react";

const DetailPage2: React.FC = () =>{
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('componentMount')
        return() =>{
            console.log('componentUnmount')
        };
    },[]);

    useEffect(() =>{
        console.log('componentUpdate');

    }, [count]);

    return(
        <div>
            <p>Count</p>
            <button onClick={()=>setCount(count+1)}>Click!!</button>
        </div>
    )
 }

export default DetailPage2;