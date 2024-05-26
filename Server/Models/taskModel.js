
const mongoose = require("mongoose");


const taskSchema = mongoose.Schema( {
    taskTitle:{
        type: String,
        required:[true, "title must be define"]
    },
    taskText:{
        type: String,
        required:[true, "Text must be define"]
    }
}, {timestamps: true}) 

module.exports = mongoose.model("task", taskSchema)