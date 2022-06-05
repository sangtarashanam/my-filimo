import react from "react";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import DropDown from "./dropDown";
import { itemsFilms, itemsMajmooeh, itemsSeryals } from "./data/itemesMenu";
import DropDownProfile from "./dropDownProfile";
const Heder = () => {
  const [showFilmMenu, setShowFilmMenu] = useState(null);
  const [showSeryalMenu, setShowSeryalMenu] = useState(null);
  const [showMajmooehMenu, setShowMajmooehMenu] = useState(null);
  const [showProfil, setShowProfil] = useState(null);

  return (
    <>
      <div className=" fixed z-10 top-0 left-0 right-0 opacity-90">
        <div className=" flex justify-between bg-black h-12 w-full text-gray-200 ">
          <div className=" flex items-center">
            <div className=" border-l-2  ">
              <img
                className=" h-8 px-8"
                src="/fa-filimo-dark-logo.png"
                alt="logo"
              />
            </div>
            <div className="  flex  items-center px-5">
              <div className="  flex">
                <div onMouseLeave={() => setShowFilmMenu(false)}>
                  <div
                    className=" flex text-white items-center px-2 hover:text-orange-300"
                    onMouseEnter={() => setShowFilmMenu(true)}
                  >
                    {itemsFilms?.name} <HiChevronDown />
                  </div>
                  <div className=" absolute mt-3">
                    <DropDown
                      items={itemsFilms.items}
                      showMenu={!!showFilmMenu}
                    />
                  </div>
                </div>
                <div onMouseLeave={() => setShowSeryalMenu(false)}>
                  <div
                    className="  flex items-center px-2 hover:text-orange-300"
                    onMouseEnter={() => setShowSeryalMenu(true)}
                  >
                    {itemsSeryals.name} <HiChevronDown />
                  </div>
                  <div className=" absolute mt-3 ">
                    <DropDown
                      items={itemsSeryals.items}
                      showMenu={!!showSeryalMenu}
                    />
                  </div>
                </div>
              </div>

              <div className=" px-2 hover:text-orange-300">ایرانی</div>
              <div onMouseLeave={() => setShowMajmooehMenu(false)}>
                <div
                  className=" flex items-center px-2 hover:text-orange-300"
                  onMouseEnter={() => setShowMajmooehMenu(true)}
                >
                  {itemsMajmooeh.name}
                  <HiChevronDown />
                </div>
                <div className=" absolute mt-3">
                  <DropDown
                    items={itemsMajmooeh.items}
                    showMenu={!!showMajmooehMenu}
                  />
                </div>
              </div>

              <div className=" flex items-center px-2 hover:text-orange-300">
                <HiSearch />
                <div className=" px-2">جستجو</div>
              </div>
            </div>
          </div>

          <div
            className="  flex justify-end "
            onMouseLeave={() => setShowProfil(false)}
          >
            <div
              className="  flex items-center justify-center pl-5"
              onMouseEnter={() => setShowProfil(true)}
            >
              <div
                className=" bg-green-200  bg-opacity-30 text-center text-green-400 w-8 h-8 border-2 border-green-400 rounded-full
                "
              >
                A
              </div>
              <HiChevronDown />
            </div>
            <div className=" absolute  top-9">
              <DropDownProfile showMenu={!!showProfil} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heder;
