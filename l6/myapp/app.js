const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', `*`);
    res.header('Access-Control-Allow-Credentials', `true`);
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/users', (req, res) => {
    fs.readFile('users.json', 'utf-8', (err, dataRaw) => {
        let data = JSON.parse(dataRaw);
        console.log(data);
        res.send(data);
    });
})

app.get('/users/:id', (req, res) => {
    fs.readFile('users.json', 'utf-8', (err, dataRaw) => {
        let data = JSON.parse(dataRaw);
        let user = data.find(item => item.id === +req.params.id);
        console.log(user);
        res.send(user);
    });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
