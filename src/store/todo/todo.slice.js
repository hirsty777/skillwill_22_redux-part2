import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todoList:[]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo(state, action){
            state.todoList.push(action.payload)
        },
        changeTodo(state, action){

        },
        deleteTodo(state, action){

        }
    }
})

export default todoSlice.reducer