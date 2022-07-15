
const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8000;
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());




// Check the server


const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASS}@cluster0.dt7fdh2.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        console.log('db connect');

        // const allProductCollection = client.db("clothesWareHouse").collection("allProducts");

        app.get('/', (req, res) => {
            res.send('Hello World!')
        })

        app.post('/api', (req, res) => {
            let code = req.body.code;

            var request = require('request');

            var program = {
                script: code,
                language: "c",
                versionIndex: "0",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
            };

            request({
                url: 'https://api.jdoodle.com/v1/execute',
                method: "POST",
                json: program
            },
                function (error, response, body) {
                    console.log('error:', error);
                    console.log('statusCode:', response && response.statusCode);
                    console.log(code);
                    res.send({ body: body || error })
                });

        })


        app.post('/apipython', (req, res) => {
            let code = req.body.code;

            var request = require('request');

            var program = {
                script: code,
                language: "python3",
                versionIndex: "0",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
            };

            request({
                url: 'https://api.jdoodle.com/v1/execute',
                method: "POST",
                json: program
            },
                function (error, response, body) {
                    console.log('error:', error);
                    console.log('statusCode:', response && response.statusCode);
                    console.log(code);
                    res.send({ body: body || error })
                });

        })
        app.post('/apijava', (req, res) => {
            let code = req.body.code;
            var request = require('request');

            var program = {
                script: code,
                language: "java",
                versionIndex: "0",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
            };

            request({
                url: 'https://api.jdoodle.com/v1/execute',
                method: "POST",
                json: program
            },
                function (error, response, body) {
                    console.log('error:', error);
                    console.log('statusCode:', response && response.statusCode);
                    console.log(code);
                    res.send({ body: body || error })
                });

        })


        app.post('/apicpp', (req, res) => {
            let code = req.body.code;

            var request = require('request');

            var program = {
                script: code,
                language: "cpp17",
                versionIndex: "0",
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
            };

            request({
                url: 'https://api.jdoodle.com/v1/execute',
                method: "POST",
                json: program
            },
                function (error, response, body) {
                    console.log('error:', error);
                    console.log('statusCode:', response && response.statusCode);
                    console.log(code);
                    res.send({ body: body || error })
                });

        })


    } finally {
        //   await client.close();
    }
}
run().catch(console.dir);


app.listen(port,
    () => {
        console.log(` app listening on port ${port}`)
    })