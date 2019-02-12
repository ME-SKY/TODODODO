import React from "react";
import "./style.css"
import edit_icon from '../../assets/images/edit_icon.png'
import {toggleTodoStatus} from "../../redux/actions";
import {connect} from "react-redux";

function TodoItem({todoItem, toggleTodoStatus, showModal}){
    const priorityColors = {
        low: "#66ff99",
        normal: "#33cc33",
        high: "#009933"
    }

    const toggleStatus = id => {
        console.log('toggleStatus in Todo container')
        toggleTodoStatus(id)
    }
    return (
        <div className="todo_item col-sm-12 rounded" style={{background: priorityColors[todoItem.priority]}}>
            <div className="row">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="todo_status_checkbox d-flex col-sm-1 align-items-center justify-content-center">
                            <input type="checkbox"  defaultChecked={todoItem.completed} onChange={() => toggleStatus(todoItem.id)} className=""/>
                        </div>
                        <div className="todo_content text-nowrap col-sm-10 ">
                            {todoItem.content}
                        </div>
                        <div className="todo_edit_button col-sm-1 d-flex align-items-center justify-content-center ml-auto" onClick={() => showModal('edit', todoItem)}>
                            <img  src={edit_icon} alt=""/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default connect(
    null,
    { toggleTodoStatus }
)(TodoItem);
