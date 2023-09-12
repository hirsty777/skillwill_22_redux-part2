import {  useEffect, useRef, useState } from "react"
import {Link} from "react-router-dom"
import { addTodoActions } from "../store/todo/todo.actions"
import { useDispatch, useSelector } from "react-redux"
import Style from "../styles/pages/CreateTodo.module.css"
import ConfirmSvg from "../assets/confirm.svg"


const CreateTodo = () => {
    const taskRef = useRef()
    const userRef = useRef()
    const dueDateRef = useRef()
    const [idGenerator, setIdGenerator] = useState(0)
    const [showConfirm, setShowConfirm] = useState(false)
    const {todoList} = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    
    //for unique id.we get todo array from store state and we use to find highes(last used id) number in array.then we use it for next todo id.
    useEffect(() => {
        const lastId = todoList.reduce((prev, current) => {
            return current.id > prev.id ? current : prev
        },todoList[0]) ?? 0
        if(lastId) setIdGenerator(lastId.id+1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const onSubmit = (e) => {
        e.preventDefault();
        if(!taskRef.current.value.trim()) return

        dispatch(addTodoActions({
            id:idGenerator,
            task:taskRef.current.value,
            user:userRef.current.value,
            dueDate:dueDateRef.current.value,
            isCompleted:false
        }))
        setIdGenerator((prev) => prev + 1)

        setShowConfirm(true)
        setTimeout(()=>{
            setShowConfirm(false)
        },1000)
        //clear
        taskRef.current.value = ""
        userRef.current.value = ""
        dueDateRef.current.value = ""
    }

    return (
        <div className={Style.wrapper}>
            <form onSubmit={onSubmit} className={Style["todo-form"]}>
                <h1>Add Todo</h1>
                <input type="text"  ref={taskRef} placeholder="ToDo"/>
                <input type="text" ref={userRef} placeholder="User"/>
                <div className={Style["date-wrapper"]}>
                    <label htmlFor="due-date">Due Date</label>
                    <input type="date" id="due-date" ref={dueDateRef} placeholder="Due Date"/>
                </div>
                <div className={Style["btn-wrapper"]}>
                    <Link className={Style["see-todo-btn"]} to={"todolist"}>See List</Link>
                    <button className={Style["add-todo-btn"]}>Submit</button>
                    {showConfirm && <img src={ConfirmSvg}  className={Style.confirm} alt="confirm" />}
                </div>
                
            </form>
            
        </div>
    )
}

export default CreateTodo