import {Pagination} from "antd";
import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changePage} from "../actions/AntPaginationAction"
import {setAgeSort} from "../actions/AntSortTableAction"

export class AntPagination extends Component
{
    constructor(props)
    {
        super(props);

    }

    handleChange(currentPage)
    {
        console.log("handleChange, currentPage: ",currentPage);
        this.props.changePage(currentPage);
        this.props.setAgeSort();
    }


    render()
    {
        let currentPage = this.props.antPaginationReducer.currentPage;;
        this.props.antPaginationReducer.text = currentPage;
        this.props.antPaginationReducer.pictureUrl = "url:http://www."+currentPage+".com";
        let second = currentPage+1;
        let secondURL = "url:http://www."+second+".com";

        return(
            <div>
                <div>
                    <h3>{currentPage}</h3>
                    <span><a href="#">{currentPage}</a> Likes</span>
                    <span>Picture URL: <a href="#"> {this.props.antPaginationReducer.pictureUrl}</a></span>
                </div>
                <div>
                    <h3>{second}</h3>
                    <span><a href="#">{second}</a> Likes</span>
                    <span>Picture URL: <a href="#"> {secondURL}</a></span>
                </div>
                <Pagination showSizeChanger defaultCurrent={1} total={50} onChange={this.handleChange.bind(this)} />
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
            ...{changePage,setAgeSort},
        },
        dispatch
    )
)(AntPagination)
