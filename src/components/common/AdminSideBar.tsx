import images from '@/assets/images/images'
import { Link } from 'react-router-dom'
import { AdminMenu } from '../admin/AdminMenu'

interface AdminSideBarProps {
  isSidebarOpen: boolean;
}

const AdminSideBar = ({ isSidebarOpen }: AdminSideBarProps) => {
  return (
    <aside>
      <div
        className={`bg-sideBarColor h-screen lg:block hidden bg-uxBgMain text-lightText shadow  ${
          isSidebarOpen
            ? 'w-0 transition-width duration-500 ease-in-out sm:block'
            : 'w-60 transition-width duration-500 ease-in-out sm:block '
        }`}
      >
        {isSidebarOpen ? (
          <></>
        ) : (
          <>
            <div className=" pt-5 flex items-center justify-center ">
              <Link to={'/admin'}>
                <img
                  src={images.headerlogo}
                  alt="ProBicker Store"
                  width={120}
                  height={50}
                />
              </Link>
            </div>
            <div>
              <AdminMenu />
            </div>
          </>
        )}
      </div>
    </aside>
  )
}
export default AdminSideBar
