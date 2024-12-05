import AxiosBase from "../axiosBase";

const GetUserBooks = async (token) => {
    return AxiosBase.get("/library", {headers: {Authorization: `Bearer ${token}`}});
}

export default GetUserBooks;