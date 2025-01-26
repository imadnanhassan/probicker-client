/* eslint-disable no-irregular-whitespace */
import images from '@/assets/images/images'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const MainHeader = () => {
  const [state, setState] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'Our Services', path: '/service' },
    { title: 'Shop', path: '/shop' },
    { title: 'Our Gallery', path: '/our-gallery' },
    { title: 'Pricing', path: '/pricing' },
    { title: 'About Us', path: 'about-us' },
  ]

  useEffect(() => {
    const body = document.body

    const customBodyStyle = ['overflow-hidden', 'lg:overflow-visible']
    if (state) body.classList.add(...customBodyStyle)
    else body.classList.remove(...customBodyStyle)

    const customStyle = ['sticky-nav', 'fixed', 'border-b']
    window.onscroll = () => {
      if (window.scrollY > 80 && navRef.current) navRef.current.classList.add(...customStyle)
      else navRef.current?.classList.remove(...customStyle)
    }
  }, [state])

  return (
    <section
      className=" bg-cover bg-center h-screen bg-no-repeat"
      style={{ backgroundImage: `url(${images.heroImg})` }}
    >
      <nav
        ref={navRef}
        className="w-full bg-white top-0 z-20 py-3 font-regular"
      >
        <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
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
              <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
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
                      d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm4 20a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"
                    />
                  </svg>
                </li>
                <li className=" lg:mt-0">
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
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                {navigation.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="text-gray-600 hover:text-green-600"
                    >
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

      <div className="items-center justify-center px-4 lg:w-[800px] h-full w-full mx-auto  lg:flex lg:flex-col ">
        <div className=" mt-16 lg:mt-0">
          <h2 className="lg:text-[60px] text-[28px] text-white font-title text-center">
            Discover your world by bicycle
          </h2>
          <p className="text-white text-center font-regular text-[13px] lg:text-[15px] mt-4">
            It's a fun-loving solution to so many of life’s challenges: parking,
            polluting, packing – and even pedaling, with powerful electric drive
            systems that make it fun and easy to get around.
          </p>
        </div>
      </div>
      {/* <div className="items-center justify-center px-4 w-[900px] mx-auto md:px-8 bg-white py-2">
        <div className="relative w-72 max-w-full mx-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-green-600 focus:ring-2">
            <option>Project manager</option>
            <option>Software engineer</option>
            <option>IT manager</option>
            <option>UI / UX designer</option>
          </select>
        </div>
      </div> */}
    </section>
  )
}

export default MainHeader
