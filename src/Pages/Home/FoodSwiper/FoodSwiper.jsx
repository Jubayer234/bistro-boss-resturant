import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle';

const FoodSwiper = () => {
    return (
        <div className='mb-10'>
            <SectionTitle
            subHeading={"---From 11:00am to 10:00pm---"}
            heading={"ORDER ONLINE"}>
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h4 className='text-3xl text-center mr-8 -mt-20 text-white'>Salads</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h4 className='text-3xl text-center mr-8 -mt-20 text-white'>Pizza</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h4 className='text-3xl text-center mr-8 -mt-20 text-white'>Soups</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h4 className='text-3xl text-center mr-8 -mt-16 text-white'>Deserts</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h4 className='text-3xl text-center mr-8 -mt-20 text-white'>Salads</h4>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FoodSwiper