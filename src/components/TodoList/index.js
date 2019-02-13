import React from "react";
import TodoItem from "../../containers/TodoItem/"
import todosApi from "../../api/todos"

function TodoList({todos, addTodos, showModal, allTodosLength}){
    const todoElements = todos.map((todoItem) =>
        <TodoItem key={todoItem.id} todoItem = {todoItem} showModal={showModal}/>
    )

    const getMoreTodos = () => {
        let todosStartPoint = allTodosLength+ 10
        todosApi.getTodos(todosStartPoint).then((data) => addTodos(data))
    }
    return (
        <div id="todo_list" className="container">
            <div id="todo_elements" className="row justify-content-center">
                {todoElements}
            </div>
            <div id="get_more_todos" className="row justify-content-center">
                <button className="btn btn-outline-primary" onClick={getMoreTodos}> Загрузить еще... </button>
            </div>
        </div>
    )
}

export default TodoList