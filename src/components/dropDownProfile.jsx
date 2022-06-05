import { useOutMoused } from "./hooks/useOutMoused";
import { useRef } from "react";

const DropDownProfile = ({ showMenu, onClose }) => {
  const wrapperRef = useRef(null);

  useOutMoused(wrapperRef, onClose);

  return (
    <>
      {showMenu ? (
        <div className="  mx-4 my-2  ">
          <div className=" bg-black w-80  ">
            <div className=" text-center border-b-2 p-2 m-1 border-gray-300 ">
              <div className=" w-full flex  justify-center py-2">
                <img className=" w-16 h-8" src="./cards.svg" alt="" />
              </div>
              <div className=" text-green-500 py-2">
                88روز از اشترک شما باقی مانده
              </div>
              <div className=" flex items-center justify-center py-2">
                <div className=" w-4/12  bg-slate-400 rounded-2xl">تمدید</div>
              </div>
            </div>
            <div className=" flex justify-between items-center border-b-2 p-2 m-1 border-gray-300">
              <div className=" flex items-center">
                <div className=" p-3">
                  <div
                    className=" bg-green-200  bg-opacity-30 text-center text-green-400 w-8 h-8 border-2 border-green-400 rounded-full
                "
                  >
                    A
                  </div>
                </div>
                <div className=" text-xs">
                  <div className=" p-1">mahdi_sangtarashn</div>
                  <div className=" flex justify-between">
                    <div className=" bg-slate-400 rounded-md p-1">
                      شناسه کاربری:874598
                    </div>
                  </div>
                  <div className=" p-1">09193585316</div>
                </div>
              </div>
              <div className="p-2 text-sm"> تنظیمات</div>
            </div>
            <div className=" flex justify-between    text-sm border-b-2 p-2 m-1 border-gray-300">
              <div className=" "> رنگ زمینه</div>

              <div class="flex items-center justify-center ">
                <label
                  for="toggleB"
                  className="flex items-center cursor-pointer"
                >
                  <div class="relative">
                    <input type="checkbox" id="toggleB" className="sr-only" />

                    <div className="block bg-gray-600 w-10 h-5 rounded-full"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-4 h-3 rounded-full transition"></div>
                  </div>
                </label>
              </div>
            </div>
            <div className=" p-2 text-sm">
              <div className="p-1">فیلم و سریال های من</div>
              <div className="p-1">قفل کودک</div>
              <div className="p-1">خرید اشتراک</div>
              <div className="p-1">سوابق پرداخت</div>
              <div className="p-1">فعال سازی تلوزیون هوشمند</div>
              <div className="p-1">خروج</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DropDownProfile;
