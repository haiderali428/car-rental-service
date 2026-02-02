import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Testimonials.scss";

const Testimonials = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const reviews = [
    {
      name: "John Smith",
      location: "New York, USA",
      review: "The car was spotless and the booking process was smooth. Definitely renting again!",
      rating: 5,
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sophia Lee",
      location: "London, UK",
      review: "Amazing customer service and a great selection of vehicles. Highly recommend!",
      rating: 4,
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "David Kim",
      location: "Sydney, Australia",
      review: "Pickup and drop-off were hassle-free. Prices are competitive and fair.",
      rating: 5,
      img: "https://randomuser.me/api/portraits/men/56.jpg"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">What Our Customers Say</h2>
        <Slider {...settings}>
          {reviews.map((item, index) => (
            <div key={index} className="testimonial-card" data-aos="zoom-in">
              <div className="profile">
                <img src={item.img} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.location}</p>
                </div>
              </div>
              <p className="review-text">"{item.review}"</p>
              <div className="rating">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
