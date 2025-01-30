const FeaturedProduct = () => {
  return (
    <div className="py-28 bg-[#F5F5F5]">
      <div className="max-w-screen-2xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl space-y-3 md:mx-auto">
          <span className="relative flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>
            <span className="relative z-10 bg-[#F5F5F5] px-6 font-title text-primary font-semibold">
              Professional services
            </span>
          </span>

          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl font-title">
            Build the future with us
          </p>
          <p className="text-gray-600 font-regular font-light">
            You can ride to improve your fitness, you can ride further and carry
            more gear, you can leave the car at home and help save the
            environment.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <a
              href="#"
              className="group relative block overflow-hidden  shadow-sm "
            >
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              <span className="whitespace-nowrap absolute start-4 top-4 z-10 bg-primary text-white px-3 py-1.5 text-xs font-medium">
                New
              </span>

              <img
                src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative border border-gray-100 bg-white p-6 text-left">
                <div className="grid grid-cols-2 gap-1">
                  <h3 className="text-lg font-light text-[#555555] text-[0.875em]">
                    Brand: <strong>Mondrake</strong>
                  </h3>
                  <h3 className="text-lg font-light text-[#555555] text-[0.875em]">
                    Weight: <strong>26.7 kg</strong>
                  </h3>
                  <h3 className="text-lg font-light text-[#555555] text-[0.875em]">
                    Chain: <strong>Sram SX Eagle </strong>...
                  </h3>
                  <h3 className="text-lg font-light text-[#555555] text-[0.875em]">
                    Seatpost: <strong>Onoff Pija </strong>...
                  </h3>
                  <h3 className="text-lg font-light text-[#555555] text-[0.875em]">
                    Chain: Sram SX Eagle, 12s
                  </h3>
                  <h3 className="text-lg font-light text-[#555555] text-[0.875em]">
                    Seatpost: Onoff Pija dropper...
                  </h3>
                </div>

                <form className="mt-4">
                  <button className="block w-full  bg-green-400 p-4 text-sm font-medium transition-all duration-150 hover:bg-primary hover:text-white  font-title ">
                    View more - (1200$ / Month)
                  </button>
                </form>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProduct
