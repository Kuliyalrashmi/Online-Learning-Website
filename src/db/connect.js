const app= require('express');
const mongoose=require('mongoose');
// const app=express();
//Creation Of Mongodb Connection
mongoose.connect("mongodb://127.0.0.1:27017/student",{
}).then(()=>{
  console.log(`connection successfull`);
});
//Registration Form
const userSchema=mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:[true,"Email is already present"],
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Invalid Email")
      }
    }
  },
  password:{
    type:Number,
    required:true,
    min:10,
    max:10,
    unique:true
  },
  confirmPassword:{
    type:Number,
    required:true,
    min:10,
    max:10,
  }
});
//Creation of collection
const Register =new mongoose.model("Register",userSchema);
module.exports=Register;
// const Register=require("./src/db/connect.js");
// const { setThePassword } = require("whatwg-url");
// app.use(bodyparser.urlencoded({extended:true}));
// // create user
// app.get("/",(req,res)=>{
//   res.render("index");
// })
// app.post("login.html", (req, res) => {

//   console.log(req.body.name);
//   console.log(req.body.email);
//   console.log(req.body.password);
//   console.log(req.body.confirm-password);
  
//   register.findOne({ name: req.body.name }, async (error, name) => {
//       if (error || name) {
//           console.log('username taken');
//       }
//       else {
        
//               const newuser = new register({
//                           name: req.body.name,
//                           email: req.body.email,
//                           password: req.body.password,
//                           confirmPassword:req.body.confirm-password,
//                       });
//                       newuser.save();
//                       res.redirect("home.html");
//     }
//   })
// });

