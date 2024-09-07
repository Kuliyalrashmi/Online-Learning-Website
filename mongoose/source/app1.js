const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/rashmiKuliyal',
{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
.then(()=>console.log("connection creation successfull"))
.catch((err)=>console.log(err));
// mongoose.connect("mongodb://127.0.0.1/shopdb");
// const login = new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String
// }); //input formate



// //Creation Of Mongodb Connection
// const db_link="mongodb+srv://Admin:2y4v76Nyfzb570ZQ@cluster0.qkdpcze.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(db_link)
// .then(function(db){
//   // console.log(db);
//   console.log('db connected');
// })
// .catch(function(err){
//   console.log(err);
// });


//Schema
//A Mongoose Schema defines the structure of the document ,default values,validators,etc
// const userSchema=mongoose.Schema({
//   name:{
//     type:String,
//     required:true
//   },
//   email:{
//     type:String,
//     required:true,
//     unique:true
//   },
//   password:{
//     type:String,
//     required:true,
//     minLength:8
//   },
//   confirmPassword:{
//     type:String,
//     required:true,
//     minLength:8
//   }
// });

//Models 
//Mongoose model is a wrapper on the mongoose schema.
//A mongoose schema defines the structure of the document ,default values,validators,etc.,wheras a mongoose model
//provides an interface to the database for creating,
//querying,updating,deleting records,etc.

//Collection Creation
// const userModel= mongoose.model('userModel',userSchema);

//creation of Document or Insertion using async and await 
// (async function createUser(){
//   let user={
//     name:'kgbbjb',
//     email:'hdmnnnfdbvv@gmail.com',
//     password:'45670965',
//     confirmPassword:'45670965',
//   };
// let data= await userModel.create(user);
// console.log(data);
// })();


//Reading and Querying from DataBase(Fetching Data from DataBase)
// const getDocument=async()=>{
//   const result=await userModel.find();   //this find function Fetches Result in the form of an Array
//   console.log(result);
// }
// getDocument();

// const getDocument1=async()=>{
//   try{
//     const result=await userModel.find({name:"Ansh"})  //It Fetches Result in the form of an Array
//    .select({password:1})  //HEre 1 means onle the field we provide is visible only
//    .limit(1);             //Here limit means how much data we want to show on the basis of conditions
//    console.log(result);
//   }catch(err){
//     console.log(err);
//   }
// }
// getDocument1();


//Creating A new Router
//Steps to Create a Router
//1. Create A new Router
const router=new express.Router();

//2. We need to define the Router
router.get("/",(req,res)=>{
  res.send("Hello World");
});

//3. We need to register our Router
app.use(router);



//Updating the Document
// const updateDocument=async (_id)=>{
//   try{
//     const result=await userModel.updateOne({_id},{
//       $set :{
//         name:"Arpitu"
//       }
//     });
//     console.log(result);
//   }catch(err){
//     console.log(err);
//   }
// }
// updateDocument("63c351e055f708ec02fc9ddb");
// app.get("/",(req,res)=>{
//   res.render("login")
// })
// app.get("/",(req,res)=>{
//   res.render("login")
// })
// module.exports=Register;
//create a new user in our database;
// app.post("/login",(req,res)=>{
//   try{
//     console.log(req.body.name);
//     res.send(req.body.name);
//     console.log(req.body.email);
//     res.send(req.body.email);
//     console.log(req.body.password);
//     res.send(req.body.password);
//     console.log(req.body.password);
//     res.send(req.body.password);
//   }catch(error){
//     res.status(400).send(error);
//   }
//   const newuser=new Register({
//     name:req.body.name,
//     email:req.body.email,
//     password:req.body.password
//   })
//   newuser.save()
//   res.redirect("/")
// });