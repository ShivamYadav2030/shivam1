const express=require("express")
const app=express()
const port=3000

//Creating a object of array
const product=[
  {
  id: 101,
  title:"Laptop",
  brand: "HP",
  price:5200,
  quantity:5
 },
 {
  id: 102,
  title:"Laptop",
  brand: "Acer",
  price:5200,
  quantity:5
 }
]

app.use(express.json())
//Using GET Methods
app.get("/product",(req,res)=>{
  res.status(200)
  res.json(product)

})

//Using Post Methods
app.post("/product",(req,res)=>{
  const {title,brand,price,quantity}=req.body //Destructuring of array
  if(!title || !brand || !price || !quantity)
  {
    res.status(400).json({status:"status failed",message:"All fields required"})
  }
  else{
    const newId=product.length>0? product[users.length-1].id+1 :10;
    
    const newProduct={
      id:newId,title,brand,price,quantity
    }
    product.push(newProduct)
    res.status(201)
    res.json({status:"success",message:"user created succesfully"})
  }
})


//invoking server
app.listen(port,(err)=>{
  try{
    if (err) throw err;
    else{
      console.log(`server is running on port ${port}`)
    }
  }
  catch(err){
    console.log("Server Error:",err.message)
  }
})