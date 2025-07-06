import { useState } from "react";
import MyCarousel from "../component/Carousel";
import bookdata, { type Book } from "../data/Bookdata";
import {Link} from 'react-router-dom';
import { Card, Col, Container, Row, Button } from "react-bootstrap";

const Content : React.FC = () =>{
    const [books,setBook] = useState<Book[]>(bookdata);
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
                {books.map((book)=>(
                    <Col sm={6} md = {4} key={book.id} className="box p-4">
                        <Card className="border rounded shadow-sm p-3" style={{height: '500px', width: '300px'}}>
                            <Card.Body>
                                <Card.Img 
                                variant="top"
                                src='/imeages/1.jpg'
                                style={{height: '240px', width: '173px', objectFit:'cover'}}
                                alt={book.title}/>
                                <Card.Title>{book.title}</Card.Title>
                                <div className="description">
                                    <span className="author">작가: {book.author}</span>
                                    <p></p>
                                    <span className="star">별점: {book.star}</span>
                                    <p></p>
                                </div>
                            </Card.Body>
                            <div className="linkTo">
                                <Link to="/">
                                <Button variant = "primary">자세히 보기</Button>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
           </Container>
        </div>
    );
}

export default Content;