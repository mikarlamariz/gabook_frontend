import { Button, Col, Form, FormSelect, FormText, Row } from 'react-bootstrap';
import '../css/makePost.css';

const MakePost = () => {
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

            <Form>
                <FormSelect aria-label="Default select example" className='mt-3'>
                    <option>Selecione um livro</option>
                    <option value="1">um</option>
                    <option value="2">dois</option>
                    <option value="3">três</option>
                </FormSelect>

                <Form.Control className='mt-2' as="textarea" rows={3} />

                <div className='d-flex justify-content-end'>
                    <Button className='mt-3 rounded-pill btn-gabook'>Compartilhar</Button>
                </div>

            </Form>

        </div>
    )
}

export default MakePost;