var express= require('express');
var socket=require('socket.io');
var path = require('path');

//app Setup
var app=express();
var server= app.listen(5000,function(){

    console.log("Port Number 5000");
});

//Static file

app.use(express.static(path.join(__dirname, '/public')));


var io=socket(server);

io.on('connect',function(socket){
    console.log('Socket Connection');
})

