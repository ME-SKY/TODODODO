import { connect } from 'react-redux'
import TodoList from  "../components/TodoList/"
import {increaseInteger} from "../redux/actions";
import {addTodos} from "../redux/actions"

const mapStateToProps = (state, ownProps) => {
    return {
        todos: (ownProps.isFiltered) ?  state.filteredTodos : state.todos,
        allTodosLength: state.todos.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodos: (value) => {
            dispatch(addTodos(value))
        }
    }
}

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoListContainer