// "use strict";
// let $ = 12;
// const _=22/7;
// let c="hello";
// let d=[1,2,3,4]
// let e={
//   name:"Arun",
//   id:12,
// }
// let f=true;
// let g="12"/"2";
// // let str=string(f);

// function display(){
//   console.log($);
// }
// display();
// console.log(_);
// console.log(typeof _);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(g);
// // console.log(str.charAt(1));

// let str = "abh";
// let num=Number(str);
// console.log(typeof num);
// console.log(num);

// let str1 = "abh";
// let num1 =Boolean(str);
// console.log(typeof num1);
// console.log(num1);
// function display(){
//   let x=confirm("Are you sure")
//   alert("user click" + x);
// }
// function display(){
//   let x = prompt("Enter your name","Abhishek");
//   alert(x);
// }

function validate()
{
  let user=document.getElementById("user").value;
  let pass=document.getElementById("pass").value;
  let result=document.getElementById("result");
  if(user=="admin"&& pass=="admin")
  {
    result.innerText="login succes";
  }
  else{
    result.innerText="login failed"
  }
  return false;
}