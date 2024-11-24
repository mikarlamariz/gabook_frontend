import { Col, Container, Nav, Row } from "react-bootstrap";
import NavbarTop from "../../components/navbar";

import '../../css/library.css';

const Library = () => {
    return (
        <>
            <NavbarTop />
            <main>
                <Container>

                    <article className="my-5 text-center">
                        <h1 className="fw-semibold">Sua Biblioteca</h1>
                        <p>Leia todos os livros favoritos aqui</p>
                    </article>

                    <div>

                        <Nav className="nav-dad-pill justify-content-center" variant="pills" defaultActiveKey="link-1">
                            <Nav.Item >
                                <Nav.Link className="rounded-start-pill  link-pill" eventKey="link-1">Todos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="link-pill rounded-0" eventKey="link-2">Lidos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="link-pill rounded-0" eventKey="link-3">Lendo</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="link-pill rounded-0" eventKey="link-4">Quero ler</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="link-pill rounded-0" eventKey="link-5">Relendo</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="rounded-end-pill link-pill" eventKey="link-6">Abandonei</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>

                    <div className="table mt-5">
                        <Row>
                            <Col md={3}>

                            </Col>
                            <Col md={4}>
                                <p className="m-0 text-center fw-semibold p-col-library">TITULO E AUTOR</p>
                            </Col>
                            <Col md={4}>
                                <p className="m-0 text-center fw-semibold p-col-library">CLASSIFICAÇÃO</p>
                            </Col>
                        </Row>
                    </div>

                    <div className="table-content align-items-center p-3">
                        <Row className=" mt-3">
                            <Col md={3}>
                                <img src='/capa.jpg' height={248} />
                            </Col>
                            <Col md={4} className="d-flex align-items-center justify-content-center">
                                <div className="text-center">
                                    <p className="m-0 text-center p-purple fw-semibold">A CASA NO MAR GERULEO</p>
                                    <p>Tj Klune</p>
                                </div>
                            </Col>
                            <Col md={4} className="d-flex align-items-center justify-content-center">
                                <div>
                                    <p className="m-0 text-center p-purple fw-semibold">5/5</p>
                                    <Row className="justify-content-center">
                                        <Col className="col-auto"><img src="/icons/star_filled.png"></img></Col>
                                        <Col className="col-auto"><img src="/icons/star_empty.png"></img></Col>
                                        <Col className="col-auto"><img src="/icons/star_empty.png"></img></Col>
                                        <Col className="col-auto"><img src="/icons/star_empty.png"></img></Col>
                                        <Col className="col-auto"><img src="/icons/star_empty.png"></img></Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </main>
        </>

    )
}

export default Library;