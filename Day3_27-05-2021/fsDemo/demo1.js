const fs = require('fs');

const path = require('path');

fs.mkdir(path.join(__dirname,'test'),(err)=>{
    if(err){
        return console,log(err);
    }
    console.log("directoy created successfully");
})