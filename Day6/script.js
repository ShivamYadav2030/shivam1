// let a=()=>{
//   console.log("Arrow function");
// };

// let b=()=>console.log("Arrow function 2");

// let c=(x,y)=>
// {
//   return x+y;
// }
// let result=c('Rahul',"Ravi");
// let res1=c(12,32);
// console.log(result,res1)
function display()
{
  //  let p1=document.querySelector('p');
   let p1=document.querySelectorAll('p');
   p1[0].innerHTML="I am in para";
   p1[0].style.backgroundColor="yellow";
   p1[1].innerHTML="I am in para";
   p1[1].style.backgroundColor="red";
   p1[2].innerHTML="I am in para";
   p1[2].style.backgroundColor="green";

}
// function change()
// {
//   let heading=document.querySelector('h1')
//   heading.textContent="New heading";
// }


// change = () => 
// {
//   let heading=document.querySelector('h1')
//   heading.textContent="New heading";
//   let a1=document.querySelector('a');
//   a1.setAttribute('href',"https://aktu.ac.in");
//   a1.innerHTML="Aktu website";
// }

// let addcontent = () => {
//   const newDiv = document.createElement('div');
//   newDiv.textContent = 'This is a new div';
//   const body = document.querySelector("body");
//   body.appendChild(newDiv);

// }

  // const button = document.querySelector('button');
  //  button.addEventListener('click',()=>alert('hello'));

  // const button = document.querySelector('button');
  //  button.addEventListener('click',()=> {document.getElementById('res').innerHTML="Updated"});

  // document.getElementById('btn').onmouseover = ()=>{
  //   document.querySelector('body').style.backgroundColor = 'red';
  // }

  const handclick = () =>{
    document.getElementById('btn').style.translate = '30rem 0';
  }

  let btn =document.getElementById('btn');
  