import React from 'react'
import visa from '../../assets/image/visa.png';

const Footer = () => {
  return (
    <div className='sm:pt-[70px] sm:pb-[82px] w-full'>
      <div className='bg-regal-blue flex rounded-lg py-[28px] px-[38px] flex-col sm:flex-row sm:justify-between w-full gap-5 sm:gap-0'>
        <div className='text-white flex flex-col sm:justify-around w-full gap-3 sm:gap-0'>
          <h3 className='text-3xl'>Если вы ещё не получаете зарплату на карту ВТБ</h3>
          <p className='sm:max-w-[580px]'>Обратитесь в HR / Отделе кадров по месту работы, чтобы узнать, как перевести свою зарплату в ВТБ и получить доступ к программе</p>
        </div>
        <div className=' flex items-center justify-center'>
          <span className='bg-gray-blue w-[109px] h-[109px] rounded-full'></span>
          <img src={visa} alt="img" className='absolute'/>
        </div>
      </div>
    </div>
  )
}

export default Footer;