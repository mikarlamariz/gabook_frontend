import { Container, Spinner } from "react-bootstrap";
import NavbarTop from "../../components/navbar";
import BookSearch from "../../components/bookSearch";
import WithAuth from "../../Middlewares/withAuth";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBookbyQuery from "../../api/book/search";
import Footer from "../../components/footer";

const Books = () => {
    const location = useLocation();

    const baseUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

    const [books, setBooks] = useState([]);
    const [loadingBooks, setLoadingBooks] = useState(true);

    // // Usando URLSearchParams para extrair o parâmetro "search" da query string
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search') || ''; // Obtém o valor de "search"

    useEffect(() => {
        const searchBooksByQuery = async () => {
            try{
                const response = await SearchBookbyQuery(searchQuery);
                setBooks(response.data.data);
            }catch(error){
                alert("Ocorreu um erro ao carregar os livros!");
                console.log(error);
            }finally{
                setLoadingBooks(false);
            }
        }

        if (searchQuery.length > 0) {
            searchBooksByQuery();
        }else{
            setLoadingBooks(false);
        }
    }, []);

    const renderBook = (book) => {
        return (
            <BookSearch
                key={book.id}
                id={book.id}
                title={book.title}
                description={book.sinopse}
                imgUrl={baseUrl + '/' + book.cover}
            />
        )
    }

    return (
        <>
            <NavbarTop />

            <main style={{height: '100vh'}}>
                <Container>

                    <div className="my-5">
                        {loadingBooks ? (
                            <div className="d-flex justify-content-center">
                                <Spinner className="mt-5" animation="border" variant="primary" />
                            </div>
                        ) : ( 
                            books.map((book) => renderBook(book))
                        )}
                    </div>

                </Container>
            </main>

            <Footer />
        </>
    )
}

export default WithAuth(Books);