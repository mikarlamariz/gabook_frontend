import AxiosBase from "../axiosBase"

const SearchBookbyQuery = (query) => {
    const token = localStorage.getItem('token');
    return AxiosBase.get(`/books/searchByText?search=${query}`, {headers: {Authorization: `Bearer ${token}`}});
}

export default SearchBookbyQuery;