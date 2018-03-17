const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>
{
if(err)
{return console.log("cant connect with db");}

console.log("db connected");
db.collection('users').find({
    _id : new ObjectID('5aaca0ebf77dec111c8e7944')
}).toArray().then((docs)=>{
    console.log('users');
    console.log(JSON.stringify(docs,undefined,2));
})
}); 
