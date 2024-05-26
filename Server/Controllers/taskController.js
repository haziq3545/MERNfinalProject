const asyncHandler = require("express-async-handler");
const Task = require("../Models/taskModel");


const getTasks = asyncHandler(async (request, response) =>{
    const task = await Task.find()
    if(!task){
        response.status(400)
        throw new Error("No Task found")
    }  
    response.status(200).json(task)

})

const createTask=asyncHandler(async (request, response) =>{
    const { taskTitle, taskText } = request.body

    if(!taskTitle || !taskText){
        response.status(400)
        throw new Error("Enter the new required field ")
    }

    const newTask = await Task.create({
        taskTitle,
        taskText
    })

    response.status(201).json(newTask)
})

// const createTask = asyncHandler(async (request, response) =>{
//     const task = await task.find()
//     if(!task){
//         response.status(400)
//         throw new Error("No Task found")
//     }  
//     response.status(200).json(task)

// })

const getSingleTask = asyncHandler(async (request, response) =>{
    const singleTask = await Task.findById(request.params.id)
    if(!singleTask){
        response.status(404)
        throw new Error("No Task fine")
    }
    response.status(200).json(singleTask)

})

const updateSingleTasks = asyncHandler(async (request, response) =>{
    const taskToBeUpdated = await Task.findById(request.params.id)
    if(!taskToBeUpdated){
        response.status(404)
        throw new Error("No Task find")
    }

    let updatedTask = await Task.findByIdAndUpdate( request.params.id, request.body, { new: true})
    response.status(200).json(updatedTask)

})

const deleteTasks = asyncHandler(async (request, response) =>{
    const taskToBeDeleted = await Task.findById(request.params.id)
    if(!taskToBeDeleted){
        response.status(404)
        throw new Error("No Task find")
    }

    let deleteTask = await Task.findByIdAndDelete( request.params.id, request.body, { new: true})
    response.status(200).json(deleteTask)

})



module.exports = { 
    getTasks,
    createTask,
    getSingleTask,
    updateSingleTasks,
    deleteTasks
}
