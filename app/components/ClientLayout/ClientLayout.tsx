"use client";

import { usePathname } from "next/navigation";
import NavBar from "../NavBar/NavBar";
import { div } from "framer-motion/client";


export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <NavBar />}
      <main className="flex-1">{children}</main>
    </div>
  );
}
