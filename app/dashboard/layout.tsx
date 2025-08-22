"use client";

import { ReactNode } from "react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-3">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/dashboard/add-items" className="hover:text-gray-300">
            Add Items
          </Link>
          
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8">
        <header className="border-b pb-4 mb-6">
          <h1 className="text-2xl font-semibold">Dashboard Area</h1>
        </header>

        {/* Page Content */}
        <div>{children}</div>
      </main>
    </div>
  );
}
