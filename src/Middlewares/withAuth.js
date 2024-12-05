
const WithAuth = (Component) => {
    const AuthRoute = () => {
      const isAuth = !!localStorage.getItem("token");

      if (isAuth) {
        return <Component />;
      } else {
        return window.location.href = "/";
      }
    };
  
    return AuthRoute;
  };
  
  export default WithAuth;