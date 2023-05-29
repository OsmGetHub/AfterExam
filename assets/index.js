import React from 'react';
import Login from "./login";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "./ReduxToolkit/store";

function Index() {
    return (
        <Provider store={store}>
            <Login />
        </Provider>
    );
}

ReactDOM.render(<Index />,document.getElementById('root'))