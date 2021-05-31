const { deepStrictEqual } = require('assert');
var fs = require('fs');
var path = require('path');

fs.open("demo.txt",'w',(err,fd)=>{
    if(err)
    {
        console.log("File read error")
    }
    else{
        console.log(fd)
    }
})