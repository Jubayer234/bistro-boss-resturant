import React from 'react'

const MenuItem = ({item}) => {
    const {image,price,recipe,name} = item;
  return (
    <div className='flex space-x-4 items-center'>
        <img className='w-[120px] h-[104px] rounded-full rounded-tl-none' src={image} alt="" />
        <div>
          <h3>{name}------------</h3>
          <p>{recipe}</p>
        </div>
        <p>{price}</p>
    </div>
  )
}

export default MenuItem