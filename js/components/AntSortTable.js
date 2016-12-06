import {Table} from "antd";
import React from "react";
import ReactDOM from "react-dom";

/*
import "babel-polyfill";
*/

const data = [{
    key: '1',
    name: 'John Brown',
    age: 33,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
}];

const AntSortTable = React.createClass(
    {
        getInitialState() {
            return {
                filteredInfo: null,
                sortedInfo: null,
            };
        },
        handleChange(pagination, filters, sorter) {
            console.log('Various parameters', pagination, filters, sorter);
            this.setState(
                {
                    filteredInfo: filters,
                    sortedInfo: sorter,
                }
            );
        },
        clearFilters(e) {
            e.preventDefault();
            this.setState({filteredInfo: null});
        },
        clearAll(e) {
            e.preventDefault();
            this.setState(
                {
                    filteredInfo: null,
                    sortedInfo: null,
                }
            );
        },
        setAgeSort(e) {
            e.preventDefault();
            this.setState(
                {
                    sortedInfo: {
                        order: 'descend',
                        columnKey: 'age',
                    },
                }
            );
        },
        render() {
            let {sortedInfo, filteredInfo} = this.state;
            sortedInfo = sortedInfo || {};
            filteredInfo = filteredInfo || {};
            const columns = [{
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                filters: [
                    {text: 'Joe', value: 'Joe'},
                    {text: 'Jim', value: 'Jim'},
                ],
                filteredValue: filteredInfo.name,
                onFilter: (value, record) => record.name.includes(value),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            }, {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
            }, {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                filters: [
                    {text: 'London', value: 'London'},
                    {text: 'New York', value: 'New York'},
                ],
                filteredValue: filteredInfo.address,
                onFilter: (value, record) => record.address.includes(value),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
            }];
            return (
                <div>
                    <div className="table-operations">
                        <a href="#" onClick={this.setAgeSort}>Age descending order</a>
                        <a href="#" onClick={this.clearFilters}>Clear filters</a>
                        <a href="#" onClick={this.clearAll}>Clear filters and sorting</a>
                    </div>
                    <Table columns={columns} dataSource={data} onChange={this.handleChange}/>
                </div>
            );
        },
    }
);

ReactDOM.render(<AntSortTable />, document.getElementById('antSortTable'));
