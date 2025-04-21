const {MongoClient} = require("mongodb")
const mongo_url="mongodb://localhost:27017"
MongoClient.connect(mongo_url)
.then(client=>{
  console.log("Mongodb Connected")

})
.catch(err => {
  console.log("DB Error", err.message)
})