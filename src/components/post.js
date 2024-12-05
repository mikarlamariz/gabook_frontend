import { Col, Row } from "react-bootstrap";


const Post = ({ username, imgUrl, description, userImgUrl, bookId, id }) => {

    const onCoverClick = () => {
        window.location.href = `/books/${bookId}`;
    }

    return (
        <div>
            <div className="p-5 mx-auto mt-4 rounded-3 bg-white">
                <Row className='d-flex justify-items-center'>
                    <Col className=' col-auto'>
                        <img src={userImgUrl ? userImgUrl : '/icons/user3.png'} className="rounded-circle" width={32} height={32} alt="user icon" />
                    </Col>
                    <Col className='col-auto'>
                        <p className='m-0'>{username}</p>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{ height: '100%' }}>
                    <Col lg={3} md={4} className="text-center">
                        <img src={imgUrl ? imgUrl : '/capa.jpg'} onClick={onCoverClick} style={{ cursor: 'pointer' }} width={162} height={248} />
                    </Col>
                    <Col lg={9} className="d-flex flex-column">
                        <Row>
                            <p>{description}</p>
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