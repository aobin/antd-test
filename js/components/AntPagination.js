import {Pagination} from "antd";
import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changePage,loadFeedDocumentFromServer} from "../actions/AntPaginationAction";
import {setAgeSort} from "../actions/AntSortTableAction";
import Items from "./Items";

export class AntPagination extends Component
{
    constructor(props)
    {
        super(props);

    }

    componentWillMount()
    {
        this.props.loadFeedDocumentFromServer(this.props.antPaginationReducer.url,this.props.antPaginationReducer.pageSize,this.props.antPaginationReducer.currentPage);
    }

    componentDidMount()
    {

    }


    handleChange(currentPage)
    {
        console.log("handleChange, currentPage: ",currentPage);
        this.props.loadFeedDocumentFromServer(this.props.antPaginationReducer.url,this.props.antPaginationReducer.pageSize,currentPage);

        this.props.setAgeSort();
    }


    render()
    {
        let {currentPage,pageSize,total} = this.props.antPaginationReducer;
        console.log("antPaginationReducer:",this.props.antPaginationReducer)

        return(
            <div>
                <Items />
                <Pagination defaultCurrent={currentPage} defaultPageSize={pageSize} total={total} onChange={this.handleChange.bind(this)} />
            </div>

        );

    }

}

export default connect
(
    state => state,
    dispatch => bindActionCreators
    (
        {
            ...{changePage,loadFeedDocumentFromServer,setAgeSort},
        },
        dispatch
    )
)(AntPagination)
