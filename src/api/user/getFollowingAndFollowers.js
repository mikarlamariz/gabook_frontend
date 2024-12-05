import AxiosBase from "../axiosBase";

const GetUserFollowingAndFollowers = (token) => {
    return AxiosBase.get("/user/followingAndFollowers", {headers: {Authorization: `Bearer ${token}`}});
}

export default GetUserFollowingAndFollowers;