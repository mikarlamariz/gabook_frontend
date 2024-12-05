import AxiosBase from "../axiosBase";

const GetSuapUser = (token) => {
    return AxiosBase.get(`/suap/${token}`);
}

export default GetSuapUser;