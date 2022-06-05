import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEffect, useRef, useState } from "react";
import MoviesItem from "./moviesItem";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const url = "https://moviesapi.ir/api/v1/movies?page=1";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const { data } = await response.json();
        setMovies(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      className="relative"
      modules={[Navigation]}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef?.current;
        swiper.params.navigation.nextEl = nextRef?.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      spaceBetween={10}
      breakpoints={{
        1280: { slidesPerView: 7, spaceBetween: 16, slidesPerGroup: 7 },
        1024: { slidesPerView: 5, spaceBetween: 16, slidesPerGroup: 5 },
        768: { slidesPerView: 4, spaceBetween: 12, slidesPerGroup: 4 },
        640: { slidesPerView: 3, spaceBetween: 12, slidesPerGroup: 3 },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}>
      {movies.map((item) => (
        <SwiperSlide>
          <MoviesItem {...item} />
          {/* <BannerItem id={item.id} title={item.title} description={item.descrption} bg={item.bg} logo={item.log} /> */}
        </SwiperSlide>
      ))}

      <div className="absolute bottom-28 right-3 flex items-center space-x-2 space-x-reverse z-50">
        <div ref={prevRef} className="bg-white p-1 rounded-full opacity-70 hover:opacity-100 cursor-pointer transition-all duration-200" onClick={() => console.log("hello")}>
          <FiArrowRight className="w-8 h-8" />
        </div>
      </div>
      <div className="absolute bottom-28 left-3 flex items-center space-x-2 space-x-reverse z-50">
        <div ref={nextRef} className="bg-white  p-1 rounded-full opacity-70 hover:opacity-100 cursor-pointer transition-all duration-200">
          <FiArrowLeft className="w-8 h-8" />
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;
