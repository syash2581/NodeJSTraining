var fs = require('fs');

fs.appendFile("demo.txt","Hello Node js",(err)=>{
    return err?console.log(err):console.log("Data appended succesfully")
});