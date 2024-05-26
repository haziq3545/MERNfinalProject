const express = require("express");
const {
    getTasks,
    createTask,
    getSingleTask,
    updateSingleTasks,
    deleteTasks
} = require("../Controllers/taskController")

const router = express.Router();


router.route("/").get(getTasks).post(createTask);

router.route("/:id").get(getSingleTask).put(updateSingleTasks).delete(deleteTasks);


module.exports = router