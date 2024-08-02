import React, { useRef } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { MovieContext } from "../../components/context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import styles from "./slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperSlider = () => {
  const { sliderArray, setTimerSlider } = React.useContext(MovieContext);
  const refSwiper = useRef();

  React.useEffect(() => {
    refSwiper?.current.swiper.update();
  }, []);

  return (
    <Swiper
      // install Swiper modules
      className="sample-slider"
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      ref={refSwiper}
      autoplay={{
        delay: 2500, // задержка в миллисекундах
        disableOnInteraction: false, // продолжать автопроигрывание после взаимодействия
      }}
      loop={true}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
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
