var fs = require('fs');

fs.readFile("demo.txt","utf-8",(err,data)=>{
return err?console.log(err):console.log(data)
})