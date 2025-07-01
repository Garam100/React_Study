import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import './App.css';

const Clock : React.FC = () => {
    const [time, setTime] = useState(new Date);

    useEffect(() => {
        const intervaId = setInterval(() => {
            setTime(new Date);
        },1000);

        return () => {
            clearInterval(intervaId);
        }
    }, []);


    return(
        <div className="board">
            <Row className="justify-content-center mt-4">
                <Col xs = {10} md = {8} lg = {6}>
                    <div className="boarder p-3 rounded mb-4">
                        <h4>현재시각</h4>
                        <p>{time.toLocaleTimeString()}</p>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Clock;