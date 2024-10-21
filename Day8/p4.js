function fetchedata() {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      const students  = [
        { name: "Rahul",score: 50},
        {name: "Shivam",score:  65},
        {name: "Umang",score: 80},
        {name: "Sazid",score: 45},
        {name: "Tushar",score: 50},
      ];
      resolve(students);
    },4000);
  });
}
fetchedata()
   .then((data) => console.log(data))
   .catch((error)=>{
    console.log(error);
  });

fetchedata().then((students)=>{
  let scores=students.map(x=>x.score).reduce((x,y)=>x+y,0);
  console.log(scores);
})
.catch((error)=>{
  console.log(error);
})


   