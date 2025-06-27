"use client";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaTachometerAlt, FaPlus, FaEdit, FaTrash } from "react-icons/fa";

export default function Page() {
  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    row1: false,
    row2: false,
    row3: false,
    row4: true,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLeadSource, setNewLeadSource] = useState("");

  const handleCheckboxChange = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSelectAll = () => {
    const newValue = !selectAll;
    setSelectAll(newValue);
    setCheckedItems({
      row1: newValue,
      row2: newValue,
      row3: newValue,
      row4: newValue,
    });
  };

  const handleAddLead = () => {
    console.log("New Lead Source:", newLeadSource);
    setIsModalOpen(false);
    setNewLeadSource("");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Navbar />

        <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 shadow-sm border-b flex items-center gap-4">
          <div className="text-teal-600 text-2xl sm:text-4xl">
            <FaTachometerAlt />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              CRM Admin Dashboard
            </h1>
            <p className="text-sm text-gray-600">
              Very detailed &amp; featured admin.
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
          <div className="max-w-7xl mx-auto space-y-4">
            {/* Add Button */}
            <button
              className="bg-teal-600 text-white px-4 py-2 rounded flex items-center gap-2"
              onClick={() => setIsModalOpen(true)}
            >
              <FaPlus /> Add Lead Status
            </button>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0   bg-opacity-40 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4">Add Lead Source</h2>
                  <input
                    type="text"
                    placeholder="Enter Lead Source"
                    value={newLeadSource}
                    onChange={(e) => setNewLeadSource(e.target.value)}
                    className="w-full px-4 py-2 border rounded mb-4"
                  />
                  <div className="flex justify-end gap-2 sm:gap-4">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-gray-400 text-white px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddLead}
                      className="bg-teal-600 text-white px-4 py-2 rounded"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Table */}
            <div className="bg-white rounded shadow-md overflow-x-auto">
              <div className="bg-blue-100 px-4 py-2 font-semibold border-b text-sm sm:text-base">
                Lead Source
              </div>
              <table className="w-full text-sm text-left">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-2 border">
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th className="px-4 py-2 border">Code</th>
                    <th className="px-4 py-2 border">Lead Source</th>
                    <th className="px-4 py-2 border">Status</th>
                    <th className="px-4 py-2 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { key: "row1", code: "0001", source: "Phone Call" },
                    { key: "row2", code: "0002", source: "Facebook" },
                    { key: "row3", code: "0003", source: "Google Ads" },
                    { key: "row4", code: "0005", source: "Whatsapp" },
                  ].map((row, index) => (
                    <tr
                      key={row.key}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-2 border">
                        <input
                          type="checkbox"
                          className="w-4 h-4"
                          checked={checkedItems[row.key]}
                          onChange={() => handleCheckboxChange(row.key)}
                        />
                      </td>
                      <td className="px-4 py-2 border">{row.code}</td>
                      <td className="px-4 py-2 border">{row.source}</td>
                      <td className="px-4 py-2 border">
                        <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded">
                          Active
                        </span>
                      </td>
                      <td className="px-4 py-2 border flex flex-wrap gap-2">
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
        </div>
      </div>
    </div>
  );
}
