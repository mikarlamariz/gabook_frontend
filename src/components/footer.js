import { Container, Navbar } from "react-bootstrap";

import '../css/navbar.css';

const Footer = () => {

    return (
        <Navbar data-bs-theme="light">
            <Container className="justify-content-center">
                <p className="m-0 text-center text-white">&copy; 2024 Gabook. Todos os direitos reservados.</p>
            </Container>
        </Navbar>
    )
}

export default Footer;