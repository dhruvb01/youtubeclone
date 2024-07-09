import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Body from "../Components/Body"
import Videoelement from "../Components/Videoelement"
import Main from "../Components/Main"

export const router=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    errorElement:<h1>error</h1>,
    children:[{
        path:'/',
        element:<Main/>
    },
    {
        path:'/video',
        element:<Videoelement/>
    },
]
  }])