import { Col, Container, Nav, Row, Spinner } from "react-bootstrap";
import NavbarTop from "../../components/navbar";

import '../../css/library.css';
import WithAuth from "../../Middlewares/withAuth";
import { useEffect, useState } from "react";
import GetUserBooks from "../../api/book/getUserBooks";

const Library = () => {
    const [myBooks, setMyBooks] = useState([]);
    const [bkpBooks, setBkpBooks] = useState([]);
    const [loadingBooks, setLoadingBooks] = useState(true);

    const baseUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

    useEffect(() => {
        const getMyBooks = async () => {
            try {
                const response = await GetUserBooks();
                setMyBooks(response.data.data);
                setBkpBooks(response.data.data);
            } catch (err) {
                alert("Ocorreu um erro ao carregar os livros");
                console.log(err);
            } finally {
                setLoadingBooks(false);
            }
        }

        getMyBooks();
    }, [])

    const filterByStatus = (status) => {
        const statuses = {
            "todos": "todos",
            "lidos": "Lido",
            "lendo": "Lendo",
            "quero_ler": "Quero Ler",
            "abandonei": "Abandonado",
            "relendo": "Relendo",
        }

        if (status === "todos")
            setMyBooks(bkpBooks);
        else
            setMyBooks(bkpBooks.filter(b => b.book.status === statuses[status]));
    }

    const renderBook = (book) => {
        return (
            <Row key={book.book.id} className=" mt-3">
                <Col md={3}>
                    <img src={baseUrl + '/' + book.book.cover} onClick={() => window.location.href = `/books/${book.book.id}`} style={{ cursor: 'pointer' }} height={248} />
                </Col>
                <Col md={4} className="d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <p onClick={() => window.location.href = `/books/${book.book.id}`} style={{ cursor: 'pointer' }} className="m-0 text-center p-purple fw-semibold">{book.book.title}</p>
                        <p className="m-0">{book.author.name}</p>
                    </div>
                </Col>
                <Col md={4} className="d-flex align-items-center justify-content-center">
                    <div>
                        <p className="m-0 text-center p-purple fw-semibold">{book.book.evaluation_average}/5</p>
                    </div>
                </Col>
            </Row>
        )
    }

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

                        <Nav onSelect={filterByStatus} className="nav-dad-pill justify-content-center" variant="pills" defaultActiveKey="todos">
                            <Nav.Item >
                                <Nav.Link className="rounded-start-pill  link-pill" eventKey="todos">Todos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="link-pill rounded-0" eventKey="lidos">Lidos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="link-pill rounded-0" eventKey="lendo">Lendo</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="link-pill rounded-0" eventKey="quero_ler">Quero ler</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="link-pill rounded-0" eventKey="relendo">Relendo</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="rounded-end-pill link-pill" eventKey="abandonei">Abandonei</Nav.Link>
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

                    {/* transformar em componente */}
                    {loadingBooks ? (
                        <div className="d-flex justify-content-center">
                            <Spinner className="mt-5" animation="border" variant="primary" />
                        </div>
                    ) : (
                        <div className="table-content align-items-center p-3">

                            {myBooks.map((book) => renderBook(book))}

                        </div>

                    )}

                </Container>
            </main>
        </>

    )
}

export default WithAuth(Library);