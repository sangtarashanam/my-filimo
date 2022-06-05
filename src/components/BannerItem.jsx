import { FaCaretRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";

const BannerItem = ({ poster = "", description, genres, id, title, rate, images, ...props }) => {
  return (
    <>
      <div className="flex">
        <div
          style={{
            backgroundImage: `url(${images[0]})`,
          }}
          className=" bg-cover  h-96 lg:h-auto pb-8 bg-[url(${images[0])]">
          <div className=" flex  ">
            <div>
              <div className=" pt pt-16 px-7">
                <img className=" hidden lg:flex rounded-lg h-96 w-auto" src={poster} alt="" />
              </div>
              <div className=" flex p-6">
                <img className=" px-2 w-40" src="/exclusive-fa.svg" alt="" />
                <div className=" flex mx-3 px-3 border-2 border-slate-200 rounded-2xl bg-slate-200 items-center">
                  <AiOutlineCalendar />
                  <div className="  px-2">
                    {genres[0]} , {genres[1]}
                  </div>
                </div>
              </div>
              <div className=" mx-6  text-white text-xl">{description}</div>
              <div className=" flex justify-between w-screen">
                <div className=" w-40 my-3 mx-10 items-center flex bg-white rounded-md">
                  <FaCaretRight />
                  <div className="  py-1 px-2">اطلاعات بیشتر</div>
                </div>
                {/* <div className=" flex px-16 text-2xl text-white items-center">
                  <div className=" bg-black bg-opacity-50 rounded-full items-center p-5">
                    <FaAngleRight />
                  </div>
                  <div className=" bg-black bg-opacity-50 rounded-full items-center p-5">
                    <FaAngleLeft />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex lg:hidden  ">
        <div
          // style={{ backgroundImage: `url("/l10c8_desktop_1_v1.jpg")` }}
          style={{
            backgroundImage: `url(${poster})`,
          }}
          className=" bg-cover h-screen   pb-8">
          <div className=" flex  ">
            <div>
              <div className=" flex p-6">
                <img className=" px-2 w-40" src="/exclusive-fa.svg" alt="" />
                <div className=" flex mx-3 px-3 border-2 border-slate-200 rounded-2xl bg-slate-200 items-center">
                  <AiOutlineCalendar />
                  <div className="  px-2">
                    {genres[0]} , {genres[1]}
                  </div>
                </div>
              </div>
              <div className=" mx-6  text-white text-xl">{description}</div>
              <div className=" flex justify-between w-screen">
                <div className=" w-40 my-3 mx-10 items-center flex bg-white rounded-md">
                  <FaCaretRight />
                  <div className="  py-1 px-2">اطلاعات بیشتر</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default BannerItem;
