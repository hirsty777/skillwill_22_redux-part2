import useModifyTodo from "../hooks/useModifyTodo"
import Style from "../styles/components/TodoList.module.css"
import NotCheckedeSvg from "../assets/notchecked.svg"
import CheckedeSvg from "../assets/checked.svg"


const TodoList = ({complited}) => {
    const {todoFiltered, changeCompleteStatus, deleteTodo} = useModifyTodo(complited) //if we want copleted Todos we pass true else false

    return (
        <div className={Style.wrapper}>
            <h1>{complited ? "Finished Todos" : "Unfinished Todos"}</h1>
            <div className={Style["todo-wrapper"]}>
            {todoFiltered.map((todo) => (
                <div key={todo.id} className={complited ? Style["todo-complited"]:Style["todo-incomplited"]}>
                    <div className={Style["todo-user"]}>User: {todo.user}</div>
                    <div className={Style["todo-date"]}>Due Date: {todo.dueDate}</div>
                    <div className={Style["todo-task"]}>Task: {todo.task}</div>
                    <div className={Style["todo-ckeck-wrapper"]}>
                        <img className={Style["todo-svg-ckeck"]} src={complited ? CheckedeSvg : NotCheckedeSvg} alt="checkbox" />
                        <input className={Style["todo-check"]} type="checkbox" defaultChecked={todo.isCompleted} onChange={()=>changeCompleteStatus(todo.id)} />
                    </div>
                    <button className={Style["todo-delete"]} onClick={()=>deleteTodo(todo.id)}>Delete</button>
                </div>
            ))}
            </div>
        </div>
    )
            
   
}

export default TodoList
