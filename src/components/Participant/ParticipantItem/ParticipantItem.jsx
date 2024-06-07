import React from 'react'

const ParticipantItem = (props) => {
  return (
    <div className='flex items-center bg-white p-[38px] rounded-lg'>
        <div className='py-[17px] px-[24px] mr-[24px] bg-gray rounded-full text-[25px] text-regal-blue flex items-center justify-center'>{props.id.toString()}</div>
        <div className='text-descr-blue'>{props.descr}</div>
    </div>
  )
}

export default ParticipantItem