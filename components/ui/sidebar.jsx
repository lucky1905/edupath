"use client"

import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
  const [open, setOpen] = useState(true)

  return (
    <aside
      className={`${
        open ? "w-64" : "w-16"
      } h-screen bg-slate-900 text-white transition-all duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4">
        <span className="font-bold">{open ? "EduPath" : "EP"}</span>
        <button
          onClick={() => setOpen(!open)}
          className="rounded bg-slate-700 px-2 py-1 text-sm"
        >
          {open ? "<" : ">"}
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-6 space-y-2 px-2">
        <Link
          href="/workspace"
          className="block rounded px-3 py-2 hover:bg-slate-700"
        >
          Dashboard
        </Link>

        <Link
          href="/workspace/courses"
          className="block rounded px-3 py-2 hover:bg-slate-700"
        >
          Courses
        </Link>

        <Link
          href="/workspace/profile"
          className="block rounded px-3 py-2 hover:bg-slate-700"
        >
          Profile
        </Link>
      </nav>
    </aside>
  )
}
