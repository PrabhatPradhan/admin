import React from 'react'
import Sidebar from "../../Components/Sidebar/Sidebar"

import Navbar from "../../Components/Navbar/Navbar"
import { FaTachometerAlt } from "react-icons/fa";
 
 import { FaPlus, FaListAlt, FaEdit, FaTrash } from "react-icons/fa";

const users = [
  {
    code: "+880167",
    name: "MD. Alimul Alrazy",
    phone: "+91-8800123456",
    email: "alrazy@thememinister.com",
    pass: "********",
    status: "Active",
  },
  {
    code: "+88016",
    name: "MD. Alimul Alrazy",
    phone: "+91-8800123456",
    email: "alrazy@thememinister.com",
    pass: "********",
    status: "Inactive",
  },
  {
    code: "+8801",
    name: "MD. Alimul Alrazy",
    phone: "+91-8800123456",
    email: "alrazy@thememinister.com",
    pass: "********",
    status: "Active",
  },
  {
    code: "+88016",
    name: "MD. Alimul Alrazy",
    phone: "+91-8800123456",
    email: "alrazy@thememinister.com",
    pass: "********",
    status: "Active",
  },
];

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
      <div className="bg-white rounded shadow-md p-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2">
            <FaPlus /> Add Users
          </button>
        </div>

        {/* Users Table Card */}
        <div className="border rounded shadow">
          <div className="bg-blue-100 px-4 py-2 font-semibold text-lg">
            Users List
          </div>

          <div className="p-4 flex flex-wrap gap-4 items-center">
            <select className="border px-2 py-1 rounded">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <button className="bg-green-600 text-white px-3 py-1 rounded flex items-center gap-2">
              <FaListAlt /> Export Table Data
            </button>
            <button className="bg-green-600 text-white px-3 py-1 rounded flex items-center gap-2">
              <FaListAlt /> Import Table Data
            </button>
            <select className="border px-3 py-1 rounded">
              <option>Select a Name</option>
              <option>Alrazy</option>
            </select>
            <button className="bg-teal-600 text-white px-4 py-1 rounded">
              Search
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-t">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-2 border">Employee Code</th>
                  <th className="px-4 py-2 border">Employee Name</th>
                  <th className="px-4 py-2 border">Employee Phone No</th>
                  <th className="px-4 py-2 border">Login User Name</th>
                  <th className="px-4 py-2 border">Login Pass</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-2 border">{user.code}</td>
                    <td className="px-4 py-2 border">{user.name}</td>
                    <td className="px-4 py-2 border">{user.phone}</td>
                    <td className="px-4 py-2 border">{user.email}</td>
                    <td className="px-4 py-2 border">{user.pass}</td>
                    <td className="px-4 py-2 border">
                      <span
                        className={`px-3 py-1 text-white rounded text-sm ${
                          user.status === "Active"
                            ? "bg-teal-600"
                            : "bg-red-500"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 border space-x-2">
                      <button className="bg-teal-600 text-white p-2 rounded">
                        <FaEdit />
                      </button>
                      <button className="bg-red-600 text-white p-2 rounded">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col min-h-screen">
  <main className="flex-grow">
    {/* Your main content */}
  </main>

  <footer className="text-center text-sm text-gray-500 py-4 bg-white shadow-inner">
    Copyright © 2016-2017{" "}
    <span className="text-teal-600 font-semibold">Webideainfotech</span>.
    All rights reserved.
  </footer>
</div>

      </div>
    </div>









 </div>
</div>

   </>
  )
}
