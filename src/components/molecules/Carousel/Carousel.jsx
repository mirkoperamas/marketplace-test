import classes from "./carousel.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

export const Carousel = () => {
  return (
    <section className={classes.carousel}>
      <Swiper
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        <SwiperSlide>
          <div
            style={{ background: "#ff000050" }}
            className={classes.carousel__slide}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ background: "#0000ff50" }}
            className={classes.carousel__slide}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ background: "#00800050" }}
            className={classes.carousel__slide}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ background: "#ffff0050" }}
            className={classes.carousel__slide}
          ></div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
