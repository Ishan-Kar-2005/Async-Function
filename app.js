//async function greet(){
//    return "Hello";
//}

//greet()
//    .then((result)=>{
//       console.log("Promise Successfull");
//       console.log("result was:",result);
//    })
//    .catch((err)=>{
//       console.log("Promise was rejected",err);
//    });



function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
}