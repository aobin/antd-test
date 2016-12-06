import React from "react";
import ReactDOM from "react-dom";
import {DatePicker, message,Button} from "antd";
import "babel-polyfill";
/*
import AntSortTable from "./components/AntSortTable";
*/

class App extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }

    handleChange(date) {
        message.info('您选择的日期是: ' + date.toString());
        this.setState({date});
    }

    render() {
        return (
            <div style={{width: 400, margin: '100px auto'}}>
                <DatePicker onChange={value => this.handleChange(value)}/>
                <div style={{marginTop: 20}}>current date：{this.state.date.toString()}</div>
                <Button loading={true}>yes</Button>
{/*
                <AntSortTable/>
*/}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('simple'));
