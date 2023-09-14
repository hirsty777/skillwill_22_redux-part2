import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { todoSelector} from "../store/todo/todo.slice"
import { changeTodo, deletedTodo } from "../store/todo/todo.thunks"

const useModifyTodo = (isCopleted) => {
    const {todoList, getloader, error} = useSelector(todoSelector)
    const [todoFiltered, setTodoFiltered] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        setTodoFiltered(todoList.filter((el) => el.isCompleted === isCopleted))
    },[todoList, isCopleted])

    const changeCompleteStatus = (todo) => {
        dispatch(changeTodo({todo}))
    }
    const deleteTodoFunc = (todo) => {
        dispatch(deletedTodo(todo))
    }

    return {todoFiltered, getloader, error, changeCompleteStatus, deleteTodoFunc}
}

export default useModifyTodo