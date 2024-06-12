import React from 'react'
import LoginForm from './LoginForm/LoginForm';

function Authorizacion() {
  return (
    <div className='flex flex-col items-center md:flex-row md:justify-between md:items-start sm:py-[70px]'>
      <h2 className='mb-[45px] text-title-blue text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:max-w-[350px]'>Авторизоваться в программе</h2>
      <LoginForm />
    </div>
  )
}

export default Authorizacion;