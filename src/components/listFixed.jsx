const ListFixed = () => {
  return (
    <>
      <div className=" w-full items-center justify-center">
        <div className=" flex justify-between p-4 items-center">
          <div className=" text-ellipsis text-xl"> ویژه</div>
          <div className=" text-red-600 "> مشاهده همه</div>
        </div>
        <div className="">
          <div className=" grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-2 p-1  place-content-center ">
            <div>
              <img
                className=" h-44 w-full"
                src="/l10c8_desktop_1_v1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListFixed;
