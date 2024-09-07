const { setThePassword } = require("whatwg-url");
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const app = express();
const path = require("path");
const nodemailer = require("nodemailer");
const { stringify } = require("querystring");
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
const static_path = path.join(__dirname, "Public")
// console.log(path.join(__dirname,"Public"));
app.use(express.static(static_path));
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://127.0.0.1/student", {
}).then(() => {
  console.log(`connection successfull`);
});
const db = mongoose.connection;
const notesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  confirmPassword: {
    type: String,
    required: true,
  }
});

notesSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log(`password is ${this.password}`);
    const hash = await bcrypt.hash(String(this.password), 10);
    this.password = hash;
    console.log(hash);
    console.log(`Hashed password is ${this.password}`);
    this.confirmPassword = undefined;
  }
  next();
});



//Creation Of a Collection of Register Users 
const user = new mongoose.model("user", notesSchema);
const loginSchema = mongoose.Schema({
  email: String,
  password: Number
});


const login = mongoose.model("login", loginSchema);


//Read the Daata
app.get("/", (req, res) => {
  // res.sendFile("C:/Users/Manoj Kuliyal/OneDrive/Projects/MINI_PROJECT/Public/login.html");
  res.sendFile(__dirname + "/Public/login.html")
})


//Post method to store data
app.post("/register.html", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.password;
    const mail = req.body.email;
    console.log(`${mail} and password is ${password}`);
    if (password == cpassword) {
      const newuser = new user({
        name: req.body.name,
        email: req.body.email,
        password: password,
        confirmPassword: cpassword,
      })
      const uses = await newuser.save();
      res.redirect("/login.html");
      console.log(uses);
    }
    else {
      res.send("Passwords are not matching");
    }
  } catch (error) {
    res.send("Already registered Try to login");
  }
});


//Login page
app.post("/login.html", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    console.log(`${email} and password is ${password}`);
    const useremail = await user.findOne({ email: email });
    const same = await bcrypt.compare(password, useremail.password);
    console.log(useremail.password);
    console.log(same);
    if (same) {
      res.redirect("/home.html")
    }
    else {
      res.send("Either Username or Password is not matching");
    }
  } catch (error) {
    res.status(400).send("invalid login Details");
  }
});
const feedbackSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Number: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  }
});
//Newsletter Registration

app.post('/home.html', async (req, res) => {
  const to = req.body.email
  const subject = "newsletter Registration"
  const body = "You have been registered for newsletters,get email updates on our latest updates and stay connected with us"
  console.log(to)
  console.log(subject)
  console.log(body)
  let transport = await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'ricardo.wiegand71@ethereal.email',
      pass: 'HZJEFdCXbhhYTCCkf5'
    }
  })
  let mailoptions = {
    from: 'ricardo.wiegand71@ethereal.email',
    to: to,
    subject: subject,
    text: body,
  }
  transport.sendMail(mailoptions, function (err, info) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Email Sent" + info.response)
      res.redirect("/home.html");
    }
  })
})