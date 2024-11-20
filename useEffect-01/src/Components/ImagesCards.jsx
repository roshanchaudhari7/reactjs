import React from 'react'

const ImagesCards = ({name, image}) => {
  return (
    <div className='border border-black rounded-md w-[300px] flex flex-col items-center p-2 m-6'>
      <img className=' w-[200px] h-[150px] rounded-md' src={image} alt="" />
      <p className='mt-2'>{name}</p>
    </div>
  )
}

export default ImagesCards
