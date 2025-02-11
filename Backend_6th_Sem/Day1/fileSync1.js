const fs=require("fs");
function myReadFile()
{
try{
  const data=fs.readFileSync("dummy.txt", "utf-8");
  console.log("File Data:",data);
}
catch(err){
  console.log("File Reading error:",err.message);
}
}
const myWriteFile=(data)=>{
  try{
    fs.writeFileSync("dummy.txt",data, "utf-8");
    console.log("Successfully write file")
  }
  catch(err){
    console.log("File:",err.message);
  }
}
const myAppendFile=(data)=>{
  try{
    fs.appendFileSync("dummy.txt",data, "utf-8");
    console.log("Appended data Successfully");

  }
  catch(err){
    console.log("FileAppending Error:",err.message)
  }
}
const myDeleteFile=(filename)=>{
  try{
    fs.unlinkSync(filename);
    console.log(" data deleted Successfully",filename);

  }
  catch(err){
    console.log("FileDeleting Error:",err.message)
  }
}

module.exports={
  myReadFile:myReadFile,
  myWriteFile:myWriteFile,
  myAppendFile:myAppendFile,
  myDeleteFile:myDeleteFile,
  username:"Shivam Yadav",
}