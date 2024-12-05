import AxiosBase from "../axiosBase";

const Login = (email, password) => {
    return AxiosBase.post(`/login`, {email, password});
}

export default Login;