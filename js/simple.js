import AntSortTable from "./components/AntSortTable";
import AntPagination from "./components/AntPagination";
import React from "react";
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import { configureStore} from './reducers/ReducerFactory';
import {LocaleProvider} from "antd";
import enUS from 'antd/lib/locale-provider/en_US';
import ptBr from 'antd/lib/locale-provider/pt_BR';


const store =  configureStore();


ReactDom.render(
    <Provider store={store}>
        <LocaleProvider locale={ptBr}>
            <AntSortTable/>
           {/* <AntPagination/>111*/}
        </LocaleProvider>
    </Provider>,
    document.getElementById('simple')
);
