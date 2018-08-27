var db_prop = ("./db/db_prop");
var express = require("express");
var mongodb = require('mongodb');
var mClient = mongodb.MongoClient;
var router = express.Router();// to create the router instace 
//create the Rest API
router.post('/', function(req,res) {
    var umail =req.body.email; // coming from view /angular
    var pwd =req.body.password;
    mClient.connect("mongodb://localhost:27017/hirecraft",function(err,db) {
        db.collection("user_details").find({"email":+umail,"passowrd":+pwd}).toArray(function(err,array) {
            if(err){
                console.error("error while login");
            }else{
                res.send(array);
            }
        });
    });
});
module.exports=router;

