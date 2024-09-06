import React, { useRef } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { MovieContext } from "../../contecsts/context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import styles from "./slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperSlider = () => {
  let { sliderArray, setTimerSlider } = React.useContext(MovieContext);

  console.log(sliderArray, "...sliderArray...");

  sliderArray = sliderArray.map((item) => {
    if (item.imageUrl.endsWith("orig")) {
      item.imageUrl = item.imageUrl.replace("orig", "960x540");
    }

    return item;
  });

  const refSwiper = useRef();

  React.useEffect(() => {
    refSwiper?.current.swiper.update();
  }, []);

  return (
    <Swiper
      className="sample-slider"
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      ref={refSwiper}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log()}
    >
      {sliderArray.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <Link to="MediaPage">
              <img className="slider__img" src={item.imageUrl} alt={item.title} />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperSlider;
