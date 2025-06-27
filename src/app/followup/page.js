'use client'
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaTachometerAlt, FaEdit, FaTrash, FaEye } from "react-icons/fa";

export default function page() {
  const [leads, setLeads] = useState([
    { name: 'Ford', email: 'ford@info.net', mobile: '9170425365', source: 'Phone', assigned: 'User 1', status: 'Follow up' },
    { name: 'LG', email: 'lg@info.net', mobile: '9170425365', source: 'Marketing', assigned: 'User 2', status: 'DND' },
    { name: 'Toyota', email: 'totyota@info.net', mobile: '9170425365', source: 'google', assigned: 'User 3', status: 'Intrested' },
    { name: 'Mukesh Group', email: 'mukesh@info.net', mobile: '9170425365', source: 'Phone', assigned: 'User 1', status: 'Switch Off' },
    { name: 'Nicrosoft', email: 'ms@info.net', mobile: '9170425365', source: 'Facebook', assigned: 'User 1', status: 'Not Important' },
  ]);

  const handleEdit = (index) => {
    alert(`Edit lead: ${leads[index].name}`);
  };

  const handleDelete = (index) => {
    if (window.confirm(`Are you sure you want to delete ${leads[index].name}?`)) {
      const updatedLeads = leads.filter((_, i) => i !== index);
      setLeads(updatedLeads);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-gray-800 text-white">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-gray-100">
          <Navbar />
          <div className="bg-white px-4 md:px-6 py-4 shadow-sm border-b flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="text-teal-600 text-3xl md:text-4xl"><FaTachometerAlt /></div>
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">Leads</h1>
              <p className="text-sm text-gray-600">Very detailed & featured admin.</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4">Filter By</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Assigned Lead</label>
                <select className="w-full p-2 border rounded"><option>Assigned</option></select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Lead Source</label>
                <select className="w-full p-2 border rounded"><option>Facebook</option></select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Start Date</label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">End Date</label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <select className="p-2 border rounded"><option>10</option></select>
              <button className="bg-teal-600 text-white px-4 py-2 rounded">Export Table Data</button>
            </div>

            <h2 className="text-lg font-semibold mt-4 mb-2">Lead Details</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-300">
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
                      <td className="border p-2 space-x-2 text-lg">
                        <button className="text-green-600" onClick={() => handleEdit(index)}><FaEdit /></button>
                        <button className="text-red-600" onClick={() => handleDelete(index)}><FaTrash /></button>
                        <button className="text-blue-600"><FaEye /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-4">
              <button className="bg-green-600 text-white px-3 py-1 rounded">Preview</button>
              {[1, 2, 3, 4].map(num => (
                <button key={num} className="border px-3 py-1">{num}</button>
              ))}
              <button className="bg-teal-600 text-white px-3 py-1 rounded">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
