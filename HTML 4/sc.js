class FormValidation{
    formValues = {
        name : "",
        email : "",
        phonenumber : "",
        password : "",
        confirmpassword : ""
    }
    errorValues = {
        usernameErr : "",
        emailErr : "",
        phonenumberErr : "",
        passwordErr : "",
        confirmpasswordErr : ""
    }
    showErrorMsg(index,msg){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('span')[0].textContent = msg   
    }
    showSuccessMsg(index){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')
    }
    getInputs(){
        this.formValues.username = document.getElementById('username').value.trim()
        this.formValues.email = document.getElementById('email').value.trim()
        this.formValues.phonenumber = document.getElementById('phonenumber').value.trim()
        this.formValues.password = document.getElementById('password').value.trim()
        this.formValues.confirmpassword = document.getElementById('confirmpassword').value.trim()
    }
    validateUsername(){
        if(this.formValues.username === ""){
            this.errorValues.usernameErr = "* Please Enter Your Name"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.username.length <= 4 ){
            this.errorValues.usernameErr = "* Username must be atleast 5 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.username.length > 14){
            this.errorValues.usernameErr = "* Username should not exceeds 14 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else {
            this.errorValues.usernameErr = ""
            this.showSuccessMsg(0)
        }
    }
    validateEmail(){
        //abc@gmail.co.in
        const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
        if(this.formValues.email === ""){
            this.errorValues.emailErr = "* Please Enter Valid Email"
            this.showErrorMsg(1,this.errorValues.emailErr)
        } else if(!(regExp.test(this.formValues.email))){
            this.errorValues.emailErr = "* Invalid Email"
            this.showErrorMsg(1,this.errorValues.emailErr)
        } else {
            this.errorValues.emailErr = ""
            this.showSuccessMsg(1)
        }
    }
    validatePhonenumber(){
       const phoneno = /^\d{10}$/
       if(this.formValues.phonenumber === ""){
           this.errorValues.phonenumberErr = "* Please Enter your Phone Number"
           this.showErrorMsg(2,this.errorValues.phonenumberErr)
       } else if(phoneno.test(this.formValues.phonenumber)){
           this.errorValues.phonenumberErr = ""
           this.showSuccessMsg(2)
       } else {
           this.errorValues.phonenumberErr = "* Invalid Phone Number"
           this.showErrorMsg(2,this.errorValues.phonenumberErr)
       }
    }
    validatePassword(){
        if(this.formValues.password === ""){
            this.errorValues.passwordErr = "* Please Provide a Password"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else if(this.formValues.password.length <= 4){
            this.errorValues.passwordErr = "* Password must be atleast 5 Characters"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else if(this.formValues.password.length > 10){
            this.errorValues.passwordErr = "* Password should not exceeds 10 Characters"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else {
            this.errorValues.passwordErr = ""
            this.showSuccessMsg(3)
        }
    }
    validateConfirmpassword(){
        if(this.formValues.confirmpassword === ""){
            this.errorValues.confirmpasswordErr = "* Invalid Confirm Password"
            this.showErrorMsg(4,this.errorValues.confirmpasswordErr)
        } else if(this.formValues.confirmpassword === this.formValues.password && this.errorValues.passwordErr === ""){
            this.errorValues.confirmpasswordErr = ""
            this.showSuccessMsg(4)
        } else if(this.errorValues.passwordErr){
            this.errorValues.confirmpasswordErr = "* An error occurred in Password Field"
            this.showErrorMsg(4,this.errorValues.confirmpasswordErr)
        } else {
            this.errorValues.confirmpasswordErr = "* Password Must Match"
            this.showErrorMsg(4,this.errorValues.confirmpasswordErr)
        }
    }
    alertMessage(){
        const {usernameErr , emailErr , phonenumberErr , passwordErr , confirmpasswordErr}= this.errorValues
        if(usernameErr === "" && emailErr === "" && phonenumberErr === "" && passwordErr === "" && confirmpasswordErr === ""){
            swal("Registration Successful","ThankYou , "+this.formValues.username,"success").then(() => {
                console.log(this.formValues)
                this.removeInputs()
            })
        } else {
            swal("Give Valid Inputs","Click ok to Continue" ,"error")
        }
    }

    removeInputs(){
        const form_groups = document.getElementsByClassName('form-group')
        Array.from(form_groups).forEach(element => {
            element.getElementsByTagName('input')[0].value = ""
            element.getElementsByTagName('span')[0].textContent = ""
            element.classList.remove('success')
        })
    }
} 

const ValidateUserInputs = new FormValidation()

document.getElementsByClassName('form')[0].addEventListener('submit' , event => {
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateUsername()
    ValidateUserInputs.validateEmail()
    ValidateUserInputs.validatePhonenumber()
    ValidateUserInputs.validatePassword()
    ValidateUserInputs.validateConfirmpassword()
    ValidateUserInputs.alertMessage()
})












class FormValidation{
    formValues = {
        name : "",
        phonenumber : "",
        email : ""
    };
    errorValues = {
        nameErr : "",
        phonenumberErr : "",
        emailErr : ""
    };
    showErrorMsg(index,msg){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.add('error')
        form_group.getAttributeNames('yethoo')[0].textContent = msg   
    };
    showSuccessMsg(index){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')
    };
    getInputs(){
        this.formValues.name = document.getElementById('name').value.trim()
        this.formValues.phonenumber = document.getElementById('phonenumber').value.trim()
        this.formValues.email = document.getElementById('email').value.trim()
    };
    validateName(){
        if(this.formValues.name === ""){
            this.errorValues.nameErr = "* Please Enter Your Name"
            this.showErrorMsg(0,this.errorValues.nameErr)
        } else if(this.formValues.name.length <= 4 ){
            this.errorValues.nameErr = "* Name must be atleast 5 Characters"
            this.showErrorMsg(0,this.errorValues.nameErr)
        } else if(this.formValues.name.length > 14){
            this.errorValues.nameErr = "* Name should not exceeds 14 Characters"
            this.showErrorMsg(0,this.errorValues.nameErr)
        } else {
            this.errorValues.nameErr = ""
            this.showSuccessMsg(0)
        }
    };
    validateEmail(){

    }
    validatePhonenumber(){

    }
    alertMessage(){
        const {nameErr , emailErr , phonenumberErr }= this.errorValues
        if(nameErr === "" && emailErr === "" && phonenumberErr === ""){
            swal("Registration Successful","ThankYou , "+this.formValues.name,"success").then(() => {
                console.log(this.formValues)
                this.removeInputs()
            })
        } else {
            swal("Give Valid Inputs","Click ok to Continue" ,"error")
        }

    }
    removeInputes(){

    }
};

const ValidateUserInputsssssssss = new FormValidation() ;

 document.getElementsByClassName('form-group')[0].addEventListener('submit',event => {
    event.preventDefault();
    ValidateUserInputs.getInputs();
    ValidateUserInputs.validateName();
    ValidateUserInputs.validateEmail();
    ValidateUserInputs.validatePhonenumber();
    ValidateUserInputs.alertMessage();
});

const box = this.document.getElementsByClassName('.box');
const containe = document.getElementsByClassName('.containe');
const contact = document.getElementById('#head');
const man = document.getElementById('#man');
const mans = document.getElementById('#mans');
const formm = document.getElementById('#formm');








// let express = require('express')
// let mongodb = require('mongodb')
// var url = 'mongodb://localhost/mywebsite';
// const client = new mongoClient(url);

// let app = express()
// let db = null
// app.use(express.static('public'))

// const mongoclient= mongodb.mongoclient;
// let dbstring = 'mongodb+srv://root:Tomandjerry03@cluster0.hb7rq.mongodb.net/myapp?retryWrites=true&w=majority'
// let dbName = 'mywebsite'

// let port = process.env.PORT
// if(port == null || port == ""){
//   port = 3000
// }
// mongodb.connect(dbstring,{useNewUrlParser:true,useUnifiedTopology: true },function(err,client){
//   if(err){
//     throw err
// }
//   db = client.db(dbName)
//   app.listen(port)
// })


// app.use(express.json())
// app.use(express.urlencoded({extended:false}))





// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const bodyparser = require("body-parser");
// const text = require("body-parser/lib/types/text");

// app.use(bodyparser.urlencoded({extended: true}));

// mongoose.connect('mongodb+srv://root:Tomandjerry03@cluster0.hb7rq.mongodb.net/mywebsite',{useNewUrlParser:true,useUnifiedTopology: true })

// let port = process.env.PORT
// if(port == null || port == ""){
//   port = 3000
// }

// const thing = {
//   name: String,
//   phonenumber: Number,
//   email:String,
//   message:String

// };

// const note = mongoose.model("note" , thing);

// app.get('/' , function(req, res){
//   res.sendFile(__dirname + "/index.html")
// });

// app.post('/' , function(req,res){
//   let newnode = new note ({
//     name: req.body.uname1,
//     phonenumber:req.body.phoneno1,
//     email:req.body.email1,
//     message:req.body.msge
//   })
//   newnode.save();
//   res.redirect('/')
// });

// app.listen(port, function() {
//   console.log('server is running');
// })
