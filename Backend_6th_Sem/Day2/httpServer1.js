const http = require("http")
const fs=require("fs/promises")
const server=http.createServer(async(req,res)=>{
  res.setHeader("Content-Type","text/html");
  const url=req.url
  if(url=="/home" && req.method=="GET") {
    const data=await fs.readFile("home.html")
    res.write(data)
  }
  else if(url=="/about" && req.method=="GET"){
    const data=await fs.readFile("about.html")
    res.write(data)
  }
  else{
    const data=await fs.readFile("error.html")
    res.write(data)
  }
  res.statusCode=200
  res.end()
  
})
server.listen(3001,(err)=>{
  try{
    if(err) throw err
    console.log("Server is runing on port no 3001")
  }
  catch(err)
  {
    console.log("Server Error:",err.message)
  }
})

///create the http server which display the content of given api