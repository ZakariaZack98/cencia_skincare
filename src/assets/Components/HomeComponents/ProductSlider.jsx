import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../CommonComponents/ProductCard";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "40px",
        height: "40px",
        backgroundColor: "white",
        border: "3px solid var(--accentBrwn)",
        borderRadius: "50%",
        zIndex: 2,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <span
        style={{
          display: "block",
          width: "30px",
          height: "30px",
          backgroundColor: "var(--accentBrwn)",
          mask: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2715 18 9 12 15 6%27/%3E%3C/svg%3E') no-repeat center",
          WebkitMask: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2715 18 9 12 15 6%27/%3E%3C/svg%3E') no-repeat center",
          transform: "translateX(-10px) scale(1.5)"
        }}
      ></span>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "40px",
        height: "40px",
        backgroundColor: "white",
        border: "3px solid var(--accentBrwn)",
        borderRadius: "50%",
        zIndex: 2,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <span
        style={{
          display: "block",
          width: "30px",
          height: "30px",
          backgroundColor: "var(--accentBrwn)",
          mask: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%279 6 15 12 9 18%27/%3E%3C/svg%3E') no-repeat center",
          WebkitMask: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%279 6 15 12 9 18%27/%3E%3C/svg%3E') no-repeat center",
          transform: "translateX(-10px) scale(1.5)"
        }}
      ></span>
    </div>
  );
};

const ProductSlider = ({ data }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="bg-lightPink dark:bg-gray-800 w-full py-25">
      <h1 className="font-dmSans font-black text-[80px] mb-20 text-accentBrwn text-center opacity-50">Complete your C'ENCIA Routine</h1>
      <div className="w-[95%] mx-auto">
        <Slider {...settings}>
          {data?.map((item) => {
            return (
              <ProductCard
                key={item.pid}
                pid={item.pid}
                imgUrl={item.imgUrl}
                name={item.name}
                preferredPrice={item.preferredPrice}
                retailPrice={item.retailPrice}
                buyHandler={item.buyHandler}
                cartHandler={item.cartHandler}
                pageLink={item.pageLink}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
