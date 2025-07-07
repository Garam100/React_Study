import type React from "react";
import { useEffect, useState } from "react";

const DetailPage2: React.FC = () =>{
    const [second, setSecond] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSecond(prevSeconds=>prevSeconds+1);
        }, 1000);

        return ()=> clearInterval(interval);
    },[]);

    return(
        <div>
            <h1>타이머: {second}초</h1>
        </div>
    )
 }

export default DetailPage2;