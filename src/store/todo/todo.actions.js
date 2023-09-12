import { TODO_ACTIONS } from "./actions.keys";

export const addTodoActions = (payload) => ({
    type:TODO_ACTIONS.ADD_TODO,
    payload
})

export const changeTodoStatusActions = (payload) => ({
    type:TODO_ACTIONS.CHANGE_STATUS,
    payload
})

export const deleteTodoActions = (payload) => ({
    type:TODO_ACTIONS.DLETE_TODO,
    payload
})

