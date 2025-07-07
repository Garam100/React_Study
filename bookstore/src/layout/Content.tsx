import { useState } from "react";
import bookdata, { type Book } from "../data/Bookdata";
import {Route, Router, Routes} from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ListPage from '../pages/ListPage';
import CartPage from '../pages/CartPage';
import DetailPage from '../pages/DetailPage';
import LoginPage from '../pages/LoginPage';
import ContactPage from '../pages/ContactPage';
import HomePage from "../pages/HomePage";
import DetailPage2 from '../pages/DetailPage2'

const Content : React.FC = () =>{
    const [books, setBook] = useState<Book[]>(bookdata);
    console.log(books);
    
    return(
        <div>
           <Routes>
            <Route path="/" element = {<HomePage />}></Route>
            <Route path="/about" element = {<AboutPage />}></Route>
            <Route path="/list" element = {<ListPage />}></Route>
            <Route path="/contact" element = {<ContactPage />}></Route>
            <Route path="/cart" element = {<CartPage />}></Route>
            <Route path="/detail/:id" element = {<DetailPage2 />}></Route>
            <Route path="/login" element = {<LoginPage />}></Route>
            <Route path="*" element = {'페이지가 존재하지 않습니다.'}></Route>
           </Routes>
        </div>
    );
}

export default Content;