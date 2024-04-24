import React from "react";
import img from '../../assets/image/privilege_bg.png';

const Privelege = () => {
  return (
    <div className="h-full w-full text-white flex flex-col sm:flex-row justify-center sm:justify-start sm:text-start items-center">
      <div className="max-sm:h-1/2 flex sm:block flex-col justify-center items-center text-center sm:text-start sm:w-2/3 relative inline-block">
        <h1 className="whitespace-pre-line text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{`Программа привилегий\nдля зарплатных клиентов ВТБ`}</h1>
        <p className="whitespace-pre-line sm:text-sm md:text-lg mt-4">{`Получайте скидки и специальные\n предложения от более чем 1500 партнеров`}</p>
        <button type="button" className="py-3 px-3 sm:text-sm md:text-lg md:py-4 md:px-9 text-orange bg-white rounded-md mt-8 md:mt-12">Стать участником</button>
      </div>
      <div className="max-sm:h-1/2 sm:w-1/3 flex justify-center sm:block relative inline-block">
        <img src={img} alt="human" className="sm:scale-150" />
      </div>
    </div>
  );
};

export default Privelege;
