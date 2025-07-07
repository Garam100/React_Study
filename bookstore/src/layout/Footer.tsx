import type React from "react";
import { Container } from "react-bootstrap";

const Footer : React.FC = () =>{

    return(
        <footer className="text-white py-1 mt-3" style={{backgroundColor :'#8cd6e0' }}>
            <Container className="text-center">
                제작: 백가람
                이메일: <a href="backgaram123@gmail.com" className="text-white">backgaram123@gmail.com</a>
            </Container>
        </footer>
    );
}

export default Footer;