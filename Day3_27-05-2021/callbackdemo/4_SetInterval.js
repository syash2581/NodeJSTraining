var t = setInterval(()=>{
    console.log("I am in again")
},2000);

setTimeout(()=>{clearInterval(t)},10000);
