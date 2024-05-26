import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import AdminDashBoard from "./Pages/AdminDashBoard"
// import User from "./Pages/User"
// import Account from "./Pages/Task"
import Header from "./Components/Header"
// import SignUp from "./Pages/TaskDetails"
import Task from "./Pages/Task"
// import Home from "./Pages/Home"
import TaskDetails from "./Pages/TaskDetails"
// import Login from "./Pages/Singup"
import Users from "./Pages/Users"
import AdminDashboard from "./Dashboard/AdminDashboard"
import LogIn from "./Components/LogIn"
import SignUp from "./Components/SignUp"

function App() {
  
  return (
  <>
  <Router>
    {/* <Header/> */}
    <Routes>
    <Route path='/' element={<LogIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
      <Route path="/dashBoard" element={< AdminDashboard/>}/>
      <Route path="/task" element={< Task/>}/>
      <Route path="/taskDetails" element={< TaskDetails/>}/>
      <Route path="/users" element={< Users/>}/>
      {/* <Route path="/task" element={< Task/>}/> */}
      {/* <Route path="/" element={< Admin/>}/> */}
    </Routes>
  </Router>
  </>
  )
}

export default App
