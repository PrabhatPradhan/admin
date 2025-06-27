"use client";

import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import {
  FaTachometerAlt,
  FaPlus,
  FaUserPlus,
  FaListAlt,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

const leadsData = [
  { name: "Ford", email: "ford@info.net", mobile: "9170425365", source: "Phone", assigned: "User 1", status: "Follow up" },
  { name: "LG", email: "lg@info.net", mobile: "9170425365", source: "Marketing", assigned: "User 2", status: "DND" },
  { name: "Toyota", email: "totyota@info.net", mobile: "9170425365", source: "google", assigned: "User 3", status: "Intrested" },
  { name: "Mukesh Group", email: "mukesh@info.net", mobile: "9170425365", source: "Phone", assigned: "User 1", status: "Switch Off" },
  { name: "Nicrosoft", email: "ms@info.net", mobile: "9170425365", source: "Facebook", assigned: "User 1", status: "Not Important" },
];

export default function Page() {
  const [leads, setLeads] = useState(leadsData);
  const [showModal, setShowModal] = useState(false);
  const [newLead, setNewLead] = useState({
    name: "",
    email: "",
    mobile: "",
    source: "",
    assigned: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLead({ ...newLead, [name]: value });
  };

  const handleAddLead = () => {
    setLeads([...leads, newLead]);
    setNewLead({ name: "", email: "", mobile: "", source: "", assigned: "", status: "" });
    setShowModal(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Navbar />
        <div className="bg-white px-4 sm:px-6 py-4 shadow-sm border-b flex items-center gap-4 flex-wrap">
          <div className="text-teal-600 text-3xl sm:text-4xl">
            <FaTachometerAlt />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Leads</h1>
            <p className="text-sm text-gray-600">Very detailed & featured admin.</p>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
          <div className="bg-white rounded shadow-md p-4 max-w-7xl mx-auto space-y-4">
            <div className="flex flex-wrap gap-3">
              <button
                className="bg-teal-600 text-white px-4 py-2 rounded flex items-center gap-2"
                onClick={() => setShowModal(true)}
              >
                <FaPlus /> Add new Lead
              </button>
              <button className="bg-teal-600 text-white px-4 py-2 rounded flex items-center gap-2">
                <FaUserPlus /> Assign Lead
              </button>
            </div>

            <div className="bg-blue-100 border px-4 py-3 rounded shadow-sm">
              <h2 className="font-semibold text-lg mb-3">Filter By</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Assigned Lead</label>
                  <select className="w-full border rounded px-3 py-1">
                    <option>Assigned</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Lead Source</label>
                  <select className="w-full border rounded px-3 py-1">
                    <option>Facebook</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Start Date</label>
                  <input type="text" className="w-full border rounded px-3 py-1" placeholder="Enter date" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">End Date</label>
                  <input type="text" className="w-full border rounded px-3 py-1" placeholder="Enter date" />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4 items-center">
                <select className="border px-2 py-1 rounded">
                  <option>10</option>
                  <option>25</option>
                </select>
                <button className="bg-teal-600 text-white px-3 py-1 rounded flex items-center gap-2">
                  <FaListAlt /> Export
                </button>
                <button className="bg-teal-600 text-white px-3 py-1 rounded flex items-center gap-2">
                  <FaListAlt /> Import
                </button>
              </div>
            </div>

            <div className="overflow-x-auto border rounded">
              <div className="bg-blue-100 px-4 py-2 font-semibold">Lead Details</div>
              <table className="w-full text-sm text-left min-w-[640px]">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-2 border">
                      <input type="checkbox" />
                    </th>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Mobile</th>
                    <th className="px-4 py-2 border">Source</th>
                    <th className="px-4 py-2 border">Assigned</th>
                    <th className="px-4 py-2 border">Status</th>
                    <th className="px-4 py-2 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2 border">
                        <input type="checkbox" />
                      </td>
                      <td className="px-4 py-2 border">{lead.name}</td>
                      <td className="px-4 py-2 border">{lead.email}</td>
                      <td className="px-4 py-2 border">{lead.mobile}</td>
                      <td className="px-4 py-2 border">{lead.source}</td>
                      <td className="px-4 py-2 border">{lead.assigned}</td>
                      <td className="px-4 py-2 border">{lead.status}</td>
                      <td className="px-4 py-2 border flex gap-2 flex-wrap">
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
              <div className="flex flex-wrap justify-center gap-2 p-4">
                <button className="bg-teal-600 text-white px-3 py-1 rounded">Prev</button>
                <button className="border px-3 py-1 rounded">1</button>
                <button className="border px-3 py-1 rounded">2</button>
                <button className="border px-3 py-1 rounded">3</button>
                <button className="bg-teal-600 text-white px-3 py-1 rounded">Next</button>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
            <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg space-y-4">
              <h2 className="text-xl font-bold mb-4">Add New Lead</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["name", "email", "mobile", "source", "assigned", "status"].map((field) => (
                  <input
                    key={field}
                    type="text"
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="border p-2 rounded"
                    value={newLead[field]}
                    onChange={handleChange}
                  />
                ))}
              </div>
              <div className="flex justify-end gap-2">
                <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="bg-teal-600 text-white px-4 py-2 rounded" onClick={handleAddLead}>Add Lead</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
