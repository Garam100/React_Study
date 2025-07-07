import type React from "react";
import MyCarousel from "../component/Carousel";
import { Container, Row } from "react-bootstrap";
import BookItem from "../component/BookItem";
import { useState } from "react";
import bookdata, {type Book} from "../data/Bookdata";

const HomePage : React.FC = () =>{
    let [books, setBook] = useState<Book[]>(bookdata);

    return(
        <div>
            <MyCarousel></MyCarousel>

           <Container>
            <div className="project_header_container">
                <h1 className="project_header">베스트 셀러</h1>
                <div className="hr"></div>
            </div>

            <Row className="text-center">
                {books.map((book)=>{
                    return <BookItem key={book.id} book={book}/>
                })}
            </Row>
           </Container>
        </div>
    )
}

export default HomePage;