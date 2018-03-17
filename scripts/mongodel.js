const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>
{
if(err)
{return console.log("cant connect with db");}

console.log("db connected");
//db.collection('users').deleteMany({"name":"haran"}).then((result)=>{
//    console.log(JSON.stringify(result,undefined,2));
db.collection('users').findOneAndDelete({"age":"20"}).then((result)=>{
    console.log(result);
});    
});
