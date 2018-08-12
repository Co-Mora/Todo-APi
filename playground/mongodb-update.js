// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log("Unable to connect to Mongodb");
    }

    console.log("Connecting Successfully");
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b6fc5b5f3419204814e3c03')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log(err)
    // })


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b6fd0a7f3419204814e3c26')
    }, {
        $set: {
            name: 'Mohamed'
        },
        $inc: {
            age: 1
        }
        
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res)
    }, (err) => {
        console.log(err);
    })

    //db.close(); 
})