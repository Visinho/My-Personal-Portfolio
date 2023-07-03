import React from 'react';
import "./testimonials.css";
import LG from "../../assets/LG.jpeg";
import Chichostic from "../../assets/Chichostic.jpeg";
import Oyoski from "../../assets/Oyoski.jpeg";
import Smiggay from "../../assets/Smiggay.jpeg";
import Ify from "../../assets/Ify.jpeg";
import StanGrabEmmy from "../../assets/StanGrabEmmy.jpeg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonial = [
  {
    avatar: LG,
    name: "Chief Medical Director",
    review: "Elvis is an exceptional software engineer with outstanding problem-solving skills and attention to detail. His ability to adapt to new technologies, coupled with his strong teamwork and communication skills, make him a valuable asset to my facility. His dedication and passion for his work are truly commendable. We are really glad to have worked with him."
  },
  {
    avatar: Chichostic,
    name: "Graduate Assistant, UNN",
    review: "Having worked closely with Engr Njoku, I am thoroughly impressed by his technical prowess and commitment to excellence. His strong coding skills and ability to tackle complex challenges make him a standout software engineer. It was a pleasure collaborating with such a talented and dedicated professional and thank you for making our department proud"
  },
  {
    avatar: Oyoski,
    name: "Senior Product Manager",
    review: "Working with Elvis is quite fun. I can confidently say that he is an exceptional software engineer. His technical expertise, attention to detail, and ability to deliver high-quality results have been invaluable. His strong collaboration and communication skills make him an asset to any project or team. It is a pleasure to keep working with you."
  },
  {
    avatar: Smiggay,
    name: "CEO, Tony Smiggs AutoGlass",
    review: "Elvis has exceeded my expectations in building our business website. His creativity have resulted in a professional and visually appealing site. Also, his strong communication and timely delivery make him a reliable partner. I highly recommend his services for any website development needs. I am sure to need your services sometime in the future."
  },
  {
    avatar: Ify,
    name: "CEO, EventPlans",
    review: "I am incredibly impressed with the business website created by Elvis. His attention to minute detail, creativity, and technical expertise are evident in the outstanding result. The website perfectly captures the essence of my event planning business, and I highly recommend his services to anyone in need of a top-notch website."
  },
  {
    avatar: StanGrabEmmy,
    name: "S&E Interiors",
    review: "We are extremely satisfied with the business website developed by Elvis. His expertise in web development resulted in a visually appealing and user-friendly site that perfectly represents our interior decor business. His professionalism and timely delivery made the collaboration a great success. We are indeed happy for the recommendation to work with you."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        // install Swiper modules
      modules={[ Pagination, Scrollbar, A11y, Navigation]}
      spaceBetween={40}   
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}>
      {
          testimonial.map(({avatar, name, review}, index) => {
            return(
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} />     
              </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
