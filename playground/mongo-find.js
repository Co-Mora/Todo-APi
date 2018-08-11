// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log("Unable to connect to Mongodb");
    }

    console.log("Connecting Successfully");
    
    db.collection('Users').find({name: 'Omar'}).toArray().then((docs) => {
        console.log(`Todos`);
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log("Unable to find todo", err);
    })

    //db.close();
})