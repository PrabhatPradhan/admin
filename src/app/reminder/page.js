"use client";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaTachometerAlt, FaPlus, FaEdit, FaTrash, FaEye, FaBars } from "react-icons/fa";

export default function page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reminder set!");
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className={`bg-gray-800 text-white ${showSidebar ? "w-64" : "w-0"} transition-all duration-300 hidden lg:block`}>
          <Sidebar />
        </div>

        {/* Main */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-gray-100">
          {/* Navbar with toggle */}
          <div className="flex items-center justify-between   bg-white shadow-md border-b">
            <div className="lg:hidden">
              <button onClick={() => setShowSidebar(!showSidebar)} className="text-2xl text-teal-600">
                <FaBars />
              </button>
            </div>
            
          </div>
          <Navbar />
          {/* Page Header */}
          <div className="bg-white px-6 py-4 shadow-sm border-b flex items-center gap-4">
            <div className="text-teal-600 text-3xl">
              <FaTachometerAlt />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">CRM Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Very detailed & featured admin.</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6 space-y-6">
            {/* Set Reminder Button */}
            <button
              onClick={handleOpenModal}
              className="bg-teal-600 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <FaPlus /> Set A Reminder
            </button>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-30 px-4">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Set a Reminder</h2>
                    <button onClick={handleCloseModal} className="text-gray-500 hover:text-red-500 text-xl">
                      &times;
                    </button>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Title</label>
                      <input
                        type="text"
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Enter title"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Date</label>
                      <input
                        type="date"
                        className="w-full border px-3 py-2 rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Notes</label>
                      <textarea
                        className="w-full border px-3 py-2 rounded"
                        rows="3"
                        placeholder="Enter notes"
                      ></textarea>
                    </div>
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="px-4 py-2 bg-gray-300 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-teal-600 text-white rounded"
                      >
                        Save Reminder
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Filters */}
            <div className="bg-blue-100 border px-4 py-3 rounded shadow-sm">
              <h2 className="font-semibold text-lg mb-3">Filter By</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <div className="bg-blue-100 px-4 py-2 font-semibold">All Reminders</div>
              <table className="min-w-full text-sm text-left">
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
                  {Array(6).fill(0).map((_, i) => (
                    <tr key={i} className="bg-white">
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
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex flex-wrap items-center gap-2 p-4">
                <button className="bg-teal-600 text-white px-3 py-1 rounded">Previous</button>
                {[1, 2, 3, 4].map((n) => (
                  <button key={n} className="border px-3 py-1 rounded">
                    {n}
                  </button>
                ))}
                <button className="bg-teal-600 text-white px-3 py-1 rounded">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
