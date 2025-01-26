import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  ArrowRightIcon,
  AvatarIcon,
  BackpackIcon,
  DashboardIcon,
  ExitIcon,
  GearIcon,
  ReaderIcon,
} from '@radix-ui/react-icons'
import { useAppDispatch } from '@/redux/hooks'
import { logout } from '@/redux/features/auth/authSlice'

export const AdminMenu = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const [isOrdersDropdownOpen, setIsOrdersDropdownOpen] = useState(false)
  const [isUiPageDropdownOpen, setIsUiPageDropdownOpen] = useState(false)
  const [isPostDropdownOpen, setIsPostDropdownOpen] = useState(false)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)


  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <ul className="flex flex-col gap-2 ">
      {/* Overview */}
      <li id="sidebar">
        <Link
          to="/admin"
          className="flex items-center gap-3 mt-8 px-4 py-2 group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg"
        >
          <DashboardIcon className="transition-colors duration-300 group-hover:text-[#0bba48]" />
          <span className="text-sm font-medium text-uxSecoundryBg2 dark:text-white transition-colors duration-300 group-hover:text-uxBgPurpole">
            Overview
          </span>
        </Link>
      </li>

      {/* Products Dropdown */}
      <li>
        <div
          onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
          className="flex items-center gap-3 px-4 py-2 text-uxSecoundryBg2 dark:text-white group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg cursor-pointer"
        >
          <BackpackIcon className="transition-colors duration-300 group-hover:text-[#0bba48] text-lg" />
          <span className="flex w-full gap-[80px]">
            <span className="text-sm font-medium text-uxSecoundryBg2 dark:text-white transition-colors duration-300 group-hover:text-uxBgPurpole">
              Products
            </span>
            <span
              className={`shrink-0 transition-transform duration-300 ${
                isProductsDropdownOpen ? '-rotate-180' : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </span>
        </div>
        {isProductsDropdownOpen && (
          <ul className="space-y-1 list-none ">
            <AdminMenuLink
              to="/admin/product-list"
              label="Prodcut List"
            />
            <AdminMenuLink to="/admin/product/create" label="Prodcut Create" />
            <AdminMenuLink
              to="/admin/product/categorys"
              label="Product Category"
            />
            <AdminMenuLink
              to="/admin/product/brand-list"
              label="Product Brand"
            />
            <AdminMenuLink to="/admin/brand" label="Product Attribute" />
          </ul>
        )}
      </li>

      {/* Orders Dropdown */}
      <li>
        <div
          onClick={() => setIsOrdersDropdownOpen(!isOrdersDropdownOpen)}
          className="flex items-center gap-3 px-4 py-2 text-uxSecoundryBg2 dark:text-white group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg cursor-pointer"
        >
          <ReaderIcon className="transition-colors duration-300 group-hover:text-[#0bba48] text-lg" />
          <span className="flex w-full gap-[94px]">
            <span className="text-sm font-medium text-uxSecoundryBg2 dark:text-white transition-colors duration-300 group-hover:text-uxBgPurpole">
              Orders
            </span>
            <span
              className={`shrink-0 transition-transform duration-300 ${
                isOrdersDropdownOpen ? '-rotate-180' : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </span>
        </div>
        {isOrdersDropdownOpen && (
          <ul className="space-y-1 list-none ">
            <AdminMenuLink to="/admin/order-list" label="Orders List" />
            <AdminMenuLink to="/admin/order-edit/1" label="Orders Edit" />
            <AdminMenuLink to="/admin/order-details" label="Orders Details" />
          </ul>
        )}
      </li>

      {/* UI Store Dropdown */}
      <li>
        <div
          onClick={() => setIsUiPageDropdownOpen(!isUiPageDropdownOpen)}
          className="flex items-center gap-3 px-4 py-2 text-uxSecoundryBg2 dark:text-white group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg cursor-pointer"
        >
          <ReaderIcon className="transition-colors duration-300 group-hover:text-[#0bba48] text-lg" />
          <span className="flex w-full gap-[88px]">
            <span className="text-sm font-medium text-uxSecoundryBg2 dark:text-white transition-colors duration-300 group-hover:text-uxBgPurpole">
              Ui Page
            </span>
            <span
              className={`shrink-0 transition-transform duration-300 ${
                isUiPageDropdownOpen ? '-rotate-180' : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </span>
        </div>
        {isUiPageDropdownOpen && (
          <ul className="space-y-1 list-none ">
            <AdminMenuLink to="/admin/category" label="Career" />
            <AdminMenuLink to="/admin/new-post" label="About Us" />
            <AdminMenuLink to="/admin/category" label="Contact Us" />
            <AdminMenuLink to="/admin/post-list" label="Ui Banner" />
            <AdminMenuLink to="/admin/category" label="Privacy Policy" />
            <AdminMenuLink to="/admin/category" label="Terms & Condition" />
            <AdminMenuLink
              to="/admin/category"
              label="Cancellation, Return & Refund"
            />
          </ul>
        )}
      </li>

      {/* Post Dropdown */}
      <li>
        <div
          onClick={() => setIsPostDropdownOpen(!isPostDropdownOpen)}
          className="flex items-center gap-3 px-4 py-2 text-uxSecoundryBg2 dark:text-white group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg cursor-pointer"
        >
          <ReaderIcon className="transition-colors duration-300 group-hover:text-[#0bba48] text-lg" />
          <span className="flex gap-[107px]">
            <span className="text-sm font-medium text-uxSecoundryBg2 dark:text-white transition-colors duration-300 group-hover:text-uxBgPurpole">
              Post
            </span>
            <span
              className={`shrink-0 transition-transform duration-300 ${
                isPostDropdownOpen ? '-rotate-180' : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </span>
        </div>
        {isPostDropdownOpen && (
          <ul className="space-y-1 list-none ">
            <AdminMenuLink to="/admin/post-list" label="Post List" />
            <AdminMenuLink to="/admin/new-post" label="Add Post" />
            <AdminMenuLink to="/admin/category" label="Category" />
            <AdminMenuLink to="/dashboard/brand" label="Tag" />
          </ul>
        )}
      </li>

      {/* User Dropdown */}
      <li>
        <div
          onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
          className="flex items-center gap-3 px-4 py-2 text-uxSecoundryBg2 dark:text-white group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg cursor-pointer"
        >
          <AvatarIcon className="transition-colors duration-300 group-hover:text-[#0bba48] text-lg" />
          <span className="flex gap-[85px]">
            <span className="text-sm font-medium text-uxSecoundryBg2 dark:text-white transition-colors duration-300 group-hover:text-uxBgPurpole">
              All User
            </span>
            <span
              className={`shrink-0 transition-transform duration-300 ${
                isUserDropdownOpen ? '-rotate-180' : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </span>
        </div>
        {isUserDropdownOpen && (
          <ul className="space-y-1 list-none">
            <AdminMenuLink to="/dashboard/user-list" label="User List" />
            <AdminMenuLink to="/dashboard/user-profile" label="User Profile" />
            <AdminMenuLink
              to="/dashboard/userprofile-settings"
              label="User Settings"
            />
          </ul>
        )}
      </li>

      {/* Settings */}
      <li id="sidebar">
        <Link
          to="/admin/signup"
          className="flex items-center gap-3 px-4 py-2 text-uxSecoundryBg2 dark:text-white group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg"
        >
          <GearIcon className="transition-colors duration-300 group-hover:text-[#0bba48]" />
          <span className="text-sm font-medium text-uxSecoundryBg2 dark:text-white transition-colors duration-300 group-hover:text-uxBgPurpole dark:group-hover:text-uxBgPurpole">
            Settings
          </span>
        </Link>
      </li>

      {/* Logout */}
      <li id="sidebar">
        <Link
          to="/sign-in"
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 text-uxSecoundryBg2 dark:text-white group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg"
        >
          <ExitIcon className="transition-colors duration-300 group-hover:text-[#0bba48]" />
          <span className="text-sm font-medium text-uxSecoundryBg2 dark:text-white transition-colors duration-300 group-hover:text-uxBgPurpole dark:group-hover:text-uxBgPurpole">
            Logout
          </span>
        </Link>
      </li>
    </ul>
  )
}

// Link Component for menu items
const AdminMenuLink: React.FC<{ to: string; label: string }> = ({
  to,
  label,
}) => (
  <li id="sidebar">
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'relative flex flex-row items-center h-9 focus:outline-none text-activeColor transition-all duration-300 pl-6 hover:pl-6'
          : 'relative flex flex-row items-center h-9 focus:outline-none text-uxSecoundryBg2 dark:text-uxSecoundryBg1 transition-all duration-300 pl-3 hover:pl-6'
      }
    >
      <span className="inline-flex justify-center items-center ml-6">
        <ArrowRightIcon className="text-[10px]" />
      </span>
      <span className="ml-2 text-sm tracking-wide truncate">{label}</span>
    </NavLink>
  </li>
)
