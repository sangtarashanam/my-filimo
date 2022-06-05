import { FaCaretRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";

const MoviesItem = ({ poster = "", description, genres, id, title, rate, images, ...props }) => {
  return (
    <>
      <a>
        <div className="group relative rounded-md overflow-hidden">
          <div className="flex items-center justify-center group-hover:opacity-100 opacity-0 absolute inset-0 bg-black bg-opacity-80 transition-all duration-200">
            <FaCaretRight className="text-white w-16 h-16 hover:scale-110 transition-all transform duration-200" />
          </div>
          <div className="">
            <img src={poster} alt="" />
          </div>
        </div>

        <div className="mt-1.5">
          <div className="text-gray-50">{title}</div>
        </div>
      </a>
    </>
  );
};

export default MoviesItem;
