import { Button, Col, Form, Row } from "react-bootstrap";

const Login = () => {
    return (
        <main style={{ height: '100vh', backgroundColor: 'gray' }}>
            <Row style={{ height: '100%', width: '100%' }}>
                <Col md={6} className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#A450CB' }}>
                    <div>
                        <p className="text-center text-white">Não tem uma conta?</p>
                        <div className="text-center">
                            <Button size="lg" href="/register" style={{ width: '240px' }} className="rounded-pill btn-gabook-outline fw-bold">Cadastre-se</Button>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#ffffff' }}>
                    <div>
                        <h1><i>GA</i><span className="fw-bold">BOOKS</span></h1>
                        <h4 className="fw-bold">Bem-vindo de volta!</h4>
                        <div className="mt-5">
                            <Form>
                                <Form.Group className="mb-2" controlId="form.Email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control size="lg" className="rounded-pill" type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="form.Password">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control size="lg" className="rounded-pill" type="password" placeholder="********" />
                                </Form.Group>
                                <div className="text-center mt-3">
                                    <Button size="lg" style={{width: '180px'}} href="/books" className="rounded-pill btn-gabook fw-bold">Login</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </main>
    )
}

export default Login;