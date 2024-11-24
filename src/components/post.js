import { Button, Col, Row } from "react-bootstrap";

const Post = ({ username, imgUrl, description, id }) => {

    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    }

    return (
        <div>
            <div className="p-5 mx-auto mt-4 rounded-3 bg-white">
                <Row className='d-flex justify-items-center'>
                    <Col className=' col-auto'>
                        <img src="/icons/user3.png" alt="user icon" />
                    </Col>
                    <Col className='col-auto'>
                        <p className='m-0'>{username}</p>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{ height: '100%' }}>
                    <Col lg={3} md={4} className="text-center">
                        <img src={imgUrl ? imgUrl : '/capa.jpg'} height={248} />
                    </Col>
                    <Col lg={9} className="d-flex flex-column">
                        <Row>
                            <p>{truncateText(description, 210)}</p>
                        </Row>
                        <div className="d-flex flex-column mt-auto">
                            <Row className="d-flex justify-items-center">
                                <Col className="col-auto">
                                    <img className="icon-with-click" src="/icons/heart.png" alt="heart icon" />
                                </Col>
                                <Col className="col-auto ms-1">
                                    <img className="icon-with-click" src="/icons/message.png" alt="message icon" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Post;