const fs = require('fs');

fs.rename("demo.txt","demo1.txt",(err)=>{
    return err?console.log(err):console.log("Renamed Successfully")
});