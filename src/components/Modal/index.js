import React from "react"
import "./style.css"

const Modal = ({WrappedComponent, action}) => (
    <div className="modal_window" >
        <div className="inner_window">
            <WrappedComponent/>
        </div>
    </div>
)

export default Modal