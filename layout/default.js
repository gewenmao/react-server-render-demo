import React, {Component} from "react";
import {renderToString} from "react-dom/server";

import App from '../page/index/index.jsx';

module.exports =  function () {
    var content = renderToString(
        <App />
    );
    return `<!DOCTYPE html>
<html>
    <head>
        <style>
            body {
                background-color: #eee;
            }
        </style>
    </head>
    <body>
        <div id="app">${content}</div>
        <script src="./bundle.js"></script>
    </body>
</html>`
}

