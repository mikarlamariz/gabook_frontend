import AxiosBase from "../axiosBase";

const SendPost = async (token, bookId, description) => {
    return AxiosBase.post(`/post`, {book_id: bookId, text: description}, {headers: {Authorization: `Bearer ${token}`}});
}

export default SendPost;