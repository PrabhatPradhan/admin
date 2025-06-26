"use client";

import Link from "next/link";
import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaClipboardList, FaSignOutAlt, FaChevronDown } from "react-icons/fa";
 
export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0a0f1c] text-white p-4 space-y-6 h-screen">
      <div className="flex items-center gap-2">
        <img
          src="http://127.0.0.1:5500/CRM%20ADMIN/assets/dist/img/logo.png"
          alt="Logo"
          className="h-10"
        />
      </div>

      <nav className="space-y-3 text-base">
        <Link href="/" className="flex items-center gap-2 text-teal-400">
          <BiSolidDashboard /> Dashboard
        </Link>

        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer list-none py-2 text-gray-300 hover:text-white">
            <span className="flex items-center gap-2">
              <HiOutlineUserGroup /> Manage Sub Users
            </span>
            <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div className="ml-6 overflow-hidden max-h-0 group-open:max-h-96 transition-[max-height] duration-500 ease-in-out">
            <div className="mt-2 flex flex-col gap-2 text-sm text-gray-300">
              <Link href="/adduser" className="hover:text-white">
                Add User
              </Link>
              <Link href="viewalluser" className="hover:text-white">
                View All Users
              </Link>
            </div>
          </div>
        </details>

        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer list-none py-2 text-gray-300 hover:text-white">
            <span className="flex items-center gap-2">
              <AiOutlineLineChart /> Manage Leads
            </span>
            <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div className="ml-6 overflow-hidden max-h-0 group-open:max-h-96 transition-[max-height] duration-500 ease-in-out">
            <div className="mt-2 flex flex-col gap-2 text-sm text-gray-300">
              <Link href="/addleads" className="hover:text-white">
                Add Leads
              </Link>
              <Link href="/addleadssource" className="hover:text-white">
              Add Leads Source
              </Link>
              <Link href="/addleadsstatus" className="hover:text-white">
              Add Leads Status
              </Link>
            </div>
          </div>
        </details>

        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer list-none py-2 text-gray-300 hover:text-white">
            <span className="flex items-center gap-2">
              <AiOutlineLineChart /> Leads Report
            </span>
            <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div className="ml-6 overflow-hidden max-h-0 group-open:max-h-96 transition-[max-height] duration-500 ease-in-out">
            <div className="mt-2 flex flex-col gap-2 text-sm text-gray-300">
              <Link href="#" className="hover:text-white">
                Total Enquiry
              </Link>
              <Link href="#" className="hover:text-white">
                Today Enquiry
              </Link>
              <Link href="#" className="hover:text-white">
               Follow Up
              </Link>
              <Link href="#" className="hover:text-white">
               Confirm
              </Link>
              <Link href="#" className="hover:text-white">
                Not Intrested
              </Link>
             
             
            </div>
          </div>
        </details>

        <Link href="/reminder" className="flex items-center gap-2">
          <FaClipboardList /> Reminder
        </Link>

        <Link href="#" className="flex items-center gap-2 text-red-500">
          <FaSignOutAlt /> Logout
        </Link>
      </nav>
    </aside>
  );
}
