import { useState } from "react";
import MyCarousel from "../component/Carousel";
import bookdata, { type Book } from "../data/Bookdata";
import { Container, Row } from "react-bootstrap";
import BookItem from "../component/BookItem";

const Content : React.FC = () =>{
    const [books, setBook] = useState<Book[]>(bookdata);
    console.log(books);
    
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
    );
}

export default Content;