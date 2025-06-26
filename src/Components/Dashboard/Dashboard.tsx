import React from "react";
import {
  FaUserPlus,
  FaPowerOff,
  FaUser,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

export default function Dashboard() {
  return (
    <div>
      <div className="flex h-screen">
        <main className="flex-1 bg-gray-100 ">
          {/* Header */}

          {/* Dashboard Cards */}
          <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Total Enquiry */}
            <div className="bg-teal-600 text-white p-6 rounded-md shadow-md flex items-center justify-between hover:bg-black transition">
              <div className="flex flex-col gap-4">
                <FaUser className="text-4xl" />
                <div className="text-lg font-medium">Total Enquiry</div>
              </div>
              <div className="text-right text-xl font-bold">11▲</div>
            </div>

            {/* Today Enquiry */}
            <div className="bg-teal-600 text-white p-6 rounded-md shadow-md flex items-center justify-between hover:bg-black transition">
              <div className="flex flex-col gap-4">
                <FaUser className="text-4xl" />
                <div className="text-lg font-medium">Today Enquiry</div>
              </div>
              <div className="text-right text-xl font-bold">4▲</div>
            </div>

            {/* Follow up */}
            <div className="bg-teal-600 text-white p-6 rounded-md shadow-md flex items-center justify-between hover:bg-black transition">
              <div className="flex flex-col gap-4">
                <FaUserPlus className="text-4xl" />
                <div className="text-lg font-medium">Follow up</div>
              </div>
              <div className="text-right text-xl font-bold">965▲</div>
            </div>

            {/* Confirmed */}
            <div className="bg-teal-600 text-white p-6 rounded-md shadow-md flex items-center justify-between hover:bg-black transition">
              <div className="flex flex-col gap-4">
                <FaCheckCircle className="text-4xl" />
                <div className="text-lg font-medium">Confirmed</div>
              </div>
              <div className="text-right text-xl font-bold">11▲</div>
            </div>

            {/* Not Installed */}
            <div className="bg-teal-600 text-white p-6 rounded-md shadow-md flex items-center justify-between hover:bg-black transition">
              <div className="flex flex-col gap-4">
                <FaTimesCircle className="text-4xl" />
                <div className="text-lg font-medium">Not Installed</div>
              </div>
              <div className="text-right text-xl font-bold">11▲</div>
            </div>

            {/* Switch off */}
            <div className="bg-teal-600 text-white p-6 rounded-md shadow-md flex items-center justify-between hover:bg-black transition">
              <div className="flex flex-col gap-4">
                <FaPowerOff className="text-4xl" />
                <div className="text-lg font-medium">Switch off</div>
              </div>
              <div className="text-right text-xl font-bold">11▲</div>
            </div>
          </section>
          <div className="min-h-screen bg-gray-100 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Works Announcements */}
              <div className="bg-white rounded shadow overflow-hidden">
                <div className="bg-blue-100 px-4 py-3 font-semibold flex justify-between items-center">
                  <span>Works Announcements</span>
                   
                </div>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2">Works Type</th>
                      <th className="px-4 py-2">Name Of Worker</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-blue-50">
                      <td className="px-4 py-2">Web Design</td>
                      <td className="px-4 py-2">Jr. Developer Alrazy</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-2">Networking</td>
                      <td className="px-4 py-2">Jr. Developer Jahir</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Megento</td>
                      <td className="px-4 py-2">Jr. Developer Sayeed</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Php,Laravel</td>
                      <td className="px-4 py-2">Jr. Developer Muhim</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Html,css</td>
                      <td className="px-4 py-2">Frontend Developer Rafi</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Notice Board */}
              <div className="bg-white rounded shadow overflow-hidden">
                <div className="bg-blue-100 px-4 py-3 font-semibold flex justify-between items-center">
                  <span>Notice Board</span>
                  
                </div>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2">Notice</th>
                      <th className="px-4 py-2">Published By</th>
                      <th className="px-4 py-2">Date Added</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-blue-50">
                      <td className="px-4 py-2">new notice</td>
                      <td className="px-4 py-2">Mr. Alrazy</td>
                      <td className="px-4 py-2">20th April 2017</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Urgent notice</td>
                      <td className="px-4 py-2">Mr. Alrazy</td>
                      <td className="px-4 py-2">20th june 2017</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Urgent notice</td>
                      <td className="px-4 py-2">Mr. Jahir</td>
                      <td className="px-4 py-2">26th june 2017</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Urgent notice</td>
                      <td className="px-4 py-2">Mr. leo</td>
                      <td className="px-4 py-2">3rd june 2017</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Notice</td>
                      <td className="px-4 py-2">Mr. Karim</td>
                      <td className="px-4 py-2">3rd July 2017</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer */}
            <footer className="text-center mt-10 text-gray-600">
              <p className="text-sm">
                <strong>
                  Copyright © 2016-2017{" "}
                  <span className="text-teal-600">Webideainfotech</span>
                </strong>
                . All rights reserved.
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
