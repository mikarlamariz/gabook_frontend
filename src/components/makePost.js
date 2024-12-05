import { Button, Col, Form, FormSelect, FormText, Row, Spinner } from 'react-bootstrap';
import '../css/makePost.css';
import { useEffect, useState } from 'react';
import GetUserBooks from '../api/book/getUserBooks';
import SendPost from '../api/post/sendPost';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    book: Yup.number().required('Livro obrigatório'),
    text: Yup.string().required('Texto obrigatório'),
})

const MakePost = () => {
    const [books, setBooks] = useState([]);
    const [loadingBooks, setLoadingBooks] = useState(true);
    const [sendingPost, setSendingPost] = useState(false);

    const token = localStorage.getItem('token');

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema) // Resolver de validação com Yup
    });

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await GetUserBooks(token);
                setBooks(response.data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingBooks(false);
            }
        }

        getBooks();
    }, [])

    const sendPost = (data) => {
        console.log(data.book, data.text);
        const didSendPost = async () => {
            try {
                setSendingPost(true);
                const post = await SendPost(token, data.book, data.text);
                console.log(post);
            } catch (error) {
                console.log(error);
            } finally {
                setSendingPost(false);
            }
        }

        didSendPost();
    }

    return (
        <div className='bg-white p-3 rounded-3'>
            <Row className='d-flex justify-items-center'>
                <Col className=' col-auto'>
                    <img src="icons/user3.png" alt="user icon" />
                </Col>
                <Col className='col-auto'>
                    <p className='m-0'>Sobre que livro você está pensando?</p>
                </Col>
            </Row>

            <Form onSubmit={handleSubmit(sendPost)}>
                {loadingBooks ? (
                    <div className='d-flex align-items-center justify-content-center my-3'>
                        <Spinner animation="border" role="status" />
                        <p className='m-0 ms-3'>Carregando livros...</p>
                    </div>
                ) : (
                    <>
                    <FormSelect {...register('book')} aria-label="Default select example" className='mt-3'>
                        {books.map(book => (
                            <option key={book.id} value={book.book.id}>{book.book.title}</option>
                        ))}
                    </FormSelect>
                    {errors.book && (
                        <div className="invalid-feedback d-block">
                            {errors.book.message}
                        </div>
                    )}</>
                )}

                <Form.Control {...register('text')} className={`mt-2 ${errors.text ? 'is-invalid' : ''}`} as="textarea" rows={3} />
                {errors.text && (
                    <div className="invalid-feedback d-block">
                        {errors.text.message}
                    </div>
                )}

                <div className='d-flex justify-content-end'>
                    {sendingPost ? (
                        <Button disabled={sendingPost} type='submit' className={"mt-3 rounded-pill btn-gabook disabled"} ><Spinner size='sm' animation="border" role="status" /></Button>
                    ) : 
                        <Button disabled={sendingPost} type='submit' className={sendingPost ? "mt-3 rounded-pill btn-gabook disabled" : "mt-3 rounded-pill btn-gabook"} >Compartilhar</Button>
                    }
                </div>

            </Form>

        </div>
    )
}

export default MakePost;