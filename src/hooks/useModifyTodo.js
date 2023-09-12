import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeTodoStatusActions, deleteTodoActions } from "../store/todo/todo.actions"

const useModifyTodo = (isCopleted) => {
    const {todoList} = useSelector((state)=>state.todo)
    const [todoFiltered, setTodoFiltered] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        setTodoFiltered(todoList.filter((el) => el.isCompleted === isCopleted))
    },[todoList, isCopleted])

    const changeCompleteStatus = (id) => {
        dispatch(changeTodoStatusActions(id))
    }
    const deleteTodo = (id) => {
        dispatch(deleteTodoActions(id))
    }

    return {todoFiltered, changeCompleteStatus, deleteTodo}
}

export default useModifyTodo