// let num=[1,2,3,4,5,6,7,8];
// let newnum=num.map(x=>x*2);
// console.log(newnum);

// //filter method;
// let evennum=num.filter(x=>x%2==0);
// console.log(evennum);

// //reduce method;
// let sum=num.reduce((x,y)=>x+y,0);
// console.log(sum);

// let product=num.reduce((x,y)=>x*y,1);
// console.log(product);

// //creating object
// const students = [
//   {name:"Shivam",score:90},
//   {name:"Umang",score:60},
//   {name:"Sazid",score:70},
//   {name:"Shubham",score:85},
//   {name:"Tushar",score:75},
  
// ];

// let scores=students.map(x=>x.score);
// console.log(scores);

// //1st method  display the sum of all score
// let total=students.map(x=>x.score).reduce((x,y)=>x+y,0);
// console.log(total);

// //2nd method
// let scoresum=students.reduce((x,y)=>x+y.score,0);
// console.log(scoresum);

// //display the sum of all score greater than 60
// let newsum=students.filter(x=>x.score>60).reduce((x,y)=>x+y.score,0);
// console.log(newsum);

// //display the sum of all score by adding 10 to each which are greater than 60
// let addsum=students.filter(x=>x.score>60).map((z)=>z.score+10).reduce((x,y)=>x+y,0);
// console.log(addsum);

// //forEach function
// let num2=[2,4,5,6,7,8]
// num2.forEach((x)=>console.log(x*3));



// sayhello = () => {
//   console.log(" I am in hello function");
// };
// console.log("Start");
// setTimeout(sayhello,3000);
// console.log("end");
// setTimeout(sayhello,6000);

console.log("start");
setTimeout(()=> {
  console.log("first")
  setTimeout(()=>{
    console.log("second")
    setTimeout(()=>{
      console.log("third")
    },3000);
  },2000);
},1000);
console.log("end");