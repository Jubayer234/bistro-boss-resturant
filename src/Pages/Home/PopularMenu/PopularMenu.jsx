import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle'
import MenuItem from '../../../Components/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category ===  'popular')
            setMenu(popularItems)})
    },[])

  return (
    <section className='mb-10'>
        <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className='grid grid-cols-2 gap-10  mb-14'>
            {
                menu?.map(item=> <MenuItem key={item._id}
                item={item}></MenuItem>)
            }
        </div>
        <p className='text-center text-xl font-medium border-b-2 rounded-b-xl border-black pb-4 w-2/12 mx-auto'>View Full  Menu</p>
    </section>
  )
}

export default PopularMenu