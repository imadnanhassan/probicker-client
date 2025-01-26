const plans = [
  {
    name: 'Basic plan',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 12,
    isMostPop: false,
    features: [
      'Curabitur faucibus',
      'massa ut pretium maximus',
      'Sed posuere nisi',
      'Pellentesque eu nibh et neque',
      'Suspendisse a leo',
      'Praesent quis venenatis ipsum',
      'Duis non diam vel tortor',
    ],
  },
  {
    name: 'Startup',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 35,
    isMostPop: true,
    features: [
      'Curabitur faucibus',
      'massa ut pretium maximus',
      'Sed posuere nisi',
      'Pellentesque eu nibh et neque',
      'Suspendisse a leo',
      'Praesent quis venenatis ipsum',
      'Duis non diam vel tortor',
    ],
  },
  {
    name: 'Enterprise',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 60,
    isMostPop: false,
    features: [
      'Curabitur faucibus',
      'massa ut pretium maximus',
      'Sed posuere nisi',
      'Pellentesque eu nibh et neque',
      'Suspendisse a leo',
      'Praesent quis venenatis ipsum',
      'Duis non diam vel tortor',
    ],
  },
]
const PricingTable = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
         

          <div className="max-w-xl space-y-3 md:mx-auto">
            <span className="relative flex justify-center">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>
              <span className="relative z-10 bg-[#fff] px-6 font-title text-primary font-semibold">
                Pricing for all sizes
              </span>
            </span>

            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl font-title">
              Build the future with us
            </p>
            <p className="text-gray-600 font-regular font-light">
              You can ride to improve your fitness, you can ride further and
              carry more gear, you can leave the car at home and help save the
              environment.
            </p>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? 'mt-10' : ''}`}
            >
              {item.isMostPop ? (
                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">
                  Most popular
                </span>
              ) : (
                ''
              )}
              <div className="p-8 space-y-4 border-b">
                <span className="text-green-600 font-medium">{item.name}</span>
                <div className="text-gray-800 text-3xl font-semibold">
                  ${item.price}{' '}
                  <span className="text-xl text-gray-600 font-normal">/mo</span>
                </div>
                <p>{item.desc}</p>
                <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-green-600 hover:bg-green-500 active:bg-green-700">
                  Get Started
                </button>
              </div>
              <ul className="p-8 space-y-3">
                <li className="pb-2 text-gray-800 font-medium">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingTable
