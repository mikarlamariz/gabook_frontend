import { Container, Spinner } from "react-bootstrap";
import NavbarTop from "../../components/navbar";
import Post from "../../components/post";
import MakePost from "../../components/makePost";
import WithAuth from "../../Middlewares/withAuth";
import { useEffect, useState } from "react";
import GetPostsByUser from "../../api/post/getPostsByUser";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(true);

    const baseUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

    const token = localStorage.getItem('token');

    useEffect(() => {
        const getPosts = async () => {
            try{
                const response = await GetPostsByUser(token);
                console.log(response.data.data);
                setPosts(response.data.data);
            }catch(err)
            {
                console.log(err);
            }finally{
                setLoadingPosts(false);
            }
        }

        getPosts();

    }, [])

    return (
        <>
            <NavbarTop />

            <main>
                <Container>

                    <div className="my-5">
                        <MakePost/>

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
                                        id={post.book.id}
                                    />
                                )
                            })
                        )
                        }

                        {/* <Post
                            username="teste"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        /> */}
                        
                    </div>

                </Container>
            </main>

        </>
    )
}

export default WithAuth(Posts);