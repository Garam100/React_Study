import type React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import {type Book} from '../data/Bookdata';
import { useEffect } from "react";

interface LocationState{
    book: Book;
}

const DetailPage : React.FC = () =>{
    const {id} = useParams<{id:string}>();
    const location = useLocation();
    const {state} = location as {state: LocationState};
    const book = state?.book;
    console.log(id);
    console.log(book);

    useEffect(()=>{
        const popupWindow = window.open('', '_blank', 'width = 400, height = 300');

        if(popupWindow){
            popupWindow.document.write(`
                <html>
                    <head>
                        <title>특가할인</title>
                    </head>
                    <body style = "display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background-color: #8cd6e0; color: white; flex-direction: column;">
                        <h1 style = "margint: 0; font-size: 2em; font-weight: bold;">전도서 20%할인</h1>
                        <h3 style= "margin-top: 10px;">완전 개꿀이잖아~</h3>
                    </body>
                </html>`);
                popupWindow.document.close();
        }

        return () =>{
            if(popupWindow) popupWindow.close();
        };

    },[])

    return(
        <div>
            <Container className="mt-5">
                <Row>
                    <Col md = {6}>
                        <Card className="border-0">
                            <Card.Img variant="top" src={'/imeages/' + (book.id) + '.jpg'} style={{borderRadius: '8px'}}></Card.Img>
                        </Card>
                    </Col>
                    <Col md = {6}>
                        <Card className="border-0 text-center">
                            <Card.Body>
                                <Card.Title as='h3' className="mb-4">{book.title}</Card.Title>
                                <Card.Text className="text-muted">{book.author}</Card.Text>
                                <Card.Text className="text-muted">{book.content}</Card.Text>
                                <Card.Text as = 'h4' className="text-primary">{book.price}원</Card.Text>
                                <Button 
                                    variant="primary"
                                    onClick={()=>{console.log("클릭");}}>
                                    카트에 담기
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailPage;