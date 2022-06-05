import { FaAngleDown } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";

const FilterNav = () => {
  return (
    <>
      <div className="  justify-center items-center ">
        <div className=" w-full lg:hidden flex justify-center items-center bg-white">
          <button className=" flex justify-center border-2 rounded-sm w-full items-center  mx-6 my-2 py-1">
            <BsFilter />
            <div>فیلتر </div>
          </button>
        </div>
        <div className=" flex  justify-center  items-center w-full  bg-slate-200">
          <div className=" flex  items-center justify-center w-full bg-slate-200  lg:h-20 px-10">
            <div className=" lg:flex justify-center w-full h-full items-center">
              <div className=" lg:flex justify-center lg:w-11/12   items-center ">
                <div className=" flex px-2 py-1 m-1  mx-5 justify-between h-1/2 lg:w-1/6   border-2 border-slate-300 rounded-lg items-center ">
                  <div>فیلم و سریال</div>
                  <FaAngleDown />
                </div>
                <div className=" flex px-2 py-1 m-1   mx-5 justify-between h-1/2 lg:w-1/6   border-2 border-slate-300 rounded-lg items-center ">
                  <div>ژانر</div>
                  <FaAngleDown />
                </div>
                <div className=" flex px-2 py-1 m-1   mx-5 justify-between h-1/2 lg:w-1/6   border-2 border-slate-300 rounded-lg items-center ">
                  <div>کشور</div>
                  <FaAngleDown />
                </div>
                <div className=" flex px-2 py-1 m-1   mx-5 justify-between h-1/2 lg:w-1/6   border-2 border-slate-300 rounded-lg items-center ">
                  <div>زبان</div>
                  <FaAngleDown />
                </div>
                <div className=" flex px-2 py-1 m-1    mx-5 justify-between h-1/2 lg:w-1/6  border-2 border-slate-300 rounded-lg items-center ">
                  <div>سن</div>
                  <FaAngleDown />
                </div>
                <div className=" flex px-2 py-1 m-1   mx-5 justify-between h-1/2 lg:w-1/6   border-2 border-slate-300 rounded-lg items-center ">
                  <div>Hd</div>
                  <FaAngleDown />
                </div>
              </div>
              <div className=" flex justify-center items-center px-2  py-1 m-1  mx-5 lg:mx-10 bg-orange-400 lg:w-48 h-1/2  rounded-lg">
                <span>اعمال فیلتر</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterNav;
