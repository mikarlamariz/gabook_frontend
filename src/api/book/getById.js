import AxiosBase from "../axiosBase";

const GetById = async (id, token) => {
    return AxiosBase.get(`/books/${id}`, {headers: {Authorization: `Bearer ${token}`}});
}

export default GetById;