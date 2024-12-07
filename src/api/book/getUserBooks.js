import AxiosBase from "../axiosBase";

const GetUserBooks = async () => {
    const token = localStorage.getItem('token');
    return AxiosBase.get("/library", {headers: {Authorization: `Bearer ${token}`}});
}

export default GetUserBooks;