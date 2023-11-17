import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../../../Components/Cover/Cover'
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import PizzaBg from '../../../assets/menu/pizza-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/UseMenu'
import SectionTitle from '../../../Components/SectionTitle'
import MenuCategory from './MenuCategory/MenuCategory'


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover image={menuImg} title={"Our Menu"}></Cover>
        <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
        {/* Dessert */}
        <Cover image={dessertBg} title={"Desserts"}></Cover>
        <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S DESSERT OFFER"}
        ></SectionTitle>
        <MenuCategory items={dessert}></MenuCategory>
        {/* pizza */}
        <Cover image={PizzaBg} title={"Pizzas"}></Cover>
        <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S PIZZA OFFER"}
        ></SectionTitle>
        <MenuCategory items={pizza}></MenuCategory>
        {/* soup */}
        <Cover image={soupBg} title={"Soup"}></Cover>
        <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S SOUP OFFER"}
        ></SectionTitle>
        <MenuCategory items={soup}></MenuCategory>
        {/* salad */}
        <Cover image={saladBg} title={"Salads"}></Cover>
        <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S SALAD OFFER"}
        ></SectionTitle>
        <MenuCategory items={salad}></MenuCategory>
    </div>
  )
}

export default Menu