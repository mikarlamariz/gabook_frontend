import AxiosBase from "../axiosBase";

const GetAllGenres = async () => {
    const token = localStorage.getItem('token');
    return AxiosBase.get('/genres', {headers: {Authorization: `Bearer ${token}`}});
}

export default GetAllGenres;