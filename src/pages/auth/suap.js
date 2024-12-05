import { useEffect, useState } from "react";
import GetSuapUser from "../../api/auth/suap";
import { Spinner } from "react-bootstrap";
import GetuserImage from "../../api/user/getUserImage";

const Suap = () => {
    const clientId = process.env.REACT_APP_SUAP_CLIENT_ID;

    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const hash = window.location.hash;
        const params = new URLSearchParams(hash.replace("#", ''));

        const access_token = params.get('access_token');

        if (!access_token)
            window.location.href = '/';

        setAccessToken(access_token);
    }, [])

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await GetSuapUser(accessToken);
                setUser(response.data);
                localStorage.removeItem('token');
                localStorage.setItem('token', response.data.token);

                try{
                    const userImageResponse = await GetuserImage(response.data.token);
                    const {image} = userImageResponse.data;

                    if (image.length > 0)
                        localStorage.setItem('userImage', image);
                }catch(err) {}

                window.location.href = '/posts';
            } catch (error) {
                localStorage.clear();
                window.location.href = '/';
            }
        }

        if (accessToken)
            getUserData();
    }, [accessToken, setAccessToken])

    return <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
    >
        <Spinner animation="border" variant="info" />
    </div>




}

export default Suap;