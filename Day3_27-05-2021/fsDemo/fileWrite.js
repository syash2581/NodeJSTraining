var fs = require('fs');

fs.writeFile("demo.txt","Hello World!!!",(err)=>{
    if(err)
        return console.log(err);
    console.log("Data has been written succesfully.")
})