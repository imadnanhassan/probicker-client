import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

interface ProfileDropdownProps {
  username: string
  email: string
  profileImage?: string
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  username,
  email,
  profileImage,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center space-x-2 bg-white dark:bg-uxSecoundryBg2 text-black dark:text-white rounded-full px-4 py-2 focus:outline-none">
          <img
            src={profileImage || '/default-profile.png'}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-left">
            <h4 className="text-sm font-semibold">{username}</h4>
            <p className="text-xs">{email}</p>
          </div>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className="absolute -right-24 mt-2 w-48 bg-white dark:bg-uxSecoundryBg2 text-black dark:text-white rounded-md shadow-lg"
        sideOffset={5}
      >
        <DropdownMenu.Item className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <a href="/profile" className="w-full">
            Profile
          </a>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <a href="/settings" className="w-full">
            Account Settings
          </a>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <a href="/signout" className="w-full">
            Sign Out
          </a>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default ProfileDropdown
