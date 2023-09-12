import CreateTodo from "../pages/CreateTodo";
import ShowTodo from "../pages/ShowTodo";

const router = [
    {
        element:<CreateTodo/>,
        path:"/"
    },
    {
        element:<ShowTodo/>,
        path:"/todolist"
    }
]

export default router