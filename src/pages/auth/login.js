import { useForm } from 'react-hook-form';
import { Button, Col, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import LoginApi from '../../api/auth/login';
import GetuserImage from '../../api/user/getUserImage';

const validationSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
    password: Yup.string().min(8, 'Senha muito curta').required('Senha obrigatória'),
}).required();

const Login = () => {
    const suapClientId = process.env.REACT_APP_SUAP_CLIENT_ID;

    const suapLogin = () => {
        window.location.href = `https://suap.ifrn.edu.br/o/authorize?response_type=token&grant_type=implicit&client_id=${suapClientId}`;
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema) // Resolver de validação com Yup
    });

    const onSubmit = (data) => {
        const didLogin = async (email, password) => {
            try {
                const response = await LoginApi(email, password);
                const { token, status } = response.data;
                
                console.log(response.status);
                console.log(response.data);

                if (status){
                    localStorage.setItem('token', token);

                    try{
                        const userImageResponse = await GetuserImage(token);
                        const {image} = userImageResponse.data;

                        console.log(image);

                        if (image.length > 0)
                            localStorage.setItem('userImage', image.image);
                    }catch(err) {}

                    window.location.href = '/posts';
                }

            } catch (error) {
                if (error.status === 401)
                    alert(error.response.data.message[0]);
            }
        }

        didLogin(data.email, data.password);
    };

    return (
        <main style={{ height: '100vh', backgroundColor: 'gray' }}>
            <Row style={{ height: '100%', width: '100%' }}>
                <Col md={6} className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#A450CB' }}>
                    <div>
                        <p className="text-center text-white">Não tem uma conta?</p>
                        <div className="text-center">
                            <Button size="lg" href="/register" style={{ width: '240px' }} className="rounded-pill btn-gabook-outline fw-bold">Cadastre-se</Button>
                        </div>
                        <div className="text-center">
                            <Button size="lg" onClick={suapLogin} style={{ width: '240px' }} className="rounded-pill btn-gabook-outline fw-bold mt-2">Entrar com Suap</Button>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#ffffff' }}>
                    <div>
                        <h1><i>GA</i><span className="fw-bold">BOOKS</span></h1>
                        <h4 className="fw-bold">Bem-vindo de volta!</h4>
                        <div className="mt-5">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-2">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        {...register('email')}
                                        size="lg"
                                        type="email"
                                        placeholder="name@example.com"
                                        className={`rounded-pill ${errors.email ? 'is-invalid' : ''}`}
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback d-block">
                                            {errors.email.message}
                                        </div>
                                    )}
                                </Form.Group>
                                
                                <Form.Group className="mb-2">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control
                                        {...register('password')}
                                        size="lg"
                                        type="password"
                                        placeholder="********"
                                        className={`rounded-pill ${errors.password ? 'is-invalid' : ''}`}
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback d-block">
                                            {errors.password.message}
                                        </div>
                                    )}
                                </Form.Group>

                                <div className="text-center mt-3">
                                    <Button size="lg" style={{ width: '180px' }} type="submit" className="rounded-pill btn-gabook fw-bold">
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </main>
    );
};

export default Login;
