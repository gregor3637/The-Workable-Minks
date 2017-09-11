var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jwt = require('jsonwebtoken');

var jwtSecret = '123';
var messages = [
    {text: '1 text', owner: 'Peshoez', sport: 'football'},
    {text: '2 text', owner: 'penelope', sport: 'football'},
    {text: '3 text', owner: 'Gosho', sport: 'basketball'},
    {text: '4 text', owner: 'asd', sport: 'volleyball'}, 
];

var users = [
    {
        firstName: 'a',
        lastName: 'a',
        email: 'a',
        password: 'a',
        id: 0,
        messages: [],
        personalMessagesOut: [
            // {
            //     from : string,
            //     to : string,
            //     content : string,
            //     date : string
            // }
        ],
        personalMessagesIn: []
    }
];

var personalMessages = [];

var sports = [
    'football',
    'basketball',
    'volleyball'
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

api.get('/personal-messages/:user', (req, res) => {
    var passedUser = req.params.user;
    console.log("passeduser::");
    console.log(passedUser);
    var result = messages.filter( (message) => {
        return message.owner == passedUser;
    });
    
    res.json(result);
});

api.post('/messages', (req, res) => {
    messages.push(req.body);
    var index = -1;
    for(i = 0; i < users.length; i++) {
        if (users[i].firstName == req.body.owner){
            index = i;
            break;
        }
    }

    users[index].messages.push(req.body);   
    
    res.json(req.body);
});

api.post('/personal-messages', (req, res) => {
    console.log('posting personal message');
    console.log(req.body);
    var index = -1;
    for(i = 0; i < users.length; i++) {
        if (users[i].firstName == req.body.from){
            index = i;
            break;
        }
    }   

    users[index].personalMessagesOut.push(req.body); 

    index = -1;
    for(i = 0; i < users.length; i++) {
        if (users[i].firstName == req.body.to){
            index = i;
            break;
        }
    } 

    if (index != -1){
        users[index].personalMessagesIn.push(req.body);     
        
    }  
    console.log(users);
    res.json(req.body);
});

api.get('/messages', (req, res) => {
    console.log(personalMessages);    
    
    res.json(personalMessages);
});


api.get('/users/me', checkAuthenticated, (req, res) => {
    //if checkAuthenticated fails, we will not reach this point
    console.log('---------get /users/me');
    
    res.json(users[req.user]);
})

api.post('/users/me', checkAuthenticated, (req, res) => {
    console.log('---------post /users/me');
    // var user = users[req.user];

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    for (var i=0; i<messages.length; i++) {
        if( messages[i].owner == user.firstName){
            user.messages.push(messages[i]);            
        }
    }

    res.json(user);
})

// api.get('/sports', (req, res) => {
//     res.json(sports);
// });

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
    user.messages = [];
    user.personalMessagesIn = [];
    user.personalMessagesOut = [];
    
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
