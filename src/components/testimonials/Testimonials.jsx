import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/profile3.jpg";
import AVTR2 from "../../assets/profile3.jpg";
import AVTR3 from "../../assets/profile3.jpg";

// import required modules
import { Pagination, Autoplay } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Project Manager at Infosys",
    review:
      "Deepak demonstrated exceptional skills in iOS development during his internship. His ability to quickly grasp new concepts and implement them effectively in SwiftUI was impressive. He showed great initiative in optimizing app performance and user experience.",
  },
  {
    avatar: AVTR2,
    name: "Team Lead at Motion Cut",
    review:
      "Working with Deepak was a pleasure. His expertise in both frontend and backend development made him a valuable asset to our team. He consistently delivered high-quality code and was always eager to learn and implement new technologies.",
  },
  {
    avatar: AVTR3,
    name: "Project Collaborator",
    review:
      "Deepak's contribution to our AI interview platform was outstanding. His strong problem-solving abilities and dedication to creating user-friendly interfaces helped make our project successful. He's particularly skilled in React.js and has a great eye for design.",
  }
];

// https://swiperjs.com/demos#pagination-dynamic

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What They Say About Me</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={800}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="coworker-avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="coworker__name">{name}</h5>
              <small className="coworker__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
