import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavbarTop from "../../components/navbar";
import { useEffect, useState } from "react";
import WithAuth from "../../Middlewares/withAuth";
import GetById from "../../api/book/getById";
import AddBookToLibrary from "../../api/book/addToLibrary";

const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [loadingAddToLibrary, setLoadingAddToLibrary] = useState(false);

    const token = localStorage.getItem('token');

    const baseUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    }

    const addBookToLibrary = () => {
        const AddToLibrary = async (token, id) => {
            try {
                setLoadingAddToLibrary(true);
                const response = await AddBookToLibrary(token, id);
            } catch (err) {
                console.log(err);
            }finally{
                setLoadingAddToLibrary(false);
            }
        }
        AddToLibrary(token, id);
    }

    useEffect(() => {
        const getBook = async () => {
            try {
                const response = await GetById(id, token);
                setBook(response.data.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }

        getBook();
    }, [token])

    return (
        <>
            <NavbarTop />
            <main>
                <Container>

                    {loading ? (
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{ height: "100vh" }}
                        >
                            <Spinner animation="border" variant="info" />
                        </div>
                    ) : (
                        <div className="p-5 mx-auto my-5 rounded-3 bg-white" style={{ maxWidth: '900px' }}>
                            <Row className="justify-content-center">
                                <Col lg={3} md={4} className="text-center">
                                    <div>
                                        <Row>
                                            <img src={baseUrl + "/" + book.cover} height={248} width={207} />
                                        </Row>
                                        <Row className="mt-2">
                                            <p className="fs-3">{truncateText(book.title, 100)}</p>
                                        </Row>
                                        <Row className="justify-content-center">
                                            <p>{book.evaluation_average}/5</p>
                                        </Row>
                                        <Row className="mt-3">
                                            {loadingAddToLibrary ? (
                                                <Button className="rounded-pill btn-gabook"><Spinner size="sm" animation="border" variant="info" /></Button>
                                            ) : (
                                                <Button className="rounded-pill btn-gabook" onClick={addBookToLibrary}>Adicionar à biblioteca</Button>
                                            )}
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={9}>
                                    <h2 className="fw-semibold">{book.title}</h2>
                                    <p className="m-0 text-secondary">{book.author.name}</p>
                                    <p className="text-secondary">{book.release_year}</p>
                                    <p>{book.sinopse}</p>

                                </Col>
                            </Row>
                        </div>
                    )}


                </Container>
            </main >
        </>
    )
}

export default WithAuth(ShowBook);