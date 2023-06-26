const taskRoutes = require('express').Router();
const taskData = require('../taskDetails.json');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

taskRoutes.use(bodyParser.urlencoded({extended: false}));
taskRoutes.use(bodyParser.json());

taskRoutes.get('/', (req,res) => {
    res.status(200);
    res.send(taskData);
});


taskRoutes.get('/:task_id', (req,res) => {
    let taskDetails = taskData.tasks;
    let taskIdPassed = req.params.task_id;
    let filteredTask = taskDetails.filter(val => val.task_id == taskIdPassed);

    res.status(200).send(filteredTask);
});


taskRoutes.post('/', (req, res) => {
    const taskDetails = req.body;
    let WritePath = path.join(__dirname, '..', 'taskDetails.json');
    let updateTaskDetails = taskData;
    updateTaskDetails.tasks.push(taskDetails);
    fs.writeFileSync(WritePath, JSON.stringify(updateTaskDetails), {encoding: 'utf8', flag: 'w'});
    res.status(200).send("Task has been added successfully");
})


taskRoutes.put('/:id',(req,res)=>{

    let taskDataModified = taskData;
    let taskArray= taskDataModified.tasks;
    let Passed_id= req.params.id;
    let result = taskArray.find(val => val.id==Passed_id);
    if(!result) {
        res.status(404).send(`Task not found`);
    }
    else {
        const taskDetails = req.body;
        let index = taskArray.indexOf(result);
        RoutineArray[index] = taskDetails;
        let writePath = path.join(__dirname, '..', 'dataset.json');
        fs.writeFileSync(writePath, JSON.stringify(taskDataModified), {encoding:'utf8', flag:'w'});
        res.status(200).send("TAsk has been updated successfully");
    }
})


taskRoutes.delete('/:id',(req,res)=>{
    let taskDataModified = taskData;
    let taskArray= taskDataModified.tasks;
    let Passed_id= req.params.id;
    let result = taskArray.find(val => val.task_id==Passed_id);
    if(!result) {
        res.status(404).send(`Task not found`);
    }

    else {
        let index = RoutineArray.indexOf(result);
        RoutineArray.splice(index,1);
        let writePath = path.join(__dirname, '..', 'taskDetails.json');
        fs.writeFileSync(writePath, JSON.stringify(taskDataModified), {encoding:'utf8', flag:'w'});
        res.status(200).send(`Task has been deleted successfully`);
    }
})


module.exports = taskRoutes;