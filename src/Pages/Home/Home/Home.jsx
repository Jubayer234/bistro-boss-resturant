import React from 'react'
import FoodSwiper from '../FoodSwiper/FoodSwiper'
import Slider from '../Slider/Slider'
import Banner from '../Banner/Banner'
import PopularMenu from '../PopularMenu/PopularMenu'
import Featured from '../Featured/Featured'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FoodSwiper></FoodSwiper>
      <Banner></Banner>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home