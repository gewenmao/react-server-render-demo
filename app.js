require("babel-core/register");
var koa = require('koa');
var fs = require('fs');
var path = require('path');
var layout = require('./layout/default');

var app = koa();

app.use(function *(next) {
    if (this.request.url.indexOf('bundle.js') != -1) {
        this.body = fs.createReadStream(path.join(__dirname,'bundle.js'));
    } else {
        this.body = layout();
    }
})
app.listen(3000)



