import React from 'react'
import SectionTitle from '../../../Components/SectionTitle'
import featured from '../../../assets/home/featured.jpg'
import '../Featured/Featured.css'

const Featured = () => {
  return (
    <div className='featured-item text-white mb-16'>
        <div className='pt-10 bg-slate-500 bg-opacity-30'>
        <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
        ></SectionTitle>
        </div>
        <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 gap-16 pb-20 pt-10 px-36'>
            <div>
                <img src={featured} alt="" />
            </div>
            <div>
                <p>Nov 16, 2023</p>
                <p>WHERE CAN I GET SOME?</p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.

                </p>
                <button className='btn btn-outline border-0 border-b-4 border-white text-white mt-4'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Featured