const mongoose =require('mongoose')
const mongo_url = 'mongodb://localhost:27017/mongopractice'
mongoose.connect(mongo_url)
.then(() =>{
  console.log("mongodb connected")
})
.catch(err=>{
  console.log("db error",err.message)
})

const userSchema = new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  age:{type:Number,required:true}
})

const user=mongoose.model("userdata",userSchema)

const createUser =async () =>{
  try{
    const newUser = new user({name:"Shivam Yadav",email:"shiva200@gmail.com",age:23})
    const saveduser = await newUser.save()
    console.log("User Created succsfully",saveduser)
  }
  catch(err){
    console.log("User creation error",err.message)
  }
}

// createUser()


//createUSer

const getUser=async()=>{
  try{
    const users=await user.find();
    console.log("List of Users:",users);
  }catch(err){
    console.log("user fetching Error", err.message);
  }
}
getUser();

//update user
const updateUser=async()=>{
  try{
    const updateUserdata=await user.findOneAndUpdate({name:"Shivam Yadav"},{$set:{name:"kai"}},{new:true})
    console.log("data updated successufully",updateUserdata);
  }catch(err){
    console.log("error", err.message);
  }
}

// updateUser();

const deleteUser = async() => {
  try{
    await user.deleteOne({name:"shivam"})
    console.log("user deleted successfully")
  }
  catch(err){
    console.log("user creation error", err.message)
  }
}

const app = async() =>{
  await createUser()
  await updateUser()
  await getUser()
  await deleteUser()
  await getUser()
}

app()