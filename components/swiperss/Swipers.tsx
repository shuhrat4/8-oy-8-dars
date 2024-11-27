"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


const HomepageCarousel = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-full"
      >
        <SwiperSlide>
          <div className="bg-gray-100 py-11 px-24 mx-24 md:px-12 lg:px-20 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-gray-600 uppercase font-semibold">
                  Welcome to Greenshop
                </h2>
                <h2 className="font-black text-[70px] leading-[60px] text-[#3D3D3D] mb-[5px]" data-swiper-parallax="-200">
                  Let’s Make a <br/> Better <span className='text-[#46A358]'> Planet</span>
                </h2>
                <p className="text-gray-600 mt-4 text-[14px]">
                  We are an online plant shop offering a wide range of cheap and trendy
                  plants. Use <br/> our plants to create a unique Urban Jungle. Order your
                  favorite plants!
                </p>
                <button className="mt-8 bg-[#46A358] text-[16px]  text-white px-6 py-2 font-semibold border-[#46A358] border hover:bg-transparent hover:text-[#46A358] duration-300 flex items-center justify-center gap-2 leading-5 rounded-md">
                  SHOP NOW
                </button>
              </div>

              <div className="lg:w-1/2 flex justify-center items-center">
                <img
                  src="/plant.png"
                  alt="Large Plant"
                  className="w-3/4 mx-4 rounded-lg"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 py-12 px-24 mx-24 md:px-12 lg:px-20 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-gray-600 uppercase font-semibold">
                  Welcome to Greenshop
                </h2>
                <h2 className="font-extrabold text-[60px] leading-[60px] text-[#3D3D3D] mb-[5px]" data-swiper-parallax="-200">
                  Let’s Make a
                  Better <span className='text-[#46A358]'> Planet</span>
                </h2>
                <p className="text-gray-600 mt-4 text-[14px]">
                  We are an online plant shop offering a wide range of cheap and trendy
                  plants. Use our plants to create a unique Urban Jungle. Order your
                  favorite plants!
                </p>
                <button className="mt-8 bg-[#46A358] text-[16px]  text-white px-6 py-2 font-semibold border-[#46A358] border hover:bg-transparent hover:text-[#46A358] duration-300 flex items-center justify-center gap-2 leading-5 rounded-md">
                  SHOP NOW
                </button>
              </div>

              <div className="lg:w-1/2 flex justify-center items-center">
                <img
                  src="/plant.png"
                  alt="Large Plant"
                  className="w-full max-w-md mx-5 rounded-lg transform hover:scale-110 transition duration-300"
                />

              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomepageCarousel;
