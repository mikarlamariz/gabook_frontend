import { Button, Col, Row } from "react-bootstrap";

import '../css/bookSearch.css';

const BookSearch = ({ title, imgUrl, description, id }) => {

    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    }

    return (
        <div className="p-5 mx-auto mt-4 rounded-3 book-search bg-white">
            <Row className="justify-content-center">
                <Col lg={3} md={4} className="text-center">
                    <img src={imgUrl ? imgUrl : '/capa.jpg'} height={248}/>
                </Col>
                <Col lg={9}>
                    <h2>{title}</h2>
                    <p>{truncateText(description, 210)}</p>
                    <div>
                        <Button href={`/books/${id}`} className="rounded-pill btn-gabook">Ver livro</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BookSearch;