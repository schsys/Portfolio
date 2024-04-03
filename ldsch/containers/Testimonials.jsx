"use client";

import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
// import { AppWrap, MotionWrap } from "@/wrapper";
import { urlFor, client } from "@/client";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const testimonialQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(testimonialQuery).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const comment = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonials-item app__flex">
            <img src={urlFor(comment.imgurl)} alt="testimonial" />
            <div className="app__testimonials-content">
              <p className="p-text">{comment.feedback}</p>
              <div>
                <h4 className="bold-text">{comment.name}</h4>
                <h5 className="p-text">{comment.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonials-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonials-brands app__flex">
        {brands?.map((brand) => (
          <div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
