'use client'
import { usePathname } from "next/navigation";
import Sidebar from "./_components/sidebar";

export default function DashboardLayout({ children }) {
  const pathname  = usePathname()

  const disableFooter = pathname === '/dashboard/profile';
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen">
      <Sidebar/>

      <div className="col-span-2">{children}</div>
    </div>
    <footer className={disableFooter ? 'hidden' : 'flex'} >
      <div className="bg-primary w-full h-[45px] "></div>
    </footer>
    </>
  );
}
