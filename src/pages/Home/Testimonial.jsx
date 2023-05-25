import React, { useEffect, useState } from 'react'
import SectionTitle from '../../Components/SectionTitle'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('review.json')
      .then(res => res.json())
      .then(data =>setReviews(data))
  },[])

  return (
    <div>
      <SectionTitle
        heading="What our client says !"
        subHeading="Testimonial"
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="flex flex-col justify-center items-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={item.rating}
                  readOnly
                  className="mb-8"
                />
                <FaQuoteLeft className="text-8xl"></FaQuoteLeft>
                <p className='px-32 mt-12'>{item.details}</p>
                <p className='uppercase text-lg text-yellow-500 '>{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial