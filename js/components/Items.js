import React, {Component} from 'react';
import ReactDOM  from "react-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Tooltip,Icon} from "antd";

require("../../styles/items.css");
require("../../styles/style.scss");

/*
require("url-loader?mimetype=image/png!../../images/img_1.png");
*/

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
                        {/*<img id={index} className="rss-section-img" src="images/img_1.png"/>*/}
                        <div id={index} className="rss-section-content">
                            <h3 className="countrySelector">{item.title}</h3>
                            <div  className="rss-picture"></div>
                            <span><a href="#">{antPaginationReducer.currentPage}</a> Likes</span>
                            <span><a href="#"> {antPaginationReducer.currentPage}</a> Comments</span>
                            <Tooltip title="what is your question?">
                                <Icon type="question" />
                            </Tooltip>
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

/*export { Items };*/
export default connect
(
    state => state
)(Items)


