import React from 'react'
import banner from '../../../assets/home/chef-service.jpg'

const Banner = () => {
  return (
    <div>
        <img src={banner} alt="" />
        <div className='max-w-4xl mx-auto relative bg-white p-16 mb-32 text-center -mt-[350px]'>
            <h3 className='text-4xl font-serif pb-5'>Bistro Boss</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo. 
            </p>
        </div>
    </div>
  )
}

export default Banner