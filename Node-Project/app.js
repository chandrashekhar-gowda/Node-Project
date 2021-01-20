var express = require('express');
var app=express();
const path = require('path');

app.get('/', function(req, res) {
    res.render(path.join(__dirname+'/test1'));
})
app.listen(3000);