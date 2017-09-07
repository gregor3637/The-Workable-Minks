var express = require('express');
var app = express();

messages = [
    {text: '1 text', owner: 'Peshoez'},
    {text: '2 text', owner: 'penelope'},
    {text: '3 text', owner: 'Gosho'}
  ];

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
    next();
});

app.get('/messages', (req, res) => {
    res.json(messages); 
})


app.listen(1234, () => {
    console.log('Listening to port 1234');
})