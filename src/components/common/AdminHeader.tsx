/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  GlobeIcon,
  HamburgerMenuIcon,
  TextAlignJustifyIcon,
} from '@radix-ui/react-icons'

import { motion } from 'framer-motion'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'
import images from '../../assets/images/images'
import { AdminMenu } from '../admin/AdminMenu'
import ProfileDropdown from '../admin/ProfileDropdown'
import { useSelector } from 'react-redux'

interface AdminHeaderProps {
  handleToggle: () => void
  isMobileMenuOpen: boolean
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  handleToggle,
  isMobileMenuOpen,
}) => {
  const admin = useSelector((state: any) => state?.auth?.user)
  console.log(admin)

  const { name, email } = admin

  return (
    <header className=" sticky top-0 z-50 shadow-sm py-3 bg-white text-lightText dark:bg-darkBg dark:text-darkText">
      <div className="flex items-center justify-between px-10">
        <div className=" flex items-center gap-5">
          <button onClick={handleToggle} className="lg:block hidden">
            <span className="dark:bg-uxSecoundryBg2 w-10 h-10 rounded-full flex items-center justify-center dark:gradient-border transition-all duration-300 ease-in-out hover:bg-uxGradientGraytoPurpoleCircle text-white bg-primary">
              <TextAlignJustifyIcon />
            </span>
          </button>
          <div className="hidden lg:block">
            <span className=" dark:bg-primary w-10 h-10 rounded-full flex items-center justify-center  text-white bg-primary ">
              <Link to={'/'}>
                <GlobeIcon />
              </Link>
            </span>
          </div>
          <button onClick={handleToggle} className="lg:hidden block">
            <span className=" dark:bg-uxSecoundryBg2 bg-uxLightBgIcon dark:text-white text-uxLightTextIcon w-10 h-10 rounded-full flex items-center justify-center dark:gradient-border">
              <HamburgerMenuIcon />
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            {/* <NotificationDropdown /> */}
          </div>

          <div className="hidden sm:block">
            {/* <button
              onClick={toggleDarkMode}
              className=" dark:bg-uxSecoundryBg2 bg-uxLightBgIcon dark:text-white text-uxLightTextIcon w-10 h-10 rounded-full flex items-center justify-center dark:gradient-border"
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button> */}
          </div>

          <ProfileDropdown
            username={name || 'Adnan Hassan'}
            email={email || 'Not Available'}
            profileImage={
              admin?.profileImage ||
              'https://ecme-react.themenate.net/img/avatars/thumb-1.jpg'
            }
          />
        </div>

        {/* Conditionally render mobile menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-slate-800 bg-opacity-50 z-50 lg:hidden transition-opacity duration-500 ease-in-out">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="bg-uxBgMain text-lightText dark:bg-darkBg dark:text-darkText w-[56%] sm:w-[40$] h-full shadow-lg flex flex-col"
            >
              {/* Close Button */}

              <div className="flex items-center justify-center gap-4 pt-3">
                <Link to={'/admin'}>
                  <img
                    src={images.headerlogo}
                    alt=" Logo"
                    className=" "
                    width={110}
                    height={50}
                  />
                </Link>

                <button onClick={handleToggle} className="p-4 self-end">
                  <Cross2Icon className="w-6 h-6 text-darkText" />
                </button>
              </div>

              <AdminMenu />
            </motion.div>
          </div>
        )}
      </div>
    </header>
  )
}

export default AdminHeader
