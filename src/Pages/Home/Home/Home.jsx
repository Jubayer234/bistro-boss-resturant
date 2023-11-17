import React from 'react'
import FoodSwiper from '../FoodSwiper/FoodSwiper'
import Slider from '../Slider/Slider'
import Banner from '../Banner/Banner'
import PopularMenu from '../PopularMenu/PopularMenu'
import Featured from '../Featured/Featured'
import Testimonial from '../Testimonial/Testimonial'
import CallUs from '../CallUs/CallUs'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
            <title>Bistro Boss | Home</title>
        </Helmet>
      <Slider></Slider>
      <FoodSwiper></FoodSwiper>
      <Banner></Banner>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home