var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jwt = require('jsonwebtoken');

var jwtSecret = '123';
var messages = [
    {text: '1 text', owner: 'Peshoez'},
    {text: '2 text', owner: 'penelope'},
    {text: '3 text', owner: 'Gosho'}
];

var users = [
    {
        firstName: 'a',
        lastName: 'a',
        email: 'a',
        password: 'a',
        id: 0
    }
];

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
    next();
});

var api = express.Router();
var auth = express.Router();

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

api.get('/users/me', checkAuthenticated, (req, res) => {
    //if checkAuthenticated fails, we will not reach this point
    console.log('---------get /users/me');
    res.json(users[req.user]);
})

api.post('/users/me', checkAuthenticated, (req, res) => {
    console.log('---------post /users/me');
    var user = users[req.user];

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;

    res.json(user);
})

auth.post('/login', (req, res) => {
    console.log('auth.post > login');
    var matchedUser = users.find((passedUser) => {
        return passedUser.email === req.body.email;
    });

    if(!matchedUser){
        return sendAuthError(res);
    }

    if(matchedUser.password == req.body.password) {
        sendToken(matchedUser, res);
    } else {
        return sendAuthError(res);
    }
})

auth.post('/register', (req, res) => {
    var index = users.push(req.body) -1;

    var user = users[index];
    user.id = index;
    
    sendToken(user, res);
});

function sendToken(user, res) {
    var token = jwt.sign(user.id, jwtSecret);
    res.json({
        token: token,
        firstName: user.firstName
    });
}

function sendAuthError(res) {
    // return res.json({
    //     success: false,
    //     message: 'email or password incorrect !'
    // });
    res.status(500).send({ error: 'email or password incorrect !' })
}

function checkAuthenticated(req, res, next) {
    if(!req.header('authorization')) {
        return res.status(401).send({
            message: 'Unauthorized request. Missing authentication header'
        });
    }

    var token = req.header('authorization').split(' ')[1];
    var payload = jwt.decode(token, jwtSecret);

    if(!payload) {
        return res.status(401).send({
            message: 'Unauthorized request. authorization header is invalid'
        })
    }

    req.user = payload;
    next();
}

app.use('/api', api);
app.use('/auth', auth);

app.listen(1234, () => {
    console.log('g Listening to port 1234');
});
