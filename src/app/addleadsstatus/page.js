"use client"
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

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Navbar />
        <div className="bg-white px-6 py-4 shadow-sm border-b flex items-center gap-4">
          <div className="text-teal-600 text-4xl">
            <FaTachometerAlt />
          </div>
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
          <div className="max-w-6xl mx-auto space-y-4">
            {/* Add Button */}
            <button className="bg-teal-600 text-white px-4 py-2 rounded flex items-center gap-2">
              <FaPlus /> Add Lead Status
            </button>

            {/* Table */}
            <div className="bg-white rounded shadow-md overflow-x-auto">
              <div className="bg-blue-100 px-4 py-2 font-semibold border-b">
                Lead Status
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
                    <th className="px-4 py-2 border">Lead Status</th>
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
                      <td className="px-4 py-2 border flex gap-2">
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
