import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import RegisterApi from "../../api/auth/register";

const validationSchema = Yup.object({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
    password: Yup.string().min(8, 'Senha muito curta').required('Senha obrigatória'),
}).required();

const Register = () => {
    const suapClientId = process.env.REACT_APP_SUAP_CLIENT_ID;

    const suapLogin = () => {
        window.location.href = `https://suap.ifrn.edu.br/o/authorize?response_type=token&grant_type=implicit&client_id=${suapClientId}`;
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data) => {
        const didRegister = async (name, email, password) => {
            try{
                const response = await RegisterApi(name, email, password);
                
                console.log(response.status);

                if (response.status === 201)
                    window.location.href = '/login';
            }catch(err){
                alert(err);
            }
        }

        didRegister(data.name, data.email, data.password);
    }

    return (
        <main style={{ height: '100vh', backgroundColor: 'gray' }}>
            <Row style={{ height: '100%', width: '100%' }}>
                <Col md={6} className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#A450CB' }}>
                    <div>
                        <p className="text-center text-white">Já possui uma conta?</p>
                        <div className="text-center">
                            <Button size="lg" href="/login" style={{ width: '240px' }} className="rounded-pill btn-gabook-outline fw-bold">Login</Button>
                        </div>
                        <div className="text-center">
                            <Button size="lg" onClick={suapLogin} style={{ width: '240px' }} className="rounded-pill btn-gabook-outline fw-bold mt-2">Entrar com Suap</Button>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#ffffff' }}>
                    <div>
                        <h1><i>GA</i><span className="fw-bold">BOOKS</span></h1>
                        <h4 className="fw-bold">Crie uma conta!</h4>
                        <div className="mt-5">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-2" controlId="form.Name">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        {...register('name')}
                                        size="lg"
                                        type="text"
                                        placeholder="João"
                                        className={`rounded-pill ${errors.email ? 'is-invalid' : ''}`}
                                    />
                                    {errors.name && (
                                        <div className="invalid-feedback d-block">
                                            {errors.name.message}
                                        </div>
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="form.Email">
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
                                <Form.Group className="mb-2" controlId="form.Password">
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
                                    <Button size="lg" style={{ width: '180px' }} type="submit" className="rounded-pill btn-gabook fw-bold">Cadastre-se</Button>
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