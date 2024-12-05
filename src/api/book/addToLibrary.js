import AxiosBase from "../axiosBase";

const AddBookToLibrary = async (token, id) => {
    const data = {book_id: id};
    return AxiosBase.post(`/library`, data, {headers: {Authorization: `Bearer ${token}`}});
}

export default AddBookToLibrary;