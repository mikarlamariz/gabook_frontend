import AxiosBase from "../axiosBase";

const GetComments = (post_id) => {
    const token = localStorage.getItem('token');
    return AxiosBase.get(`/commentsByPostId/${post_id}`, {headers: {Authorization: `Bearer ${token}`}}); 
}

export default GetComments;
