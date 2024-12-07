import AxiosBase from "../axiosBase";

const MakeComment = async (postId, comment) => {
    const token = localStorage.getItem('token');
    return AxiosBase.post(`/comment`, {post_id: postId, content: comment}, {headers: {Authorization: `Bearer ${token}`}});
}

export default MakeComment;