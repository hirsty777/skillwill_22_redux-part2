import {Link} from "react-router-dom"
import Style from "../styles/pages/ShowTodo.module.css"
import BackSvg from "../assets/back.svg"
import TodoList from "../components/TodoList"


const ShowTodo = () => {
    return (
        <div className={Style.wrapper}>
            <Link to={"/"}>
                <img  className={Style["back-svg"]} src={BackSvg} alt="back arrow" />
            </Link>
            <TodoList  complited={false}/>
            <TodoList  complited={true}/>
        </div>
    )
}

export default ShowTodo