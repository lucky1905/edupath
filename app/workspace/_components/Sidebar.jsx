"use client"

import Link from "next/link"
import { useState } from "react"
import {
  LayoutDashboard,
  BookOpen,
  User,
  Compass,
  Sparkles,
  CreditCard,
} from "lucide-react"

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
        <SidebarItem open={open} href="/workspace" icon={LayoutDashboard} label="Dashboard" />
        <SidebarItem open={open} href="/workspace/learning" icon={BookOpen} label="My Learning" />
        <SidebarItem open={open} href="/workspace/courses" icon={Compass} label="Explore Courses" />
        <SidebarItem open={open} href="/workspace/tools" icon={Sparkles} label="AI Tools" />
        <SidebarItem open={open} href="/workspace/billing" icon={CreditCard} label="Billing" />
        <SidebarItem open={open} href="/workspace/profile" icon={User} label="Profile" />
      </nav>
    </aside>
  )
}

/* Reusable Sidebar Item */
function SidebarItem({ href, icon: Icon, label, open }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded px-3 py-2 hover:bg-slate-700"
    >
      <Icon size={20} />
      {open && <span>{label}</span>}
    </Link>
  )
}
