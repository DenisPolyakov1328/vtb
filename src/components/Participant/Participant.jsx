import React from 'react';
import ParticipantItem from './ParticipantItem/ParticipantItem';

const participantData = [
  {id: 1, descr: 'Логин и пароль для авторизации в личном кабинете программы вы можете найти в смс или Email сообщении от Банка с темой «…»'},
  {id: 2, descr: 'Укажите полученные доступы в окне авторизации ниже'},
  {id: 3, descr: 'Поздравляем, теперь вы участник программы привилегий для зарплатных клиентов ВТБ! Выбирайте интересные предложения от партнёров и оплачивайте их своей картой ВТБ'},
  {id: 4, descr: 'Для того, чтобы не потерять доступ к каталогу предложений, сохраните эту страницу себе в закладки'},
]

const Participant = () => {

  const participantElements = participantData.map((el) => (
    <ParticipantItem id={el.id} descr={el.descr} key={el.id}/>
  ))

  return (
    <div className='h-full w-full'>
      <div>
        <h2 className='mb-[45px] text-title-blue text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Как стать участником программы</h2>
      </div>
      <div className='flex flex-col gap-5'>{participantElements}</div>
    </div>
  )
}

export default Participant