import React from 'react'

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className='text-center mt-6'>
        <p className='text-[#D99904] text-xl border-b border-[#E8E8E8] w-[450px] mx-auto pb-2 mb-4'>{subHeading}</p>
        <h3 className='text-4xl font-serif border-b border-[#E8E8E8] w-[450px] mx-auto pb-5 mb-10'>{heading}</h3>
    </div>
  )
}

export default SectionTitle;