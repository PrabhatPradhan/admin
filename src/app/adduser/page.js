 import React from 'react'
 import Sidebar from "../../Components/Sidebar/Sidebar"
 
 import Navbar from "../../Components/Navbar/Navbar"
 import { FaTachometerAlt } from "react-icons/fa";
 import {
    FaListAlt,
    FaEdit,
    FaCrosshairs,
    FaSyncAlt,
    FaArrowUp,
    FaExpand,
    FaTimes,
  } from "react-icons/fa";
 export default function page() {
   return (
    <>
   <div className="flex h-screen">
  {/* Sidebar: fixed width */}
  <div className="w-64 bg-gray-800 text-white">
    <Sidebar />
  </div>

  {/* Main Content: full remaining width */}
  <div className="flex-1 overflow-y-auto bg-gray-100">
    <Navbar/>
    <div className="bg-white px-6 py-4 shadow-sm border-b flex items-center gap-4">
            {/* Icon */}
            <div className="text-teal-600 text-4xl">
              <FaTachometerAlt />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                CRM Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600">
                Very detailed &amp; featured admin.
              </p>
            </div>
          </div>
     

 
          <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded shadow-md p-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center bg-blue-100 px-4 py-2 rounded-t">
          <button className="bg-green-600 text-white px-4 py-1 rounded flex items-center gap-2">
            <FaListAlt /> Users List
          </button>
          <div className="flex gap-3 text-gray-700 text-sm items-center">
            <FaEdit className="cursor-pointer" />
            <FaCrosshairs className="cursor-pointer" />
            <FaSyncAlt className="cursor-pointer" />
            <FaArrowUp className="cursor-pointer" />
            <FaExpand className="cursor-pointer" />
            <FaTimes className="cursor-pointer" />
          </div>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-5">
          <div>
            <label className="block font-semibold mb-1">Employee Code</label>
            <input
              type="text"
              placeholder="Enter Employee Code"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Employee Name</label>
            <input
              type="text"
              placeholder="Enter Employee Name"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Employee Phone No.</label>
            <input
              type="text"
              placeholder="Enter Employee Phone No."
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Login User Name</label>
            <input
              type="text"
              placeholder="Enter Login User Name"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Login Password</label>
            <input
              type="password"
              placeholder="Enter Login Password"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Enter Hint</label>
            <input
              type="text"
              placeholder="Enter hint"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700"
          >
            Save
          </button>
        </form>
      </div>
    </div>














  </div>
</div>

    </>
   )
 }
 