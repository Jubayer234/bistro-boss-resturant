import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle'
import MenuItem from '../../../Components/MenuItem/MenuItem';
import useMenu from '../../../Hooks/UseMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])

    return (
        <section className='mb-10 flex flex-col items-center'>
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className='grid grid-cols-2 gap-10  mb-14'>
                {
                    popular?.map(item => <MenuItem key={item._id}
                        item={item}></MenuItem>)
                }
            </div>
            <button className='btn w-52 btn-outline text-center border-0  border-b-4 mt-4'>View Full  Menu</button>
        </section>
    )
}

export default PopularMenu