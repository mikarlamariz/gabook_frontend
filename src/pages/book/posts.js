import { Container, Spinner } from "react-bootstrap";
import NavbarTop from "../../components/navbar";
import Post from "../../components/post";
import MakePost from "../../components/makePost";
import WithAuth from "../../Middlewares/withAuth";
import { useEffect, useState } from "react";
import GetPostsByUser from "../../api/post/getPostsByUser";
import Footer from "../../components/footer";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(true);

    const baseUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

    const token = localStorage.getItem('token');

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await GetPostsByUser(token);
                console.log(response.data.data);
                setPosts(response.data.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoadingPosts(false);
            }
        }

        getPosts();

    }, [])

    return (
        <>
            <NavbarTop />

            <main style={{height: '100vh'}}>
                <Container className="my-5">
                    <MakePost />

                    {loadingPosts ? (
                        <div className="d-flex justify-content-center mt-5">
                            <Spinner animation="border" variant="primary" />
                        </div>
                    ) :
                        (

                            posts.map(post => {

                                return (
                                    <Post
                                        key={post.id}
                                        username={post.user.name}
                                        description={post.text}
                                        imgUrl={`${baseUrl}/${post.book.cover}`}
                                        userImgUrl={`${baseUrl}/${post.user.profile_image}`}
                                        bookId={post.book.id}
                                        id={post.id}
                                        iLiked={post.i_liked}
                                    />
                                )
                            })
                        )

                    }
                </Container>
            </main>

        </>
    )
}

export default WithAuth(Posts);