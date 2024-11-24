import { Button, Col, Form, Row } from "react-bootstrap";

const Register = () => {
    return (
        <main style={{ height: '100vh', backgroundColor: 'gray' }}>
            <Row style={{ height: '100%', width: '100%' }}>
                <Col md={6} className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#A450CB' }}>
                    <div>
                        <p className="text-center text-white">Já possui uma conta?</p>
                        <div className="text-center">
                            <Button size="lg" href="/login" style={{ width: '240px' }} className="rounded-pill btn-gabook-outline fw-bold">Login</Button>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#ffffff' }}>
                    <div>
                        <h1><i>GA</i><span className="fw-bold">BOOKS</span></h1>
                        <h4 className="fw-bold">Crie uma conta!</h4>
                        <div className="mt-5">
                            <Form>
                                <Form.Group className="mb-2" controlId="form.Name">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control size="lg" className="rounded-pill" type="text" placeholder="João" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="form.Email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control size="lg" className="rounded-pill" type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="form.Password">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control size="lg" className="rounded-pill" type="password" placeholder="********" />
                                </Form.Group>
                                <div className="text-center mt-3">
                                    <Button size="lg" style={{ width: '180px' }} href="/books" className="rounded-pill btn-gabook fw-bold">Cadastre-se</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </main>
    )
}

export default Register;