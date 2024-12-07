import { Button, Container, Form, Spinner } from "react-bootstrap";
import NavbarTop from "../../components/navbar";

import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import GetAllGenres from "../../api/book/genres";

import CreateBookApi from "../../api/book/create";
import Footer from "../../components/footer";

const currentYear = new Date().getFullYear();

const validationSchema = Yup.object({
    title: Yup.string()
        .required("Título é obrigatório")
        .min(3, "Título deve ter pelo menos 3 caracteres"),
    author: Yup.string()
        .required("Autor é obrigatório")
        .min(3, "Autor deve ter pelo menos 3 caracteres"),
    sinopse: Yup.string()
        .required("Sinopse é obrigatória")
        .min(10, "Sinopse deve ter pelo menos 10 caracteres"),
    isbn: Yup.string()
        .required("ISBN é obrigatório")
        .matches(/^[0-9]{13}$/, "ISBN deve ter 13 dígitos"),
    publicationYear: Yup.number()
        .integer("Ano de publicação deve ser um número inteiro")
        .required("Ano de publicação é obrigatório")
        .min(1500, "Ano de publicação deve ser maior ou igual a 1900"),
    genre: Yup.number()
        .required("Gênero é obrigatório"),
    image: Yup.mixed()
        .required("Arquivo é obrigatório")
        .test("fileType", "Somente arquivos .jpg, .jpeg e .png são permitidos", (value) => {
            if (!value) return false;
            const validTypes = ["image/jpeg", "image/png", "image/jpg"];
            return validTypes.includes(value[0]?.type);
        }),
}).required();


const CreateBook = () => {
    const [genres, setGenres] = useState([]);
    const [loadingGenres, setLoadingBooks] = useState(true);

    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        resolver: yupResolver(validationSchema)
    });

    useEffect(() => {
        const getGenres = async () => {
            try {
                const response = await GetAllGenres();
                setGenres(response.data.data);
            } catch (error) {
                alert("Ocorreu um erro ao carregar os gêneros!");
                console.log(error);
            } finally {
                setLoadingBooks(false);
            }
        }

        getGenres();
    }, []);

    const onSubmitForm = async (data) => {
        try {
            const response = await CreateBookApi(data);
            debugger;
            window.location.href = `/books/${response.data.data.id}`;
            console.log(response);
        } catch (error) {
            debugger;
            alert("Ocorreu um erro ao criar o livro!");
            console.log(error);
        }
    }

    return (
        <>
            <NavbarTop />

            <main style={{height: '100vh'}}>
                <Container className="my-5">
                    <Form onSubmit={handleSubmit(onSubmitForm)}>
                        <Form.Group>
                            <Form.Label>Título</Form.Label>
                            <Form.Control {...register("title")} type="text" className={`${errors.title ? 'is-invalid' : ''}`} placeholder="Título" />
                            {errors.title && (
                                <div className="invalid-feedback d-block">
                                    {errors.title.message}
                                </div>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Autor</Form.Label>
                            <Form.Control {...register("author")} type="text" className={`${errors.author ? 'is-invalid' : ''}`} placeholder="Autor" />
                            {errors.author && (
                                <div className="invalid-feedback d-block">
                                    {errors.author.message}
                                </div>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sinopse</Form.Label>
                            <Form.Control {...register("sinopse")} as="textarea" rows={3} className={`${errors.sinopse ? 'is-invalid' : ''}`} placeholder="Sinopse" />
                            {errors.sinopse && (
                                <div className="invalid-feedback d-block">
                                    {errors.sinopse.message}
                                </div>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>ISBN</Form.Label>
                            <Form.Control {...register("isbn")} type="text" className={`${errors.isbn ? 'is-invalid' : ''}`} placeholder="ISBN" />
                            {errors.isbn && (
                                <div className="invalid-feedback d-block">
                                    {errors.isbn.message}
                                </div>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Ano de publicação</Form.Label>
                            <Form.Control {...register("publicationYear")} defaultValue={1500} type="number" className={`${errors.publicationYear ? 'is-invalid' : ''}`} placeholder="Ano de publicação" />
                            {errors.publicationYear && (
                                <div className="invalid-feedback d-block">
                                    {errors.publicationYear.message}
                                </div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Gênero</Form.Label>
                            {loadingGenres ? (
                                <>
                                    <br />
                                    <Spinner className="ms-3" animation="border" variant="primary" />
                                </>
                            ) : (
                                <Form.Select {...register("genre")} placeholder="Gênero" >
                                    {genres.map((genre) => (
                                        <option key={genre.id} value={genre.id}>{genre.genre}</option>
                                    ))}
                                </Form.Select>
                            )}
                            {errors.genre && (
                                <div className="invalid-feedback d-block">
                                    {errors.genre.message}
                                </div>
                            )}
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Capa do livro</Form.Label>
                            <Form.Control type="file" className={`${errors.image ? 'is-invalid' : ''}`} accept="image/jpeg, image/png, image/jpg" {...register("image")} />
                            {errors.image && (
                                <div className="invalid-feedback d-block">
                                    {errors.image.message}
                                </div>
                            )}
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button type="submit" className="mt-3 rounded-pill btn-gabook">Salvar</Button>
                        </div>
                    </Form>
                </Container>
            </main>

        </>
    )
}

export default CreateBook;