const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>
{
if(err)
{return console.log("cant connect with db");}

console.log("db connected");
const col=db.collection('users');
col.insertOne(
    {
        name : 'haran',
        age : '18',
        loc : 'chennai'
    },(err,result)=>
    {
        if(err)
        {
            return console.log("error occured");
        }
        console.log(JSON.stringify(result.ops,undefined,2)); 
    }
);
db.close();
}
)