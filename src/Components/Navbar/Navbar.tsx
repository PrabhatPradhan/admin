"use client";

import React from "react";
import {
  FaBell,
  FaClipboardList, 
} from "react-icons/fa";
export default function Navbar() {
  return (
    <div>
           <header className="bg-[#2f3d56] text-white flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-semibold">CRM Admin Dashboard</h1>
          <div className="flex items-center gap-6">
            <FaClipboardList className="w-5 h-5" />
            <div className="relative">
              <FaBell className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-black rounded-full w-5 h-5 flex items-center justify-center">
                5
              </span>
            </div>
            <img
              src="http://127.0.0.1:5500/CRM%20ADMIN/assets/dist/img/avatar5.png"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
        </header>

    </div>
  )
}
