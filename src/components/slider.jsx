import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEffect, useRef, useState } from "react";
import BannerItem from "./BannerItem";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// const headerItems = [
//   {
//     id: 1,
//     title: "چهارشنبه ها،ساعت هشت",
//     logo: "/l10c8_logotype_v1.png",
//     descrption: "قسمت پانزدهم کمدی جذاب نیسان آبی",
//     rate: 4.8,
//     bg: "/l10c8_desktop_1_v1.jpg",
//     sort: 1,
//   },
//   {
//     id: 2,
//     title: "دوشنبه ها،ساعت هشت صبح",
//     logo: "/jokerLogo.png",
//     descrption: "رئالیتی شو جوکر",
//     rate: 3.9,
//     bg: "/jokerback1.jpg",
//     sort: 2,
//   },
//   {
//     id: 3,
//     title: "بزودی",
//     logo: "",
//     descrption: "فیلم سینمایی",
//     rate: 3.9,
//     bg: "/backdontlolkup.jpeg",
//     sort: 3,
//   },
//   {
//     id: 4,
//     title: "بزودی",
//     logo: "",
//     descrption: "فیلم سینمایی",
//     rate: 3.9,
//     bg: "/backwitcher1.png",
//     sort: 3,
//   },
// ];

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
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}>
      {movies.map((item) => (
        <SwiperSlide>
          <BannerItem {...item} />
          {/* <BannerItem id={item.id} title={item.title} description={item.descrption} bg={item.bg} logo={item.log} /> */}
        </SwiperSlide>
      ))}

      <div className="absolute bottom-5 left-5 flex items-center space-x-2 space-x-reverse z-50">
        <div ref={prevRef} className="bg-white p-1 rounded-full opacity-70 hover:opacity-100 cursor-pointer transition-all duration-200" onClick={() => console.log("hello")}>
          <FiArrowRight className="w-8 h-8" />
        </div>
        <div ref={nextRef} className="bg-white p-1 rounded-full opacity-70 hover:opacity-100 cursor-pointer transition-all duration-200">
          <FiArrowLeft className="w-8 h-8" />
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;
