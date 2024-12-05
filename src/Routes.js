import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Books from "./pages/book/books";
import Posts from "./pages/book/posts";
import ShowBook from "./pages/book/show";
import Profile from "./pages/user/profile";
import Library from "./pages/user/library";
import Suap from "./pages/auth/suap";


//as rotas retornam um componente.

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/suap",
        element: <Suap />
    },
    {
        path: "/login",
        element: <Login /> 
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/books",
        element: <Books/>
    },
    {
        path: '/posts',
        element: <Posts />
    },
    {
        path: '/books/:id',
        element: <ShowBook />
    },
    {
        path: '/profile/:id',
        element: <Profile />
    },
    {
        path: '/library',
        element: <Library />
    }
])

export default router;