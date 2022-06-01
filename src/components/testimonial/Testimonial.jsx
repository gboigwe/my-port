import React from 'react'
import "./testimonial.css"
import Avat1 from "../../assets/Avat3.png"
import Avat2 from "../../assets/Avat3.png"
import Avat3 from "../../assets/Avat2.png"
import Avat4 from "../../assets/Avat2.png"

// Import Swipper core and require Modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import 'swiper/css/pagination';

const testiMonials = [
  {
    avatar: Avat1,
    name: 'David',
    review: 'You have actually been supportive about the branding tips you gave, good one Gbolahan'
  },
  {
    avatar: Avat2,
    name: 'Victor Imeh',
    review: 'Well, for each time we disscuss, I get an inspiration and with a snap of a finger you get a job done as quickly as possible'
  },
  {
    avatar: Avat3,
    name: 'Esther Durojaye',
    review: 'Fast and Realiable. For the few times you have done a design, You have met my design needs'
  },
  {
    avatar: Avat4,
    name: 'Genevieve Njoku',
    review: 'I like your work.'
  },
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container" 
        // Install Swiper Modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testiMonials.map(({avatar,name,review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonial