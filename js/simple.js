import AntSortTable from "./components/AntSortTable";
import React from "react";
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import { configureStore} from './reducers/ReducerFactory';
import {LocaleProvider} from "antd";
import enUS from 'antd/lib/locale-provider/en_US';


const store =  configureStore();


ReactDom.render(
    <Provider store={store}>
        <LocaleProvider locale={enUS}>
            <AntSortTable />
        </LocaleProvider>
    </Provider>,
    document.getElementById('simple')
);
