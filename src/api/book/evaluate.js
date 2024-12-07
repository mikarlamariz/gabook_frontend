import AxiosBase from "../axiosBase";

const EvaluateBook = (id, evaluation) => {
    const token = localStorage.getItem('token');
    return AxiosBase.put(`/books/evaluate`, { "book_id": id, "evaluation": evaluation}, {headers: {Authorization: `Bearer ${token}`}})
}

export default EvaluateBook;