import React from 'react'
import { HomeIcon, ChevronRightIcon } from '@radix-ui/react-icons'

type BreadcrumbProps = {
  pageTitle: string
  parentTitle?: string
  childTitle?: string
  iconTitle?: string
}

const AdminBreadcrumbs: React.FC<BreadcrumbProps> = ({
  pageTitle,
  parentTitle,
  childTitle,
  iconTitle,
}) => {
  return (
    <div className="px-6 container mx-auto py-8">
      <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-[#1A1B1E] rounded-md shadow-sm">
        {/* Left Side: Home Icon + Page Title */}
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          <h1 className="lg:text-xl text-base font-bold text-gray-800 dark:text-gray-100">
            {pageTitle}
          </h1>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="lg:block hidden">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 ">
            {iconTitle && (
              <>
                <a
                  href="/admin"
                  className="flex items-center hover:text-blue-600"
                >
                  <HomeIcon className="h-4 w-4 mr-1" />
                  Home
                </a>
              </>
            )}

            {parentTitle && (
              <>
                <ChevronRightIcon className="h-4 w-4 mx-2" />
                <span className="hover:text-blue-600">{parentTitle}</span>
              </>
            )}

            {/* Child Title */}
            {childTitle && (
              <>
                <ChevronRightIcon className="h-4 w-4 mx-2" />
                <span className="text-gray-500 dark:text-gray-400">
                  {childTitle}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminBreadcrumbs
