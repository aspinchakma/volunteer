const express = require("express");
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();


app.get('/', (req, res) => {
    res.send('Hello i am root')
})



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yu5z2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function server() {

    try {
        await client.connect();



    }
    finally {
        await client.close();
    }
}
server().catch(console.dir)



app.listen(port, () => {
    console.log('hello bro i am ', port)
})