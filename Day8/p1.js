const myPromise = new Promise((resolve,reject) => {
  let success=true;
  if(success){
    resolve("data send successful");
  }
  else{
    reject("data not send");
  }
});

myPromise
   .then((message)=>{
    console.log("Data:" + message);
   })
   .catch((error)=>{
    console.log(error);
   });