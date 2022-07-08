const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8000;
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

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


// checking the body api
// app.post("/run", (req, res) => {
//     const { language = "cpp", code } = req.body
//     if (code === undefined) {
//         return res.status(400).json({ success: false, error: "empty code body" })
//     }
//     return res.json({ language, code });

// })

app.listen(port,
    () => {
        console.log(`Example app listening on port ${port}`)
    })