const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/projectDb",{
    // useCreateIndex:true,
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(()=>{
    console.log("connection Successful")
}).catch((error)=>{
console.log(error);
})