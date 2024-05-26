// export default TaskAddForm;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const TaskAddForm = () => {
//   const [title, setTitle] = useState('');
//   const [text, setText] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const taskData = {
//       taskTitle: title,
//       taskText: text,
//     };

//     try {
//       await axios.post('http://localhost:5000/api/tasks', taskData, {
//         headers: { 'Content-Type': 'application/json' }
//       });
//       navigate('/dashboard');
//     } catch (error) {
//       console.error("There was an error adding the task!", error);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-6">Add Task</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Title Input */}
//         <div className="mb-4">
//           <label
//             htmlFor="title"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
//           />
//         </div>

//         {/* Description Input */}
//         <div className="mb-4">
//           <label
//             htmlFor="description"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Description
//           </label>
//           <textarea
//             id="description"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
//           >
//             Add Task
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default TaskAddForm;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TaskAddForm = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch tasks on component mount
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error("There was an error fetching the tasks!", error);
      }
    };
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { taskTitle: title, taskText: text };

    try {
      if (editingTaskId) {
        await axios.put(`http://localhost:5000/api/tasks/${editingTaskId}`, taskData, {
          headers: { 'Content-Type': 'application/json' }
        });
        setEditingTaskId(null);
      } else {
        await axios.post('http://localhost:5000/api/tasks', taskData, {
          headers: { 'Content-Type': 'application/json' }
        });
      }
      setTitle('');
      setText('');
      fetchTasks();
    } catch (error) {
      console.error("There was an error adding/updating the task!", error);
    }
  };

  const handleEdit = (task) => {
    setTitle(task.taskTitle);
    setText(task.taskText);
    setEditingTaskId(task._id);
  };

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error("There was an error deleting the task!", error);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error("There was an error fetching the tasks!", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mb-6">
        <h2 className="text-2xl font-bold mb-6">{editingTaskId ? "Edit Task" : "Add Task"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              {editingTaskId ? "Update Task" : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    <div className="cardsParent flex flex-wrap   gap-2 ">
          {tasks.map((task) => (
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6">Task List</h2>
        <ul>
            <li key={task._id} className="mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold">{task.taskTitle}</h3>
                  <p>{task.taskText}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleEdit(task)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-lg shadow hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-600 text-white px-2 py-1 rounded-lg shadow hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
        </ul>
      </div>
          ))}
        </div>
    </div>
  );
};

export default TaskAddForm;