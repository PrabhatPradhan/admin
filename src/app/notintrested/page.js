"use client";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaTachometerAlt, FaEdit, FaTrash, FaEye } from "react-icons/fa";

const leadsData = [
  { name: 'Ford', email: 'ford@info.net', mobile: '9170425365', source: 'Phone', assigned: 'User 1', status: 'Follow up' },
  { name: 'LG', email: 'lg@info.net', mobile: '9170425365', source: 'Marketing', assigned: 'User 2', status: 'DND' },
  { name: 'Toyota', email: 'totyota@info.net', mobile: '9170425365', source: 'google', assigned: 'User 3', status: 'Intrested' },
  { name: 'Mukesh Group', email: 'mukesh@info.net', mobile: '9170425365', source: 'Phone', assigned: 'User 1', status: 'Switch Off' },
  { name: 'Nicrosoft', email: 'ms@info.net', mobile: '9170425365', source: 'Facebook', assigned: 'User 1', status: 'Not Important' },
];

export default function Page() {
  const [leads, setLeads] = useState(leadsData);

  const handleEdit = (index) => {
    alert(`Edit clicked for: ${leads[index].name}`);
  };

  const handleDelete = (index) => {
    if (window.confirm(`Are you sure you want to delete ${leads[index].name}?`)) {
      setLeads((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full md:w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Navbar />

        {/* Header */}
        <div className="bg-white px-6 py-4 shadow-sm border-b flex flex-col md:flex-row items-start md:items-center gap-4">
          <FaTachometerAlt className="text-teal-600 text-4xl" />
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Leads</h1>
            <p className="text-sm text-gray-600">Very detailed &amp; featured admin.</p>
          </div>
        </div>

        {/* Table Card */}
        <div className="p-4">
          <div className="bg-white rounded shadow-md p-4 overflow-x-auto">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4">Today Enquiry</h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4">
              <select className="p-2 border rounded w-full sm:w-auto">
                <option>10</option>
              </select>
              <button className="bg-teal-600 text-white px-4 py-2 rounded w-full sm:w-auto">
                Export Table Data
              </button>
            </div>

            <h2 className="text-lg font-semibold mb-2">Lead Details</h2>

            <table className="min-w-[600px] w-full border border-gray-300 text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border p-2"></th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Mobile</th>
                  <th className="border p-2">Source</th>
                  <th className="border p-2">Assigned</th>
                  <th className="border p-2">Status</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, index) => (
                  <tr key={index} className="text-center">
                    <td className="border p-2"><input type="checkbox" /></td>
                    <td className="border p-2">{lead.name}</td>
                    <td className="border p-2">{lead.email}</td>
                    <td className="border p-2">{lead.mobile}</td>
                    <td className="border p-2">{lead.source}</td>
                    <td className="border p-2">{lead.assigned}</td>
                    <td className="border p-2">{lead.status}</td>
                    <td className="border p-2 space-x-2">
                      <button onClick={() => handleEdit(index)} className="text-green-600"><FaEdit /></button>
                      <button onClick={() => handleDelete(index)} className="text-red-600"><FaTrash /></button>
                      <button className="text-blue-600"><FaEye /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex flex-wrap gap-2 mt-4">
              <button className="bg-green-600 text-white px-3 py-1 rounded">Preview</button>
              {[1, 2, 3, 4].map((num) => (
                <button key={num} className="border px-3 py-1">{num}</button>
              ))}
              <button className="bg-teal-600 text-white px-3 py-1 rounded">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
