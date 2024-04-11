import React from "react";
import img from '../assets/image/privilege_bg.png';

const Privelege = () => {
  return (
    <div className="bg-regal-blue h-full text-white flex items-center">
      <div>
        <h1 className="whitespace-pre-line text-5xl">{`Программа привилегий\nдля зарплатных клиентов ВТБ`}</h1>
        <p className="whitespace-pre-line text-lg">{`Получайте скидки и специальные\n предложения от более чем 1500 партнеров`}</p>
        <button type="button" className="py-4 px-9 text-orange bg-white rounded">Стать участником</button>
      </div>
      <div>
        <img src={img} alt="human" />
      </div>
    </div>
  );
};

export default Privelege;
