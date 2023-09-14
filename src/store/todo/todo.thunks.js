import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodo = createAsyncThunk(
    "todo/get",
    async (_, thunkAPI) => {
        try {
            const res = await fetch(`/api/v1/todolist`,{
                headers:{
                    "Content-type":"aplication/json",
                    "Authorization":`Bearer ${process.env.REACT_APP_API_KEY}`
                }
            })
            const data = await res.json()
            if(data) return thunkAPI.fulfillWithValue(data.items)
        } catch (error) {
            return thunkAPI.rejectWithValue("Ther was an error while fetching data")
        }
    }
)

export const postTodo = createAsyncThunk(
    "todo/post",
    async (payload, thunkAPI) => {
        try {
            const res = await fetch(`/api/v1/todolist`,{
                method:"POST",
                headers:{
                    "Content-type":"aplication/json",
                    "Authorization":`Bearer ${process.env.REACT_APP_API_KEY}`
                },
                body:payload? JSON.stringify(payload) : undefined
            })
            const data = await res.json()
            if(data) return thunkAPI.fulfillWithValue(data.items)
        } catch (error) {
            return thunkAPI.rejectWithValue("Ther was an error while fetching data")
        }
    }
)

export const changeTodo = createAsyncThunk(
    "todo/put",
    async (payload, thunkAPI) => {
        const changedObj = {...payload.todo, isCompleted:!payload.todo.isCompleted}

        try {
            const res = await fetch(`/api/v1/todolist/${changedObj._uuid}`,{
                method:"PUT",
                headers:{
                    "Content-type":"aplication/json",
                    "Authorization":`Bearer ${process.env.REACT_APP_API_KEY}`
                },
                body: JSON.stringify(changedObj)
            })
            const data = await res.json()
            if(data) return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            return thunkAPI.rejectWithValue("Ther was an error while fetching data")
        }
    }
)

export const deletedTodo = createAsyncThunk(
    "todo/delete",
    async (payload, thunkAPI) => {
        try {
            const res = await fetch(`/api/v1/todolist/${payload._uuid}`,{
                method:"DELETE",
                headers:{
                    "Content-type":"aplication/json",
                    "Authorization":`Bearer ${process.env.REACT_APP_API_KEY}`
                },
            })
            const data = await res.json()
            if(data) return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            return thunkAPI.rejectWithValue("Ther was an error while fetching data")
        }
    }
)