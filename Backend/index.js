const express = require('express')
const app = express()
const port = 5000
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// jdoodle api
var request = require('request');

var program = {
    script: "",
    language: "php",
    versionIndex: "0",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
};
if (language == "c++") {
    program.language = "cpp17";
    program.versionIndex = "0";
} else if (language == "c") {
    program.language = "c99";
    program.versionIndex = "4";
} else if (language == "python") {
    program.language = "python2";
    program.versionIndex = "3";
} else {
    program.language = "java";
    program.versionIndex = "0";
}
request({
    url: 'https://api.jdoodle.com/v1/execute',
    method: "POST",
    json: program
},
    function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    });
// checking the body api
app.post("/run", (req, res) => {
    const { language = "cpp", code } = req.body
    if (code === undefined) {
        return res.status(400).json({ success: false, error: "empty code body" })
    }
    return res.json({ language, code });

})

app.listen(port,
    () => {
        console.log(`Example app listening on port ${port}`)
    })