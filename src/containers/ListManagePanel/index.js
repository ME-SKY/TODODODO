import React from "react"
import filter from "../../assets/images/filter.png"
import "./style.css"
import posed from 'react-pose';
import plus from "../../assets/images/plus.png";
import { connect } from "react-redux";
import {filterTheList} from "../../redux/actions";

const FilterList = posed.div({
    hidden: {
        opacity: 0,
        height: 0
    },
    visible: {
        opacity: 1,
        height: 'auto',
    }
})

class ListManagePanel extends React.Component {

    state = {
        show_filter_list: false
    }

    showTransition = () => {
        this.setState({show_filter_list: !this.state.show_filter_list})
    }
    handleFilter = (e) => {
        this.props.filterTheList(e.target.dataset.value)
        let realy = e.target.dataset.value != 'all'
        this.props.doFilter(realy)
    }
    render() {
        const translatedFilterNames = {
            all: 'Все',
            completed: 'Завершенные',
            incomplete: 'Акстуальные'
        }
        return (
            <div id="list_manage_panel" className="container">
                <div className="manage row ">
                    <div id="filter" className="col-sm-1 d-flex justify-content-center align-items-center" onClick={this.showTransition}>
                        <img src={filter} alt=""/>
                    </div>
                    <div id="filterName" className="col-sm-1">
                        {translatedFilterNames[this.props.activeFilter]}
                    </div>
                    <div className="add_todo_button col-sm-1 ml-auto d-flex justify-content-center align-items-center" onClick={() =>this.props.showModal('add')}>
                        <img src={plus} alt=""/>
                    </div>
                </div>

                <FilterList className="filters row d-flex justify-content-lg-start  justify-content-sm-center flex-nowrap" onClick={this.handleFilter} pose={this.state.show_filter_list ? 'visible' : 'hidden'}>
                    <div className="all_todos col-sm-2" data-value="all">{translatedFilterNames.all}</div>
                    <div className="completed col-sm-2" data-value="completed">{translatedFilterNames.completed}</div>
                    <div className="incomplete col-sm-2" data-value="incomplete">{translatedFilterNames.incomplete}</div>
                </FilterList>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeFilter: state.activeFilter
    }
}

export default connect(
    mapStateToProps,
    { filterTheList }
)(ListManagePanel);

