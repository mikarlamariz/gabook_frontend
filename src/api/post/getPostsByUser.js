import AxiosBase from "../axiosBase";

const GetPostsByUser = (token) => {
    return AxiosBase.get("/post/getAllByUser", {headers: {Authorization: `Bearer ${token}`}}); 
}

export default GetPostsByUser;
