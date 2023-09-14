import Style from "../styles/components/Error.module.css"
import CreateTodo  from "../pages/CreateTodo"

const ErrorComponent = () => {
  
    return (
        <div className={Style["error-wrapper"]}>
            <div className={Style.error}></div>
            {/* a tag because if its eeror then we should reload page*/}
            <a href="/" className={Style.link}>Go To Main Page</a>
        </div>
    )
}

export default ErrorComponent

