import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";

ReactDom.render(
    (
        //compile without babel.
        // React.createElement('div',{},'hello world')

        //need to compile with babel
        // <div>Hello world2</div>
        <App/>
    )
    ,document.querySelector('#app'))
