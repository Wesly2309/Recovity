import Sidebar from "./_components/sidebar";

export default function DashboardLayout({children}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen">

        <Sidebar/>

      <div className="col-span-2">{children}</div>
    
    </div>
  )
}