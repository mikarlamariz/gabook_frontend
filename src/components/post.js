import { useState } from "react";
import { Button, Col, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import MakeComment from "../api/post/makeComment";
import GetComments from "../api/post/getComments";
import LikePost from "../api/post/likePost";


const Post = ({ username, imgUrl, description, userImgUrl, bookId, iLiked, id }) => {
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(true);
    const [liked, setLiked] = useState(iLiked);

    const baseUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

    const onCoverClick = () => {
        window.location.href = `/books/${bookId}`;
    }

    const sendComment = () => {
        const send = async () => {
            if (newComment.length > 0) {
                try {
                    const response = await MakeComment(id, newComment);
                    setNewComment('');
                    // window.location.href = `/posts`;
                } catch (error) {
                    alert("Ocorreu um erro ao enviar o comentário");
                    console.log(error);
                }
            }
        }

        send();
    }

    const getComments = () => {
        const get = async () => {
            try {
                const response = await GetComments(id);
                setComments(response.data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingComments(false);
            }
        }

        get();

        // const intervalId = setInterval(get, 3000);

        // return () => clearInterval(intervalId);

    }

    const like = () => {
        const did = async () => {
            try {
                const response = await LikePost(id);
                iLiked = !iLiked;
                setLiked(!liked);
            } catch (error) {
                alert("Ocorreu um erro ao curtir o post");
                console.log(error);
            }
        }

        did();
    }

    const renderComment = (comment) => {
        // debugger;
        return (
            <div className="mt-2">
                <Row className='d-flex justify-items-center'>
                    <Col className=' col-auto'>
                        <img width={32} height={32} className="rounded-circle" src={comment.user.profile_image ? baseUrl + '/' + comment.user.profile_image : '/icons/user3.png'} alt="user icon" />
                    </Col>
                    <Col className='col-auto'>
                        <p className='m-0'>{comment.user.name}</p>
                    </Col>
                </Row>
                <Row>
                    <p className="mx-5 m-0 pe-5" style={{overflowWrap: 'break-word'}}>{comment.content}</p>
                </Row>
            </div>
        )
    }

    const openComments = () => {
        setCommentsOpen(!commentsOpen);

        getComments();

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
                                    <img className="icon-with-click" src={liked ? "/icons/filled_heart.png" : "/icons/heart.png"} alt="heart icon" onClick={like} />
                                </Col>
                                <Col className="col-auto ms-1">
                                    <img className="icon-with-click" src="/icons/message.png" alt="message icon" onClick={openComments} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                {commentsOpen ? (
                    <>
                        <div className="py-3">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Deixe seu comentário..."
                                />
                                <Button variant="outline-secondary" id="button-addon2" onClick={sendComment}>
                                    Enviar
                                </Button>
                            </InputGroup>
                        </div>
                        {loadingComments ? (
                            <div className="d-flex justify-content-center mt-5">
                                <Spinner animation="border" variant="primary" />
                            </div>
                        ) : (
                        comments && comments.map((comment) => renderComment(comment))
                        )}
                    </>
                ) : (
                    <></>
                )}

            </div>
        </div>
    )
}

export default Post;