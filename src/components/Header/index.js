import React from "react"
import todododo_logo from "../../../public/Todododo.png"
import "./style.css"

const Header = () => (
    <header className="row">
        <div id="app_logo" className="col-sm-12" >
            <img src={todododo_logo} height="150px"  alt=""/>
        </div>
        <div id="app_name" className="col-sm-12">
            TODODODO
        </div>
    </header>
)

export default Header

