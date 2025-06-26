import React from 'react'
import Sidebar from "../../Components/Sidebar/Sidebar"

import Navbar from "../../Components/Navbar/Navbar"
import { FaTachometerAlt } from "react-icons/fa";
import { FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";
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
      <div className="bg-white rounded shadow-md p-4 max-w-7xl mx-auto space-y-4">
        {/* Set Reminder Button */}
        <button className="bg-teal-600 text-white px-4 py-2 rounded flex items-center gap-2">
          <FaPlus /> Set A Reminder
        </button>

        {/* Filter Box */}
        <div className="bg-blue-100 border px-4 py-3 rounded shadow-sm">
          <h2 className="font-semibold text-lg mb-3">Filter By</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="font-semibold text-sm mb-1">Created By</label>
              <select className="border px-3 py-1 rounded">
                <option>Created</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm mb-1">From Date</label>
              <input
                type="text"
                className="border px-3 py-1 rounded"
                placeholder="From Date"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm mb-1">To Date</label>
              <input
                type="text"
                className="border px-3 py-1 rounded"
                placeholder="To Date"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border rounded">
          <div className="bg-blue-100 px-4 py-2 font-semibold">
            All Reminders
          </div>
          <table className="w-full text-sm text-left">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Related</th>
                <th className="px-4 py-2 border">Created By</th>
                <th className="px-4 py-2 border">Remark</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2 border">01-March-2023</td>
                <td className="px-4 py-2 border">Leads</td>
                <td className="px-4 py-2 border">User 1</td>
                <td className="px-4 py-2 border">Callback On 1st March</td>
                <td className="px-4 py-2 border flex gap-2">
                  <button className="bg-teal-600 text-white p-2 rounded">
                    <FaEdit />
                  </button>
                  <button className="bg-red-600 text-white p-2 rounded">
                    <FaTrash />
                  </button>
                  <button className="bg-blue-600 text-white p-2 rounded">
                    <FaEye />
                  </button>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border">01-March-2023</td>
                <td className="px-4 py-2 border">Leads</td>
                <td className="px-4 py-2 border">User 1</td>
                <td className="px-4 py-2 border">Callback On 1st March</td>
                <td className="px-4 py-2 border flex gap-2">
                  <button className="bg-teal-600 text-white p-2 rounded">
                    <FaEdit />
                  </button>
                  <button className="bg-red-600 text-white p-2 rounded">
                    <FaTrash />
                  </button>
                  <button className="bg-blue-600 text-white p-2 rounded">
                    <FaEye />
                  </button>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border">01-March-2023</td>
                <td className="px-4 py-2 border">Leads</td>
                <td className="px-4 py-2 border">User 1</td>
                <td className="px-4 py-2 border">Callback On 1st March</td>
                <td className="px-4 py-2 border flex gap-2">
                  <button className="bg-teal-600 text-white p-2 rounded">
                    <FaEdit />
                  </button>
                  <button className="bg-red-600 text-white p-2 rounded">
                    <FaTrash />
                  </button>
                  <button className="bg-blue-600 text-white p-2 rounded">
                    <FaEye />
                  </button>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border">01-March-2023</td>
                <td className="px-4 py-2 border">Leads</td>
                <td className="px-4 py-2 border">User 1</td>
                <td className="px-4 py-2 border">Callback On 1st March</td>
                <td className="px-4 py-2 border flex gap-2">
                  <button className="bg-teal-600 text-white p-2 rounded">
                    <FaEdit />
                  </button>
                  <button className="bg-red-600 text-white p-2 rounded">
                    <FaTrash />
                  </button>
                  <button className="bg-blue-600 text-white p-2 rounded">
                    <FaEye />
                  </button>
                </td>
              </tr>

                <tr className="bg-white">
                <td className="px-4 py-2 border">01-March-2023</td>
                <td className="px-4 py-2 border">Leads</td>
                <td className="px-4 py-2 border">User 1</td>
                <td className="px-4 py-2 border">Callback On 1st March</td>
                <td className="px-4 py-2 border flex gap-2">
                  <button className="bg-teal-600 text-white p-2 rounded">
                    <FaEdit />
                  </button>
                  <button className="bg-red-600 text-white p-2 rounded">
                    <FaTrash />
                  </button>
                  <button className="bg-blue-600 text-white p-2 rounded">
                    <FaEye />
                  </button>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border">01-March-2023</td>
                <td className="px-4 py-2 border">Leads</td>
                <td className="px-4 py-2 border">User 1</td>
                <td className="px-4 py-2 border">Callback On 1st March</td>
                <td className="px-4 py-2 border flex gap-2">
                  <button className="bg-teal-600 text-white p-2 rounded">
                    <FaEdit />
                  </button>
                  <button className="bg-red-600 text-white p-2 rounded">
                    <FaTrash />
                  </button>
                  <button className="bg-blue-600 text-white p-2 rounded">
                    <FaEye />
                  </button>
                </td>
              </tr>
              {/* Add more rows similarly */}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center gap-2 p-4">
            <button className="bg-teal-600 text-white px-3 py-1 rounded">
              Preview
            </button>
            <button className="border px-3 py-1 rounded">1</button>
            <button className="border px-3 py-1 rounded">2</button>
            <button className="border px-3 py-1 rounded">3</button>
            <button className="border px-3 py-1 rounded">4</button>
            <button className="bg-teal-600 text-white px-3 py-1 rounded">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>













 </div>
</div>

   </>
  )
}
