import AntSortTable from "./components/AntSortTable";
import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {configureStore} from "./reducers/ReducerFactory";

import {Router, Route, hashHistory} from "react-router";

const store = configureStore();


ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={AntSortTable}/>
        </Router>
    </Provider>,
    document.getElementById('simple')
);

