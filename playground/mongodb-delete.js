// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log("Unable to connect to Mongodb");
    }

    console.log("Connecting Successfully");
    
   //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat today'}).then((result) => {
    //     console.log(result)
    // }, (err) => {
    //     console.log(err);
    // })
   //deleteOne

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //     console.log(res)
    // }, (err) => {
    //     console.log(err);
    // })

   //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log(err)
    // })


    // db.collection('Users').deleteMany({name: 'Omar'}).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log(err);
    // })


    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b6e79e057ffc5070c5867ff')
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    }, (err) => {
        console.log(err)
    })


    //db.close(); 
})