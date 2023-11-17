import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonial = () => {

  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch('/reviews.json')
      .then(res => res.json())
      .then(data => setReview(data))
  }, [])

  return (
    <section className='my-20'>
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          review?.map(review => <SwiperSlide
            key={review._id}
          >
            <div className='mx-24 my-16 flex flex-col items-center gap-8'> 
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.details}</p>
              <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </section>
  )
}

export default Testimonial