import images from '@/assets/images/images'
import React from 'react'

interface Breadcrumb {
  label: string
  isActive?: boolean
}

interface UiBreadcrumbsProps {
  breadcrumbs: Breadcrumb[]
}

const UiBreadcrumbs: React.FC<UiBreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div className=" bg-cover bg-center py-20 bg-no-repeat"
          style={{ backgroundImage: `url(${images.heroImg})` }}>
      <ul className="bg-white rounded-full py-2 px-4 -space-x-4 w-max flex items-center mx-auto font-[sans-serif] mt-4">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={index}
            className={`${
              breadcrumb.isActive
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-600'
            } ${
              index === 0 ? 'rounded-full' : 'rounded-r-full'
            } shadow-[0_2px_15px_-3px_rgba(6,81,237,0.3)] px-8 py-3 text-sm font-bold cursor-pointer`}
          >
            {breadcrumb.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UiBreadcrumbs
