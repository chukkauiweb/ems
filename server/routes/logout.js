var express = require("express");
var router = express.Router();
var db = require("../config/db_properties");
router.get("/",function(req,res){
    db.token="";
    res.send({"status":"success"});
});
module.exports = router;