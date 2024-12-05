import AxiosBase from "../axiosBase";

const Register = (name, email, password) => {
    return AxiosBase.post(`/register`, {name, email, password});
}

export default Register;