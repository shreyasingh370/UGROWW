const express=require('express');
const path=require("path");
require("./db/conn");
const User=require("./models/message");
// const path = require('path')

const app=express();
const port= process.env.PORT||3000;
const staticpath=path.join(__dirname,"../public");
app.set('views', path.join(__dirname, 'views'));

app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath));
app.set("view engine","hbs");
//routing
//app.get(path,callback)
app.get("/",(req,res)=>{
res.render("index");
})

// app.get("/contact",(req,res)=>{
//     res.render("contact");
// })

app.post("/contact",async(req,res)=>{
    try{
        // res.send(res.body);
        const userData=new User(req.body);
        await userData.save();
        res.status(201).render("index");

    }
    catch(error){
        res.status(500).send(error);
    }

})

app.listen(port,()=>{
    console.log(`Server id running at port no ${port}`);
});