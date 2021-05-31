var mypromise = new Promise(function(resolve,reject){
    const x =100;
    const y =100;

    if(x>y)
    {
        return resolve("greater")
    }
    else{
        return reject("equal or lesser")
    }
})


mypromise
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})