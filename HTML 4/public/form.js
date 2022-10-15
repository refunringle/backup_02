var mongodb = require("mongodb");
var express = require('express');

var bodyparser = require("body-parser");

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//var path = require('path')

var app = express();

//app.use('/', express.static(path.join(__dirname, "../index.html",'../stylee.css')));


app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
//app.use(express.urlencoded({extended:false}));

app.use(express.static("./public"));
//app.use(express.static(__dirname + '/public'));



mongoose.connect('mongodb+srv://root:Tomandjerry03@cluster0.hb7rq.mongodb.net/mywebsite',{useNewUrlParser:true,useUnifiedTopology: true },
function(err ,db){
  if(err) {
    console.log(`error is ${err}`);
  }
  else
  {
    console.log('connected to the database');
  }
});


const PORT = process.env.PORT || 5000
if(PORT == null || PORT == ""){
  PORT = 27017
};

var Schema = new mongoose.Schema({
  name: String,
  phonenumber: Number,
  email:String,
  message:String

});

var user = mongoose.model('null', Schema);

app.get('/', function(req, res){
  user.find({}, function (err, data){
	    if(!err){
	    console.log(data);
	    }else{
        console.log('for get error');
      }
	       
	});
});


app.post('/', function(req, res){
	new user({
    name: req.body.myform2.uname1,
    phonenumber:req.body.myform2.phoneno1,
   email: req.body.myform2.email1,
   message: req.body.myform2.msge
	}).save(function(err, doc){
		if(err) res.json(err);
		else    res.send('Successfully inserted!');
	});
  res.redirect('/')
});


app.listen(PORT, function() {
  console.log('server is running',+ PORT);
})





// app.post('/', function(req, res){
//   user.findOne({name: req.body.uname1,
//                 phonenumber:req.body.phoneno1,
//                email:req.body.email1,
//                message:req.body.msge},function(err, data){
// 	    if(!err){
// 	    console.log(data);
// 	    }else{
//         console.log('for post error');
//       }
	       
// 	});
//   res.redirect('/')
// });






























// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');
// var mongodb = require('mongodb');

// let app = express()
// let db = null
// app.use(express.static('public'))

// let MongoClient = require('mongodb').MongoClient;
// let dbstring = 'mongodb+srv://root:Tomandjerry03@cluster0.hb7rq.mongodb.net/mywebsite?retryWrites=true&w=majority'
// let dbName = 'mywebsite'

// let port = process.env.PORT
// if(port == null || port == ""){
//   port = 3000
// }

//  mongodb.MongoClient.connect(dbstring,{useNewUrlParser:true,useUnifiedTopology: true },function(err,client){
//   if(err){
//     throw err
// }
//   db = client.db(dbName)
//   app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
// })


// app.use(express.json())
// app.use(express.urlencoded({extended:false}))



// app.get('/', function(req,res){
  
//   db.collection('items').find().toArray(function(err,items){
//     res.sendFile(__dirname + "/index.html")
//   });
// });



// app.post("/", function(req, res){
//   db.collection("items").insertOne({name: req.body.uname1,
//                                phonenumber:req.body.phoneno1,
//                                 email:req.body.email1,
//                                  message:req.body.msge
// }, function(){
//     res.redirect('/')

//   })

// })