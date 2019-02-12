import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import TodoListContainer from "./containers/TodoListContainer"
import AddTodo from "./containers/AddTodo/"
import Modal from "./components/Modal/"
import ListManagePanel from "./containers/ListManagePanel/"
import EditTodo from "./containers/EditTodo";
import Header from "./components/Header/"
import Footer from "./components/Footer/"

class App extends Component {
  state = {
    show_modal: false,
    modal_action: 'add',
    isListFiltered: false,
    currentEditableTodoItem: null
  }

  showModal = (action, todoItem = null) => {
    this.setState({currentEditableTodoItem: todoItem}, function () {
      this.setState({modal_action: action})
      this.setState({show_modal: !this.state.show_modal})
    })
  }

  doFilter = (realy) => {
    this.setState({isListFiltered: realy})
  }
  hideModal = (e) => {
    if (e.target.classList.contains('cancel_modal')) {
      this.setState({show_modal: false})
    }
  }

  render() {
    const WrappedComponent = ()=> {
      return (this.state.modal_action == 'add' && !this.state.currentEditableTodoItem) ? <AddTodo hideModal={this.hideModal}/>
      : <EditTodo hideModal={this.hideModal} todoItem={this.state.currentEditableTodoItem} />
    }

    return (
      <div className="App container" >
        <Header/>
        {this.state.show_modal && <Modal WrappedComponent={WrappedComponent} action={this.state.modal_action} />}
        <ListManagePanel showModal={this.showModal} doFilter={this.doFilter}/>
        <TodoListContainer isFiltered={this.state.isListFiltered} showModal={this.showModal}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
