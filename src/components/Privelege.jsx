import React from "react";
import img from '../assets/image/privilege_bg.png';

const Privelege = () => {
  return (
    <div className="h-full w-full text-white flex items-center">
      <div className="w-2/3 relative inline-block">
        <h1 className="whitespace-pre-line text-5xl">{`Программа привилегий\nдля зарплатных клиентов ВТБ`}</h1>
        <p className="whitespace-pre-line text-lg mt-4">{`Получайте скидки и специальные\n предложения от более чем 1500 партнеров`}</p>
        <button type="button" className="py-4 px-9 text-orange bg-white rounded-lg mt-12">Стать участником</button>
      </div>
      <div className="w-1/3 relative inline-block">
        <img src={img} alt="human" className="scale-150" />
      </div>
    </div>
  );
};

export default Privelege;
