var fs = require('fs');
const { fdatasync } = require('fs/promises');

fs.unlink('demo1.txt',(err)=>
{
    return err?  console.log(err):console.log("Deleted")
})