const express = require('express');
const mongoose = require('mongoose');
const expHB = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
// const PORT = process.env.PORT || 3000;

const app = express();
//MiddleWare
app.use(cors());
app.use(bodyParser.json());


const todoRoute = require('./routes/todo');
const userRoute = require('./routes/users');

app.use('/todos', todoRoute);
app.use('/users', userRoute);


app.get('/', (req,res) => {
    res.send('We are started');
});

mongoose.connect(
    process.env.DB_CONNECTION,
     {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }, () => {
    console.log('connection to DB');
});


app.listen(3000);

// async function start() {
//     try {
//         await mongoose.connect('mongodb+srv://andrey:Herzeleid48@home-app-lmtfx.mongodb.net/homeapp', {
//             useNewUrlParser: true,
//             useFindAndModify: false,
//             useUnifiedTopology: true
//         })
//         app.listen(3055, () => {
//             console.log('Server has been started...')
//         });
//     } catch (e) {
//         console.log(e)
//     }
// }

// start()
