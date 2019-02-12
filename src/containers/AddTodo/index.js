import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";
import "./style.css"

class AddTodo extends React.Component {
    _isMounted = false;
    timeout = 0
    state = {
        lengthError: false,
        content: '',
        priority: 'normal'
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        if(this.timeout) {
            clearTimeout(this.timeout)
            this.timeout = 0
        }

        this._isMounted = false;
    }

    changeContent = (e) => {
        if(e.target.value.length >= 5){
            if((e.target.value.length + 1) == 256 && e.key != 'Backspace'){
                e.preventDefault()
            }
        }

        this.setState({content: e.target.value})
    }

    preventOverrange = (e) => {
        if(this.state.content.length == 256 && e.key != 'Backspace'){
            this.setState({lengthError: true}, () => {
                this.removeError()
            })
            e.preventDefault()
        }
    }

    removeError = ()=>{
       this.timeout = setTimeout(function(){
            if(this._isMounted){
                this.setState({lengthError: false})
            }
        }.bind(this),1400)
    }

    changePriority = (e) => {
        this.setState({priority: e.target.value})
    }

    handleAddTodo = (e) => {
        if(this.state.content.length >= 5 ){
            this.props.addTodo(this.state);
            this.props.hideModal(e)
        }else{
            this.setState({lengthError: true})
            this.removeError()
        }
    };

    render() {

        return (
            <div id="add_todo" className="container">
                <div className="inner_window_header row justify-content-center">
                    <h4>Добавление задачи</h4>
                </div>
                <div className="new_todo_priority row form-group ">
                    <label htmlFor="priority_select" className="">Приоритет:</label>
                    <select onChange={this.changePriority} className="form-control form-control-sm" name="priority_select" id="" defaultValue="normal">
                        <option value="low">Низкий</option>
                        <option value="normal">Обычный</option>
                        <option value="high">Высокий</option>
                    </select>
                </div>
                <div className="new_todo_content row justify-content-center">
                    <textarea maxLength="256" minLength="5" name="todo_content" onKeyDown={this.preventOverrange} onChange={this.changeContent}  />
                </div>
                <div id='example Notification' className="row" style={{display: this.state.lengthError ? 'block' : 'none', height: '30px', justifyContent: 'center'}}>
                    Необходимое колличество символов от 5 до 256
                </div>
                <div className="inner_window_footer row justify-content-center" >
                    <button className="btn btn-cancel cancel_modal" onClick={(e) => this.props.hideModal(e)}>Отмена</button>
                    <button className="btn btn-add cancel_modal" onClick={this.handleAddTodo}>Добавить</button>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { addTodo }
)(AddTodo);