import { Link, NavLink } from 'react-router-dom'
import { BackpackIcon, DashboardIcon, ExitIcon } from '@radix-ui/react-icons'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { logout, TUser, useCurrentToken } from '@/redux/features/auth/authSlice'
import { verifyToken } from '@/utils/verifyToken'
import { useState } from 'react'

export const AdminMenu = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const dispatch = useAppDispatch()
  const token = useAppSelector(useCurrentToken)
  let user: TUser | undefined

  if (token) {
    user = verifyToken(token) as unknown as TUser
  }

  const role: 'admin' | 'user' = user?.role === 'admin' ? 'admin' : 'user'

  // Logout handler
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <ul className="flex flex-col gap-2 mt-8">
      {role === 'admin' && (
        <li>
          {/* Overviews */}
          <Link
            to="/admin/dashboard"
            className="flex items-center mb-3 gap-3 px-4 py-2 text-uxSecoundryBg2 dark:text-white group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg"
          >
            <DashboardIcon className="transition-colors duration-300 group-hover:text-[#0bba48]" />
            <span className="text-sm font-medium text-uxSecoundryBg2 dark:text-white transition-colors duration-300 group-hover:text-uxBgPurpole dark:group-hover:text-uxBgPurpole">
              Overviews
            </span>
          </Link>

          {/* Products Menu */}
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

          {/* Dropdown Menu */}
          {isProductsDropdownOpen && (
            <ul className="space-y-1 list-none">
              <li>
                <NavLink
                  to="/admin/product-list"
                  className="block px-11 hover:px-14 py-2 text-sm text-gray-600 hover:text-[#0bba48] group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg cursor-pointer"
                >
                  Product List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/product-create"
                  className="block px-11 hover:px-14 py-2 text-sm text-gray-600 hover:text-[#0bba48] group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg cursor-pointer"
                >
                  Product Create
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      )}

      {role === 'user' && (
        <li>
          <Link
            to="/customer/dashboard"
            className="flex items-center mb-4 gap-3 px-4 py-2 text-uxSecoundryBg2 dark:text-white group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg"
          >
            <DashboardIcon className="transition-colors duration-300 group-hover:text-[#0bba48]" />
            <span className="text-sm font-medium text-uxSecoundryBg2 dark:text-white transition-colors duration-300 group-hover:text-uxBgPurpole dark:group-hover:text-uxBgPurpole">
              Overviews
            </span>
          </Link>

          <div
            onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
            className="flex items-center gap-3 px-4 py-2 text-uxSecoundryBg2 dark:text-white group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg cursor-pointer"
          >
            <BackpackIcon className="transition-colors duration-300 group-hover:text-[#0bba48] text-lg" />
            <span className="flex w-full gap-[80px]">
              <span className="text-sm font-medium text-uxSecoundryBg2 dark:text-white transition-colors duration-300 group-hover:text-uxBgPurpole">
                Customer
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

          {/* Dropdown Menu */}
          {isProductsDropdownOpen && (
            <ul className="space-y-1 list-none ">
              <li>
                <NavLink
                  to="/admin/product/list"
                  className="block px-11 hover:px-14 py-2 text-sm text-gray-600 hover:text-[#0bba48] group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg cursor-pointer"
                >
                  Product List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/product/create"
                  className="block px-11 hover:px-14 py-2 text-sm text-gray-600 hover:text-[#0bba48] group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg cursor-pointer"
                >
                  Product Create
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/product/categorys"
                  className="block px-11 hover:px-14 py-2 text-sm text-gray-600 hover:text-[#0bba48] group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg cursor-pointer"
                >
                  Product Category
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/product/brand-list"
                  className="block px-11 hover:px-14 py-2 text-sm text-gray-600 hover:text-[#0bba48] group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg cursor-pointer"
                >
                  Product Brand
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/brand"
                  className="block px-11 hover:px-14 py-2 text-sm text-gray-600 hover:text-[#0bba48] group relative border-l-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#0bba48] hover:rounded-t-lg hover:rounded-b-lg cursor-pointer"
                >
                  Product Attribute
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      )}

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
