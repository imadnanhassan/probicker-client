import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { HiStar } from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className=" ">
      
        <div className=" py-10">
          <div className=" py-10">
            <div className="max-w-xl space-y-3 md:mx-auto">
              <span className="relative flex justify-center">
                <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>
                <span className="relative z-10 bg-[#fff] px-6 font-title text-primary font-semibold">
                  Professional services
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
          <div>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-lg">
                  <div className="flex items-center gap-[13px]">
                    <img
                      src="https://doc-house-woad.vercel.app/assets/patient-avatar-e8d22c01.png"
                      alt=""
                    />
                    <div>
                      <h4 className="text-[18px] leading-[38px] font-semibold text-headingColor">
                        Adnan Hassan
                      </h4>
                      <div className="flex items-center gap-1">
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, doloribus.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-lg">
                  <div className="flex items-center gap-[13px]">
                    <img
                      src="https://doc-house-woad.vercel.app/assets/patient-avatar-e8d22c01.png"
                      alt=""
                    />
                    <div>
                      <h4 className="text-[18px] leading-[38px] font-semibold text-headingColor">
                        Muhibur Rahaman
                      </h4>
                      <div className="flex items-center gap-1">
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, doloribus.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-lg">
                  <div className="flex items-center gap-[13px]">
                    <img
                      src="https://doc-house-woad.vercel.app/assets/patient-avatar-e8d22c01.png"
                      alt=""
                    />
                    <div>
                      <h4 className="text-[18px] leading-[38px] font-semibold text-headingColor">
                        Muhibur Rahaman
                      </h4>
                      <div className="flex items-center gap-1">
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, doloribus.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-lg">
                  <div className="flex items-center gap-[13px]">
                    <img
                      src="https://doc-house-woad.vercel.app/assets/patient-avatar-e8d22c01.png"
                      alt=""
                    />
                    <div>
                      <h4 className="text-[18px] leading-[38px] font-semibold text-headingColor">
                        Muhibur Rahaman
                      </h4>
                      <div className="flex items-center gap-1">
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, doloribus.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-lg">
                  <div className="flex items-center gap-[13px]">
                    <img
                      src="https://doc-house-woad.vercel.app/assets/patient-avatar-e8d22c01.png"
                      alt=""
                    />
                    <div>
                      <h4 className="text-[18px] leading-[38px] font-semibold text-headingColor">
                        Muhibur Rahaman
                      </h4>
                      <div className="flex items-center gap-1">
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, doloribus.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-lg">
                  <div className="flex items-center gap-[13px]">
                    <img
                      src="https://doc-house-woad.vercel.app/assets/patient-avatar-e8d22c01.png"
                      alt=""
                    />
                    <div>
                      <h4 className="text-[18px] leading-[38px] font-semibold text-headingColor">
                        Muhibur Rahaman
                      </h4>
                      <div className="flex items-center gap-1">
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                        <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, doloribus.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
