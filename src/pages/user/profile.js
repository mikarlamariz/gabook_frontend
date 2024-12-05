import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavbarTop from "../../components/navbar";
import Post from "../../components/post";
import WithAuth from "../../Middlewares/withAuth";
import { useEffect, useState } from "react";
import GetUserFollowingAndFollowers from "../../api/user/getFollowingAndFollowers";
import GetPostsByUser from "../../api/post/getPostsByUser";

const Profile = () => {
    const { id } = useParams();
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);
    const [loadingUserData, setLoadingUserData] = useState(true);
    const [loadingPosts, setLoadingPosts] = useState(true);
    const [posts, setPosts] = useState([]);

    const baseUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

    const profilePathImage = localStorage.getItem("userImage");

    const token = localStorage.getItem('token');

    useEffect(() => {
        const getFollowingAndFollowers = async () => {
            try {
                const response = await GetUserFollowingAndFollowers(token);
                setFollowing(response.data.following);
                setFollowers(response.data.followers);
                setLoadingUserData(false);
            } catch (error) {
                console.log(error);
            }
        }

        getFollowingAndFollowers();
        
    }, [])

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await GetPostsByUser(token);
                setPosts(response.data.data);
                setLoadingPosts(false);
            } catch (error) {
                console.log(error);
            }
        }

        getPosts();
    }, []);

    return (
        <>
            <NavbarTop />

            <main>
                <Container>
                    <div className="d-flex bg-white rounded-3" style={{ height: '160px' }}>
                        <div className="col col-auto d-flex flex-column">
                        {profilePathImage ? (
                                <div><img src={baseUrl + '/' + profilePathImage} className="rounded-circle ms-3 mt-3" alt="user_image" width={120} height={120} /></div>
                            ) : (
                                <div><img src="/icons/user2.png" alt="user icon" className="rounded-circle ms-3 mt-3" width={120} height={120} /></div>
                            )}
                        </div>

                        {loadingUserData ? (
                            <div className="col mt-3 ms-5 col-auto d-flex flex-column justify-content-center align-items-center" style={{ height: '120px' }}>
                                <Spinner animation="border" variant="primary" />
                            </div>
                        ) : (
                            <>
                                <div className="col mt-3 ms-2 col-auto d-flex flex-column justify-content-center align-items-center" style={{ height: '120px' }}>
                                    <p className="m-0">Seguidores: {followers}</p>
                                </div>
                                <div className="col mt-3 ms-2 col-auto d-flex flex-column justify-content-center align-items-center" style={{ height: '120px' }}>
                                    <p className="m-0">Seguindo: {following}</p>
                                </div></>
                        )}
                    </div>

                    <div>

                        {loadingPosts ? (
                            <div className="d-flex justify-content-center mt-5">
                                <Spinner animation="border" variant="primary" />
                            </div>
                        ) : (
                            <>
                                {posts.map((post) => (
                                    <Post
                                        username={post.user.name}
                                        imgUrl={baseUrl + '/' + post.book.cover}
                                        description={post.text}
                                        userImgUrl={post.user.profile_image	 ? baseUrl + '/' + post.user.profile_image : null}
                                        id={post.id}
                                        bookId={post.book.id}
                                    />
                                ))}
                            </>
                        )}

                    </div>

                </Container>
            </main>
        </>
    )
}

export default WithAuth(Profile);