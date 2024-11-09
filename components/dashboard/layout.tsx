"use client";

import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-64">
        <Sidebar />
      </div>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}