import React, {Component} from 'react';
import ReactDOM  from "react-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router";

export default class Demo extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {

    }

    render()
    {

        return (
            <div>
                <h1>Ant Design Demo</h1>
                <ul role="nav">
                    <li><Link to="/table">Ant Table</Link></li>
                    <li><Link to="/pagination">Ant Pagination</Link></li>
                </ul>
                {this.props.children}
            </div>
        );


    }
};



