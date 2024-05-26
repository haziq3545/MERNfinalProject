import React from 'react'
import TaskAddForm from './DashboardComponents/TaskAddForm'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {

const navigate =useNavigate()
  return (
    <>
      <div className="flex h-screen">
    {/* <!-- Sidebar --> */}
    <div className="bg-blue-900 text-white w-64 flex-none">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <nav>
          <ul>
            <li><a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded">Home</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded">Profile</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded">Settings</a></li>
            <li><a href="#" onClick={()=>navigate("/")} className="block py-2 px-4 hover:bg-blue-700 rounded">Logout</a></li>
          </ul>
        </nav>
      </div>
    </div>

    {/* <!-- Main Content --> */}
    <div className="flex-1 flex flex-col">
      {/* <!-- Header --> */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded">New Item</button>
          <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-md"/>
        </div>
      </header>

      {/* <!-- Content --> */}
          <TaskAddForm/>
          </div>
          </div>

          </>
  )
}

export default AdminDashboard
