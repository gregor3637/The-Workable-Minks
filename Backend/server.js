var express = require('express');
var bodyParser = require('body-parser');
var app = express();

messages = [
    {text: '1 text', owner: 'Peshoez'},
    {text: '2 text', owner: 'penelope'},
    {text: '3 text', owner: 'Gosho'}
  ];

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
    next();
});

var api = express.Router();

api.get('/messages', (req, res) => {
    res.json(messages);
});

api.get('/messages/:user', (req, res) => {
    var passedUser = req.params.user;
    var result = messages.filter( (message) => {
        return message.owner == passedUser;
    });
    
    res.json(result);
});

api.post('/messages', (req, res) => {
    messages.push(req.body);
    res.json(req.body);
});

app.use('/api', api);

app.listen(1234, () => {
    console.log('Listening to port 1234');
});
