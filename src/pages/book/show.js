import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavbarTop from "../../components/navbar";
import { useState } from "react";

const ShowBook = () => {
    const [title, setTitle] = useState("testetestetestetestettetetetetetet");
    const [imgUrl, setImgUrl] = useState(null);
    const [description, setDescription] = useState("testando a descricaotestando a descricaotestando a descricaotestando a descricaotestando a descricaotestando a descricaotestando a descricaotestando a descricaotestando a descricaotestando a descricaotestando a descricaotestando a descricao");
    const [author, setAuthor] = useState("autor");
    const [releaseDate, setreleaseDate] = useState("08/04/2004");
    const { id } = useParams();

    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    }

    return (
        <>
            <NavbarTop />
            <main>
                <Container>

                    <div className="p-5 mx-auto mt-5 rounded-3 bg-white" style={{ maxWidth: '900px' }}>
                        <Row className="justify-content-center">
                            <Col lg={3} md={4} className="text-center">
                                <div>
                                    <Row>
                                        <img src={imgUrl ? imgUrl : '/capa.jpg'} height={248} />
                                    </Row>
                                    <Row className="mt-2">
                                        <p className="fs-3">{truncateText(title, 14)}</p>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col className="col-auto"><img src="/icons/star_filled.png"></img></Col>
                                        <Col className="col-auto"><img src="/icons/star_empty.png"></img></Col>
                                        <Col className="col-auto"><img src="/icons/star_empty.png"></img></Col>
                                        <Col className="col-auto"><img src="/icons/star_empty.png"></img></Col>
                                        <Col className="col-auto"><img src="/icons/star_empty.png"></img></Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Button className="rounded-pill btn-gabook">Adicionar à biblioteca</Button>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={9}>
                                <h2 className="fw-semibold">{title}</h2>
                                <p className="m-0 text-secondary">{author}</p>
                                <p className="text-secondary">{releaseDate}</p>
                                <p>{description}</p>

                            </Col>
                        </Row>
                    </div>

                </Container>
            </main>
        </>
    )
}

export default ShowBook;