import type React from "react";
import { Carousel } from "react-bootstrap";
import '../App.css'


const MyCarousel : React.FC = () =>{
    return(
        <Carousel>
            <Carousel.Item>
                <div className="carousel-item-custom">
                    <img className = 'fixed-size-img' src='/imeages/book1.jpg' alt="부자가 되는 방법" />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="carousel-item-custom">
                    <img className = 'fixed-size-img' src='/imeages/book1.jpg' alt="부자가 되는 방법" />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="carousel-item-custom">
                    <img className = 'fixed-size-img' src='/imeages/book1.jpg' alt="부자가 되는 방법" />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}
export default MyCarousel;