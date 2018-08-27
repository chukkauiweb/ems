var express = require ("express");
var mongodb = require ("mongodb");
var reg = mongodb.MongoClient;
var router = express.Router();
router.post("/register", function (req,res) {
    var id = req.body.id;
    var name=req.body.name;
    var email =req.body.email;
    var phno=req.body.phno;
    var pwd=req.body.pwd;
    var cpwd=req.body.cpwd;
    reg.connect("mogngodb://localhost:27017/hirecraft",(err,db)=>{
        db.collection("user_details").insertOne("id" : id,"name"=name,"email"=mail,"phno"=phno, "pwd"=pwd, "cpwd"=cpwd, function(err,res){
            if(err){
                console.error("errorerror while register");
            }else{
                res.send(user_details);
            }
        });
    });
})
