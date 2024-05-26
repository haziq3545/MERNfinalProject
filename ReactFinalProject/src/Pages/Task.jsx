import React from 'react'

const Task = () => {
  return (
    <>
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-5">
      <div className="sm:flex sm:items-center px-6 py-4">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
          src="https://via.placeholder.com/100"
          alt="Profile"
        />
        <div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <p className="text-xl leading-tight">John Doe</p>
          <p className="text-sm leading-tight text-gray-600">johndoe@example.com</p>
          <div className="mt-4">
            <span className="text-gray-500">Bio:</span>
            <p className="mt-1 text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Task
