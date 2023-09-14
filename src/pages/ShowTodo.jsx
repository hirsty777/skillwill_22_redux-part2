import BackSvg from "../assets/back.svg"
import modeLightSvg from "../assets/modeLight.svg"
import modeDarkSvg from "../assets/modeDark.svg"
import {Link} from "react-router-dom"
import Style from "../styles/pages/ShowTodo.module.css"
import TodoList from "../components/TodoList"
import { useDispatch, useSelector } from "react-redux"
import { changeMode, todoSelector } from "../store/todo/todo.slice"
import ErrorComponent from "../components/ErrorComponent"
import PageLoader from "../components/PageLoader"

import { getTodo } from "../store/todo/todo.thunks"
import { useEffect } from "react"


const ShowTodo = () => {
    const dispatch = useDispatch()
    const {colorMode, lightMode, darkMode, getloader, error} = useSelector(todoSelector)

    useEffect(() => {
        dispatch(getTodo())
    },[dispatch])
    
    if(getloader) return <PageLoader />
    if(error) return <ErrorComponent />
    return (
        <div className={Style.wrapper}  style={colorMode? lightMode.background : darkMode.background}>
            <Link to={"/"}>
                <img  className={Style["back-svg"]} src={BackSvg} alt="back arrow" />
            </Link>
            <button onClick={()=>dispatch(changeMode())} className={Style["mode-btn"]}>
                <img src={colorMode? modeLightSvg : modeDarkSvg} alt="modeLightSvg" />
            </button>
            <TodoList  complited={false}/>
            <TodoList  complited={true}/>
        </div>
    )
}

export default ShowTodo