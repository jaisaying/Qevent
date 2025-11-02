

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { swiperContent } from "@/constants/swiperContent";

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      className="h-[70vh] mb-1"
      spaceBetween={100}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
      }}
    >
      {swiperContent.map((content, index) => {
        return (
          <SwiperSlide key={content.alt || index}>
            {/* Equal two partitions with margin */}
            <div className="drop-shadow-2xl h-full flex justify-between items-center p-8 max-md:flex-col max-sm:p-4 max-sm:pb-20 max-sm:gap-6">
              
              {/* Left Side - Text with margin */}
              <div className="flex flex-col text-center gap-8 flex-1 max-w-[50%] max-sm:max-w-full mx-8 max-sm:mx-4">
                <h1 className="text-4xl md:text-5xl font-bold max-sm:text-2xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">
                  {content.heading} 
                </h1>
                <h2 className="text-lg md:text-xl font-bold max-sm:text-base bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">
                  {content.description}
                </h2>
              </div>
              
              {/* Right Side - Image with margin */}
              <div className="flex justify-center items-center flex-1 max-w-[50%] max-sm:max-w-full mx-8 max-sm:mx-4">
                {/* <Image
                  src={content.imageUrl}
                  alt={content.alt}
                  width={content.alt === "hero" ? 350 : 500}
                  height={content.alt === "hero" ? 350 : 400}
                  priority={true}
                  className={`max-sm:p-2 rounded-sm max-sm:rounded-xl w-auto h-auto ${
                    content.alt === "hero" ? "max-sm:w-[300px]" : "max-sm:w-[400px]"
                  }`}
                /> */}


                  <Image
                    src={content.imageUrl}
                    alt={content.alt}
                    width={content.alt === "hero" ? 320 : 450}
                    height={content.alt === "hero" ? 320 : 380}
                    // priority={index === 0} 
                    priority={content.alt === "hero" || content.alt === "party"} 
                    className={`max-sm:p-2 rounded-sm max-sm:rounded-xl w-auto h-auto ${
                      content.alt === "hero" ? "max-sm:w-[280px]" : "max-sm:w-[350px]"
                    }`}
                  />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperComponent;