function fetchedata() {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      let data  = {id:1, name: "Rahul",city: "Gahaziabad"};
      resolve(data);
    },4000);
  });
}
fetchedata()
   .then((data) => console.log(data))
   .catch((error)=>{
    console.log(error);
   });