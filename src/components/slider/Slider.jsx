import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";

// import required modules
import { Navigation } from "swiper/modules";
const Slider = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <div className="relative w-full">
          <img className="w-full rounded-md " src={img2} alt="Background" />
          {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-2xl md:text-8xl font-bold">
              Slider 1
            </h1>
            <p className="text-center text-white mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sapiente, aliquam.
            </p>
          </div> */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full">
          <img className="w-full rounded-md" src={img1} alt="Background" />
          {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-2xl md:text-8xl font-bold">
              Slider 2
            </h1>
            <p className="text-center text-white mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            </p>
          </div> */}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
