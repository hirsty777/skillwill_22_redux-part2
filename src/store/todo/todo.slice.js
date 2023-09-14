import { createSlice } from "@reduxjs/toolkit"
import { changeTodo, deletedTodo, getTodo, postTodo,  } from "./todo.thunks"

const initialState = {
    todoList:[],
    getloader:false,
    postloader:false,
    putloader:false,
    deleteloader:false,
    error:null,
    colorMode:true,
    lightMode:{ 
        background:{"--background-color":"#eeeeee"},
        textColor:{"--text-color":"#030302"}
    },
    darkMode:{ 
        background:{"--background-color":"linear-gradient(60deg, #29323c 0%, #485563 100%)"},
        textColor:{"--text-color":"#ffffff"}
    }
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        changeMode:(state) =>{
            state.colorMode = !state.colorMode
        }
    },
    extraReducers:{
        //get
        [getTodo.pending.type]: (state) => {
            state.getloader = true
        },
        [getTodo.fulfilled.type]: (state, action) => {
            state.getloader = false
            state.todoList = action.payload
        },
        [getTodo.rejected.type]: (state, action) => {
            state.getloader = false
            state.error = action.payload
        },
        //post
        [postTodo.pending.type]: (state) => {
            state.postloader = true
        },
        [postTodo.fulfilled.type]: (state, action) => {
            state.postloader = false
            state.todoList.push(action.payload[0])
        },
        [postTodo.rejected.type]: (state, action) => {
            state.postloader = false
            state.error = action.payload
        },
        //put
        [changeTodo.pending.type]: (state) => {
            state.putloader = true
        },
        [changeTodo.fulfilled.type]: (state, action) => {
            //console.log(action.payload._uuid)
            state.putloader = false
            const TodoIndex = state.todoList.findIndex((todo) => todo._uuid === action.payload._uuid) 
            state.todoList[TodoIndex].isCompleted = action.payload.isCompleted
           
        },
        [changeTodo.rejected.type]: (state, action) => {
            state.putloader = false
            state.error = action.payload
        },
        //delete
        [deletedTodo.pending.type]: (state) => {
            state.deleteloader = true
        },
        [deletedTodo.fulfilled.type]: (state, action) => {
            state.deleteloader = false
            state.todoList = state.todoList.filter(todo => todo._uuid !== action.payload._uuid)
        },
        [deletedTodo.rejected.type]: (state, action) => {
            state.deleteloader = false
            state.error = action.payload
        },

    }
})

export const {addTodo, changeTodoStatus, deleteTodo, changeMode} = todoSlice.actions
export const todoSelector = (state)=>state.todo
export default todoSlice.reducer