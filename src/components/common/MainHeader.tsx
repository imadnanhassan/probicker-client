/* eslint-disable @typescript-eslint/no-explicit-any */
import images from '@/assets/images/images'
import { selectCartItems } from '@/redux/features/cartSlice/cartSlice'
import { useAppSelector } from '@/redux/hooks'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const navigation = [
  { title: 'Home', path: '/' },
  { title: 'Our Services', path: '/service' },
  { title: 'Shop', path: '/shop' },
  { title: 'Our Gallery', path: '/our-gallery' },
  { title: 'Pricing', path: '/pricing' },
  { title: 'About Us', path: 'about-us' },
]
const MainHeader = () => {
  const [state, setState] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const user = useSelector((state: any) => state?.auth?.user)
  console.log(user?.role)

  useEffect(() => {
    const body = document.body

    const customBodyStyle = ['overflow-hidden', 'lg:overflow-visible']
    if (state) body.classList.add(...customBodyStyle)
    else body.classList.remove(...customBodyStyle)

    const customStyle = ['sticky-nav', 'fixed', 'border-b']
    window.onscroll = () => {
      if (window.scrollY > 80 && navRef.current)
        navRef.current.classList.add(...customStyle)
      else navRef.current?.classList.remove(...customStyle)
    }
  }, [state])

  const cartItems = useAppSelector(selectCartItems)
  console.log(cartItems, 'addToCartItems')
  return (
    <nav ref={navRef} className="w-full bg-white top-0 z-20 py-3 font-regular">
      <div className="items-center px-4 max-w-screen-2xl mx-auto md:px-8 lg:flex">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
          <Link to={'/'}>
            <img
              src={images.headerlogo}
              width={120}
              height={50}
              alt="Probick logo"
            />
          </Link>
          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'}`}
        >
          <div className=" hidden lg:block">
            <ul className="flex flex-col-reverse items-center space-x-0 lg:space-x-6 lg:flex-row">
              <li className=" lg:mt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="#000"
                    d="M15.096 5.904a6.5 6.5 0 1 0-9.192 9.192a6.5 6.5 0 0 0 9.192-9.192M4.49 4.49a8.5 8.5 0 0 1 12.686 11.272l5.345 5.345l-1.414 1.414l-5.345-5.345A8.501 8.501 0 0 1 4.49 4.49"
                  />
                </svg>
              </li>
              <li className="lg:mt-0">
                <Link to="/cart">
                  <div className="relative group">
                    {/* Cart Item Count Badge */}
                    <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-lg">
                      {cartItems.length > 0 ? cartItems.length : 0}
                    </span>
                    {/* Cart Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 group-hover:bg-purple-600 transition duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="text-black group-hover:text-white transition duration-300"
                      >
                        <rect width="24" height="24" fill="none" />
                        <path
                          fill="currentColor"
                          d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm4 20a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </li>

              <li className="lg:mt-0">
                {user ? (
                  // If user is logged in
                  <Link
                    to={
                      user.role === 'admin'
                        ? '/admin/dashboard'
                        : '/customer/dashboard'
                    }
                  >
                    {user?.avatar ? (
                      // Display user avatar if available
                      <img
                        src={user?.avatar}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      // Default user icon
                      <div className="flex items-center gap-1 border rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <rect width="24" height="24" fill="none" />
                          <path
                            fill="#05cc20"
                            d="M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M3.5 19a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v2h-17z"
                          />
                        </svg>
                        <p>{user.role}</p>
                      </div>
                    )}
                  </Link>
                ) : (
                  // If user is not logged in
                  <Link to="/sign-in">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="#05cc20"
                        d="M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M3.5 19a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v2h-17z"
                      />
                    </svg>
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="justify-center items-center mt-[7px] space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-600 hover:text-green-600">
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="lg:hidden block">
            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
              <li className="mt-4 lg:mt-0">
                <a className="py-3 px-4 text-center border text-gray-600 hover:text-green-600 rounded-md block lg:inline lg:border-0">
                  Login
                </a>
              </li>
              <li className="mt-8 lg:mt-0">
                <a className="py-3 px-4 text-center text-white bg-green-600 hover:bg-green-700 rounded-md shadow block lg:inline">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainHeader
