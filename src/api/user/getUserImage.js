import AxiosBase from "../axiosBase";

const GetuserImage = (token) => {
    return AxiosBase.get("/user/image", {headers: {Authorization: `Bearer ${token}`}});
}

export default GetuserImage;