import {ADD_TODO, FILTER_THE_LIST, TOGGLE_TODO_STATUS, ADD_TODOS, EDIT_TODO} from "../actionTypes";

const initialState = {
    activeFilter: "all",
    filteredTodos: [],
    todos: [
        {id: 1, content: "Do some shit!", priority: "low", completed: true},
        {id: 2, content: "Do enother shit!", priority: "high", completed: false},
        {id: 3, content: "Don't do this shit!", priority: "normal", completed: true}
    ]
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            let todo = {
                id: Math.max.apply(Math, state.todos.map(el => el.id)) + 1,
                content: action.payload.content,
                priority: action.payload.priority,
                completed: false
            }
            return {...state, todos: [...state.todos, todo]}
        }
        case FILTER_THE_LIST: {
            return {...state,
                filteredTodos: filterTheList(action.filter, state.todos),
                activeFilter: action.filter
            }
        }
        case TOGGLE_TODO_STATUS: {
            return {
                ...state,
                todos: state.todos.map(
                    el => el.id == action.todoId ?
                        {...el, completed: !el.completed}
                        : el
                )
            }
        }
        case ADD_TODOS: {
            let transformedTodos = transformTodos(action.todos)
            return {...state, todos: state.todos.concat(transformedTodos)}
        }
        case EDIT_TODO: {
            return {...state, todos: state.todos.map(
                el => el.id == action.payload.id ?
                    {...el, priority: action.payload.priority, content: action.payload.content}
                    : el
                )}
        }
        default:
            return state;
    }
}
const transformTodos = (todos) => {
    let newTodos = todos.map(el => {
        delete el.userId
        el.content = el.title
        el.priority = 'normal'
        delete el.title
        return el
    })
    return newTodos
}

const filterTheList = (filter, todos) =>{
    switch (filter) {
        case 'completed':
            return todos.filter(todo => todo.completed)
        case 'incomplete':
            return todos.filter(todo => !todo.completed)
        default:
            return todos
    }
}

