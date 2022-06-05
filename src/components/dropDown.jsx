import { useOutMoused } from "./hooks/useOutMoused";
import { useRef } from "react";

const DropDown = ({ showMenu, onClose, items }) => {
  const wrapperRef = useRef(null);

  useOutMoused(wrapperRef, onClose);

  return (
    <>
      {showMenu ? (
        <div
          ref={wrapperRef}
          className="absolute w-72 transition-all   duration-700"
        >
          <div className="flex  p-2 bg-black">
            <div className=" grid grid-cols-2 ">
              {items?.map((item) => (
                // <div className="flex flex-col p-2 ">
                <div>
                  <div className=" p-2">
                    <a href=" p-2 ">{item.name}</a>
                  </div>
                </div>
                // </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DropDown;
