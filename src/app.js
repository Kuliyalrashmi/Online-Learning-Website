const express=require("express")
const app=express();
const bodyparser=require("body-parser");
const port=process.env.PORT ||3000;
const jwt=require("jsonwebtoken")
app.use(express.static("Public"));
app.get("/",(req,res)=>{
    res.sendFile('C:/Users/Manoj Kuliyal/OneDrive/Projects/MINI_PROJECT/Backend/Public/home.html');
});
app.listen(port,()=>{
    console.log(`server is running at port no${port}`);
})
// // app.use(express.urlencoded({extended:false}));
// // app.post("/login.html",function(req,res){
// //   console.log(req.body.name);
// //   res.send(req.body.name);
// //   console.log(req.body.email);
// //   console.log(req.body.password);
// //   console.log(req.body.confirm-password);
// // })
// // //Creation Of Mongodb Connection
// // mongoose.connect("mongodb://127.0.0.1/student");
// // // //Registration Form
// // const userSchema=mongoose.Schema({
// //   name:{
// //     type:String,
// //     required:true
// //   },
// //   email:{
// //     type:String,
// //     required:true,
// //     unique:true
// //   },
// //   password:{
// //     type:String,
// //     required:true,
// //     minLength:8
// //   },
// //   confirmPassword:{
// //     type:String,
// //     required:true,
// //     minLength:8
// //   }
// // });
// // //Creation of collection
// // const Register =new mongoose.model("Register",userSchema);
// // // module.exports=Register;
// // //create a new user in our database;
// // // app.post("/",(req,res)=>{
// // //   try{
// // //     console.log(req.body.name);
// // //     res.send(req.body.firstname);
// // //     console.log(req.body.firstname);
// // //     res.send(req.body.firstname);
// // //   }catch(error){
// // //     res.status(400).send(error);
// // //   }
// // // })
// // app.post("/",function(req ,res){    //post:to get the data back from the front end
// //     console.log(req.body.name);
// //     console.log(req.body.email);
// //     console.log(req.body.password);     //tree from and to acces it re.body.name
    
// //     const newuser = new f({
// //         name:req.body.name,
// //         email:req.body.email,
// //         password:req.body.password
// //     })
// //   })
// const express = require("express");
// const bodyparser=require("body-parser");
// const mongoose= require("mongoose");


// const app= express();

// //const port = process.env.PORT ||3000;//server genrated for around the world optional with 3000
// app.use(bodyparser.urlencoded({extended:true}));
// app.use(express.static("public"));

// //app.listen(port, ()=>{
// //    console.log("server is live on 3000");
// //})
// mongoose.connect("mongodb://127.0.0.1/student");
// const login = new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String
// }); //input formate
// const f = mongoose.model("login", login);



// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/Public/home.html");
// });
// app.post("/",function(req ,res){    //post:to get the data back from the front end
//     console.log(req.body.name);
//     console.log(req.body.email);
//     console.log(req.body.password);     //tree from and to acces it re.body.name
    
//     const newuser = new f({
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password
//     })

//     newuser.save()
//     res.redirect("/")
//     .then(newuser => {
//        consol.log("successful")
//     })
//     .catch(error => {
//         res.json({
//             message:"unsuccessful"
//         })
//     })
    
// });
// app.get("/logout", function(req, res){    
//     req.logout();    
//     res.redirect("/");
// });
// app.listen(3000,function(){
//     console.log("server is live on 3000");
// });
// const express = require("express");
// const bodyparser = require("body-parser");
// const mongoose = require("mongoose");
// // const bcrypt = require("bcryptjs");
// // const { check, validationResult } = require("express-validator")


// const app = express();
// //const urlencodedParser = bodyarser.urlencoded({extended:true});
// //const port = process.env.PORT ||3000;//server genrated for around the world optional with 3000
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// //app.listen(port, ()=>{
// //    console.log("server is live on 3000");
// //})
// mongoose.connect("mongodb://127/.0.0.1:27017/shopdb");

// const login = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// }); //input formate
// const l = mongoose.model("login", login);


// //get method to read data
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/Public/home.html");
// });
// //post method to store data
// app.post("/Public/login.html", (req, res) => {

//     console.log(req.body.name);
//     console.log(req.body.email);
//     console.log(req.body.password);
    
//     na.findOne({ name: req.body.name }, async (error, name) => {
//         if (error || name) {
//             console.log('username taken');
//         }
//         else {
          
//                 const newuser = new l({
//                             name: req.body.name,
//                             email: req.body.email,
//                             password: req.body.password,
//                         });
//                         newuser.save();
//                         res.redirect("/Public/home.html");
//             }
//     })
// });

// app.listen(3000, function () {
//     console.log("server is live on 3000");
// });



// Hashing of A Password using bcrypt (it almost takes 3 years to get hacked)
// const bcrypt=require("bcryptjs");
// const securePassword=async(password)=>{
//    const passwordHash=await bcrypt.hash(password,10);  //10 round is a default value
//    console.log(passwordHash);
//    const passwordmatch=await bcrypt.compare(password,passwordHash);
//    console.log(passwordmatch);
// }
// securePassword("Rashmi123")


// Json Web Authentication it generates a code through which we check whether it is the same user who is claiming 
//this secret identifies unique user it has minimum 32 characters
const createToken=async()=>{
    const token= await jwt.sign({_id:"63d2a1a1fa58d6e50fa5ca71"},"qwertyuiopasdfghjklmnbvcxzqwertyui", {
        expiresIn:"2 seconds"
    });
    console.log(token);
    const verification=await jwt.verify(token,"qwertyuiopasdfghjklmnbvcxzqwertyui");
    console.log(verification);
}
createToken();