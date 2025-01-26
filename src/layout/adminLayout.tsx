import AdminHeader from "@/components/common/AdminHeader"
import AdminSideBar from "@/components/common/AdminSideBar"
import { useState } from "react"
import { Outlet } from "react-router-dom"

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      setIsSidebarOpen(!isSidebarOpen)
    } else {
      setIsMobileMenuOpen(!isMobileMenuOpen)
    }
  }

  return (
    <div className="flex max-h-screen overflow-hidden bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <AdminSideBar isSidebarOpen={isSidebarOpen} />

      <main className="min-h-[calc(100vh-140px)] w-full overflow-y-auto bg-lightBg text-lightText dark:bg-[#000] dark:text-darkText">
        {/* Header component */}
        <AdminHeader
          handleToggle={handleToggle}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <Outlet />
        {/* Footer */}
        {/* <AdminFooter /> */}
      </main>
    </div>
  )
}

export default AdminLayout
