import AxiosBase from "../axiosBase";

const LikePost = (id) => {
    const token = localStorage.getItem('token');
    return AxiosBase.post(`/post/${id}/like`, {}, {headers: {Authorization: `Bearer ${token}`}}); 
}

export default LikePost;
