import { Navbar, Nav, Row } from "react-bootstrap";

import '../css/navbar.css';

const NavbarTop = () => {
    return (
        <>
            <Navbar className="px-2">
                    <Navbar.Brand href="/" className="m-0">
                        <h2><em>GA</em><span className="fw-bold text-white">BOOKS</span></h2>
                    </Navbar.Brand>
                    <div className="mx-auto">
                        <Nav className="justify-content-center">
                            <input type="text" className="form-control rounded-pill" id="search-navbar" placeholder="Pesquise" />
                        </Nav>
                    </div>
                    <Nav className="justify-content-center">
                            <Nav.Link href="/books" className="d-flex flex-column align-items-center">
                                <Row>
                                    <div><img src="/icons/home.png" alt="home icon" /></div>
                                </Row>
                                <Row>
                                    <p className="mb-0 text-white">Home</p>
                                </Row>
                            </Nav.Link>
                            <Nav.Link href="/library" className="d-flex flex-column align-items-center">
                                <Row>
                                    <div><img src="/icons/book.png" alt="book icon" /></div>
                                </Row>
                                <Row>
                                    <p className="mb-0 text-white">Biblioteca</p>
                                </Row>
                            </Nav.Link>
                            <Nav.Link href="/profile/1" className="d-flex flex-column align-items-center">
                                <Row>
                                    <div ><img src="/icons/user2.png" alt="user icon" width={48} /></div>
                                </Row>
                            </Nav.Link>
                    </Nav>
                
            </Navbar>
        </>
    )
}

export default NavbarTop;