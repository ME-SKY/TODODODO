import {INCREASE_INTEGER_VALUE} from "./actionTypes";
import {ADD_TODO} from "./actionTypes";
import {ADD_TODOS} from "./actionTypes"
import {FILTER_THE_LIST} from "./actionTypes";
import {TOGGLE_TODO_STATUS} from "./actionTypes";
import {EDIT_TODO} from "./actionTypes";

export const increaseInteger = value => {
    return {
        type: INCREASE_INTEGER_VALUE,
        payload: value
    }
}

export const addTodo = value => {
    return {
        type: ADD_TODO,
        payload: value
    }
}

export const filterTheList = value => {
    console.log(`value in filterTheProps: ${value}`)
    return {
        type: FILTER_THE_LIST,
        filter: value
    }
}

export const toggleTodoStatus = value => {
    return {
        type: TOGGLE_TODO_STATUS,
        todoId: value
    }
}

export const addTodos = value => {
    return {
        type: ADD_TODOS,
        todos: value
    }
}

export const editTodo = value => {
    return {
        type: EDIT_TODO,
        payload: value
    }
}