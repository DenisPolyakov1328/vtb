import React from "react";

const Category = (props) => {
  return (
    <div className="flex-1 flex flex-col justify-between bg-white min-h-250 p-5 rounded-lg">
        <h3 className="text-descr-blue">{props.title}</h3>
      <div className="flex justify-center items-center">
        <span className="bg-gray h-133 w-102 rounded-elipse rotate-45 relative translate-x-[-30px]	translate-y-[5px]"></span>
        <img src={props.image} alt="img" className="absolute z-10" />
      </div>
    </div>
  );
};

export default Category;
