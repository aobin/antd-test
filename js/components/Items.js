import React, {Component} from 'react';
import ReactDOM  from "react-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

export class Items extends Component
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
        let {antPaginationReducer} = this.props;

        let items = antPaginationReducer.data.map(
            function (item, index) {
                return (
                    <section id={index} className="rss-section show-inline">
                        <img id={index} className="rss-section-img" src="images/img_1.png"/>
                        <div id={index} className="rss-section-content">
                            <h3>{item.title}</h3>
                            <span><a href="#">{antPaginationReducer.currentPage}</a> Likes</span>
                            <span><a href="#"> {antPaginationReducer.currentPage}</a> Comment</span>
                        </div>
                    </section>
                );
            }
        );

        return (
            <div id="project-comments" className="rss-block">
                <h2 className="rss-title">My Inspiration</h2>

                {items}

            </div>
        );
    }
};

export default connect
(
    state => state
)(Items)


