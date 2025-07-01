import { useState } from "react";
import { Button } from "react-bootstrap";
import './App.css'

const Timer : React.FC = () => {
    const[second, setSecond] = useState<number>(0);

    return(
        <div className="board">
            <h4>타이머 : {second}초</h4>
            <button className = 'btn' onClick={() => {setInterval(() => {setSecond((prevSecond)=>{return prevSecond});}, 1000);}}>
                시작
            </button>
        </div>
    )
}
export default Timer;