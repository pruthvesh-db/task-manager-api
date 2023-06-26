const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('express').Router();
const taskRoutes = require('./routes/task_routes');

const app = express();
app.use(cors());
app.use(routes);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const PORT = 3000;

routes.use('/tasks', taskRoutes);

app.listen(PORT, (err) => {
    if(!err){
        console.log("server is started");
    } else {
        console.log("Error occured");
    }
});