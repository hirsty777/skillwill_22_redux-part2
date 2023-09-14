import { useSelector } from "react-redux"
import { todoSelector } from "../store/todo/todo.slice"
import Style from "../styles/components/PageLoader.module.css"

const PageLoader = () => {
    const {colorMode, lightMode, darkMode} = useSelector(todoSelector)

  
    return (
        <div className={Style["loading-wrapper"]} style={colorMode? lightMode.background : darkMode.background}>
            <div className={Style.loading}></div>
        </div>
    )
}

export default PageLoader