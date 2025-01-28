import images from '@/assets/images/images'

const HeroBanner = () => {
  return (
    <div
      className=" bg-cover bg-center h-screen bg-no-repeat"
      style={{ backgroundImage: `url(${images.heroImg})` }}
    >
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
    </div>
  )
}

export default HeroBanner
