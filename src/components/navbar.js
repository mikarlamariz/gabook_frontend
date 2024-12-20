import { Navbar, Nav, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import '../css/navbar.css';
import { useState } from "react";

const NavbarTop = () => {
    const navigate = useNavigate()

    const [searchValue, setSearchValue] = useState("");

    const baseUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

    const profilePathImage = localStorage.getItem("userImage");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/books/search?search=${searchValue.target.value}`;
    };

    return (
        <>
            <Navbar className="px-2">
                <Navbar.Brand href="/posts" className="m-0">
                    <h2><em>GA</em><span className="fw-bold text-white">BOOKS</span></h2>
                </Navbar.Brand>
                <div className="mx-auto">
                    <Nav className="justify-content-center">
                        <Form onSubmit={handleFormSubmit}>
                            <input type="text" onChange={setSearchValue} className="form-control rounded-pill" id="search-navbar" placeholder="Pesquise" />
                        </Form>
                    </Nav>
                </div>
                <Nav className="justify-content-center">
                    <Nav.Link href="/posts" className="d-flex flex-column align-items-center">
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
                            {profilePathImage ? (
                                <div><img src={baseUrl + '/' + profilePathImage} className="rounded-circle" alt="user icon" width={48} height={48} /></div>
                            ) : (
                                <div><img src="/icons/user2.png" alt="user icon" width={48} /></div>
                            )}
                        </Row>
                    </Nav.Link>
                </Nav>

            </Navbar>
        </>
    )
}

export default NavbarTop;