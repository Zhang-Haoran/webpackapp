import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    (
        // React.createElement('div',{},'hello world') //compile without babel.
        <div>Hello world2</div> //need to compile with babel
    )
    ,document.querySelector('#app'))
