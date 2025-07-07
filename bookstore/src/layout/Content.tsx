import { useState } from "react";
import MyCarousel from "../component/Carousel";
import bookdata, { type Book } from "../data/Bookdata";
import { Container, Row } from "react-bootstrap";
import BookItem from "../component/BookItem";
import {Route, Router, Routes} from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ListPage from '../pages/ListPage';
import CartPage from '../pages/CartPage';
import DetailPage from '../pages/DetailPage';
import LoginPage from '../pages/LoginPage';
import ContactPage from '../pages/ContactPage';

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

           <Routes>
            <Route path="/about" element = {<AboutPage />}></Route>
            <Route path="/list" element = {<ListPage />}></Route>
            <Route path="/contact" element = {<ContactPage />}></Route>
            <Route path="/cart" element = {<CartPage />}></Route>
            <Route path="/detail" element = {<DetailPage />}></Route>
            <Route path="/login" element = {<LoginPage />}></Route>
           </Routes>
        </div>
    );
}

export default Content;