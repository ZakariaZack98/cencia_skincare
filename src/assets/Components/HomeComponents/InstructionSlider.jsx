import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstructionSlide from '../CommonComponents/InstructionSlide';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        fontSize: "24px",
        color: "#2d2d2d",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        fontSize: "24px",
        color: "#2d2d2d",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

const InstructionSlider = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <InstructionSlide
              imgUrl={item.imgUrl}
              title={item.title}
              textContent={item.textContent}
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default InstructionSlider;
