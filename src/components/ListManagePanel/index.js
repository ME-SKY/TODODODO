import React from "react"
import filter from "../../assets/images/filter.png"
import "./style.css"
import posed from 'react-pose';
import plus from "../../assets/images/plus.png";

const FilterList = posed.div({
    hidden: {
        opacity: 0,
        height: 0
    },
    visible: {
        opacity: 1,
        height: 'auto'
    }
})

class ListManagePanel extends React.Component {

    state = {
        show_filter_list: false
    }

    showTransition = () => {
        this.setState({show_filter_list: !this.state.show_filter_list})
    }
    render() {
        return (
            <div id="list_manage_panel">
                <div className="manage row">
                    <div id="filter" className="col-sm-2" onClick={this.showTransition}>
                        <img src={filter} alt=""/>
                    </div>
                    <div className="offset-8"></div>
                    <div className="add_todo_button col-sm-2" onClick={() =>this.props.showModal('add')}>
                        <img src={plus} alt=""/>
                    </div>
                </div>

                <FilterList className="filters row" pose={this.state.show_filter_list ? 'visible' : 'hidden'}>
                    <div className="all_todos col-sm-2">Все</div>
                    <div className="completed col-sm-2">Завершенные</div>
                    <div className="incomplete col-sm-2">Актуальные</div>
                </FilterList>

            </div>
        )
    }
}

export default ListManagePanel

